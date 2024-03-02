// JavaScript code for clock and other dynamic functionalities
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

var flag = "";

const iconClasses = [
  "fa fa-flag",
  "fa fa-caret-down",
  "fa fa-flag fa-fw",
  "fa fa-rub fa-fw",
  "fa fa-camera-retro fa-fw",
  "fa fa-check-square fa-fw",
  "fa fa-won fa-fw",
  "fa fa-play-circle fa-fw",
  "fa fa-github fa-fw",
  "fa fa-medkit fa-fw",
  "fa fa-caret-down",
  "fa fa-flag",
  "fa fa-rub",
  "fa fa-ruble",
  "fa fa-rouble",
  "fa fa-pagelines",
  "fa fa-wheelchair",
  "fa fa-vimeo-square",
  "fa fa-try",
  "fa fa-turkish-lira",
  "fa fa-adjust",
  "fa fa-anchor",
  "fa fa-archive",
  "fa fa-arrows",
  "fa fa-arrows-h",
  "fa fa-arrows-v",
  "fa fa-asterisk",
  "fa fa-ban",
  "fa fa-barcode",
  "fa fa-bars",
  "fa fa-beer",
  "fa fa-bell",
  "fa fa-bolt",
  "fa fa-book",
  "fa fa-bookmark",
  "fa fa-briefcase",
  "fa fa-bug",
  "fa fa-bullhorn",
  "fa fa-bullseye",
  "fa fa-calendar",
  "fa fa-camera",
  "fa fa-camera-retro",
  "fa fa-certificate",
  "fa fa-check",
  "fa fa-circle",
  "fa fa-cloud",
  "fa fa-cloud-download",
  "fa fa-cloud-upload",
  "fa fa-code",
  "fa fa-code-fork",
  "fa fa-coffee",
  "fa fa-cog",
  "fa fa-cogs",
  "fa fa-comment",
  "fa fa-comments",
  "fa fa-compass",
  "fa fa-credit-card",
  "fa fa-crop",
  "fa fa-crosshairs",
  "fa fa-cutlery",
  "fa fa-dashboard",
  "fa fa-desktop",
  "fa fa-download",
  "fa fa-edit",
  "fa fa-ellipsis-h",
  "fa fa-ellipsis-v",
  "fa fa-envelope",
  "fa fa-eraser",
  "fa fa-exchange",
  "fa fa-exclamation",
  "fa fa-exclamation-circle",
  "fa fa-exclamation-triangle",
  "fa fa-external-link",
  "fa fa-external-link-square",
  "fa fa-eye",
  "fa fa-eye-slash",
  "fa fa-female",
  "fa fa-fighter-jet",
  "fa fa-film",
  "fa fa-filter",
  "fa fa-fire",
  "fa fa-fire-extinguisher",
  "fa fa-flag",
  "fa fa-flag-checkered",
  "fa fa-flash",
  "fa fa-flask",
  "fa fa-folder",
  "fa fa-folder-open",
  "fa fa-gamepad",
  "fa fa-gavel",
  "fa fa-gear",
  "fa fa-gears",
  "fa fa-gift",
  "fa fa-globe",
  "fa fa-headphones",
  "fa fa-heart",
  "fa fa-home",
  "fa fa-inbox",
  "fa fa-info",
  "fa fa-info-circle",
  "fa fa-key",
  "fa fa-laptop",
  "fa fa-leaf",
  "fa fa-legal",
  "fa fa-level-down",
  "fa fa-level-up",
  "fa fa-location-arrow",
  "fa fa-lock",
  "fa fa-magic",
  "fa fa-magnet",
  "fa fa-mail-forward",
  "fa fa-mail-reply",
  "fa fa-mail-reply-all",
  "fa fa-male",
  "fa fa-map-marker",
  "fa fa-microphone",
  "fa fa-microphone-slash",
  "fa fa-minus",
  "fa fa-minus-circle",
  "fa fa-minus-square",
  "fa fa-mobile",
  "fa fa-mobile-phone",
  "fa fa-music",
  "fa fa-pencil",
  "fa fa-pencil-square",
  "fa fa-phone",
  "fa fa-phone-square",
  "fa fa-plane",
  "fa fa-plus",
  "fa fa-plus-circle",
  "fa fa-plus-square",
  "fa fa-power-off",
  "fa fa-print",
  "fa fa-puzzle-piece",
  "fa fa-qrcode",
  "fa fa-question",
  "fa fa-question-circle",
  "fa fa-quote-left",
  "fa fa-quote-right",
  "fa fa-random",
  "fa fa-refresh",
  "fa fa-reply",
  "fa fa-reply-all",
  "fa fa-retweet",
  "fa fa-road",
  "fa fa-rocket",
  "fa fa-rss",
  "fa fa-rss-square",
  "fa fa-search",
  "fa fa-search-minus",
  "fa fa-search-plus",
  "fa fa-share",
  "fa fa-share-square",
  "fa fa-shield",
  "fa fa-shopping-cart",
  "fa fa-sign-in",
  "fa fa-signal",
  "fa fa-sitemap",
  "fa fa-sort",
  "fa fa-sort-alpha-asc",
  "fa fa-sort-alpha-desc",
  "fa fa-sort-amount-asc",
  "fa fa-sort-amount-desc",
  "fa fa-sort-asc",
  "fa fa-sort-desc",
  "fa fa-sort-down",
  "fa fa-sort-numeric-asc",
  "fa fa-sort-numeric-desc",
  "fa fa-sort-up",
  "fa fa-spinner",
  "fa fa-square",
  "fa fa-star",
  "fa fa-star-half",
  "fa fa-star-half-full",
  "fa fa-subscript",
  "fa fa-suitcase",
  "fa fa-superscript",
  "fa fa-tablet",
  "fa fa-tachometer",
  "fa fa-tag",
  "fa fa-tags",
  "fa fa-tasks",
  "fa fa-terminal",
  "fa fa-thumb-tack",
  "fa fa-thumbs-down",
  "fa fa-thumbs-up",
  "fa fa-ticket",
  "fa fa-times",
  "fa fa-times-circle",
  "fa fa-tint",
  "fa fa-trophy",
  "fa fa-truck",
  "fa fa-umbrella",
  "fa fa-unlock",
  "fa fa-unlock-alt",
  "fa fa-unsorted",
  "fa fa-upload",
  "fa fa-user",
  "fa fa-users",
  "fa fa-video-camera",
  "fa fa-volume-down",
  "fa fa-volume-off",
  "fa fa-volume-up",
  "fa fa-warning",
  "fa fa-wheelchair",
  "fa fa-wrench",
  "fa fa-circle",
  "fa fa-plus-square",
  "fa fa-square",
  "fa fa-bitcoin",
  "fa fa-btc",
  "fa fa-cny",
  "fa fa-dollar",
  "fa fa-eur",
  "fa fa-euro",
  "fa fa-gbp",
  "fa fa-inr",
  "fa fa-jpy",
  "fa fa-krw",
  "fa fa-money",
  "fa fa-rmb",
  "fa fa-rouble",
  "fa fa-rub",
  "fa fa-ruble",
  "fa fa-rupee",
  "fa fa-try",
  "fa fa-turkish-lira",
  "fa fa-usd",
  "fa fa-won",
  "fa fa-yen",
  "fa fa-align-center",
  "fa fa-align-justify",
  "fa fa-align-left",
  "fa fa-align-right",
  "fa fa-bold",
  "fa fa-chain",
  "fa fa-chain-broken",
  "fa fa-clipboard",
  "fa fa-columns",
  "fa fa-copy",
  "fa fa-cut",
  "fa fa-dedent",
  "fa fa-eraser",
  "fa fa-file",
  "fa fa-font",
  "fa fa-indent",
  "fa fa-italic",
  "fa fa-link",
  "fa fa-list",
  "fa fa-list-alt",
  "fa fa-list-ol",
  "fa fa-list-ul",
  "fa fa-outdent",
  "fa fa-paperclip",
  "fa fa-paste",
  "fa fa-repeat",
  "fa fa-rotate-left",
  "fa fa-rotate-right",
  "fa fa-save",
  "fa fa-scissors",
  "fa fa-strikethrough",
  "fa fa-table",
  "fa fa-text-height",
  "fa fa-text-width",
  "fa fa-th",
  "fa fa-th-large",
  "fa fa-th-list",
  "fa fa-underline",
  "fa fa-undo",
  "fa fa-unlink",
  "fa fa-angle-double-down",
  "fa fa-angle-double-left",
  "fa fa-angle-double-right",
  "fa fa-angle-double-up",
  "fa fa-angle-down",
  "fa fa-angle-left",
  "fa fa-angle-right",
  "fa fa-angle-up",
  "fa fa-arrow-circle-down",
  "fa fa-arrow-circle-left",
  "fa fa-arrow-circle-right",
  "fa fa-arrow-circle-up",
  "fa fa-arrow-down",
  "fa fa-arrow-left",
  "fa fa-arrow-right",
  "fa fa-arrow-up",
  "fa fa-arrows",
  "fa fa-arrows-alt",
  "fa fa-arrows-h",
  "fa fa-arrows-v",
  "fa fa-caret-down",
  "fa fa-caret-left",
  "fa fa-caret-right",
  ,
  "fa fa-caret-up",
  "fa fa-chevron-circle-down",
  "fa fa-chevron-circle-left",
  "fa fa-chevron-circle-right",
  "fa fa-chevron-circle-up",
  "fa fa-chevron-down",
  "fa fa-chevron-left",
  "fa fa-chevron-right",
  "fa fa-chevron-up",
  "fa fa-long-arrow-down",
  "fa fa-long-arrow-left",
  "fa fa-long-arrow-right",
  "fa fa-long-arrow-up",
  "fa fa-arrows-alt",
  "fa fa-backward",
  "fa fa-compress",
  "fa fa-eject",
  "fa fa-expand",
  "fa fa-fast-backward",
  "fa fa-fast-forward",
  "fa fa-forward",
  "fa fa-pause",
  "fa fa-play",
  "fa fa-play-circle",
  "fa fa-step-backward",
  "fa fa-step-forward",
  "fa fa-stop",
  "fa fa-medkit",
  "fa fa-plus-square",
  "fa fa-stethoscope",
  "fa fa-user-md",
  "fa fa-wheelchair",
  "fa fa-flag",
  "fa fa-maxcdn",
];

