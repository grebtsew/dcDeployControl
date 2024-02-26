import os
import pytest
import docker

import sys
import os

# Get the parent directory of the current script
current_script_directory = os.path.dirname(os.path.abspath(__file__))
parent_directory = os.path.abspath(os.path.join(current_script_directory, '..'))

# Add the parent directory to sys.path
sys.path.insert(0, parent_directory)


from backend.docker_utils import (
    parse_docker_compose,
    start_container,
    is_container_running,
    get_running_containers
)

# Specify the path to your docker-compose.yml file for testing
DOCKER_COMPOSE_PATH = './example/docker-compose.yml'

def test_parse_docker_compose():
    result = parse_docker_compose(DOCKER_COMPOSE_PATH)
    assert isinstance(result, list)
    assert all(isinstance(item, list) and len(item) == 3 for item in result)

def test_start_containers():
    # Replace 'container1' and 'container2' with actual container names in your docker-compose.yml
    containers_to_start = ['container1', 'container2']

    result = start_container(DOCKER_COMPOSE_PATH, containers_to_start)
    print(result)
    assert isinstance(result, bool)

def test_is_container_running():
    # Replace 'your_container_name' with an actual container name in your docker-compose.yml
    container_to_check = 'your_container_name'

    result = is_container_running(container_to_check)
    assert isinstance(result, bool)

def test_get_running_containers():
    result = get_running_containers()
    assert isinstance(result, list)
    assert all(isinstance(container, docker.models.containers.Container) for container in result)
