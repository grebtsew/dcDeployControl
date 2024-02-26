// JavaScript code for clock and other dynamic functionalities
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);


async function parseDockerCompose(data) {
    try {
        const response = await fetch('http://localhost:8000/parse-docker-compose', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`HTTP error! Status: ${response.status}, Detail: ${errorData.detail}`);
        }

        const result = await response.json();
        //console.log('Parsed Docker Compose Data:', result);
        containers = result;
        updateNodes(result);

          // Update the legend based on the network colors
          updateLegend(networkColors);

        return result;
    } catch (error) {
        console.error('An error occurred:', error.message);
        throw error;
    }
}

// Example usage:
const dockerComposePath = {
    file_path: '/docker/docker-compose.yml',
};


// Create a network
var container = document.getElementById("graph-container");

var nodes = new vis.DataSet();
var edges = new vis.DataSet();
var data = {
  nodes: nodes,
  edges: edges,
};

var options = {
    min_width: '100%', // Set the width of the graph container
    height: '1500px', // Set the height of the graph container
 
    nodes: {
       // shape: 'dot', // Node shape (dot, ellipse, box, etc.)
        size: 40, // Node size
       
    },
    edges: {
        width: 2, // Edge width
        color: 'gray', // Edge color
        smooth: {
            enabled: true, // Enable smooth edges
            type: 'dynamic' // Choose from 'dynamic', 'continuous', 'discrete', 'diagonalCross', 'straightCross', 'horizontal', 'vertical', 'curvedCW', 'curvedCCW'
        }
    },
    physics: {
        enabled: true, // Enable physics simulation
        barnesHut: {
            gravitationalConstant: -80000,
            springConstant: 0.04,
            springLength: 95
        }
    },
    interaction: {
        hover: true, // Enable hover interactions
        hoverConnectedEdges: true, // Highlight connected edges on hover
        selectConnectedEdges: true // Select connected edges when selecting a node
    },
    /* Add more vis.js options here */
  };

var networkColors = {};
var network = new vis.Network(container, data, options);

let containers = parseDockerCompose(dockerComposePath);


function addNodeToGraph(containerName) {
    const nodeExists = nodes.get(containerName);

    // If the node doesn't exist, add it to the network
    if (!nodeExists) {
        // Replace this with your actual logic to add a node to the graph
        nodes.add({ id: containerName, label: containerName });

    
    }
}

function updateNodes(containers){
    const checkboxesContainer = document.getElementById('checkboxes');

        // Clear existing content in case of multiple calls
        checkboxesContainer.innerHTML = '';

        // Create a list to hold checkboxes
        const checkboxList = document.createElement('ul');

        containers.forEach(container => {
            // Create list item for checkbox
            const listItem = document.createElement('li');

            // Create checkbox
            const checkbox = document.createElement('input');
           
            checkbox.type = 'checkbox';
            checkbox.id =  `checkbox-container-${container.container_name}`;
            checkbox.checked = true;
            checkbox.addEventListener('change', () => toggleContainerVisibility(container.container_name));

            // Create label for checkbox
            const label = document.createElement('label');
            label.htmlFor = `checkbox-container-${container.container_name}`;
            label.appendChild(document.createTextNode(container.container_name));

            // Append checkbox and label to list item
            listItem.appendChild(checkbox);
            listItem.appendChild(label);

            // Append list item to the checkbox list
            checkboxList.appendChild(listItem);

            // Create node in the graph
            addNodeToGraph(container.container_name);
        });
        checkboxesContainer.appendChild(checkboxList);

        addEdgesBasedOnNetworks(containers);

      
}

