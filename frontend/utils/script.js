/**
 *
 * Init code
 *
 */

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

var networks = [];

// Sets path to docker-compose, dont change it here!
const dockerComposePath = {
  file_path: "/docker/docker-compose.yml",
};

// Add eventlisteners for fileinput import!
const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", importClicked);

var flag = "";
var vflag = "";

var darkmode_var = false;

// Trigger darkmode once as default
darkmode();

// List of networks to ignore
var ignoreList = [];

// Create a network graph
var container = document.getElementById("graph-container");
var nodes = new vis.DataSet();
var edges = new vis.DataSet();
var data = {
  nodes: nodes,
  edges: edges,
};

// Options for the graph behavior
// These settings can be fun to play around with!
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

// Keeps track of network random colors.
var networkColors = {};

// Initate Network graph.
var network = new vis.Network(container, data, options);

// global reference to all containers
var containers = [];
var running_containers = [];
var external_containers = [];
var internet_containers = [];

// Perform parse on startup.
parseDockerCompose(dockerComposePath);

// Activate clock
setInterval(updateClock, 1000);

// Activate background get running docker containers loop
setInterval(() => {
  getRunningContainers();
}, 10000);

/**
 *
 * Functions
 *
 */

function genFetch(data, path, method = "POST", toast = false) {
  /**
   * A generic fetch function, that waits for response before continueing!
   */
  if (toast) {
    showToast(`Starting task ${path}...`);
  }

  var responsePromise;
  switch (method) {
    case "POST":
      responsePromise = fetch(`http://localhost:8000/${path}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      break;
    case "GET":
      responsePromise = fetch(`http://localhost:8000/${path}`, {
        method: method,
      });
      break;
  }

  return responsePromise
    .then((response) => {
      if (!response.ok) {
        showToast(`Backend failed with task: ${path}`, "red");
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      if (toast) {
        showToast(`${path} task completed successfully!`, "green");
      }

      return result;
    })
    .catch((error) => {
      showToast(`${path} task failed!`, "red");
      console.error("Error exporting images:", error.message);
    });
}

function addNodeToGraph(containerName) {
  // Adds new nodes to graph.
  const nodeExists = nodes.get(containerName);

  // If the node doesn't exist, add it to the network
  if (!nodeExists) {
    showToast(`${containerName} detected.`);

    nodes.add({ id: containerName, label: containerName });
  }
}

function updateClock() {
  // Adds a clock in header
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}

function parseDockerCompose(data) {
  // Send request to parse DockerCompose file
  genFetch(data, "parse-docker-compose").then((result) => {
    // Handle the result here
    containers = result;

    updateNodes(result);

    // Update the legend based on the network colors
    updateLegend(networkColors);

    showToast("Welcome!");

    getRunningContainers();

    getNetworks();
  });
}

