// Shega.et - Main JS Logic

// ========== Multilingual Support ==========
const LANGS = ["en", "am"];
let currentLang = "en";

// UI translations
const TRANSLATIONS = {
    heroTitle: {
        en: "Find Your Way in Addis Ababa",
        am: "በአዲስ አበባ መንገድ ፈልጉ"
    },
    heroSubtitle: {
        en: "Explore 200+ public transport routes. Fast, easy, and bilingual!",
        am: "200+ የህዝብ ትራንስፖርት መንገዶችን ያግኙ። ፈጣን፣ ቀላል፣ በሁለት ቋንቋ!"
    },
    departure: {
        en: "Departure",
        am: "መነሻ"
    },
    destination: {
        en: "Destination",
        am: "መድረሻ"
    },
    searchBtn: {
        en: "Search Routes",
        am: "መንገዶችን ፈልግ"
    },
    featuredRoutes: {
        en: "Featured Routes",
        am: "ተለይተው የቀረቡ መንገዶች"
    },
    resultsTitle: {
        en: "Matching Routes",
        am: "ተመሳሳይ መንገዶች"
    },
    footerDesc: {
        en: "Addis Ababa Route Finder. Inspired by the community.",
        am: "የአዲስ አበባ መንገድ ፈላጊ። በማህበረሰቡ መነሻ!"
    },
    routeDetails: {
        en: "Route Details",
        am: "የመንገዱ ዝርዝር"
    },
    stops: {
        en: "Stops",
        am: "ማቆሚያዎች"
    },
    estimatedTime: {
        en: "Estimated Time",
        am: "ግምት የቆይታ ጊዜ"
    },
    fare: {
        en: "Fare",
        am: "ቅናሽ"
    },
    close: {
        en: "Close",
        am: "ዝጋ"
    }
};

function setLang(lang) {
    if (!LANGS.includes(lang)) return;
    currentLang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (TRANSLATIONS[key]) el.textContent = TRANSLATIONS[key][lang];
    });
    // Update placeholders
    document.getElementById("departure").placeholder = lang === "am" ? "ለምሳሌ፡ መገናኛ" : "e.g., Megenagna";
    document.getElementById("destination").placeholder = lang === "am" ? "ለምሳሌ፡ ስታዲየም" : "e.g., Stadium";
    // Update active state
    document.getElementById("lang-en").classList.toggle("active", lang === "en");
    document.getElementById("lang-am").classList.toggle("active", lang === "am");
    // Redraw featured & results
    renderFeatured();
    renderResults(window._lastResults || []);
}
document.getElementById("lang-en").onclick = () => setLang("en");
document.getElementById("lang-am").onclick = () => setLang("am");

// ========== Featured Routes ==========
function renderFeatured() {
    const featuredDiv = document.getElementById("featured-list");
    featuredDiv.innerHTML = "";
    // Pick first 4 featured routes
    const featured = ROUTES.slice(0, 4);
    featured.forEach(route => {
        const div = document.createElement("div");
        div.className = "featured-route";
        div.tabIndex = 0;
        div.setAttribute("role", "button");
        div.innerHTML = `
            <span class="route-title">${route.name[currentLang]}</span>
            <span class="route-meta">${route.departure[currentLang]} &rarr; ${route.destination[currentLang]}</span>
            <span class="route-meta">${TRANSLATIONS.fare[currentLang]}: ${route.fare}</span>
        `;
        div.onclick = () => showRouteDetails(route);
        div.onkeydown = e => { if (e.key === "Enter") showRouteDetails(route); };
        featuredDiv.appendChild(div);
    });
}
// ========== Search & Results ==========
document.getElementById("search-form").onsubmit = function(e) {
    e.preventDefault();
    const dep = document.getElementById("departure").value.trim().toLowerCase();
    const dest = document.getElementById("destination").value.trim().toLowerCase();
    if (!dep || !dest) return;
    // Match if departure/destination is in route's stops or endpoints
    const results = ROUTES.filter(route => {
        const depNames = [route.departure.en, route.departure.am, ...route.stops.map(s => s.name.en), ...route.stops.map(s => s.name.am)];
        const destNames = [route.destination.en, route.destination.am, ...route.stops.map(s => s.name.en), ...route.stops.map(s => s.name.am)];
        return depNames.some(n => n.toLowerCase().includes(dep)) && destNames.some(n => n.toLowerCase().includes(dest));
    });
    window._lastResults = results;
    renderResults(results);
    if (results.length > 0) {
        mapToRoute(results[0]);
    }
};
function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<mark>$1</mark>');
}
// ========== Loading Indicator ==========
function showLoading(show = true) {
    let loader = document.getElementById("results-loader");
    if (!loader) {
        loader = document.createElement("div");
        loader.id = "results-loader";
        loader.innerHTML = `
            <div class="loader-spinner"></div>
            <span class="loader-text">${TRANSLATIONS.searchBtn[currentLang]}...</span>
        `;
        loader.style.textAlign = "center";
        loader.style.padding = "2em 0";
        document.getElementById("results-section").prepend(loader);
    }
    loader.querySelector('.loader-text').textContent = TRANSLATIONS.searchBtn[currentLang] + "...";
    loader.style.display = show ? "block" : "none";
}