function updateRunningNodes(_containers){
    const checkboxesContainer = document.getElementById('checkboxesDocker');

        // Clear existing content in case of multiple calls
        checkboxesContainer.innerHTML = '';


        // set not started status:
        const anyNotIncontainers = containers.some(obj1 => !_containers.some(obj2 => obj2.container_name === obj1.container_name));

        if (anyNotIncontainers) {
            const notInList2 = containers.filter(obj1 => !_containers.some(obj2 =>  obj2.container_name === obj1.container_name));
            notInList2.forEach(c => {

                const nodesArray = nodes.get(); // Get all nodes

                nodesArray.forEach(node => {
            
                    // Check if the node has the specified network color
                        if (node.id === c.container_name){
                        // Set the hidden property based on the checkbox state
                        
                        const checkboxLabel = document.getElementById(`checkbox-container-${c.container_name}`);
                        const label = checkboxLabel.nextElementSibling;
                        if (label) {
                            label.style.color = 'red'; // Change the color to your desired color
                        }
                       
                        node.color = 'red';
                        nodes.update(node);
                    }
                });

            });
        }

        // Create a list to hold checkboxes
        const checkboxList = document.createElement('ul');
        var running_unique = [];
        _containers.forEach(container => {
            const isNotInList = containers.every(obj => obj.container_name !== container.container_name);
            if (isNotInList) {
                running_unique.push(container);
            // Create list item for checkbox
            const listItem = document.createElement('li');

            // Create checkbox
            const checkbox = document.createElement('input');
           
            checkbox.type = 'checkbox';
            checkbox.id =  `checkbox-container-${container.container_name}`;
            checkbox.checked = true;
            checkbox.addEventListener('change', () => toggleContainerVisibility(container.container_name));

            // Create label for checkbox
            const label = document.createElement('label');
            label.htmlFor = `checkbox-container-${container.container_name}`;
            label.appendChild(document.createTextNode(container.container_name));

            // Append checkbox and label to list item
            listItem.appendChild(checkbox);
            listItem.appendChild(label);

            // Append list item to the checkbox list
            checkboxList.appendChild(listItem);

            // Create node in the graph
            addNodeToGraph(container.container_name);
            } else {
                const nodesArray = nodes.get(); // Get all nodes

                nodesArray.forEach(node => {
            
                    // Check if the node has the specified network color
                        if (node.id === container.container_name){
                        // Set the hidden property based on the checkbox state
                        const checkboxLabel = document.getElementById(`checkbox-container-${container.container_name}`);
                        const label = checkboxLabel.nextElementSibling;
                        if (label) {
                            label.style.color = 'green'; // Change the color to your desired color
                        }
                       
                        node.color = 'green';
                        nodes.update(node);
                    }
                });

            }
        });
    
        checkboxesContainer.appendChild(checkboxList);

        addEdgesBasedOnNetworks(running_unique);

      
}


function reshuffleGraph() {
    const nodeIdArray = nodes.getIds();

    // Shuffle the order of node IDs
    for (let i = nodeIdArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nodeIdArray[i], nodeIdArray[j]] = [nodeIdArray[j], nodeIdArray[i]];
    }

    // Move each node to a new random position
    nodeIdArray.forEach(id => {
        const newPosition = {
            x: Math.random() * container.clientWidth,
            y: Math.random() * container.clientHeight
        };
        network.moveNode(id, newPosition.x, newPosition.y);
    });
}

function addEdgesBasedOnNetworks(containerInfoList) {
    

    // Iterate over containers to generate network colors
    containerInfoList.forEach(container => {
        container.networks_used.forEach(network => {
            if (!networkColors[network]) {
                // Generate a random color for the network (you can replace this with your logic)
                networkColors[network] = getRandomColor();
            }
        });
    });

    const addedEdges = new Set();

containerInfoList.forEach(container => {
    container.networks_used.forEach(network => {
        // Find other containers using the same network
        const correlatedContainers = containerInfoList.filter(otherContainer =>
            otherContainer !== container &&
            otherContainer.networks_used.includes(network)
        );

        // Add edges between the containers in the graph for each network
        correlatedContainers.forEach(otherContainer => {
            const nodePair = [container.container_name, otherContainer.container_name].sort().join('-');
            const edgeKey = `${nodePair}-${network}`;

            // Check if the edge already exists in the set
            if (!addedEdges.has(edgeKey)) {
                // Add edge to the graph
                edges.add({
                    from: container.container_name,
                    to: otherContainer.container_name,
                    color: networkColors[network] // Assign color based on the network
                });

                // Add the edge to the set to track its existence
                addedEdges.add(edgeKey);
            }
        });
    });
});
    
  
}

