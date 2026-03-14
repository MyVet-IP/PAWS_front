export function loadMapPage() {
    return `
    <div class="min-h-screen bg-surface-soft dark:bg-dark-bg">
      <!-- Header -->
      <header class="bg-white dark:bg-dark-surface shadow-sm border-b border-gray-100 dark:border-dark-muted px-4 sm:px-6 lg:px-8 py-4">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <span class="inline-flex items-center gap-2 bg-paws-blue/30 dark:bg-paws-blue/20 text-text-highlight dark:text-paws-blue px-3 py-1 rounded-full text-xs font-semibold font-poppins uppercase tracking-wide mb-2">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
              Find Nearby
            </span>
            <h1 class="text-2xl font-bold text-text-primary dark:text-white font-poppins">Clinic Map</h1>
            <p class="text-text-soft dark:text-gray-300 text-sm font-roboto mt-1">Find veterinary clinics near you in real time</p>
          </div>
          <button onclick="window.location.hash='#/'" class="text-text-highlight dark:text-paws-green hover:opacity-75 transition font-medium font-poppins text-sm">
            ← Back to home
          </button>
        </div>
      </header>

      <main class="flex h-[calc(100vh-120px)]">
        <!-- Sidebar -->
        <aside class="w-full md:w-96 bg-white dark:bg-dark-surface border-r border-gray-100 dark:border-dark-muted p-6 overflow-y-auto map-sidebar">
          
          <!-- Search Input -->
          <div class="relative mb-4">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input 
              id="searchInput" 
              type="text" 
              placeholder="Search by neighborhood or service..."
              class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-dark-muted bg-surface-soft dark:bg-dark-bg text-text-primary dark:text-white placeholder-gray-400 outline-none focus:border-text-highlight dark:focus:border-paws-green transition map-search-input font-roboto"
            >
          </div>
          
          <!-- Filter Buttons -->
          <div class="flex flex-wrap gap-2 mb-6" id="filterButtons">
            <button class="px-4 py-2 rounded-full bg-paws-pink text-text-primary font-medium text-sm transition map-filter-btn active font-poppins" data-filter="all">All</button>
            <button class="px-4 py-2 rounded-full border border-gray-200 dark:border-dark-muted text-text-soft dark:text-gray-300 hover:border-paws-purple hover:bg-paws-purple/10 transition map-filter-btn font-poppins text-sm" data-filter="24h">24h Open</button>
            <button class="px-4 py-2 rounded-full border border-gray-200 dark:border-dark-muted text-text-soft dark:text-gray-300 hover:border-paws-pink hover:bg-paws-pink/10 transition map-filter-btn font-poppins text-sm" data-filter="Emergencies">Emergency</button>
            <button class="px-4 py-2 rounded-full border border-gray-200 dark:border-dark-muted text-text-soft dark:text-gray-300 hover:border-paws-green hover:bg-paws-green/10 transition map-filter-btn font-poppins text-sm" data-filter="Poblado">El Poblado</button>
          </div>

          <!-- Clinic List -->
          <div class="space-y-3" id="clinicList">
            <!-- Clinics will be rendered here dynamically -->
          </div>

          <!-- Loading State -->
          <div id="mapLoading" class="text-center py-8">
            <div class="w-8 h-8 border-3 border-paws-purple border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p class="text-text-soft dark:text-gray-400 font-roboto text-sm">Loading clinics...</p>
          </div>

        </aside>
        
        <!-- Map Container -->
        <div id="mapContainer" class="hidden md:block flex-1 bg-gray-100 dark:bg-dark-muted relative">
          <!-- Map will be rendered here -->
          <div id="mapPlaceholder" class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <div class="w-16 h-16 bg-paws-blue/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <p class="text-text-soft dark:text-gray-400 font-roboto">Loading map...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    `;
}

