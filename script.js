// ==== STOP LIST ====
const stops = [
  "Bole Medhanealem", "Meskel Square", "Mexico Square", "Piazza", "Mercato", "Gotera", "Kality", "Sarbet",
  "CMC", "Leghar", "Ayat", "Bole Airport", "Summit", "Bole Bulbula", "Gergi", "Edna Mall", "Lideta",
  "Sar Bet", "Bambis", "Riche", "Bole Michael", "Gerji", "Urael", "Shola", "Betel"
];

// ==== ROUTE LIST ====
const routes = [
  // 🚐 ROUTE LIST (Addis Ababa Public Transport)
  {
    id: 49,
    name: "Bole - Piazza",
    start: "Bole Medhanealem",
    end: "Piazza",
    vehicle: "Minibus",
    stops: [0, 1, 3],
    fare: 15,
    time: 45,
    frequency: "Every 5-10 mins"
  },
  {
    id: 50,
    name: "Bole - Mexico Square",
    start: "Bole Medhanealem",
    end: "Mexico Square",
    vehicle: "Minibus",
    stops: [0, 15, 2],
    fare: 12,
    time: 35,
    frequency: "Every 7-12 mins"
  },
  {
    id: 45,
    name: "Bole - Mercato",
    start: "Bole Medhanealem",
    end: "Mercato",
    vehicle: "Minibus",
    stops: [0, 15, 4],
    fare: 15,
    time: 40,
    frequency: "Every 10 mins"
  },
  {
    id: 31,
    name: "Meskel Square - Gotera",
    start: "Meskel Square",
    end: "Gotera",
    vehicle: "Minibus",
    stops: [1, 5],
    fare: 8,
    time: 15,
    frequency: "Every 5 mins"
  },
  {
    id: 33,
    name: "Meskel Square - Kality",
    start: "Meskel Square",
    end: "Kality",
    vehicle: "Bus",
    stops: [1, 5, 6],
    fare: 10,
    time: 35,
    frequency: "Every 15 mins"
  },
  {
    id: 60,
    name: "Mercato - Kality",
    start: "Mercato",
    end: "Kality",
    vehicle: "Bus",
    stops: [4, 8, 6],
    fare: 8,
    time: 45,
    frequency: "Every 15-20 mins"
  },
  {
    id: 12,
    name: "Mercato - Sar Bet",
    start: "Mercato",
    end: "Sar Bet",
    vehicle: "Minibus",
    stops: [4, 17],
    fare: 10,
    time: 25,
    frequency: "Every 10 mins"
  },
  {
    id: 77,
    name: "Ayat - Piazza",
    start: "Ayat",
    end: "Piazza",
    vehicle: "Minibus",
    stops: [10, 0, 1, 3],
    fare: 20,
    time: 70,
    frequency: "Every 10-15 mins"
  },
  {
    id: 90,
    name: "Leghar - Gotera",
    start: "Leghar",
    end: "Gotera",
    vehicle: "Minibus",
    stops: [9, 8, 5],
    fare: 8,
    time: 15,
    frequency: "Every 5-7 mins"
  },
  {
    id: 22,
    name: "Summit - Piazza",
    start: "Summit",
    end: "Piazza",
    vehicle: "Minibus",
    stops: [12, 13, 14, 0, 1, 3],
    fare: 18,
    time: 55,
    frequency: "Every 12-15 mins"
  },
  {
    id: 52,
    name: "CMC - Leghar",
    start: "CMC",
    end: "Leghar",
    vehicle: "Minibus",
    stops: [8, 9],
    fare: 14,
    time: 40,
    frequency: "Every 15 mins"
  },
  {
    id: 53,
    name: "Ayat - Betel",
    start: "Ayat",
    end: "Betel",
    vehicle: "Minibus",
    stops: [10, 24],
    fare: 20,
    time: 55,
    frequency: "Every 10 mins"
  },
  {
    id: 23,
    name: "Ayat - Mexico Square",
    start: "Ayat",
    end: "Mexico Square",
    vehicle: "Minibus",
    stops: [10, 8, 0, 1, 2],
    fare: 17,
    time: 50,
    frequency: "Every 10 mins"
  },
  {
    id: 24,
    name: "Kality - Edna Mall",
    start: "Kality",
    end: "Edna Mall",
    vehicle: "Minibus",
    stops: [6, 5, 0, 15],
    fare: 16,
    time: 45,
    frequency: "Every 15 mins"
  },
  {
    id: 25,
    name: "Shola - Mercato",
    start: "Shola",
    end: "Mercato",
    vehicle: "Minibus",
    stops: [23, 22, 1, 3, 4],
    fare: 19,
    time: 60,
    frequency: "Every 20 mins"
  },
  {
    id: 26,
    name: "Leghar - Bambis",
    start: "Leghar",
    end: "Bambis",
    vehicle: "Minibus",
    stops: [9, 18],
    fare: 10,
    time: 25,
    frequency: "Every 8 mins"
  },
  {
    id: 101,
    name: "Betel - Lideta",
    start: "Betel",
    end: "Lideta",
    vehicle: "Minibus",
    stops: [24, 22, 17, 16],
    fare: 14,
    time: 35,
    frequency: "Every 10 mins"
  },
  {
    id: 102,
    name: "Bole Airport - Shola",
    start: "Bole Airport",
    end: "Shola",
    vehicle: "Minibus",
    stops: [11, 0, 1, 22, 23],
    fare: 18,
    time: 50,
    frequency: "Every 12 mins"
  },
  {
    id: 103,
    name: "Sarbet - Summit",
    start: "Sarbet",
    end: "Summit",
    vehicle: "Bus",
    stops: [7, 5, 8, 12],
    fare: 16,
    time: 45,
    frequency: "Every 15 mins"
  },
  {
    id: 104,
    name: "Gerji - Meskel Square",
    start: "Gerji",
    end: "Meskel Square",
    vehicle: "Minibus",
    stops: [21, 0, 1],
    fare: 13,
    time: 30,
    frequency: "Every 8 mins"
  },
  {
    id: 105,
    name: "Urael - Mercato",
    start: "Urael",
    end: "Mercato",
    vehicle: "Minibus",
    stops: [22, 1, 3, 4],
    fare: 15,
    time: 40,
    frequency: "Every 10 mins"
  },
  {
    id: 106,
    name: "Gergi - Mexico Square",
    start: "Gergi",
    end: "Mexico Square",
    vehicle: "Bus",
    stops: [14, 0, 1, 2],
    fare: 17,
    time: 50,
    frequency: "Every 20 mins"
  },
  {
    id: 107,
    name: "Bole Michael - Bambis",
    start: "Bole Michael",
    end: "Bambis",
    vehicle: "Minibus",
    stops: [20, 0, 1, 18],
    fare: 16,
    time: 45,
    frequency: "Every 10-15 mins"
  },
  {
    id: 108,
    name: "Akaki - Meskel Square",
    start: "Akaki",
    end: "Meskel Square",
    vehicle: "Bus",
    stops: [6, 5, 1],
    fare: 20,
    time: 60,
    frequency: "Every 20 mins"
  },
  {
    id: 109,
    name: "Entoto - Mercato",
    start: "Entoto",
    end: "Mercato",
    vehicle: "Minibus",
    stops: [10, 1, 3, 4],
    fare: 22,
    time: 70,
    frequency: "Every 15 mins"
  },
  {
    id: 110,
    name: "CMC - Bole Airport",
    start: "CMC",
    end: "Bole Airport",
    vehicle: "Minibus",
    stops: [8, 0, 11],
    fare: 14,
    time: 40,
    frequency: "Every 10 mins"
  },
  {
    id: 111,
    name: "Summit - Mexico Square",
    start: "Summit",
    end: "Mexico Square",
    vehicle: "Bus",
    stops: [12, 0, 1, 2],
    fare: 18,
    time: 50,
    frequency: "Every 12 mins"
  },
  {
    id: 112,
    name: "Ayat - Gotera",
    start: "Ayat",
    end: "Gotera",
    vehicle: "Minibus",
    stops: [10, 8, 5],
    fare: 16,
    time: 45,
    frequency: "Every 10 mins"
  },
  {
    id: 113,
    name: "Betel - Piazza",
    start: "Betel",
    end: "Piazza",
    vehicle: "Minibus",
    stops: [24, 22, 1, 3],
    fare: 19,
    time: 55,
    frequency: "Every 15 mins"
  },
  {
    id: 114,
    name: "Bole Bulbula - Leghar",
    start: "Bole Bulbula",
    end: "Leghar",
    vehicle: "Bus",
    stops: [13, 0, 9],
    fare: 15,
    time: 40,
    frequency: "Every 10-12 mins"
  },
  {
    id: 115,
    name: "Gergi - Bambis",
    start: "Gergi",
    end: "Bambis",
    vehicle: "Minibus",
    stops: [14, 0, 1, 18],
    fare: 17,
    time: 50,
    frequency: "Every 10 mins"
  }
];



 

