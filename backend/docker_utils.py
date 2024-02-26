import docker
import yaml
import subprocess

def parse_docker_compose(file_path):
    try:
        with open(file_path, 'r') as file:
            # Load the YAML content
            compose_data = yaml.safe_load(file)

            # Initialize a list to store container information
            container_info_list = []

            # Extract information from the services section of the compose file
            if 'services' in compose_data:
                for service_name, service_config in compose_data['services'].items():
                    # Extract container name
                    container_name = service_name

                    # Extract networks used by the container
                    networks_used = service_config.get('networks', [])

                    # Extract labels used by the container
                    labels_used = service_config.get('labels', [])

                    # Append container information to the list
                    container_info_list.append([container_name, networks_used, labels_used])

            return container_info_list
    except Exception as e:
        return f"An error occurred: {e}"


def start_container(docker_compose_path, container_to_start):
    try:
        # Load the Docker Compose file
        with open(docker_compose_path, 'r') as file:
            compose_data = yaml.safe_load(file)

        # Get the specified container name
        container_name = container_to_start[0]

        # Check if the container is defined in the Docker Compose file
        if 'services' in compose_data and container_name in compose_data['services']:
            print(f"Starting container: {container_name}")
            subprocess.run(['docker-compose', '-f', docker_compose_path, 'up', '-d', container_name])
            return True
        else:
            print(f"Container '{container_name}' not found in the Docker Compose file.")
            return False

    except Exception as e:
        print(f"An error occurred: {e}")
        return False

def is_container_running(container_name):
    try:
        # Create a Docker client
        client = docker.from_env()

        # Check if the container is running
        container = client.containers.get(container_name)
        return container.status == 'running'

    except docker.errors.NotFound:
        # Container not found, consider it not running
        return False

    except Exception as e:
        return f"An error occurred: {e}"

def get_running_containers():
    try:
        # Create a Docker client
        client = docker.from_env()

        # Get a list of all containers (including running and stopped)
        all_containers = client.containers.list(all=True)

        # Filter running containers
        running_containers = [container for container in all_containers if container.status == 'running']

        return running_containers
    except Exception as e:
        return f"An error occurred: {e}"


def stop_container(container_name):
    try:
        # Create a Docker client
        client = docker.from_env()

        # Find the container by name
        container = client.containers.get(container_name)

        # Stop the container
        container.stop()

        return True

    except docker.errors.NotFound:
        # Container not found
        return f"Container '{container_name}' not found."

    except Exception as e:
        return f"An error occurred: {e}"