async function parseDockerCompose(data) {
  try {
    const response = await fetch("http://localhost:8000/parse-docker-compose", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `HTTP error! Status: ${response.status}, Detail: ${errorData.detail}`,
      );
    }

    const result = await response.json();

    containers = result;
    updateNodes(result);

    // Update the legend based on the network colors
    updateLegend(networkColors);

    showToast("Welcome!");
    showToast("Docker-compose Parsed Successfully!", "green");

    return result;
  } catch (error) {
    console.error("An error occurred:", error.message);
    throw error;
  }
}

// Example usage:
const dockerComposePath = {
  file_path: "/docker/docker-compose.yml",
};

var darkmode_var = false;

function darkmode() {
  darkmode_var = !darkmode_var;
  var graph = document.getElementById("graph-container");
  var header = document.getElementsByTagName("header")[0];
  var body = document.getElementsByTagName("body")[0];
  var control = document.getElementById("control-panel");
  var drag = document.getElementById("drag-handle");
  if (darkmode_var) {
    body.style.backgroundColor = "#515151";
    graph.style.backgroundColor = "#515151";
    header.style.backgroundColor = "#011b2d";
    control.style.backgroundColor = "rgb(63, 63, 66)";
    drag.style.backgroundColor = "#333";
  } else {
    graph.style.backgroundColor = "#f0f0f0";
    body.style.backgroundColor = "#f0f0f0";
    header.style.backgroundColor = "#333";
    control.style.backgroundColor = "rgb(181, 177, 177)";
    drag.style.backgroundColor = "#ddd";
  }
}