function darkmode() {
  // Handle darkmode css change color
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

function findSmallestNetwork(containers) {
  // Returns the smalles network a container is part of and uses it as container group.
  // Part of detecting and generating groups from network.
  // This is what happens if groupnames are not set as labels.

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
  // Happens when nodes in docker-compose is updated!
  // After parsing docker-compose

  const checkboxesContainer = document.getElementById("checkboxes");

  // Clear existing content in case of multiple calls
  checkboxesContainer.innerHTML = "";

  const def_groups = findSmallestNetwork(containers);

  var presets = [];
  presets.push("None");
  presets.push("All");

  // create empty presets
  containers.forEach((container) => {
    container["presets"] = [];
  });

  containers.forEach((container) => {
    // Create list item for checkbox
    //const listItem = document.createElement("li");

    // Set default group
    var group = "";
    def_groups.forEach((c) => {
      if (c.container_name == container.container_name) {
        group = c.smallestNetwork;
      }
    });

    var controllable = true;
    var ignore_ports = false;

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
      if (field == "add-preset") {
        if (!presets.includes(value)) {
          presets.push(value);
        }
      }
      if (field === "controllable") {
        controllable = value;
      }
      if (field === "ignore-ports") {
        ignore_ports = value;
      }

      if (field === "group") {
        group = value;
      }
      if (presets.includes(field)) {
        container["presets"].push(field);
      }
    });

    const card = document.createElement("div");
    card.classList.add("card");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox-container-${container.container_name}`;

    if (container.presets.includes("default")) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }

    checkbox.addEventListener("change", () =>
      toggleContainerVisibility(container.container_name),
    );

    // Create title
    const label = document.createElement("label");
    label.htmlFor = `checkbox-container-${container.container_name}`;
    label.appendChild(document.createTextNode(container.container_name));

    var startButton;
    var stopButton;
    if (controllable === true || controllable === "true") {
      // Create start button icon
      startButton = document.createElement("button");
      startButton.innerHTML = '<i class="fa fa-play"></i>';
      startButton.className = "smlbtn";
      startButton.style.color = "green";
      startButton.addEventListener("click", () => startContainer(container));

      // Create stop button icon
      stopButton = document.createElement("button");
      stopButton.innerHTML = '<i class="fa fa-stop"></i> ';
      stopButton.className = "smlbtn";
      stopButton.style.color = "red";
      stopButton.addEventListener("click", () => stopContainer(container));
    }

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

      protocol = "http";
      if (container.protocol !== "") {
        protocol = container.protocol;
      }

      // Create open website button
      if (!ignore_ports) {
        const openWebsiteButton = document.createElement("button");
        openWebsiteButton.innerHTML = '<i class="fa fa-external-link"></i> ';
        openWebsiteButton.className = "smlbtn";
        openWebsiteButton.style.color = "white";
        openWebsiteButton.addEventListener("click", () =>
          openWebsite(`${protocol}://localhost:${p}/${container.path}`),
        );
        cardbuttoncontainer.appendChild(openWebsiteButton);
      }
    }
    // Append elements to card container
    card.appendChild(checkbox);
    card.appendChild(label);

    const loader = document.createElement("div");
    loader.className = `loader`;
    loader.id = `loader-${container.container_name}`;
    loader.hidden = true;

    if (controllable === true || controllable === "true") {
      cardbuttoncontainer.appendChild(stopButton);
      cardbuttoncontainer.appendChild(startButton);
    }

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

  generatePresetButtons(presets);

  addEdgesBasedOnNetworks(containers);

  // only show defaults!
  containers.forEach((container) => {
    toggleContainerVisibility(container.container_name);
  });
}

function openWebsite(url) {
  // Open websites when button in clicked
  window.open(url, "_blank");
}