// Function to get a common network between two containers
function getCommonNetworks(container1, container2) {
    return container1.networks_used.filter(network => container2.networks_used.includes(network));
}

// Function to generate a random color (for demonstration purposes)
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the legend based on the network colors
function updateLegend(networkColors) {
    const legendContainer = document.getElementById('legend-container');

    // Clear existing content in case of multiple calls
    legendContainer.innerHTML = '';

    // Create legend items with checkboxes
    for (const [network, color] of Object.entries(networkColors)) {
        const legendItem = document.createElement('div');

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true; // You can set the default state as needed
        checkbox.id = `checkbox-${network}`;
        checkbox.addEventListener('change', () => toggleNetworkVisibility(network));

        // Create label for the checkbox
        const label = document.createElement('label');
        label.htmlFor = `checkbox-${network}`;
        label.appendChild(document.createTextNode(network));
        label.style.color = color;

        // Append checkbox and label to legend item
        legendItem.appendChild(checkbox);
        legendItem.appendChild(label);

        // Append legend item to the legend container
        legendContainer.appendChild(legendItem);
    }
}


function toggleContainerVisibility(containername) {
    
    const nodesArray = nodes.get(); // Get all nodes

    nodesArray.forEach(node => {

        // Check if the node has the specified network color
            if (node.id === containername){
            // Set the hidden property based on the checkbox state

            const checkbox = document.getElementById(`checkbox-container-${containername}`);
            node.hidden = !checkbox.checked;
            nodes.update(node);
        }
    });

}

function toggleNetworkVisibility(network) {
    const edgesArray = edges.get(); // Get all edges

    edgesArray.forEach(edge => {

        if (edge.color === networkColors[network]) {
            // Set the hidden property based on the checkbox state
            const checkbox = document.getElementById(`checkbox-${network}`);
            edge.hidden = !checkbox.checked;
            edges.update(edge);
        }
    });

}

function startClicked(){
    containers.forEach(container => {
        const checkbox = document.getElementById(`checkbox-container-${container.container_name}`);
        if(checkbox.checked === true){
            startContainer(container);
        }
      
    });
}

function stopClicked(){
    containers.forEach(container => {
        const checkbox = document.getElementById(`checkbox-container-${container.container_name}`);
        if(checkbox.checked === true){
            stopContainer(container);
        }
      
    });
}

async function stopContainer( containerToStop) {
    try {
        
            console.log(`Stopping container: ${containerToStop.container_name}`);

            // Send a request to the backend to start the container
            const startResponse = await fetch('http://localhost:8000/stop-container', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    docker_compose_path: dockerComposePath.file_path,
                    container: containerToStop.container_name,
                }),
            });

    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        throw error;
    }
}


async function startContainer( containerToStart) {
    try {
        
            console.log(`Starting container: ${containerToStart.container_name}`);

            // Send a request to the backend to start the container
            const startResponse = await fetch('http://localhost:8000/start-container', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    docker_compose_path: dockerComposePath.file_path,
                    container: containerToStart.container_name,
                }),
            });

          
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        throw error;
    }
}


async function getRunningContainers( ) {
    try {
        

            // Send a request to the backend to start the container
            const response = await fetch('http://localhost:8000/get-running-containers-with-networks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
             
            });

            const result = await response.json();
            console.log(result);
            updateRunningNodes(result);

    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        throw error;
    }
}

setInterval(() => {
    getRunningContainers();
}, 10000);