darkmode();

var ignoreList = [];

// Create a network
var container = document.getElementById("graph-container");
var nodes = new vis.DataSet();
var edges = new vis.DataSet();
var data = {
  nodes: nodes,
  edges: edges,
};

var options = {
  width: "100%", // Set the width of the graph container
  height: "1500px", // Set the height of the graph container

  nodes: {
    //shape: 'dot', // Node shape (dot, ellipse, box, etc.)
    size: 40, // Node size
    shadow: {
      enabled: true,
      color: "rgba(0, 0, 0, 0.5)",
      size: 10,
      x: 5,
      y: 5,
    },
  },

  edges: {
    width: 2, // Edge width
    color: "gray", // Edge color
    smooth: {
      enabled: true, // Enable smooth edges
      type: "dynamic", // Choose from 'dynamic', 'continuous', 'discrete', 'diagonalCross', 'straightCross', 'horizontal', 'vertical', 'curvedCW', 'curvedCCW'
    },
  },
  physics: {
    enabled: true, // Enable physics simulation
    barnesHut: {
      gravitationalConstant: -20000,
      centralGravity: 2,
      springLength: 100,
      springConstant: 0.04,
      damping: 0.5,
    },
  },
  interaction: {
    hover: true, // Enable hover interactions
    hoverConnectedEdges: true, // Highlight connected edges on hover
    selectConnectedEdges: true, // Select connected edges when selecting a node
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
    showToast(`${containerName} detected.`);

    nodes.add({ id: containerName, label: containerName });
  }
}