// ========== Search & Results (updated with loading) ==========
document.getElementById("search-form").onsubmit = function(e) {
    e.preventDefault();
    const dep = document.getElementById("departure").value.trim().toLowerCase();
    const dest = document.getElementById("destination").value.trim().toLowerCase();
    if (!dep || !dest) return;
    showLoading(true); // Show loading
    setTimeout(() => { // Simulate network/search delay for better UX
        // Match if departure/destination is in route's stops or endpoints
        const results = ROUTES.filter(route => {
            const depNames = [route.departure.en, route.departure.am, ...route.stops.map(s => s.name.en), ...route.stops.map(s => s.name.am)];
            const destNames = [route.destination.en, route.destination.am, ...route.stops.map(s => s.name.en), ...route.stops.map(s => s.name.am)];
            return depNames.some(n => n.toLowerCase().includes(dep)) && destNames.some(n => n.toLowerCase().includes(dest));
        });
        window._lastResults = results;
        showLoading(false); // Hide loading
        renderResults(results);
        if (results.length > 0) {
            mapToRoute(results[0]);
        }
    }, 600); // 600ms loading for effect
};

function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<mark>$1</mark>');
}

function renderResults(results) {
    const depQuery = document.getElementById("departure").value.trim().toLowerCase();
    const destQuery = document.getElementById("destination").value.trim().toLowerCase();
    const section = document.getElementById("results-section");
    const resultsDiv = document.getElementById("results");
    if (!results.length) {
        section.classList.remove("active");
        resultsDiv.innerHTML = "";
        return;
    }
    section.classList.add("active");
    resultsDiv.innerHTML = "";

    results.forEach((route, idx) => {
        // Highlight matches
        const dep = highlightMatch(route.departure[currentLang], depQuery);
        const dest = highlightMatch(route.destination[currentLang], destQuery);

        // Create card
        const div = document.createElement("div");
        div.className = "result-card improved";
        div.tabIndex = 0;
        div.setAttribute("role", "button");
        div.innerHTML = `
            <div class="row-main">
                <div class="route-icon" style="background:${route.color || "#1365e2"}"></div>
                <div class="route-info">
                    <span class="route-title">${route.name[currentLang]}</span>
                    <div class="route-meta">
                        <span title="${TRANSLATIONS.departure[currentLang]}">
                            🚏 ${dep}
                        </span>
                        <span title="${TRANSLATIONS.destination[currentLang]}">
                            🎯 ${dest}
                        </span>
                    </div>
                    <div class="badges">
                        <span class="badge"><i class="fa fa-clock"></i> ${route.time}</span>
                        <span class="badge fare"><i class="fa fa-money-bill"></i> ${route.fare}</span>
                    </div>
                </div>
                <button class="expand-btn" aria-label="Show stops" tabindex="0">▼</button>
            </div>
            <div class="expandable-stops" style="display:none;">
                <strong>${TRANSLATIONS.stops[currentLang]}:</strong>
                <ul>
                    ${route.stops.map(s => `<li>${s.name[currentLang]}</li>`).join("")}
                </ul>
            </div>
        `;
        // Expand/collapse stops in place
        div.querySelector('.expand-btn').onclick = (e) => {
            const stopsDiv = div.querySelector('.expandable-stops');
            stopsDiv.style.display = stopsDiv.style.display === "none" ? "block" : "none";
            e.target.textContent = stopsDiv.style.display === "block" ? "▲" : "▼";
            e.stopPropagation();
        };
        // On card click: show details modal and map
        div.onclick = (evt) => {
            if (evt.target.classList.contains('expand-btn')) return;
            showRouteDetails(route);
            mapToRoute(route);
        };
        // Keyboard accessibility
        div.onkeydown = e => {
            if (e.key === "Enter") {
                showRouteDetails(route);
                mapToRoute(route);
            }
        };
        resultsDiv.appendChild(div);
    });
}

