# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import docker
import yaml
import subprocess
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from datetime import datetime
import asyncio

app = FastAPI()

origins = [
    "http://localhost",  # Add the domain of your frontend application
    "http://localhost:8000",  # Add more domains if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class DockerComposeInfo(BaseModel):
    file_path: str


class StartContainer(BaseModel):
    docker_compose_path: str
    container: str
    flags: str


class ContainerStatus(BaseModel):
    container_name: str


class ContainerInfo(BaseModel):
    container_name: str
    networks_used: List[str]
    labels_used: List[str]
    exposed_ports: List[str]


@app.post("/parse-docker-compose", response_model=List[ContainerInfo])
async def parse_docker_compose(data: DockerComposeInfo):
    """
    Parse the docker-compose input file
    Detect Container Name, Networks, Port-forwarding, Labels and return.
    """
    try:
        compose_data = read_compose_file(data.file_path)

        container_info_list = []

        if "services" in compose_data:
            for service_name, service_config in compose_data["services"].items():
                container_name = service_name
                networks_used = service_config.get("networks", [])
                labels_used = service_config.get("labels", [])
                exposed_ports = service_config.get("ports", [])
                container_info_list.append(
                    ContainerInfo(
                        container_name=container_name,
                        networks_used=networks_used,
                        labels_used=labels_used,
                        exposed_ports=exposed_ports,
                    )
                )

        return container_info_list
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

async def awaitTask(command):
    print(f"Running task {command}")
    process = await asyncio.create_subprocess_exec(*command)
    await process.wait()
    print(f"Task completed successfully.")



@app.post("/export-images", response_model=bool)
async def export_images(data: DockerComposeInfo):
    """
    Export all current images to a .tar file that then can be copied to other system.
    """
    try:
        command = ["docker", "save", "-o", data.file_path] + subprocess.check_output(
            ["docker", "images", "-q"]
        ).decode("utf-8").splitlines()
        awaitTask(command)
        return True
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@app.post("/import-images", response_model=bool)
async def import_images(data: DockerComposeInfo):
    """
    Import all images from a .tar file.
    """
    try:
        command = ["docker", "load", "-i", data.file_path]
        awaitTask(command)
        return True
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@app.post("/build-all", response_model=bool)
async def build_all(data: StartContainer):
    """
    Build all containers in docker-compose.
    This will minimize risk of pc crashing due to vast amount of containers to start at once.
    Recommend running this atleast once first time.
    """
    try:
        command = ["docker-compose", "-f", data.docker_compose_path, "build"]
        awaitTask(command)
        return True

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


def read_compose_file(path):
    compose_data = None
    with open(path, "r") as file:
        compose_data = yaml.safe_load(file)
    return compose_data

@app.post("/start-container", response_model=bool)
async def start_container(data: StartContainer):
    """
    Start single docker container if it exists in compose.
    """
    try:
        compose_data = read_compose_file(data.docker_compose_path)
        container_name = data.container

        if "services" in compose_data and container_name in compose_data["services"]:
           
            val = [
                "docker-compose",
                "-f",
                data.docker_compose_path,
                "up",
                "-d",
                "--remove-orphans",
                "--force-recreate",
            ]
            if data.flags != "":
                val.append(data.flags)

            val.append(container_name)
            awaitTask(val)

            return True
        else:
            print(f"Container '{container_name}' not found in the Docker Compose file.")
            return False
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


def build_string_of_containerlist(dataList):
    containers = []
    for data in dataList:
        containers.append(data.container)
    return containers

@app.post("/start-containers", response_model=bool)
async def start_containers(dataList: List[StartContainer]):
    """
    Start several containers if they exists in compose.
    """
    try:
        containers = build_string_of_containerlist(dataList)

        val = [
            "docker-compose",
            "-f",
            dataList[0].docker_compose_path,
            "up",
            "-d",
            "--remove-orphans",
            "--force-recreate",
        ]
        if dataList[0].flags != "":
            val.append(dataList[0].flags)
        val.extend(containers)

        awaitTask(val)
        return True

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@app.post("/is-container-running", response_model=bool)
async def is_container_running(data: ContainerStatus):
    """
    Check if specific container is running.
    """
    try:
        client = docker.from_env()
        container = client.containers.get(data.container_name)
        return container.status == "running"
    except docker.errors.NotFound:
        return False
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@app.get("/get-running-containers-with-networks", response_model=List[ContainerInfo])
async def get_running_containers_with_networks():
    """
    Get a list of all running containers and their network names.
    """
    try:
        client = docker.from_env()
        all_containers = client.containers.list()

        running_containers = []

        for container in all_containers:
            if container.status == "running":
                running_containers.append(
                    ContainerInfo(
                        container_name=container.name,
                        networks_used=get_container_networks(container),
                        labels_used=[],
                        exposed_ports=[],
                    )
                )

        return running_containers
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


def get_container_networks(container):
    """
    Gets network of a container.
    """
    try:
        container_info = docker.from_env().api.inspect_container(container.id)
        network_settings = container_info["NetworkSettings"]
        networks = network_settings.get("Networks", {})
        return list(networks.keys())
    except Exception as e:
        print(f"Error getting networks for container {container.name}: {e}")
        return []


@app.post("/stop-container", response_model=bool)
async def stop_container(data: StartContainer):
    """
    Stop a single container.
    """
    try:
        compose_data = read_compose_file(data.docker_compose_path)
        container_name = data.container

        if "services" in compose_data and container_name in compose_data["services"]:
            command = ["docker-compose", "-f", data.docker_compose_path, "stop", container_name]
            awaitTask(command)
            return True
        else:
            print(f"Container '{container_name}' not found in the Docker Compose file.")
            return False
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@app.post("/stop-containers", response_model=bool)
async def stop_containers(dataList: List[StartContainer]):
    """
    Stop several containers.
    """
    try:
        containers = build_string_of_containerlist(dataList)
        docker_compose_path = dataList[0].docker_compose_path
        val = ["docker-compose", "-f", docker_compose_path, "stop"]
        val.extend(containers)
        awaitTask(val)
        return True
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@app.post("/clear", response_model=bool)
async def stop_containers(data: StartContainer):
    """
    Run docker-compose down on compose file.
    Can later add more cache removeal here if needed.
    """
    try:
        docker_compose_path = data.docker_compose_path
        val = ["docker-compose", "-f", docker_compose_path, "down"]
        awaitTask(val)
        return True
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@app.get("/is-docker-running", response_model=bool)
async def is_docker_running():
    """
    See if docker is running on device.
    """
    try:
        client = docker.from_env()
        client.ping()  # This will raise an exception if Docker is not running
        return True
    except Exception as e:
        return False


if __name__ == "__main__":

    uvicorn.run(app, host="0.0.0.0", port=8000)