function getRandomIconClass() {
  const randomIndex = Math.floor(Math.random() * iconClasses.length);
  return iconClasses[randomIndex];
}

function getRandomColor() {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 200);
  const green = Math.floor(Math.random() * 200);
  const blue = Math.floor(Math.random() * 200);

  // Combine the components to form a CSS color string
  const color = `rgb(${red},${green},${blue})`;

  return color;
}

function findSmallestNetwork(containers) {
  // Create a map to store network occurrences
  const networkCount = new Map();

  // Iterate through containers to count network occurrences
  containers.forEach(({ networks_used }) => {
    networks_used.forEach((network) => {
      if (networkCount.has(network)) {
        networkCount.set(network, networkCount.get(network) + 1);
      } else {
        networkCount.set(network, 1);
      }
    });
  });

  // Iterate through containers to find the smallest network for each container
  const result = containers.map(
    ({ container_name, networks_used, labels_used }) => {
      let smallestNetwork = networks_used[0];
      let smallestNetworkCount = networkCount.get(networks_used[0]);

      networks_used.forEach((network) => {
        const count = networkCount.get(network);
        if (count < smallestNetworkCount) {
          smallestNetwork = network;
          smallestNetworkCount = count;
        }
      });

      return { container_name, smallestNetwork, labels_used };
    },
  );

  return result;
}