// ========== Route Details Modal ==========
function showRouteDetails(route) {
    const modal = document.getElementById("route-details-modal");
    const details = document.getElementById("route-details");
    details.innerHTML = `
        <h3 id="details-title">${route.name[currentLang]}</h3>
        <p><b>${TRANSLATIONS.departure[currentLang]}:</b> ${route.departure[currentLang]}</p>
        <p><b>${TRANSLATIONS.destination[currentLang]}:</b> ${route.destination[currentLang]}</p>
        <p><b>${TRANSLATIONS.estimatedTime[currentLang]}:</b> ${route.time}</p>
        <p><b>${TRANSLATIONS.fare[currentLang]}:</b> ${route.fare}</p>
        <hr>
        <h4>${TRANSLATIONS.stops[currentLang]}:</h4>
        <ul>
            ${route.stops.map(s => `<li>${s.name[currentLang]}</li>`).join("")}
        </ul>
    `;
    modal.classList.add("active");
    modal.focus();
}
document.getElementById("close-modal").onclick = () => {
    document.getElementById("route-details-modal").classList.remove("active");
};
document.getElementById("route-details-modal").onclick = e => {
    if (e.target.id === "route-details-modal") document.getElementById("route-details-modal").classList.remove("active");
};
document.addEventListener("keydown", e => {
    if (e.key === "Escape") document.getElementById("route-details-modal").classList.remove("active");
});

// ========== Leaflet Map ==========
let map, routeLayer, stopMarkers = [];
function initMap() {
    map = L.map('map').setView([9.015, 38.755], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
            '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
}
function mapToRoute(route) {
    if (!map) return;
    // Clear previous
    if (routeLayer) map.removeLayer(routeLayer);
    stopMarkers.forEach(m => map.removeLayer(m));
    stopMarkers = [];
    // Draw route polyline
    routeLayer = L.polyline(route.polyline, { color: route.color || "#1365e2", weight: 6, opacity: 0.85 }).addTo(map);
    // Add stop markers
    route.stops.forEach((stop, idx) => {
        const marker = L.marker([stop.lat, stop.lng], {
            title: stop.name[currentLang]
        }).addTo(map);
        marker.bindPopup(`<b>${stop.name[currentLang]}</b>`);
        stopMarkers.push(marker);
    });
    // Fit map to route
    map.fitBounds(routeLayer.getBounds(), { padding: [30, 30] });
}

// ========== Accessibility & SEO ==========
document.getElementById("search-form").setAttribute("aria-label", TRANSLATIONS.searchBtn[currentLang]);

// ========== On Load ==========
window.onload = () => {
    setLang("en");
    renderFeatured();
    initMap();
    // Show first route by default
    if (ROUTES.length > 0) mapToRoute(ROUTES[0]);
};