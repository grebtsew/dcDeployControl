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
4. Start **dcDeployControl** by running `docker-compose up`.

**Note**: The `PROJECT_PATH` will be volumed, meaning that changing the docker-compose file does not require a restart of **dcDeployControl**.

# Manual labels in Docker-compose

A lable system has been added that can help control the visualizations and other structure of the application. Below the added docker-compose labels that will be parsed on software execution are described.

```yml
labels:
  - "global-ignore=all" # Global ignore specific network in the visualizations.
  - "global-use-defaults=true" # Global turn off or on the default group option.
  - "group=frontend" # For this contianer set group, this will override network group detection.
  - "default=true" # For this contianer set to default, meaning this container will be included in the default group.
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

# CI/CD

To ensure that the project maintains a high quality code, several CI/CD github actions has been added to the project. These must pass in order to get pull requests merged into main branch.

The workflows include:

- **Docker Build** : Makes sure the Dockerfile can build.
- **JS Format** : Makes sure js files and yml files follow `Prettier` format. To test locally install `npm install --global prettier` and run `prettier --write .`.
- **PY Format** : Makes sure py files follow `Black` format. To test locally install `pip install black` and run `black .`.
- **Run Pytest** : Makes sure unit tests on backend passes. See `Testing` below fore more descriptions.

# Unit Testing

To run tests, install `pip install pytest` and run:

```
pytest
```

**Note**: There is currently no unit testing for frontend.

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