export function loadMapEvents() {
    // Data (simulating database for now)
    const clinicsDB = [
        { id: 1, name: "San Juan Pet Clinic", location: "El Poblado, Medellin", rating: 4.9, reviews: 128, services: ["Emergency", "Surgery"], verified: true, open24: true, lat: 6.2100, lng: -75.5680 },
        { id: 2, name: "VetCare Laureles", location: "Laureles, Medellin", rating: 4.7, reviews: 89, services: ["Consultation", "Vaccination"], verified: true, open24: false, lat: 6.2444, lng: -75.5963 },
        { id: 3, name: "Animal House Envigado", location: "Envigado, Medellin", rating: 4.8, reviews: 203, services: ["Emergency", "Orthopedics"], verified: false, open24: true, lat: 6.1695, lng: -75.5924 },
        { id: 4, name: "Pet Paradise Clinic", location: "Bello, Medellin", rating: 4.6, reviews: 156, services: ["Grooming", "Dental"], verified: true, open24: false, lat: 6.3376, lng: -75.5658 },
        { id: 5, name: "Happy Paws Vet", location: "Sabaneta, Antioquia", rating: 4.9, reviews: 312, services: ["Emergency", "Surgery", "Vaccination"], verified: true, open24: true, lat: 6.1516, lng: -75.6167 }
    ];

    const MEDELLIN = { lat: 6.2442, lng: -75.5812 };
    let map = null;
    let markers = [];
    let activeInfoWindow = null;
    let activeFilter = 'all';

    // Hide loading when done
    function hideLoading() {
        const loading = document.getElementById('mapLoading');
        const placeholder = document.getElementById('mapPlaceholder');
        if (loading) loading.style.display = 'none';
        if (placeholder) placeholder.style.display = 'none';
    }

    // Render sidebar cards 
    function renderCards(clinics) {
        const list = document.getElementById('clinicList');
        if (!list) return;

        if (clinics.length === 0) {
            list.innerHTML = `
                <div class="text-center py-8">
                    <div class="w-12 h-12 bg-paws-yellow/50 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span class="text-2xl">🔍</span>
                    </div>
                    <p class="text-text-soft dark:text-gray-400 font-roboto text-sm">No clinics found with current filters</p>
                </div>
            `;
            return;
        }

        list.innerHTML = clinics.map(clinic => `
            <div class="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 dark:border-dark-muted bg-white dark:bg-dark-surface shadow-card cursor-pointer hover:shadow-soft transition map-clinic-card"
                 onclick="window.focusVet(${clinic.id})">
                <div class="w-14 h-14 rounded-full bg-paws-purple/30 flex items-center justify-center text-xl shrink-0">🐾</div>
                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-start gap-2 mb-1">
                        <h3 class="font-semibold text-text-primary dark:text-white truncate font-poppins text-sm">${clinic.name}</h3>
                        <span class="text-xs bg-paws-yellow px-2 py-1 rounded-full text-text-primary font-medium shrink-0 font-poppins flex items-center gap-1">
                            <span class="text-yellow-500">★</span> ${clinic.rating}
                        </span>
                    </div>
                    <p class="text-xs text-text-soft dark:text-gray-400 font-roboto mb-2 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        </svg>
                        ${clinic.location}
                    </p>
                    <div class="flex gap-2 flex-wrap">
                        ${clinic.services.map(s => `<span class="text-xs bg-paws-blue/30 dark:bg-paws-blue/20 px-2 py-0.5 rounded-full text-text-highlight dark:text-paws-blue font-roboto">${s}</span>`).join('')}
                        ${clinic.open24 ? '<span class="text-xs bg-paws-green px-2 py-0.5 rounded-full text-green-800 font-medium font-roboto">24h</span>' : ''}
                        ${clinic.verified ? '<span class="text-xs bg-paws-pink px-2 py-0.5 rounded-full text-pink-700 font-roboto">Verified</span>' : ''}
                    </div>
                </div>
            </div>
        `).join('');

        hideLoading();
    }

    // Filter clinics
    function filterClinics(filter) {
        let filtered = clinicsDB;
        
        if (filter === '24h') {
            filtered = clinicsDB.filter(c => c.open24);
        } else if (filter === 'Emergencies') {
            filtered = clinicsDB.filter(c => c.services.includes('Emergency'));
        } else if (filter === 'Poblado') {
            filtered = clinicsDB.filter(c => c.location.includes('Poblado'));
        }
        
        renderCards(filtered);
        placeMarkers(filtered);
    }

    // Setup filter button events
    function setupFilters() {
        const buttons = document.querySelectorAll('.map-filter-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active', 'bg-paws-pink'));
                btn.classList.add('active', 'bg-paws-pink');
                activeFilter = btn.dataset.filter;
                filterClinics(activeFilter);
            });
        });
    }

    // Create markers on the map
    function placeMarkers(clinics) {
        if (!map) return;
        
        markers.forEach(({ marker }) => marker.setMap(null));
        markers = [];
        const bounds = new google.maps.LatLngBounds();

        clinics.forEach(clinic => {
            const pos = { lat: clinic.lat, lng: clinic.lng };
            const marker = new google.maps.Marker({
                position: pos,
                map,
                title: clinic.name,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 12,
                    fillColor: clinic.open24 ? '#B9FBC0' : '#F1C0E8',
                    fillOpacity: 1,
                    strokeColor: '#ffffff',
                    strokeWeight: 3
                }
            });

            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="padding:12px; max-width:260px; font-family:'Roboto',sans-serif;">
                        <h3 style="font-weight:700; margin:0 0 6px; font-family:'Poppins',sans-serif; color:#333;">${clinic.name}</h3>
                        <p style="color:#6b7280; font-size:13px; margin:0 0 8px; display:flex; align-items:center; gap:4px;">
                            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                            ${clinic.location}
                        </p>
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
                            <span style="color:#f59e0b;">★</span>
                            <span style="font-weight:600; color:#333;">${clinic.rating}</span>
                            <span style="color:#9ca3af; font-size:12px;">(${clinic.reviews} reviews)</span>
                        </div>
                        <a href="#/clinicas" style="color:#6A4C93; font-weight:600; text-decoration:none; font-size:14px;">View details →</a>
                    </div>`
            });

            marker.addListener('click', () => {
                if (activeInfoWindow) activeInfoWindow.close();
                infoWindow.open(map, marker);
                activeInfoWindow = infoWindow;
            });

            markers.push({ id: clinic.id, marker, infoWindow });
            bounds.extend(pos);
        });

        if (clinics.length > 0) {
            map.fitBounds(bounds);
        }
    }

    // Global function for card click
    window.focusVet = function (id) {
        const entry = markers.find(m => m.id === id);
        if (!entry || !map) return;

        if (activeInfoWindow) activeInfoWindow.close();
        map.panTo(entry.marker.getPosition());
        map.setZoom(16);
        entry.infoWindow.open(map, entry.marker);
        activeInfoWindow = entry.infoWindow;

        // Highlight active card
        document.querySelectorAll('.map-clinic-card').forEach(card => card.classList.remove('active'));
        event.currentTarget?.classList.add('active');
    };

    // Google Maps callback
    window.initMap = function () {
        const mapDiv = document.getElementById('mapContainer');
        if (!mapDiv) return;

        map = new google.maps.Map(mapDiv, {
            zoom: 13,
            center: MEDELLIN,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
            styles: [
                { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }
            ]
        });

        placeMarkers(clinicsDB);
        renderCards(clinicsDB);
        setupFilters();
    };

    // Dynamic script injection for Google Maps
    if (!document.getElementById('google-maps-script')) {
        const script = document.createElement('script');
        script.id = 'google-maps-script';
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDoaEx8ykVQ4oyLJkP2yFzO2cmp8vT7Dk0&libraries=places&v=weekly&callback=initMap`;
        script.async = true;
        document.head.appendChild(script);
    } else if (window.google && window.google.maps) {
        window.initMap();
    }
}