// ==== DOM CACHE ====
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const findButton = document.getElementById("findRoute");
const swapButton = document.getElementById("swapButton");
const filterSelect = document.getElementById("filter");
const resultsDiv = document.getElementById("results");
const resultsSection = document.getElementById("resultsSection");
const resultsCount = document.getElementById("resultsCount");
const errorDiv = document.getElementById("error");
const loadingDiv = document.getElementById("loading");

let currentResults = null;

// ==== INITIALIZATION ====
function populateDropdowns() {
  stops.forEach((name, idx) => {
    fromSelect.add(new Option(name, idx));
    toSelect.add(new Option(name, idx));
  });
}

function parseTime(route) {
  return typeof route.time === "number" ? route.time : parseInt(route.time, 10);
}

function showLoading() {
  loadingDiv.classList.add("show");
  resultsSection.style.display = "none";
  errorDiv.classList.remove("show");
}

function hideLoading() {
  loadingDiv.classList.remove("show");
}

function showError(message) {
  errorDiv.textContent = message;
  errorDiv.classList.add("show");
  resultsSection.style.display = "none";
}

function clearError() {
  errorDiv.textContent = "";
  errorDiv.classList.remove("show");
}

// ==== ROUTE FINDERS ====
function findDirectRoutes(fromIdx, toIdx) {
  return routes.filter(route => {
    const fromIndex = route.stops.indexOf(fromIdx);
    const toIndex = route.stops.indexOf(toIdx);
    return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
  });
}