function updateNodes(containers) {
  const checkboxesContainer = document.getElementById("checkboxes");

  // Clear existing content in case of multiple calls
  checkboxesContainer.innerHTML = "";

  const def_groups = findSmallestNetwork(containers);

  var use_defaults = "false";

  containers.forEach((container) => {
    // Create list item for checkbox
    const listItem = document.createElement("li");

    var isDefault = "false";

    // Set default group
    var group = "";
    def_groups.forEach((c) => {
      if (c.container_name == container.container_name) {
        group = c.smallestNetwork;
      }
    });

    // update ignore list
    container.labels_used.forEach((lab) => {
      const keyValuePairs = lab.split("=");
      const field = keyValuePairs[0];
      const value = keyValuePairs[1];
      if (field === "global-ignore") {
        if (!ignoreList.includes(value)) {
          ignoreList.push(value);
        }
      }
      if (field == "global-use-defaults") {
        use_defaults = value;
      }
      if (field === "default") {
        isDefault = value;
      }

      if (field === "group") {
        group = value;
      }
    });

    const card = document.createElement("div");
    card.classList.add("card");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox-container-${container.container_name}`;

    if (use_defaults === "true") {
      checkbox.checked = isDefault === "true";
    } else {
      checkbox.checked = true;
    }

    checkbox.addEventListener("change", () =>
      toggleContainerVisibility(container.container_name),
    );

    // Create title
    const label = document.createElement("label");
    label.htmlFor = `checkbox-container-${container.container_name}`;
    label.appendChild(document.createTextNode(container.container_name));

    // Create start button icon
    const startButton = document.createElement("button");
    startButton.innerHTML = '<i class="fa fa-play"></i>';
    startButton.className = "smlbtn";
    startButton.style.color = "green";
    startButton.addEventListener("click", () => startContainer(container));

    // Create stop button icon
    const stopButton = document.createElement("button");
    stopButton.innerHTML = '<i class="fa fa-stop"></i> ';
    stopButton.className = "smlbtn";
    stopButton.style.color = "red";
    stopButton.addEventListener("click", () => stopContainer(container));

    const cardbuttoncontainer = document.createElement("div");
    cardbuttoncontainer.className = "cardbuttoncontainer";

    if (container.exposed_ports.length > 0) {
      const port = container.exposed_ports[0].split(":");
      var p = "";
      if (port.length == 3) {
        p = port[1];
      } else {
        p = port[0];
      }

      // Create open website button
      const openWebsiteButton = document.createElement("button");
      openWebsiteButton.innerHTML = '<i class="fa fa-external-link"></i> ';
      openWebsiteButton.className = "smlbtn";
      openWebsiteButton.style.color = "white";
      openWebsiteButton.addEventListener("click", () =>
        openWebsite(`http://localhost:${p}`),
      );
      cardbuttoncontainer.appendChild(openWebsiteButton);
    }

    // Append elements to card container
    card.appendChild(checkbox);
    card.appendChild(label);

    const loader = document.createElement("div");
    loader.className = `loader`;
    loader.id = `loader-${container.container_name}`;
    loader.hidden = true;

    cardbuttoncontainer.appendChild(stopButton);
    cardbuttoncontainer.appendChild(startButton);

    card.appendChild(cardbuttoncontainer);
    card.appendChild(loader);

    // create group
    var _group = document.getElementById(`group-${group}`);

    if (_group === null) {
      _group = document.createElement(`details`);
      _group.type = "details";

      if (checkbox.checked) {
        _group.open = true;
      }
      _group.id = `group-${group}`;

      var summary = document.createElement("summary");
      summary.textContent = `${group}`;

      // Add the summary element to the details element
      _group.appendChild(summary);

      checkboxesContainer.appendChild(_group);
    }

    // Append list item to the checkbox list
    _group.appendChild(card);

    // Create node in the graph
    addNodeToGraph(container.container_name);
  });

  addEdgesBasedOnNetworks(containers);

  // only show defaults!
  containers.forEach((container) => {
    toggleContainerVisibility(container.container_name);
  });
}

function openWebsite(url) {
  window.open(url, "_blank");
}

