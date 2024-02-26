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
    get_running_containers,
    stop_container
)

def integration_test():
    path = "./example/docker-compose.yml"

    containers = parse_docker_compose(path)
    print("All containers")
    print()
    print(containers)
    print()

    for container in containers:
        res = start_container(path, container)
        print(f"Started {container[0]} {res}")

    import time
    time.sleep(1)
    print(get_running_containers())

    for container in containers:
        res = is_container_running(container[0])
        print(f"Is running {container[0]} {res}")

    
    for container in containers:
        res = stop_container(container[0])
        print(f"Stopped {container[0]} {res}")

    for container in containers:
        res = is_container_running(container[0])
        print(f"Is running {container[0]} {res}")


if __name__ == "__main__":
    integration_test()
