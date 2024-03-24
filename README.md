# dcDeployControl

Docker Compose Deploy Control (**dcDeployControl**) is a microservice that parses `docker-compose.yml` files and dynamically creates a webinterface for deploying and visualizing containers and networks. The main purpose of the software is to create understandable visualizations over large docker composes aswell as managing execution of subsets of the docker-compose setup. Compared to a similar tool like WeaveScope, dcDeployControl does not require any priviliges and can create the visualizations without starting any containers. It does this by parsing the chosen docker-compose project and detecting containers, networks, port-forwarding and custom labels. The information is sent to frontend, where containers and networks are converted to nodes and edges in a network graph. The backend works as a wrapper for a DinD container wherefrom the frontend can get information about live running containers aswell as start and stopping containers defined in the chosen docker-compose file. The end-product is a neat, incredibly useful tool, compatible with any docker-compose managed project.

![license](https://img.shields.io/github/license/grebtsew/dcDeployControl)
![size](https://img.shields.io/github/repo-size/grebtsew/dcDeployControl)
![commit](https://img.shields.io/github/last-commit/grebtsew/dcDeployControl)

Checkout the demo gif below!

![./demo.PNG](./docs/demo.gif)

# Getting started

1. Download or clone the repository.
2. Install docker and docker-compose.
3. Open `.env` file and change `PROJECT_PATH="./example"` to whichever path your docker-compose project has.
4. Start **dcDeployControl** by running `docker-compose up -d`.

**Note**: The `PROJECT_PATH` will be volumed, meaning that changing the docker-compose file does not require a restart of **dcDeployControl**.

# Manual labels in Docker-compose

A label system has been added that can help control the visualizations and other structure of the application. Below the added docker-compose labels that will be parsed on software execution are described.
**NOTE**: These labels must be in a list .yml format!

```yml
labels:
  - "global-ignore=<network-name>" # Global ignore specific network in the visualizations.
  - "global-use-defaults=<bool>" # Global turn off or on the default group option.
  - "group=<group-name>" # For this container set group, this will override network group detection.
  - "network=<network-name>" # For this container set network, this will override network group detection.
  - "add-preset=<preset-name>" # Create preset, like default, which will be selected on button click.
  - "<preset-name>=true" # Specify which presets to use for specific container.
  - "protocol=https" # For this container set weblink protocol.
  - "path=index.html" # For this contaienr set weblink path.
  - '[{"container": "custom","networks": ["frontend"], "labels": ["default=true","controllable=false"], "ports": ["9090:9090"]}]' # Add custom container
```

# Main Features

The main features include:

- **Automatic detection and visualization of Networks** : Will parse docker-compose networks and automatically devide containers into appropriate groups.
- **Automatic detection of external containers and Networks** : The visualization will each 10 second receive information about other contaners running in the docker environment and add them to the visualization.
- **Start and stop any subsets of containers** : Creates a dynamic gui where containers can be easily started eighter one at a time or as a larger subset.
- **Create clickable links** : Will add buttons on container cards to faster reach other applications.
- **Label system** : Uses a label system, described above to let the user manipulate the visualization.
- **Build and Clear function** : Build and clear functions has been added that runs the `build` and `down` command to clear up any issues with old running containers.
- **Import and Export functions**: Docker save and load all images in system can be called. Only the volume folder can be used for import and export.
- **Websocket logging link**: Show live logs from backend to better track system.
- **Network Access Table**: A control system for giving containers temporary internet access.

# General tips

These are some general tips for users of this software:

- Use `.dockerignore` files in your repository in order to speed up build times and keep containers small.
- Volumes in the target docker-compose file should be changed to absolute path of working folder for it to work correctly.
- With the new internet access feature, i recommend setting all networks to internal in order to better keep containers from unwanted internet access.
- To set default internet access use the `dcdc_internet_network` network.
- Generally take a look inside `./example/docker-compose.yml` for examples.

# CI/CD

To ensure that the project maintains a high quality code, several CI/CD github actions has been added to the project. These must pass in order to get pull requests merged into main branch.

The workflows include:

| Test Status                                                                                                                                                                                               | Info                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [![Build Docker Container](https://github.com/grebtsew/dcDeployControl/actions/workflows/build_docker.yml/badge.svg)](https://github.com/grebtsew/dcDeployControl/actions/workflows/build_docker.yml)     | Integration test that container atleast can build.      |
| [![Check Javascript Format](https://github.com/grebtsew/dcDeployControl/actions/workflows/js_format.yml/badge.svg)](https://github.com/grebtsew/dcDeployControl/actions/workflows/js_format.yml)          | Prettier format check of javascript and markdown code.  |
| [![Check Python Format](https://github.com/grebtsew/dcDeployControl/actions/workflows/py_format.yml/badge.svg)](https://github.com/grebtsew/dcDeployControl/actions/workflows/py_format.yml)              | Black format check of python code.                      |
| [![Run Pytest](https://github.com/grebtsew/dcDeployControl/actions/workflows/py_unit_test.yml/badge.svg)](https://github.com/grebtsew/dcDeployControl/actions/workflows/py_unit_test.yml)                 | Unit testing using pytest for backend python code.      |
| [![ESLint Check](https://github.com/grebtsew/dcDeployControl/actions/workflows/js_lint.yml/badge.svg)](https://github.com/grebtsew/dcDeployControl/actions/workflows/js_lint.yml)                         | EsLint test for code quality in javascript code.        |
| [![JavaScript Test and Coverage](https://github.com/grebtsew/dcDeployControl/actions/workflows/js_coverage.yml/badge.svg)](https://github.com/grebtsew/dcDeployControl/actions/workflows/js_coverage.yml) | Test coverage and quality analysis for javascript code. |
| [![JavaScript Tests](https://github.com/grebtsew/dcDeployControl/actions/workflows/js_unit_test.yml/badge.svg)](https://github.com/grebtsew/dcDeployControl/actions/workflows/js_unit_test.yml)           | Unit testing for javascript code.                       |
| [![Pylint Check](https://github.com/grebtsew/dcDeployControl/actions/workflows/py_lint.yml/badge.svg)](https://github.com/grebtsew/dcDeployControl/actions/workflows/py_lint.yml)                         | PyLint test for code quality in python code.            |
| [![Python Test and Coverage](https://github.com/grebtsew/dcDeployControl/actions/workflows/py_coverage.yml/badge.svg)](https://github.com/grebtsew/dcDeployControl/actions/workflows/py_coverage.yml)     | Get code quality and test coverage in python code.      |

# Run tests locally

To run tests run:

```
./__tests__/run_locally.sh
```

**Note**: This will create several cache folders with test results in your folders.

# Libraries

The project is built on a multitude of libraries, the main once are listed below:

- **Toastify** - Creating Toast notifications in frontend.
- **Awesome Fonts** - Creates icons in text.
- **VizJS** - Creates interactive network graphs.
- **PyDocker** - Control docker in python.
- **FastApi** - Create fast API backends in python.
- **Uvicorn** - Webserver host in python.

# License

This repository is created using [MIT LICENSE](./LICENSE)

# Issues

Let me know if there are any questions or issues.

@ Grebtsew 2024
