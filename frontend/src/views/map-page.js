export function loadMapPage() {
    return `
    <main class="flex h-[calc(100vh-80px)] bg-gradient-to-br from-lavender-light/20 via-white to-softpink-light/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <!-- Sidebar -->
        <aside class="w-full md:w-[420px] bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden">
            <!-- Header -->
            <div class="p-5 border-b border-gray-100 dark:border-gray-700">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender to-pink flex items-center justify-center">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <div>
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white">Find Clinics</h1>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Explore nearby veterinary care</p>
                        </div>
                    </div>
                    <button onclick="window.location.hash='#/'" class="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                
                <!-- Search Input -->
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>
                    <input 
                        id="searchInput" 
                        type="text" 
                        placeholder="Search by neighborhood or service..."
                        class="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-lavender focus:border-transparent dark:text-white placeholder-gray-400 transition-all"
                    >
                </div>
            </div>
            
            <!-- Filter Buttons -->
            <div class="px-5 py-3 border-b border-gray-100 dark:border-gray-700">
                <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" id="filterButtons">
                    <button class="filter-btn active px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all" data-filter="all">
                        All
                    </button>
                    <button class="filter-btn px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all" data-filter="24h">
                        <span class="inline-flex items-center gap-1.5">
                            <span class="w-2 h-2 bg-green rounded-full animate-pulse"></span>
                            24h
                        </span>
                    </button>
                    <button class="filter-btn px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all" data-filter="Urgencias">
                        Emergency
                    </button>
                    <button class="filter-btn px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all" data-filter="Poblado">
                        El Poblado
                    </button>
                    <button class="filter-btn px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all" data-filter="Laureles">
                        Laureles
                    </button>
                </div>
            </div>

            <!-- Clinic List -->
            <div id="clinicList" class="flex-1 overflow-y-auto p-4 space-y-3">
                <!-- Skeleton loaders -->
                ${[1, 2, 3].map(() => `
                    <div class="animate-pulse p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50">
                        <div class="flex items-center gap-3">
                            <div class="w-14 h-14 rounded-xl bg-gray-200 dark:bg-gray-600"></div>
                            <div class="flex-1">
                                <div class="h-4 bg-gray-200 dark:bg-gray-600 rounded-lg w-3/4 mb-2"></div>
                                <div class="h-3 bg-gray-200 dark:bg-gray-600 rounded-lg w-1/2"></div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Footer Stats -->
            <div class="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <div class="flex items-center justify-between text-sm">
                    <span class="text-gray-500 dark:text-gray-400">
                        <span id="clinic-count" class="font-semibold text-gray-800 dark:text-white">0</span> clinics found
                    </span>
                    <button id="locate-me-btn" class="flex items-center gap-2 text-lavender-dark dark:text-lavender hover:underline font-medium">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        </svg>
                        Locate me
                    </button>
                </div>
            </div>
        </aside>
        
        <!-- Map Container -->
        <div id="mapContainer" class="hidden md:block flex-1 bg-gray-100 dark:bg-gray-900 relative">
            <!-- Map loading placeholder -->
            <div id="map-loading" class="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div class="text-center">
                    <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-lavender-light dark:bg-lavender/20 flex items-center justify-center">
                        <svg class="w-8 h-8 text-lavender-dark dark:text-lavender animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                        </svg>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 font-medium">Loading map...</p>
                </div>
            </div>
        </div>
    </main>
    
    <style>
        .filter-btn {
            background-color: rgb(243 244 246);
            color: rgb(107 114 128);
            border: 2px solid transparent;
        }
        
        .dark .filter-btn {
            background-color: rgb(55 65 81);
            color: rgb(209 213 219);
        }
        
        .filter-btn:hover {
            background-color: rgb(229 231 235);
        }
        
        .dark .filter-btn:hover {
            background-color: rgb(75 85 99);
        }
        
        .filter-btn.active {
            background: linear-gradient(135deg, #cdb4db 0%, #a58ab8 100%);
            color: white;
        }
        
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        
        .clinic-card {
            transition: all 0.2s ease;
        }
        
        .clinic-card:hover {
            transform: translateX(4px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        
        .clinic-card.active {
            border-color: #cdb4db;
            background: linear-gradient(135deg, rgba(205, 180, 219, 0.1) 0%, rgba(255, 200, 221, 0.1) 100%);
        }
    </style>
    `;
}

export function loadMapEvents() {
    // Data (simulated database)
    const clinicsDB = [
        { 
            id: 1, 
            name: "Clinica San Juan Pet", 
            location: "El Poblado, Medellin", 
            rating: 4.9, 
            reviews: 128, 
            services: ["Emergency", "Surgery"], 
            verified: true, 
            open24: true, 
            lat: 6.2100, 
            lng: -75.5680,
            phone: '+57 300 123 4567',
            image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=100&h=100&fit=crop'
        },
        { 
            id: 2, 
            name: "VetCare Laureles", 
            location: "Laureles, Medellin", 
            rating: 4.7, 
            reviews: 89, 
            services: ["Consultation", "Vaccines"], 
            verified: true, 
            open24: false, 
            lat: 6.2444, 
            lng: -75.5963,
            phone: '+57 300 234 5678',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=100&h=100&fit=crop'
        },
        { 
            id: 3, 
            name: "Animal House Envigado", 
            location: "Envigado, Medellin", 
            rating: 4.8, 
            reviews: 203, 
            services: ["Emergency", "Orthopedics"], 
            verified: false, 
            open24: true, 
            lat: 6.1695, 
            lng: -75.5924,
            phone: '+57 300 345 6789',
            image: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=100&h=100&fit=crop'
        }
    ];

    const MEDELLIN = { lat: 6.2442, lng: -75.5812 };
    let map = null;
    let markers = [];
    let activeInfoWindow = null;
    let activeCardId = null;

    // Render sidebar cards 
    function renderCards(clinics) {
        const list = document.getElementById('clinicList');
        const countEl = document.getElementById('clinic-count');
        if (!list) return;

        if (countEl) countEl.textContent = clinics.length;

        if (clinics.length === 0) {
            list.innerHTML = `
                <div class="text-center py-12">
                    <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">No clinics found</h3>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">Try adjusting your filters</p>
                </div>
            `;
            return;
        }

        list.innerHTML = clinics.map(clinic => `
            <div class="clinic-card p-4 rounded-2xl border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 cursor-pointer ${activeCardId === clinic.id ? 'active' : ''}"
                 onclick="window.focusVet(${clinic.id})" 
                 id="clinic-card-${clinic.id}">
                <div class="flex items-start gap-4">
                    <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-lavender-light to-softpink-light dark:from-lavender/20 dark:to-softpink/20 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img src="${clinic.image}" alt="${clinic.name}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'text-2xl\\'>🏥</span>';">
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-start justify-between gap-2">
                            <div>
                                <h3 class="font-bold text-gray-800 dark:text-white text-sm truncate flex items-center gap-2">
                                    ${clinic.name}
                                    ${clinic.verified ? `
                                        <svg class="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                        </svg>
                                    ` : ''}
                                </h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">${clinic.location}</p>
                            </div>
                            <div class="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-lg flex-shrink-0">
                                <svg class="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <span class="text-xs font-bold text-yellow-700 dark:text-yellow-400">${clinic.rating}</span>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1.5 mt-2">
                            ${clinic.services.map(s => `
                                <span class="text-[10px] bg-lightblue-light dark:bg-lightblue/20 text-blue-dark dark:text-lightblue px-2 py-0.5 rounded-full font-medium">${s}</span>
                            `).join('')}
                            ${clinic.open24 ? `
                                <span class="text-[10px] bg-green-light dark:bg-green/20 text-green-700 dark:text-green px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                                    <span class="w-1.5 h-1.5 bg-green rounded-full animate-pulse"></span>
                                    24h Open
                                </span>
                            ` : ''}
                        </div>
                        <p class="text-xs text-gray-400 dark:text-gray-500 mt-2">${clinic.reviews} reviews</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Create markers on the map
    function placeMarkers(clinics) {
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
                    fillColor: '#cdb4db',
                    fillOpacity: 1,
                    strokeColor: '#ffffff',
                    strokeWeight: 3
                }
            });

            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="padding:12px;max-width:280px;font-family:'Inter',sans-serif;">
                        <h3 style="font-weight:700;margin:0 0 6px;font-size:14px;color:#333;">${clinic.name}</h3>
                        <p style="color:#666;font-size:12px;margin:0 0 8px;">${clinic.location}</p>
                        <div style="display:flex;gap:8px;margin-bottom:10px;">
                            <span style="background:#f0fdf4;color:#15803d;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:600;">
                                ${clinic.rating} rating
                            </span>
                            ${clinic.open24 ? '<span style="background:#fef3c7;color:#d97706;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:600;">24h</span>' : ''}
                        </div>
                        <a href="tel:${clinic.phone}" style="display:inline-flex;align-items:center;gap:6px;background:#cdb4db;color:white;padding:8px 16px;border-radius:8px;text-decoration:none;font-weight:600;font-size:12px;">
                            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            Call Now
                        </a>
                    </div>`
            });

            marker.addListener('click', () => {
                if (activeInfoWindow) activeInfoWindow.close();
                infoWindow.open(map, marker);
                activeInfoWindow = infoWindow;
                
                // Highlight card
                document.querySelectorAll('.clinic-card').forEach(c => c.classList.remove('active'));
                const card = document.getElementById(`clinic-card-${clinic.id}`);
                if (card) {
                    card.classList.add('active');
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
                activeCardId = clinic.id;
            });

            markers.push({ id: clinic.id, marker, infoWindow });
            bounds.extend(pos);
        });

        if (clinics.length > 0 && map) {
            map.fitBounds(bounds);
        }
    }

    // Focus on a specific vet from card click
    window.focusVet = function (id) {
        const entry = markers.find(m => m.id === id);
        if (!entry || !map) return;

        if (activeInfoWindow) activeInfoWindow.close();
        map.panTo(entry.marker.getPosition());
        map.setZoom(16);
        entry.infoWindow.open(map, entry.marker);
        activeInfoWindow = entry.infoWindow;
        
        // Highlight card
        document.querySelectorAll('.clinic-card').forEach(c => c.classList.remove('active'));
        const card = document.getElementById(`clinic-card-${id}`);
        if (card) card.classList.add('active');
        activeCardId = id;
    };

    // Google Maps callback
    window.initMap = function () {
        const mapDiv = document.getElementById('mapContainer');
        const loadingDiv = document.getElementById('map-loading');
        if (!mapDiv) return;

        map = new google.maps.Map(mapDiv, {
            zoom: 13,
            center: MEDELLIN,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
            styles: [
                { featureType: 'poi', stylers: [{ visibility: 'simplified' }] },
                { featureType: 'transit', stylers: [{ visibility: 'off' }] }
            ]
        });

        // Hide loading
        if (loadingDiv) loadingDiv.style.display = 'none';

        placeMarkers(clinicsDB);
        renderCards(clinicsDB);
    };

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            let filtered = clinicsDB;
            
            if (filter !== 'all') {
                if (filter === '24h') {
                    filtered = clinicsDB.filter(c => c.open24);
                } else if (filter === 'Urgencias') {
                    filtered = clinicsDB.filter(c => c.services.some(s => s.toLowerCase().includes('emergency') || s.toLowerCase().includes('urgencia')));
                } else {
                    filtered = clinicsDB.filter(c => c.location.toLowerCase().includes(filter.toLowerCase()));
                }
            }
            
            renderCards(filtered);
            if (map) placeMarkers(filtered);
        });
    });

    // Locate me button
    const locateBtn = document.getElementById('locate-me-btn');
    if (locateBtn) {
        locateBtn.addEventListener('click', () => {
            if (navigator.geolocation) {
                locateBtn.innerHTML = `
                    <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                    Locating...
                `;
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        if (map) {
                            map.panTo(pos);
                            map.setZoom(15);
                            new google.maps.Marker({
                                position: pos,
                                map,
                                icon: {
                                    path: google.maps.SymbolPath.CIRCLE,
                                    scale: 8,
                                    fillColor: '#3B82F6',
                                    fillOpacity: 1,
                                    strokeColor: '#ffffff',
                                    strokeWeight: 3
                                },
                                title: 'Your location'
                            });
                        }
                        locateBtn.innerHTML = `
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            </svg>
                            Locate me
                        `;
                    },
                    () => {
                        alert('Could not get your location');
                        locateBtn.innerHTML = `
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            </svg>
                            Locate me
                        `;
                    }
                );
            }
        });
    }

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = clinicsDB.filter(c => 
                c.name.toLowerCase().includes(query) ||
                c.location.toLowerCase().includes(query) ||
                c.services.some(s => s.toLowerCase().includes(query))
            );
            renderCards(filtered);
            if (map) placeMarkers(filtered);
        });
    }

    // Dynamic script loading for Google Maps
    if (!document.getElementById('google-maps-script')) {
        const script = document.createElement('script');
        script.id = 'google-maps-script';
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDoaEx8ykVQ4oyLJkP2yFzO2cmp8vT7Dk0&libraries=places&v=weekly&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    } else if (window.google && window.google.maps) {
        // If script was already loaded from previous navigation
        window.initMap();
    }
}
