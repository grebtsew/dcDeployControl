# main.py
from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from pydantic import BaseModel
from typing import List
import docker
import yaml
import subprocess
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import traceback

# from datetime import datetime
import asyncio
import logging
from uuid import uuid4
import json
import time
import threading

# Configure the logger
logger = logging.getLogger("dcdc_logger")
logger.setLevel(logging.DEBUG)


# Function to generate the log file name based on the current hour
def generate_log_file_name():
    return f"./frontend/dcdc.log"


# Create a file handler and set the logging level to DEBUG
file_handler = logging.FileHandler(generate_log_file_name())
file_handler.setLevel(logging.DEBUG)

# Create a console handler and set the logging level to INFO
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.DEBUG)

# Create a formatter and add it to the handlers
formatter = logging.Formatter(
    "%(asctime)s - %(levelname)s - %(message)s", datefmt="%Y-%m-%d %H:%M:%S"
)
file_handler.setFormatter(formatter)
console_handler.setFormatter(formatter)

# Add the handlers to the logger
logger.addHandler(file_handler)
logger.addHandler(console_handler)


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

logger.info("Started dcDeployControl backend vAlpha0.1")


class DockerComposeInfo(BaseModel):
    file_path: str


class StartContainer(BaseModel):
    docker_compose_path: str
    container: str
    flags: str


class ContainerStatus(BaseModel):
    container_name: str


class ContainerInfo(BaseModel):
    container_name: str = []
    networks_used: List[str] = []
    labels_used: List[str] = []
    exposed_ports: List[str] = []
    path: str = ""
    protocol: str = ""


connected_websockets = set()


class WebSocketLogHandler(logging.Handler):
    def emit(self, record):
        log_entry = self.format(record)
        asyncio.create_task(send_logs_to_clients(log_entry))


async def send_logs_to_clients(log_entry):
    for websocket in connected_websockets:
        try:
            await websocket.send_text(log_entry)
        except WebSocketDisconnect:
            # Remove disconnected websocket
            connected_websockets.remove(websocket)


# Add the custom WebSocketLogHandler to the root logger
logging.getLogger().addHandler(WebSocketLogHandler())

# In-memory storage for logs per website
logs_per_website = {}


def shutdown():
    command = ["docker", "stop", "dcDeployControl"]

    # Wait for 2 seconds
    time.sleep(2)
    logging.info("Shuting down system.")
    try:
        subprocess.run(command, check=True)
    except subprocess.CalledProcessError as e:
        pass