function updateRunningNodes(_containers) {
  const checkboxesContainer = document.getElementById("checkboxesDocker");

  // Clear existing content in case of multiple calls
  checkboxesContainer.innerHTML = "";

  // set not started status:
  const anyNotIncontainers = containers.some(
    (obj1) =>
      !_containers.some((obj2) => obj2.container_name === obj1.container_name),
  );

  if (anyNotIncontainers) {
    const notInList2 = containers.filter(
      (obj1) =>
        !_containers.some(
          (obj2) => obj2.container_name === obj1.container_name,
        ),
    );
    notInList2.forEach((c) => {
      const nodesArray = nodes.get(); // Get all nodes

      nodesArray.forEach((node) => {
        // Check if the node has the specified network color
        if (node.id === c.container_name) {
          // Set the hidden property based on the checkbox state

          const checkboxLabel = document.getElementById(
            `checkbox-container-${c.container_name}`,
          );
          const label = checkboxLabel.nextElementSibling;
          if (label) {
            label.style.color = "red"; // Change the color to your desired color
          }

          if (node.color != "red") {
            showToast(`${c.container_name} is not running.`, "red");
            const loader = document.getElementById(
              `loader-${c.container_name}`,
            );
            loader.hidden = true;
          }
          node.color = "red";
          nodes.update(node);
        }
      });
    });
  }

  // Create a list to hold checkboxes

  var running_unique = [];
  _containers.forEach((container) => {
    const isNotInList = containers.every(
      (obj) => obj.container_name !== container.container_name,
    );
    if (isNotInList) {
      running_unique.push(container);

      // Create list item for checkbox
      const card = document.createElement("div");
      card.classList.add("card-network");

      // Create checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `checkbox-container-${container.container_name}`;
      checkbox.checked = true;
      checkbox.addEventListener("change", () =>
        toggleContainerVisibility(container.container_name),
      );

      // Create title
      const label = document.createElement("label");
      label.htmlFor = `checkbox-container-${container.container_name}`;
      label.appendChild(document.createTextNode(container.container_name));

      // Append elements to card container
      card.appendChild(checkbox);
      card.appendChild(label);

      checkboxesContainer.appendChild(card);
      // Create node in the graph
      addNodeToGraph(container.container_name);
    } else {
      const nodesArray = nodes.get(); // Get all nodes

      nodesArray.forEach((node) => {
        // Check if the node has the specified network color
        if (node.id === container.container_name) {
          // Set the hidden property based on the checkbox state
          const checkboxLabel = document.getElementById(
            `checkbox-container-${container.container_name}`,
          );
          const label = checkboxLabel.nextElementSibling;
          if (label) {
            label.style.color = "green"; // Change the color to your desired color
          }
          if (node.color != "green") {
            showToast(`${container.container_name} is running.`, "green");

            const loader = document.getElementById(
              `loader-${container.container_name}`,
            );
            loader.hidden = true;
          }
          node.color = "green";
          nodes.update(node);
        }
      });
    }
  });

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
  nodeIdArray.forEach((id) => {
    const newPosition = {
      x: Math.random() * container.clientWidth,
      y: Math.random() * container.clientHeight,
    };
    network.moveNode(id, newPosition.x, newPosition.y);
  });
}
function buildFlag() {
  const checkbox = document.getElementById("build");
  if (checkbox.checked) {
    flag = "--build";
  } else {
    flag = "";
  }
}
function addEdgesBasedOnNetworks(containerInfoList) {
  // Iterate over containers to generate network colors
  containerInfoList.forEach((container) => {
    container.networks_used.forEach((network) => {
      if (!networkColors[network]) {
        // Generate a random color for the network (you can replace this with your logic)
        networkColors[network] = getRandomColor();
      }
    });
  });

  const addedEdges = new Set();

  containerInfoList.forEach((container) => {
    container.networks_used.forEach((network) => {
      if (!ignoreList.includes(network)) {
        // Find other containers using the same network
        const correlatedContainers = containerInfoList.filter(
          (otherContainer) =>
            otherContainer !== container &&
            otherContainer.networks_used.includes(network),
        );

        // Add edges between the containers in the graph for each network
        correlatedContainers.forEach((otherContainer) => {
          const nodePair = [
            container.container_name,
            otherContainer.container_name,
          ]
            .sort()
            .join("-");
          const edgeKey = `${nodePair}-${network}`;

          // Check if the edge already exists in the set
          if (!addedEdges.has(edgeKey)) {
            // Add edge to the graph
            edges.add({
              from: container.container_name,
              to: otherContainer.container_name,
              color: networkColors[network], // Assign color based on the network
            });

            // Add the edge to the set to track its existence
            addedEdges.add(edgeKey);
          }
        });
      }
    });
  });
}

// Function to get a common network between two containers
function getCommonNetworks(container1, container2) {
  return container1.networks_used.filter((network) =>
    container2.networks_used.includes(network),
  );
}

// Function to generate a random color (for demonstration purposes)
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to update the legend based on the network colors
function updateLegend(networkColors) {
  const legendContainer = document.getElementById("legend-container");

  // Clear existing content in case of multiple calls
  legendContainer.innerHTML = "";

  // Create legend items with checkboxes
  for (const [network, color] of Object.entries(networkColors)) {
    const legendItem = document.createElement("div");

    const card = document.createElement("div");
    card.classList.add("card-network");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true; // You can set the default state as needed
    checkbox.id = `checkbox-${network}`;
    checkbox.addEventListener("change", () => toggleNetworkVisibility(network));

    // Create title
    const label = document.createElement("label");
    label.htmlFor = `checkbox-${network}`;
    label.appendChild(document.createTextNode(network));
    label.style.color = color;

    // Append elements to card container
    card.appendChild(checkbox);
    card.appendChild(label);

    legendItem.appendChild(card);

    // Append legend item to the legend container
    legendContainer.appendChild(legendItem);
  }
}

