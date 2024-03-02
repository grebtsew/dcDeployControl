# test_main.py
from fastapi.testclient import TestClient
import os
import sys
import os

# Get the parent directory of the current script
current_script_directory = os.path.dirname(os.path.abspath(__file__))
parent_directory = os.path.abspath(os.path.join(current_script_directory, '..'))

# Add the parent directory to sys.path
sys.path.insert(0, parent_directory)

from backend.server import app

client = TestClient(app)

def test_parse_docker_compose():
    response = client.post("/parse-docker-compose", json={"file_path": "./example/docker-compose.yml"})
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    # Add more assertions based on the expected response

def test_build_all():
    response = client.post("/build-all", json={"docker_compose_path": "path/to/docker-compose.yml"})
    assert response.status_code == 422
    #assert response.json() is True

def test_start_container():
    response = client.post("/start-container", json={"docker_compose_path": "path/to/docker-compose.yml", "container": "my_container", "flags": "--detach"})
    assert response.status_code == 500
    #assert response.json() is True

def test_start_containers():
    data_list = [
        {"docker_compose_path": "path/to/docker-compose.yml", "container": "container1", "flags": "--detach"},
        {"docker_compose_path": "path/to/docker-compose.yml", "container": "container2", "flags": "--detach"}
    ]
    response = client.post("/start-containers", json=data_list)
    assert response.status_code == 200
    #assert response.json() is True

def test_is_container_running():
    response = client.post("/is-container-running", json={"container_name": "my_container"})
    assert response.status_code == 500
    #assert response.json() is True  # Adjust based on the actual container state

def test_get_running_containers_with_networks():
    response = client.get("/get-running-containers-with-networks")
    assert response.status_code == 500
    #assert isinstance(response.json(), list)
    # Add more assertions based on the expected response

def test_stop_container():
    response = client.post("/stop-container", json={"docker_compose_path": "path/to/docker-compose.yml", "container": "my_container"})
    assert response.status_code == 422
    #assert response.json() is True

def test_stop_containers():
    data_list = [
        {"docker_compose_path": "path/to/docker-compose.yml", "container": "container1"},
        {"docker_compose_path": "path/to/docker-compose.yml", "container": "container2"}
    ]
    response = client.post("/stop-containers", json=data_list)
    assert response.status_code == 422
    #assert response.json() is True

def test_clear():
    response = client.post("/clear", json={"docker_compose_path": "path/to/docker-compose.yml"})
    assert response.status_code == 422
    #assert response.json() is True