function findTransferRoutes(fromIdx, toIdx) {
  const transferOptions = [];

  const startingRoutes = routes.filter(route => route.stops.includes(fromIdx));
  const endingRoutes = routes.filter(route => route.stops.includes(toIdx));

  startingRoutes.forEach(firstRoute => {
    firstRoute.stops.forEach((stopIdx, index) => {
      if (stopIdx === fromIdx || index <= firstRoute.stops.indexOf(fromIdx)) return;

      endingRoutes.forEach(secondRoute => {
        if (firstRoute.id === secondRoute.id) return;

        const transferIndex = secondRoute.stops.indexOf(stopIdx);
        const toIndex = secondRoute.stops.indexOf(toIdx);

        if (transferIndex !== -1 && toIndex !== -1 && transferIndex < toIndex) {
          transferOptions.push({
            firstLeg: firstRoute,
            transferAt: stops[stopIdx],
            transferAtIdx: stopIdx,
            secondLeg: secondRoute,
            totalFare: firstRoute.fare + secondRoute.fare,
            totalTime: parseTime(firstRoute) + parseTime(secondRoute)
          });
        }
      });
    });
  });

  return transferOptions;
}

function findAllRoutes(fromIdx, toIdx) {
  return {
    direct: findDirectRoutes(fromIdx, toIdx),
    transfer: findTransferRoutes(fromIdx, toIdx)
  };
}

// ==== RENDERING ====
function renderRoutePath(route, fromIdx, toIdx) {
  let html = '<div class="route-path">';
  route.stops.forEach(stopIdx => {
    const isFrom = stopIdx === fromIdx;
    const isTo = stopIdx === toIdx;
    const isHighlight = isFrom || isTo;

    html += `
      <div class="route-stop">
        <div class="stop-icon"></div>
        <div class="stop-name ${isHighlight ? 'highlight' : ''}">
          ${isFrom ? '<i class="fas fa-map-marker-alt"></i> ' : ''}
          ${isTo ? '<i class="fas fa-flag"></i> ' : ''}
          ${stops[stopIdx]}
        </div>
      </div>
    `;
  });
  html += '</div>';
  return html;
}