function toggleContainerVisibility(containername) {
  const nodesArray = nodes.get(); // Get all nodes

  nodesArray.forEach((node) => {
    // Check if the node has the specified network color
    if (node.id === containername) {
      // Set the hidden property based on the checkbox state

      const checkbox = document.getElementById(
        `checkbox-container-${containername}`,
      );
      node.hidden = !checkbox.checked;
      nodes.update(node);
    }
  });
}

function toggleNetworkVisibility(network) {
  const edgesArray = edges.get(); // Get all edges

  edgesArray.forEach((edge) => {
    if (edge.color === networkColors[network]) {
      // Set the hidden property based on the checkbox state
      const checkbox = document.getElementById(`checkbox-${network}`);
      edge.hidden = !checkbox.checked;
      edges.update(edge);
    }
  });
}

function clearClicked() {
  // start all

  try {
    showToast("Clearing docker-compose...");

    containers.forEach((container) => {
      const checkboxLabel = document.getElementById(
        `checkbox-container-${container.container_name}`,
      );
      const label = checkboxLabel.nextElementSibling;
      if (label.style.color != "red") {
        const loader = document.getElementById(
          `loader-${container.container_name}`,
        );
        loader.hidden = false;
      }
    });

    // Send a request to the backend to start the container
    const startResponse = fetch("http://localhost:8000/clear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        docker_compose_path: dockerComposePath.file_path,
        container: "",
        flags: flag,
      }),
    });
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    throw error;
  }
}

function buildClicked() {
  // start all

  try {
    showToast("Started building all containers...");

    // Send a request to the backend to start the container
    const startResponse = fetch("http://localhost:8000/build-all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        docker_compose_path: dockerComposePath.file_path,
        container: "",
        flags: flag,
      }),
    });
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    throw error;
  }
}

function startClicked() {
  // start all

  var tmp = [];
  containers.forEach((container) => {
    const checkbox = document.getElementById(
      `checkbox-container-${container.container_name}`,
    );

    if (checkbox.checked === true) {
      const label = checkbox.nextElementSibling;
      if (label.style.color != "green") {
        const loader = document.getElementById(
          `loader-${container.container_name}`,
        );
        loader.hidden = false;
      }
      tmp.push({
        docker_compose_path: dockerComposePath.file_path,
        container: container.container_name,
        flags: flag,
      });
    }
  });

  if (tmp.length == 0) {
    return;
  }
  showToast("Starting selected containers...");
  try {
    // Send a request to the backend to start the container
    const startResponse = fetch("http://localhost:8000/start-containers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tmp),
    });
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    throw error;
  }
}

function stopClicked() {
  // stop clicked

  var tmp = [];
  containers.forEach((container) => {
    const checkbox = document.getElementById(
      `checkbox-container-${container.container_name}`,
    );
    if (checkbox.checked === true) {
      const label = checkbox.nextElementSibling;
      if (label.style.color != "red") {
        const loader = document.getElementById(
          `loader-${container.container_name}`,
        );
        loader.hidden = false;
      }
      tmp.push({
        docker_compose_path: dockerComposePath.file_path,
        container: container.container_name,
        flags: flag,
      });
    }
  });

  if (tmp.length == 0) {
    return;
  }
  showToast("Stopping selected containers...");

  try {
    // Send a request to the backend to start the container
    const startResponse = fetch("http://localhost:8000/stop-containers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tmp),
    });
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    throw error;
  }
}

async function stopContainer(containerToStop) {
  try {
    showToast(`Stopping container: ${containerToStop.container_name}`);
    const checkbox = document.getElementById(
      `checkbox-container-${containerToStop.container_name}`,
    );
    const label = checkbox.nextElementSibling;
    if (label.style.color != "red") {
      const loader = document.getElementById(
        `loader-${containerToStop.container_name}`,
      );
      loader.hidden = false;
    }

    // Send a request to the backend to start the container
    const startResponse = await fetch("http://localhost:8000/stop-container", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        docker_compose_path: dockerComposePath.file_path,
        container: containerToStop.container_name,
        flags: flag,
      }),
    });
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    throw error;
  }
}

