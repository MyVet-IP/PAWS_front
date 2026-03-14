export function clinicsPage() {
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const searchLocation = urlParams.get('location') || '';

  const filters = [
    { id: 'all', label: 'All', icon: 'grid' },
    { id: 'emergency', label: '24/7 Emergency', icon: 'alert' },
    { id: 'surgery', label: 'Surgery', icon: 'heart' },
    { id: 'cardiology', label: 'Cardiology', icon: 'pulse' },
    { id: 'dental', label: 'Dental', icon: 'smile' },
    { id: 'lab', label: 'Laboratory', icon: 'flask' },
  ];

  const getFilterIcon = (icon) => {
    const icons = {
      grid: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
      </svg>`,
      alert: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
      </svg>`,
      heart: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>`,
      pulse: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>`,
      smile: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`,
      flask: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>`,
    };
    return icons[icon] || icons.grid;
  };

  return `
    <div class="min-h-screen bg-gradient-to-br from-lavender-light/20 via-white to-softpink-light/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      
      <!-- Header -->
      <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-sm border-b border-gray-100 dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="animate-fade-in">
              <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender to-lavender-dark flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                Veterinary Clinics
              </h1>
              <p class="text-gray-600 dark:text-gray-400 mt-1 md:mt-2">Find the best care for your pet</p>
            </div>
            <button onclick="window.location.hash='#/'" class="hidden md:flex items-center gap-2 text-lavender-dark dark:text-lavender hover:text-lavender font-medium transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Back to home
            </button>
          </div>
        </div>
      </header>

      <!-- Search Bar -->
      <section class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 animate-fade-in-up" style="animation-delay: 0.1s">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            <div class="flex-1 relative group">
              <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-lavender transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <input 
                type="text" 
                id="clinic-search" 
                value="${searchLocation}"
                placeholder="Search by city, neighborhood or zip code..." 
                class="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-lavender focus:border-transparent dark:text-white placeholder-gray-400 transition-all"
              >
            </div>
            <button onclick="searchClinicsHere()" class="btn-primary py-3.5 px-6 flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Filters -->
      <section class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 animate-fade-in-up" style="animation-delay: 0.2s">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
            ${filters.map((filter, i) => `
              <button class="filter-btn ${filter.id === 'all' ? 'active' : ''} flex items-center gap-2 whitespace-nowrap" data-filter="${filter.id}" style="animation-delay: ${0.3 + i * 0.05}s">
                ${getFilterIcon(filter.icon)}
                ${filter.label}
              </button>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Results -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div class="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in-up" style="animation-delay: 0.3s">
          <p class="text-gray-600 dark:text-gray-400">
            <span id="results-count" class="font-semibold text-gray-900 dark:text-white">0</span> clinics found
            ${searchLocation ? ` in <strong class="text-lavender-dark dark:text-lavender">${searchLocation}</strong>` : ''}
          </p>
          <select id="sort-select" class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-lavender transition-all cursor-pointer">
            <option value="rating">Sort by rating</option>
            <option value="distance">Sort by distance</option>
            <option value="name">Sort by name</option>
          </select>
        </div>

        <div id="clinics-grid" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <!-- Skeleton Loading -->
          ${[1, 2, 3, 4, 5, 6].map(i => `
            <div class="card overflow-hidden animate-pulse" style="animation-delay: ${0.4 + i * 0.1}s">
              <div class="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div class="p-6 space-y-4">
                <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4"></div>
                <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-full"></div>
                <div class="flex gap-2">
                  <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex-1"></div>
                  <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex-1"></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-8 md:mt-12 animate-fade-in-up" style="animation-delay: 0.8s">
          <button onclick="loadMoreClinics()" class="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            Load more clinics
          </button>
        </div>
      </main>

      <!-- Mobile Back Button -->
      <div class="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <button onclick="window.location.hash='#/'" class="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full shadow-card hover:shadow-card-hover transition-all font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Home
        </button>
      </div>
    </div>

    <style>
      .filter-btn {
        padding: 0.625rem 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: rgb(107 114 128);
        background-color: rgb(243 244 246);
        border-radius: 0.75rem;
        transition: all 0.2s;
        cursor: pointer;
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
        border-color: transparent;
      }
      
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    </style>
  `;
}

function renderClinicCard(clinic, index = 0) {
  const whatsappIcon = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  return `
    <div class="card overflow-hidden hover-lift group animate-fade-in-up" style="animation-delay: ${0.1 + index * 0.1}s">
      <div class="relative h-48 overflow-hidden">
        <img 
          src="${clinic.imagen || 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=400&fit=crop'}" 
          alt="${clinic.nombre}" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div class="absolute top-4 left-4 flex gap-2">
          ${clinic.estado === 'Activa' ? `
            <span class="bg-green/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              Open
            </span>
          ` : ''}
          ${clinic.servicios_emergencia ? `
            <span class="bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
              24/7
            </span>
          ` : ''}
        </div>
        <div class="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg">
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="text-sm font-bold text-gray-800 dark:text-white">${clinic.rating || '4.9'}</span>
        </div>
      </div>
      
      <div class="p-5">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-lavender-dark dark:group-hover:text-lavender transition-colors">
          ${clinic.nombre}
        </h3>
        <div class="flex items-start gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
          <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span class="line-clamp-2">${clinic.direccion}</span>
        </div>
        
        <div class="flex gap-2 mb-3">
          ${clinic.telefono ? `
            <a href="tel:${clinic.telefono}" class="flex-1 btn-primary py-2.5 text-sm flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call
            </a>
          ` : ''}
          <button onclick="viewClinicDetails(${clinic.id_veterinaria})" class="flex-1 btn-secondary py-2.5 text-sm">
            View Details
          </button>
        </div>
        
        <button onclick="window.open('https://api.whatsapp.com/send/?phone=%2B573193052287&text=Hola%20quiero%20informacion%20sobre%20${encodeURIComponent(clinic.nombre)}&type=phone_number&app_absent=0', '_blank')"
          class="flex items-center justify-center gap-2 w-full bg-green hover:bg-green-dark text-white py-2.5 px-4 rounded-xl transition-all text-sm font-medium hover:shadow-lg">
          ${whatsappIcon}
          Send WhatsApp
        </button>
      </div>
    </div>
  `;
}

export async function initClinicsView() {
  const grid = document.getElementById('clinics-grid');
  const countEl = document.getElementById('results-count');
  if (!grid) return;

  try {
    const res = await fetch('/api/clinics');
    if (!res.ok) throw new Error('Error loading clinics');
    const clinics = await res.json();

    if (clinics.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-16">
          <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">No clinics found</h3>
          <p class="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
        </div>
      `;
      return;
    }

    if (countEl) countEl.textContent = clinics.length;
    grid.innerHTML = clinics.map((clinic, i) => renderClinicCard(clinic, i)).join('');
  } catch (err) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-16">
        <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
          <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">Error loading clinics</h3>
        <p class="text-gray-500 dark:text-gray-400 mb-4">${err.message}</p>
        <button onclick="initClinicsView()" class="btn-primary">Try Again</button>
      </div>
    `;
  }
}

export function setupClinicsEvents() {
  // Filter buttons
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('filter-btn') || e.target.closest('.filter-btn')) {
      const btn = e.target.classList.contains('filter-btn') ? e.target : e.target.closest('.filter-btn');
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterClinics(btn.dataset.filter);
    }
  });

  // Search with Enter
  const searchInput = document.getElementById('clinic-search');
  if (searchInput) {
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        searchClinicsHere();
      }
    });
  }
}

// Global functions
window.searchClinicsHere = function () {
  const location = document.getElementById('clinic-search')?.value;
  if (location?.trim()) {
    window.location.hash = `#/clinicas?location=${encodeURIComponent(location)}`;
  } else {
    window.location.hash = '#/clinicas';
  }
};

window.filterClinics = function (filter) {
  console.log('Filtering by:', filter);
  // Implement filtering logic
};

window.loadMoreClinics = function () {
  console.log('Loading more clinics...');
  // Implement load more logic
};

window.viewClinicDetails = function (id) {
  console.log('Viewing clinic:', id);
  // Navigate to clinic details
};