@app.get("/shutdown")
async def generate_log_id():
    try:
        stop_thread = threading.Thread(target=shutdown)
        stop_thread.start()

        # await awaitTask(command)
        return True

    except Exception as e:
        logger.error(f"Shutdown => An error occurred: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@app.get("/id")
async def generate_log_id():
    log_id = str(uuid4())
    logs_per_website[log_id] = log_id
    return {"id": log_id}


@app.websocket("/ws/{website_id}")
async def websocket_endpoint(website_id: str, websocket: WebSocket):
    await websocket.accept()
    connected_websockets.add(websocket)

    try:
        # Continuously send logs to the client until the WebSocket is closed
        while True:
            await asyncio.sleep(1)
    except WebSocketDisconnect:
        # Remove the website_id when the WebSocket is closed
        connected_websockets.remove(websocket)


# Function to add logs to the list for a specific website
def add_log(website_id, log_entry):
    logs_per_website[website_id].append(log_entry)


def isJson(label):
    try:
        json.loads(label)
        return True
    except json.JSONDecodeError:
        return False

def handleLabelExceptions(label, networks_used,path,protocol,exposed_ports):
    tmp = label.split("=")
    if len(tmp) == 2:
        [key, value] = tmp
        if key == "network":
            networks_used.append(value)
        if key == "path":
            path = value
        if key == "protocol":
            protocol = value
        if key == "ignore-ports":
            exposed_ports = []
    return networks_used, path, protocol, exposed_ports

@app.post("/parse-docker-compose", response_model=List[ContainerInfo])
async def parse_docker_compose(data: DockerComposeInfo):
    """
    Parse the docker-compose input file
    Detect Container Name, Networks, Port-forwarding, Labels and return.
    """
    try:
        compose_data = read_compose_file(data.file_path)

        container_info_list = []

        # process all containers
        if "services" in compose_data:
            for service_name, service_config in compose_data["services"].items():

                container_name = service_name
                networks_used = service_config.get("networks", [])
                labels_used = service_config.get("labels", [])
                protocol = ""
                path = ""
                exposed_ports = service_config.get("ports", [])

                # Add manuel networks
                for label in labels_used:
                    if isJson(label):
                        json_arr = json.loads(label)
                        for label in json_arr:
                            json_data = label
                            container_name = json_data["container"]
                            networks_used = json_data["networks"]
                            labels_used = json_data["labels"]
                            exposed_ports = json_data["ports"]

                        # Handle exceptions
                        for label in labels_used:
                            networks_used, path, protocol, exposed_ports = handleLabelExceptions(label, networks_used,path,protocol,exposed_ports)
                    else:
                        # Handle exceptions
                        networks_used, path, protocol, exposed_ports = handleLabelExceptions(label, networks_used,path,protocol,exposed_ports)

                container_info_list.append(
                    ContainerInfo(
                        container_name=container_name,
                        networks_used=networks_used,
                        labels_used=labels_used,
                        exposed_ports=exposed_ports,
                        protocol=protocol,
                        path=path,
                    )
                )

        return container_info_list
    except Exception as e:
        logger.error(f"Parse Docker Compose => An error occurred: {e}\n{traceback.format_exc()}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


async def awaitTask(command):
    logger.info(f"Running task {command}")
    process = await asyncio.create_subprocess_exec(
        *command, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE
    )

    async def log_stream(stream, logger):
        async for line in stream:
            logger.info(line.decode().strip())

    await asyncio.gather(
        log_stream(process.stdout, logger),
        log_stream(process.stderr, logger),
        process.wait(),
    )

    logger.info(f"Task {command} completed successfully.")


@app.post("/connect-to-internet", response_model=bool)
async def export_images(data: DockerComposeInfo):
    """
    Connect container to a network with internet interface access.
    """
    try:
        # TODO: add container to a network with internet access
        command = ["docker" , "networks", "connect"] 
        await awaitTask(command)
        return True
    except Exception as e:
        logger.error(f"Connect to internet network => An error occurred: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

@app.post("/reset-network", response_model=bool)
async def export_images(data: DockerComposeInfo):
    """
    Disconnect container from all networks with internet interface access.
    """
    try:
        # TODO: remove container from internet access network
        command = ["docker", "networks", "disconnect"] 
        await awaitTask(command)
        return True
    except Exception as e:
        logger.error(f"Reset to default network => An error occurred: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")
    
@app.post("/disconnect-network", response_model=bool)
async def export_images(data: DockerComposeInfo):
    """
    Disconnect container from all networks with internet interface access.
    """
    try:
        # TODO: remove container from internet access network
        command = ["docker", "networks", "disconnect"] 
        await awaitTask(command)
        return True
    except Exception as e:
        logger.error(f"Disconnect from internet network => An error occurred: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

@app.post("/export-images", response_model=bool)
async def export_images(data: DockerComposeInfo):
    """
    Export all current images to a .tar file that then can be copied to other system.
    """
    try:
        command = ["docker", "save", "-o", data.file_path] + subprocess.check_output(
            ["docker", "images", "-q"]
        ).decode("utf-8").splitlines()
        await awaitTask(command)
        return True
    except Exception as e:
        logger.error(f"Export Images => An error occurred: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@app.post("/import-images", response_model=bool)
async def import_images(data: DockerComposeInfo):
    """
    Import all images from a .tar file.
    """
    try:
        command = ["docker", "load", "-i", data.file_path]
        await awaitTask(command)
        return True
    except Exception as e:
        logger.error(f"Import Images => An error occurred: {e}")
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


@app.post("/build-all", response_model=bool)
async def build_all(data: StartContainer):
    """
    Build all containers in docker-compose.
    This will minimize risk of pc crashing due to vast amount of containers to start at once.
    Recommend running this atleast once first time.
    """
    try:
        command = ["docker-compose", "-f", data.docker_compose_path, "pull"]
        await awaitTask(command)
        command = ["docker-compose", "-f", data.docker_compose_path, "build"]
        await awaitTask(command)
        return True

    except Exception as e:
        logger.error(f"Build all => An error occurred: {e}")
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
            await awaitTask(val)

            return True
        else:
            logger.warn(
                f"Container '{container_name}' not found in the Docker Compose file."
            )
            return False
    except Exception as e:
        logger.error(f"Start container => An error occurred: {e}")
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

        await awaitTask(val)
        return True

    except Exception as e:
        logger.error(f"Start containers => An error occurred: {e}")
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
        logger.error(f"Is container running => Docker not running!")
        return False
    except Exception as e:
        logger.error(f"Is container running => An error occurred: {e}")
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
                    )
                )

        logger.info(f"Handled reoccurent task get-running-containers-with-networks")

        return running_containers
    except Exception as e:
        logger.error(f"get-running-containers-with-networks => An error occurred: {e}")
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
        logger.error(f"Error getting networks for container {container.name}: {e}")
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
            command = [
                "docker-compose",
                "-f",
                data.docker_compose_path,
                "stop",
                container_name,
            ]
            await awaitTask(command)
            return True
        else:
            logger.warn(
                f"Container '{container_name}' not found in the Docker Compose file."
            )
            return False
    except Exception as e:
        logger.error(f"stop-container => An error occurred: {e}")
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
        await awaitTask(val)
        return True
    except Exception as e:
        logger.error(f"stop-containers => An error occurred: {e}")
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
        if data.flags != "":
            val.append(data.flags)
        await awaitTask(val)
        return True
    except Exception as e:
        logger.error(f"clear => An error occurred: {e}")
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
    logger.info("FastAPI DCDC backend server started!")