async function startContainer(containerToStart) {
  try {
    showToast(`Starting container: ${containerToStart.container_name}`);
    const checkbox = document.getElementById(
      `checkbox-container-${containerToStart.container_name}`,
    );
    const label = checkbox.nextElementSibling;
    if (label.style.color != "green") {
      const loader = document.getElementById(
        `loader-${containerToStart.container_name}`,
      );
      loader.hidden = false;
    }

    // Send a request to the backend to start the container
    const startResponse = await fetch("http://localhost:8000/start-container", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        docker_compose_path: dockerComposePath.file_path,
        container: containerToStart.container_name,
        flags: flag,
      }),
    });
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    throw error;
  }
}

async function getRunningContainers() {
  try {
    // Send a request to the backend to start the container
    const response = await fetch(
      "http://localhost:8000/get-running-containers-with-networks",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const result = await response.json();

    updateRunningNodes(result);
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
    throw error;
  }
}
setInterval(() => {
  getRunningContainers();
}, 10000);

function showToast(message, color = "blue") {
  // Check if the browser supports the Notification API
  let toast = Toastify({
    text: message,
    duration: 3000, // 3 seconds
    gravity: "bottom", // or "bottom"
    position: "right", // or "left", "right"
    //backgroundColor: color,
    style: {
      border: "None",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
      opacity: 0.8, // Adjust the opacity as needed
      background: `radial-gradient(circle, ${color} 60%, rgba(0, 0, 0, 0) )`, // Add a gradient from the specified color to white
    },
  }).showToast();
}

function Select(arg) {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][id^="checkbox-container-"]',
  );

  checkboxes.forEach((checkbox) => {
    if (arg === None) {
      checkbox.checked = false;
    }

    if (arg === "all") {
      checkbox.checked = true;
    }
    if (arg == "default") {
      const containerName = checkbox.id.replace("checkbox-container-", "");
      checkbox.checked = false;
      containers.forEach((container) => {
        if (container.container_name == containerName) {
          container.labels_used.forEach((lab) => {
            const keyValuePairs = lab.split("=");
            const field = keyValuePairs[0];
            const value = keyValuePairs[1];

            if (field === "default") {
              checkbox.checked = true;
            }
          });
        }
      });
    }
    checkbox.dispatchEvent(new Event("change"));
  });
}

function generateTarballName() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const tarballName = `${year}${month}${day}_${hours}${minutes}${seconds}_docker_images.tar`;

  return tarballName;
}

const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", importClicked);

function triggerFileDialog() {
  const fileInput = document.getElementById("fileInput");
  fileInput.click();
}

function importClicked(event) {
  const selectedFile = event.target.files[0];

  showToast(`Importing images from file: ./${selectedFile.name}`);

  const loader = document.getElementById("loader-import");
  loader.hidden = false;

  const data = {
    file_path: `/docker/${selectedFile.name}`,
  };

  const responsePromise = fetch("http://localhost:8000/import-images", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  responsePromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      showToast(`Images imported successfully!`, "green");
      loader.hidden = true;
      return result;
    })
    .catch((error) => {
      showToast(`Images import failed!`, "red");
      loader.hidden = true;
      console.error("Error importing images:", error.message);
    });
}

function exportClicked() {
  var tarballname = generateTarballName();

  showToast(`Exporting images to file: ./${tarballname}`);

  const loader = document.getElementById("loader-export");
  loader.hidden = false;

  const data = {
    file_path: `/docker/${tarballname}`,
  };

  const responsePromise = fetch("http://localhost:8000/export-images", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  responsePromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      showToast(`Images exported successfully`, "green");
      loader.hidden = true;
      return result;
    })
    .catch((error) => {
      showToast(`Images export failed!`, "red");
      loader.hidden = true;
      console.error("Error exporting images:", error.message);
    });
}
