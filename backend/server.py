# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import docker
import yaml
import subprocess
from fastapi.middleware.cors import CORSMiddleware

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

class ContainerStatus(BaseModel):
    container_name: str

class ContainerInfo(BaseModel):
    container_name: str
    networks_used: List[str]
    labels_used: List[str]

@app.post("/parse-docker-compose", response_model=List[ContainerInfo])
async def parse_docker_compose(data: DockerComposeInfo):
    try:
        file_path = data.file_path
        with open(file_path, 'r') as file:
            compose_data = yaml.safe_load(file)

        container_info_list = []

        if 'services' in compose_data:
            for service_name, service_config in compose_data['services'].items():
                container_name = service_name
                networks_used = service_config.get('networks', [])
                labels_used = service_config.get('labels', [])
                container_info_list.append(ContainerInfo(container_name=container_name, networks_used=networks_used, labels_used=labels_used))

        return container_info_list
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

@app.post("/start-container", response_model=bool)
async def start_container(data: StartContainer):
    try:
        docker_compose_path = data.docker_compose_path
        container_to_start = data.container

        with open(docker_compose_path, 'r') as file:
            compose_data = yaml.safe_load(file)

        container_name = container_to_start

        if 'services' in compose_data and container_name in compose_data['services']:
            print(f"Starting container: {container_name}")
            subprocess.run(['docker-compose', '-f', docker_compose_path, 'up', '-d', container_name])
            return True
        else:
            print(f"Container '{container_name}' not found in the Docker Compose file.")
            return False
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

@app.post("/is-container-running", response_model=bool)
async def is_container_running(data: ContainerStatus):
    try:
        client = docker.from_env()
        container = client.containers.get(data.container_name)
        return container.status == 'running'
    except docker.errors.NotFound:
        return False
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

@app.get("/get-running-containers-with-networks", response_model=List[ContainerInfo])
async def get_running_containers_with_networks():
    try:
        client = docker.from_env()
        all_containers = client.containers.list()
        
        running_containers = []

        for container in all_containers:
            if container.status == 'running':
                running_containers.append(ContainerInfo(container_name=container.name, networks_used=get_container_networks(container), labels_used=[]))

        return running_containers
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")

def get_container_networks(container):
    try:
        container_info = docker.from_env().api.inspect_container(container.id)
        network_settings = container_info['NetworkSettings']
        networks = network_settings.get('Networks', {})
        return list(networks.keys())
    except Exception as e:
        print(f"Error getting networks for container {container.name}: {e}")
        return []

@app.post("/stop-container", response_model=bool)
async def stop_container(data: StartContainer):
    try:
        docker_compose_path = data.docker_compose_path
        container_to_stop = data.container

        with open(docker_compose_path, 'r') as file:
            compose_data = yaml.safe_load(file)

        container_name = container_to_stop

        if 'services' in compose_data and container_name in compose_data['services']:
            print(f"Stopping container: {container_name}")
            subprocess.run(['docker-compose', '-f', docker_compose_path, 'stop', container_name])
            return True
        else:
            print(f"Container '{container_name}' not found in the Docker Compose file.")
            return False
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {e}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)