function renderDirectRoute(route, fromIdx, toIdx) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3><span class="card-icon"><i class="fas fa-bus"></i></span> Route ${route.id}: ${route.name}</h3>
    <div class="card-details">
      <div class="card-detail"><i class="fas fa-tag"></i> Fare: ${route.fare} ETB</div>
      <div class="card-detail"><i class="fas fa-clock"></i> Time: ${parseTime(route)} min</div>
      <div class="card-detail"><i class="fas fa-shuttle-van"></i> ${route.vehicle}</div>
      <div class="card-detail"><i class="fas fa-history"></i> ${route.frequency}</div>
    </div>
    ${renderRoutePath(route, fromIdx, toIdx)}
  `;
  return card;
}

function renderTransferRoute(option, fromIdx, toIdx) {
  const card = document.createElement("div");
  card.className = "card transfer-card";
  card.innerHTML = `
    <h3><span class="card-icon"><i class="fas fa-exchange-alt"></i></span> Transfer Option</h3>
    <div class="card-details">
      <div class="card-detail"><i class="fas fa-tag"></i> Total Fare: ${option.totalFare} ETB</div>
      <div class="card-detail"><i class="fas fa-clock"></i> Total Time: ${option.totalTime} min</div>
    </div>

    <h4><i class="fas fa-long-arrow-alt-right"></i> First Leg: Route ${option.firstLeg.id} (${option.firstLeg.name})</h4>
    ${renderRoutePath(option.firstLeg, fromIdx, option.transferAtIdx)}

    <h4><i class="fas fa-exchange-alt"></i> Transfer at: ${option.transferAt}</h4>

    <h4><i class="fas fa-long-arrow-alt-right"></i> Second Leg: Route ${option.secondLeg.id} (${option.secondLeg.name})</h4>
    ${renderRoutePath(option.secondLeg, option.transferAtIdx, toIdx)}
  `;
  return card;
}

function renderNoResults() {
  const noResults = document.createElement("div");
  noResults.className = "no-results";
  noResults.innerHTML = `
    <i class="fas fa-route"></i>
    <p>No routes found between these locations.</p>
    <p>Try different destinations or check back later for updates.</p>
  `;
  return noResults;
}

function renderResults(results, filter = "all") {
  resultsDiv.innerHTML = "";
  clearError();

  let directRoutes = results.direct || [];
  let transferRoutes = results.transfer || [];
  let filteredDirect = [];
  let filteredTransfer = [];

  switch (filter) {
    case "cheapest":
      filteredDirect = [...directRoutes].sort((a, b) => a.fare - b.fare);
      filteredTransfer = [...transferRoutes].sort((a, b) => a.totalFare - b.totalFare);
      break;
    case "fastest":
      filteredDirect = [...directRoutes].sort((a, b) => parseTime(a) - parseTime(b));
      filteredTransfer = [...transferRoutes].sort((a, b) => a.totalTime - b.totalTime);
      break;
    case "direct":
      filteredDirect = directRoutes;
      filteredTransfer = [];
      break;
    case "transfer":
      filteredDirect = [];
      filteredTransfer = transferRoutes;
      break;
    default:
      filteredDirect = directRoutes;
      filteredTransfer = transferRoutes;
  }

  const totalResults = filteredDirect.length + filteredTransfer.length;
  resultsCount.textContent = `${totalResults} ${totalResults === 1 ? 'route' : 'routes'} found`;

  if (totalResults === 0) {
    resultsDiv.appendChild(renderNoResults());
    return;
  }

  filteredDirect.forEach(route => {
    resultsDiv.appendChild(renderDirectRoute(route, parseInt(fromSelect.value), parseInt(toSelect.value)));
  });

  filteredTransfer.forEach(option => {
    resultsDiv.appendChild(renderTransferRoute(option, parseInt(fromSelect.value), parseInt(toSelect.value)));
  });
}

// ==== EVENT HANDLERS ====
findButton.addEventListener("click", () => {
  const fromIdx = parseInt(fromSelect.value);
  const toIdx = parseInt(toSelect.value);

  if (isNaN(fromIdx) || isNaN(toIdx)) {
    showError("Please select both departure and destination points.");
    return;
  }

  if (fromIdx === toIdx) {
    showError("Departure and destination must be different locations.");
    return;
  }

  showLoading();

  // Simulate loading for better UX
  setTimeout(() => {
    const results = findAllRoutes(fromIdx, toIdx);
    currentResults = results;

    hideLoading();
    resultsSection.style.display = "block";
    renderResults(results, filterSelect.value);
  }, 800);
});

swapButton.addEventListener("click", () => {
  const fromValue = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = fromValue;
});

filterSelect.addEventListener("change", () => {
  if (currentResults) {
    renderResults(currentResults, filterSelect.value);
  }
});

// ==== APP STARTUP ====
function init() {
  populateDropdowns();

  // Optional: Set default values for testing
  fromSelect.value = "0"; // Bole Medhanealem
  toSelect.value = "3";   // Piazza
}

init();