function updateRunningNodes(_containers) {
  // Updates nodes when external docker containers are updated
  // this is called every N seconds, if there are changes in running containers.

  const checkboxesContainer = document.getElementById("checkboxesDocker");

  // Clear existing content in case of multiple calls
  checkboxesContainer.innerHTML = "";

  // Handle internal containers
  const anyNotIncontainers = containers.some(
    (obj1) =>
      !_containers.some((obj2) => obj2.container_name === obj1.container_name),
  );

  if (anyNotIncontainers) {
    // grab internal containers
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

  // Handle external containers

  var running_unique = [];
  _containers.forEach((container) => {
    const isNotInList = containers.every(
      (obj) => obj.container_name !== container.container_name,
    );
    if (isNotInList) {
      running_unique.push(container);

      if (
        !external_containers.some(
          (item) => item.container_name === container.container_name,
        )
      ) {
        // If not present, add the object to the array
        external_containers.push(container);
      }

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

  // remove no existing nodes
  // Get objects from list1 that do not exist in list2
  let objectsNotInexternal_containers = external_containers.filter(
    (item1) =>
      !running_unique.some(
        (item2) => item1.container_name === item2.container_name,
      ),
  );
  objectsNotInexternal_containers.forEach((container) => {
    external_containers = external_containers.filter(
      (item) => item !== container,
    );
    nodes.remove(container.container_name);
    showToast(`${container.container_name} disconnected!`);
  });

  // Update access table:
  updateTable();
}

function generatePresetButtons(presets) {
  const buttonContainer = document.getElementById("presets");
  buttonContainer.innerHTML = "";

  presets.forEach((preset) => {
    const button = document.createElement("button");
    button.textContent = preset;
    button.className = "smlbtn";
    button.setAttribute("onclick", `SelectPreset("${preset}")`);
    buttonContainer.appendChild(button);
  });
}

function reshuffleGraph() {
  // Reshuffle and randomize node positions in network graph.

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
  // Toggle build flag value
  const checkbox = document.getElementById("build");
  if (checkbox.checked) {
    flag = "--build";
  } else {
    flag = "";
  }
}

function volumeFlag() {
  // Toggle volume flag value
  const checkbox = document.getElementById("volume");
  if (checkbox.checked) {
    vflag = "-v";
  } else {
    vflag = "";
  }
}

function generateRandomId() {
  return Math.random().toString(36).substring(2, 10);
}

const websiteId = generateRandomId();

let websocket;

const logsContainer = document.getElementById("logsContainer");
const logsContentContainer = document.getElementById("log-content");

var id = generateLogId();

async function generateLogId() {
  genFetch(data, "id", "GET", true).then((res) => {
    return res.id;
  });

  try {
    const response = await fetch("http://localhost:8000/id");
    const data = await response.json();

    if (response.ok) {
      const logId = data.log_id;
      return logId;
    } else {
      console.error("Error generating log ID:", data.detail);
      return null;
    }
  } catch (error) {
    console.error("Error generating log ID:", error);
    return null;
  }
}

function showLog() {
  logsContainer.style.display = "block";

  // Open a WebSocket connection with a specific website ID
  const websiteId = id; // Replace with the actual website ID
  const websocket = new WebSocket(`ws://localhost:8000/ws/${websiteId}`); // Replace with your server address

  // Set up event handlers for the WebSocket
  websocket.onopen = (event) => {
    //console.log("WebSocket connection opened:", event);
  };

  websocket.onmessage = (event) => {
    // Append the received log entry to the logsContainer
    const logElement = document.createElement("div");
    logElement.textContent = event.data;
    logsContentContainer.appendChild(logElement);

    // Scroll to the bottom to show the latest logs
    logsContentContainer.scrollTop = logsContentContainer.scrollHeight;
  };

  websocket.onclose = (event) => {
    // console.log("WebSocket connection closed:", event);
  };

  websocket.onerror = (event) => {
    console.error("WebSocket error:", event);
  };
}

// Function to close the logs container
function closeLogsContainer() {
  logsContainer.style.display = "none";
}

function openLog() {
  openWebsite(`http://localhost/logs/dcdc.log`);
}

// Make the logs container draggable
dragElement(logsContainer);

function dragElement(elmnt) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.querySelector(".log-header")) {
    // if present, the header is where you move the DIV from:
    document.querySelector(".log-header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function closeWebSocket() {
  if (websocket) {
    websocket.close();
  }
}

function addEdgesBasedOnNetworks(containerInfoList) {
  // Adds edges or bows between nodes in the network, called from both updateNodes and updateRunningNodes

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

function getCommonNetworks(container1, container2) {
  // Function to get a common network between two containers
  return container1.networks_used.filter((network) =>
    container2.networks_used.includes(network),
  );
}

function getRandomColor() {
  // Function to generate a random color (for demonstration purposes)
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateLegend(networkColors) {
  // Function to update the legend based on the network colors
  // The legend is in reallity the network-cards that represent all networks.

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
  // On checkbox click change node visibility.

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
  // On network checkbox click change edge visibility.

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

function updateTable() {
  const containerTableBody = document.getElementById("containerTableBody");
  containerTableBody.innerHTML = "";

  containers.forEach((container) => {
    const networkStatuses = container.networks_used.map((network) => {
      const status = networks.find((item) => item.name === network);
      return status ? status.has_internet : false; // assuming false if not found
    });

    var controllable = true;
    var ignore_ports = false;
    // update ignore list
    container.labels_used.forEach((lab) => {
      const keyValuePairs = lab.split("=");
      const field = keyValuePairs[0];
      const value = keyValuePairs[1];

      if (field === "controllable") {
        controllable = value;
      }
      if (field === "ignore-ports") {
        ignore_ports = value;
      }
    });

    var startButton;
    var stopButton;
    var loader;
    var openWebsiteButton;
    if (controllable === true || controllable === "true") {
      loader = document.createElement("div");
      loader.className = `loader`;
      loader.id = `loader-table-${container.container_name}`;
      loader.hidden = true;

      // Create start button icon
      startButton = document.createElement("button");
      startButton.innerHTML = '<i class="fa fa-play"></i>';
      startButton.className = "smlbtn";
      startButton.style.color = "green";
      startButton.addEventListener("click", () => startContainer(container));

      // Create stop button icon
      stopButton = document.createElement("button");
      stopButton.innerHTML = '<i class="fa fa-stop"></i> ';
      stopButton.className = "smlbtn";
      stopButton.style.color = "red";
      stopButton.addEventListener("click", () => stopContainer(container));
    }
    if (container.exposed_ports.length > 0) {
      const port = container.exposed_ports[0].split(":");
      var p = "";
      if (port.length == 3) {
        p = port[1];
      } else {
        p = port[0];
      }

      protocol = "http";
      if (container.protocol !== "") {
        protocol = container.protocol;
      }

      // Create open website button
      if (!ignore_ports) {
        openWebsiteButton = document.createElement("button");
        openWebsiteButton.innerHTML = '<i class="fa fa-external-link"></i> ';
        openWebsiteButton.className = "smlbtn";
        openWebsiteButton.style.color = "white";
        openWebsiteButton.addEventListener("click", () =>
          openWebsite(`${protocol}://localhost:${p}/${container.path}`),
        );
      }
    }

    const otherElement = document.getElementById(
      `checkbox-container-${container.container_name}`,
    );
    const label = otherElement.nextElementSibling;

    const color = label.style.color;

    var shouldBeChecked = false;
    running_containers.forEach((c) => {
      if (c.container_name === container.container_name) {
        shouldBeChecked = c.networks_used.includes("dcdc_internet_network");
      }
    });

    if (shouldBeChecked) {
      internet_containers.push(container.container_name);
    } else {
      internet_containers = internet_containers.filter(
        (item) => item !== container.container_name,
      );
    }
    const row = document.createElement("tr");

    // Create the toggle switch column
    const toggleSwitchColumn = document.createElement("td");
    toggleSwitchColumn.innerHTML = `
  <label class="toggle-switch">
    <input type="checkbox" ${shouldBeChecked ? "checked" : ""}>
    <span class="slider"></span>
  </label>
`;
    row.appendChild(toggleSwitchColumn);

    // Create the container name column
    const nameColumn = document.createElement("td");
    nameColumn.style.backgroundColor = color;
    nameColumn.textContent = container.container_name;
    row.appendChild(nameColumn);

    // Create the buttons column
    const buttonsColumn = document.createElement("td");
    if (controllable === true || controllable === "true") {
      buttonsColumn.appendChild(loader);
      buttonsColumn.appendChild(startButton);
      buttonsColumn.appendChild(stopButton);
    }
    if (!ignore_ports && container.exposed_ports.length > 0) {
      buttonsColumn.appendChild(openWebsiteButton);
    }

    row.appendChild(buttonsColumn);

    // Create the exposed ports column
    const portsColumn = document.createElement("td");
    portsColumn.innerHTML = container.exposed_ports
      .map((port) => {
        const status =
          port === "host_mode" ||
          internet_containers.includes(container.container_name)
            ? "orange"
            : "black";
        return `<span style="color: ${status};">${port}</span>`;
      })
      .join(", ");
    row.appendChild(portsColumn);

    // Create the protocol column
    const protocolColumn = document.createElement("td");
    protocolColumn.textContent = container.protocol;
    row.appendChild(protocolColumn);

    // Create the networks used column
    const networksColumn = document.createElement("td");
    networksColumn.innerHTML = container.networks_used
      .map((network, index) => {
        const status = networkStatuses[index] ? "orange" : "black";
        return `<span style="color: ${status};">${network}</span>`;
      })
      .join(", ");
    row.appendChild(networksColumn);

    // Append the row to the table body
    containerTableBody.appendChild(row);
  });

  // Select all toggle switch inputs
  const toggleSwitches = document.querySelectorAll(".toggle-switch input");

  // Iterate over each toggle switch input
  toggleSwitches.forEach((toggleSwitch, index) => {
    toggleSwitch.addEventListener("click", function () {
      // Get the corresponding container's container_name
      const containerName = containers[index].container_name;
      const toggleState = toggleSwitch.checked ? "positive" : "negative";

      // Call your function with the container_name and toggleState when the toggle switch is clicked
      toggleClicked(containerName, toggleState);
    });
  });
}

function toggleClicked(containerName, toggleState) {
  var exist = false;
  running_containers.forEach((c) => {
    if (c.container_name === containerName) {
      exist = true;
    }
  });

  if (!exist) {
    return;
  }

  // cant add internet if it isnt running!

  if (toggleState === "positive") {
    genFetch(
      createStartContainer(
        { file_path: "" },
        { container_name: containerName },
      ),
      "connect-to-internet",
    ).then(() => {
      showToast(
        `Container ${containerName} connected to internet network.`,
        "orange",
      );

      internet_containers.push(containerName);
    });
  } else {
    genFetch(
      createStartContainer(
        { file_path: "" },
        { container_name: containerName },
      ),
      "disconnect-from-internet",
    ).then(() => {
      showToast(
        `Container ${containerName} disconnected from internet network.`,
        "green",
      );
      internet_containers = internet_containers.filter(
        (item) => item !== containerName,
      );
    });
  }
}

function internetClicked() {
  tableContainer.classList.toggle("visible");
  tableContainer.classList.toggle("hidden");

  updateTable();
}

function shutdown() {
  showToast("Shutting down all...");

  clearClicked();

  genFetch(NaN, "shutdown", "GET").then(
    alert("dcDeployControl will be terminated in a few seconds."),
  );
}

function getNetworks() {
  showToast("Collecting Network information...");

  genFetch(NaN, "networks", "GET").then((response) => {
    //console.log(response);

    networks = response;
    showToast("Network information collected successfully!", "green");
  });
}

function clearClicked() {
  // Runs docker-compose down to remove network along with containers.
  showToast("Clearing docker-compose...");

  showCardLoader("red");

  const data = createStartContainer(dockerComposePath, "");

  showLoader("clear");
  genFetch(data, "clear")
    .then(() => {
      hideLoader("clear");
      showToast("Clearing all containers and networks complete!");
    })
    .catch((error) => {
      hideLoader("clear");
    });
}

function showLoader(name) {
  const loader = document.getElementById(`loader-${name}`);
  loader.hidden = false;
}
function hideLoader(name) {
  const loader = document.getElementById(`loader-${name}`);
  loader.hidden = true;
}

function showCardLoader(color, name = "all", containerlist = containers) {
  // Set load stop status on selected checkboxes

  containerlist.forEach((container) => {
    if (name === "all" || name === container.container_name) {
      const checkboxLabel = document.getElementById(
        `checkbox-container-${container.container_name}`,
      );
      const label = checkboxLabel.nextElementSibling;
      if (label.style.color != color) {
        const loader = document.getElementById(
          `loader-${container.container_name}`,
        );
        loader.hidden = false;
        const loader2 = document.getElementById(
          `loader-table-${container.container_name}`,
        );
        loader2.hidden = false;
      }
    }
  });
}

function buildClicked() {
  // Runs docker-compose build, useful for larger systems.

  showToast("Started building all containers...");

  const data = createStartContainer(dockerComposePath, "");

  showLoader("build");
  genFetch(data, "build-all")
    .then(() => {
      hideLoader("build");
      showToast("Building all containers complete!");
    })
    .catch((error) => {
      hideLoader("build");
    });
}

function getContainersWithCheckedBoxes(color) {
  var tmp = [];
  containers.forEach((container) => {
    const checkbox = document.getElementById(
      `checkbox-container-${container.container_name}`,
    );

    var skip = false;
    container.labels_used.forEach((label) => {
      if (label === "controllable=false") {
        skip = true;
      }
    });

    if (!skip) {
      if (checkbox.checked === true) {
        const label = checkbox.nextElementSibling;
        if (label.style.color != color) {
          const loader = document.getElementById(
            `loader-${container.container_name}`,
          );
          loader.hidden = false;
        }
        tmp.push(createStartContainer(dockerComposePath, container));
      }
    }
  });
  return tmp;
}

function startClicked() {
  // start all containers with checked checkboxes.

  const tmp = getContainersWithCheckedBoxes("green");

  if (tmp.length == 0) {
    return;
  }

  showToast("Starting selected containers...");

  showLoader("start");
  genFetch(tmp, "start-containers")
    .then(() => {
      hideLoader("start");
    })
    .catch((error) => {
      hideLoader("start");
    });
}

function stopClicked() {
  // stop all containers with checked checkboxes

  const tmp = getContainersWithCheckedBoxes("red");

  if (tmp.length == 0) {
    return;
  }

  showToast("Stopping selected containers...");

  showLoader("stop");
  genFetch(tmp, "stop-containers")
    .then(() => {
      hideLoader("stop");
    })
    .catch((error) => {
      hideLoader("stop");
    });
}

function createStartContainer(dockerComposePath, container) {
  return {
    docker_compose_path: dockerComposePath.file_path,
    container: container ? container.container_name : "",
    flags: flag,
  };
}

async function stopContainer(containerToStop) {
  // Stop a container.
  showToast(`Stopping container: ${containerToStop.container_name}`);
  showCardLoader("red", containerToStop.container_name);
  data = createStartContainer(dockerComposePath, containerToStop);

  genFetch(data, "stop-container").catch((error) => {
    hideLoader(containerToStop.container_name);
  });
}

async function startContainer(containerToStart) {
  // start one container
  showToast(`Starting container: ${containerToStart.container_name}`);

  showCardLoader("green", containerToStart.container_name);
  data = createStartContainer(dockerComposePath, containerToStart);

  genFetch(data, "start-container").catch((error) => {
    hideLoader(containerToStart.container_name);
  });
}

async function getRunningContainers() {
  // Gets all running containers every 10 second and send updates to updateRunningNodes.
  genFetch(NaN, "get-running-containers-with-networks", "GET").then(
    (result) => {
      running_containers = result;
      updateRunningNodes(result);
    },
  );
}

function showToast(message, color = "blue") {
  // Create toast notifications
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

function SelectPreset(arg) {
  // Function that checks checkboxes when pressing None/All/Default and so on buttons
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][id^="checkbox-container-"]',
  );

  checkboxes.forEach((checkbox) => {
    switch (arg.toLowerCase()) {
      case "none":
        checkbox.checked = false;
        break;
      case "all":
        checkbox.checked = true;
        break;
      default:
        const containerName = checkbox.id.replace("checkbox-container-", "");
        checkbox.checked = false;
        containers.forEach((container) => {
          if (container.container_name == containerName) {
            container.presets.forEach((preset) => {
              if (preset.toLowerCase() === arg.toLowerCase()) {
                checkbox.checked = true;
              }
            });
          }
        });
        break;
    }

    checkbox.dispatchEvent(new Event("change"));
  });
}

function generateTarballName() {
  // Generate a export tarball name
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

function triggerFileDialog() {
  // forward the filedialog result.
  const fileInput = document.getElementById("fileInput");
  fileInput.click();
}

function importClicked(event) {
  // Handle import request
  // And trigger docker load.

  const selectedFile = event.target.files[0];

  showLoader("import");

  const data = {
    file_path: `/docker/${selectedFile.name}`,
  };

  genFetch(data, "import-images", "POST", true)
    .then(() => {
      hideLoader("import");
    })
    .catch((error) => {
      hideLoader("import");
    });
}

function exportClicked() {
  // Handle export request
  // And trigger docker save.

  var tarballname = generateTarballName();

  showLoader("export");

  const data = {
    file_path: `/docker/${tarballname}`,
  };

  genFetch(data, "export-images", "POST", true)
    .then(() => {
      hideLoader("export");
    })
    .catch((error) => {
      hideLoader("export");
    });
}
