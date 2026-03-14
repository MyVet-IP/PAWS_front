export function clinicsPage() {
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const searchLocation = urlParams.get('location') || '';

  return `
    <div class="min-h-screen bg-surface-soft">
      <!-- Header -->
      <header class="bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-3xl font-bold text-text-primary font-poppins">Veterinary Clinics</h1>
              <p class="text-text-soft mt-2 font-roboto">Find the best care for your pet</p>
            </div>
            <a href="#/" class="flex items-center gap-2 text-text-highlight hover:text-text-highlight/80 font-medium font-poppins transition group">
              <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Back to home
            </a>
          </div>
        </div>
      </header>

      <!-- Search Bar -->
      <section class="bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex gap-4 items-center">
            <div class="flex-1 relative">
              <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <input 
                type="text" 
                id="clinic-search" 
                value="${searchLocation}"
                placeholder="Search by city or zip code..." 
                class="input pl-12"
              >
            </div>
            <button onclick="searchClinicsHere()" class="btn btn-primary px-8">
              Search
            </button>
          </div>
        </div>
      </section>

      <!-- Filters -->
      <section class="bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex gap-3 flex-wrap">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="emergency">24/7 Emergency</button>
            <button class="filter-btn" data-filter="surgery">Surgery</button>
            <button class="filter-btn" data-filter="cardiology">Cardiology</button>
            <button class="filter-btn" data-filter="dental">Dental</button>
            <button class="filter-btn" data-filter="lab">Laboratory</button>
          </div>
        </div>
      </section>

      <!-- Results -->
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="mb-6 flex items-center justify-between">
          <p class="text-text-soft font-roboto">
            <span id="results-count" class="font-semibold text-text-primary">0</span> clinics found
            ${searchLocation ? ` in <strong class="text-text-highlight">${searchLocation}</strong>` : ''}
          </p>
          <select id="sort-select" class="input w-auto py-2 px-4">
            <option value="rating">Sort by rating</option>
            <option value="distance">Sort by distance</option>
            <option value="name">Sort by name</option>
          </select>
        </div>

        <div id="clinics-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="col-span-3 text-center py-12 text-text-muted font-roboto">Loading clinics...</div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button onclick="loadMoreClinics()" class="btn btn-secondary px-8">
            Load more clinics
          </button>
        </div>
      </main>
    </div>

    <style>
      .filter-btn {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--text-soft);
        background-color: var(--bg-muted);
        border-radius: 9999px;
        border: none;
        cursor: pointer;
        transition: all 0.15s ease;
        font-family: 'Poppins', sans-serif;
      }
      .filter-btn:hover {
        background-color: var(--color-purple);
        color: var(--text-primary);
      }
      .filter-btn.active {
        background-color: var(--color-purple);
        color: var(--text-primary);
      }
    </style>
  `;
}

function renderClinicCard(clinic) {
  const whatsappIcon = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

  return `
    <div class="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-medium transition-shadow duration-300 group">
      <div class="relative h-48">
        <img src="${clinic.imagen || './frontend/assets/images/lllll.jpg'}" alt="${clinic.nombre}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        <div class="absolute top-4 left-4 flex gap-2">
          ${clinic.estado === 'Activa' ? '<span class="bg-paws-green text-text-primary px-3 py-1 rounded-full text-xs font-semibold font-poppins">Open now</span>' : ''}
        </div>
        <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="text-sm font-semibold text-text-primary">${clinic.rating || '4.9'}</span>
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-text-primary font-poppins mb-2">${clinic.nombre}</h3>
        <div class="flex items-center gap-2 text-text-soft text-sm mb-4 font-roboto">
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span>${clinic.direccion}</span>
        </div>
        <div class="flex gap-3 mb-3">
          ${clinic.telefono ? `<a href="tel:${clinic.telefono}" class="flex-1 btn btn-primary py-2 text-sm">Call</a>` : ''}
          <button onclick="viewClinicDetails(${clinic.id_veterinaria})" class="flex-1 btn btn-secondary py-2 text-sm">
            View details
          </button>
        </div>
        <button onclick="window.open('https://api.whatsapp.com/send/?phone=%2B573193052287&text=Hola%20quiero%20informacion%20sobre%20${encodeURIComponent(clinic.nombre)}&type=phone_number&app_absent=0', '_blank')"
          class="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-3xl transition-colors text-sm font-medium font-poppins">
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

  // Add search functionality
  const searchInput = document.getElementById('clinic-search');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        searchClinicsHere();
      }
    });
  }

  // Add filter functionality
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Filter logic would go here
    });
  });

  try {
    const res = await fetch('/api/clinics');
    if (!res.ok) throw new Error('Error loading clinics');
    const clinics = await res.json();

    if (clinics.length === 0) {
      grid.innerHTML = `
        <div class="col-span-3 text-center py-16">
          <div class="w-20 h-20 mx-auto mb-4 rounded-2xl bg-paws-purple/20 flex items-center justify-center">
            <svg class="w-10 h-10 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-text-primary font-poppins mb-2">No clinics found</h3>
          <p class="text-text-soft font-roboto">Try adjusting your search or filters</p>
        </div>
      `;
      return;
    }

    if (countEl) countEl.textContent = clinics.length;
    grid.innerHTML = clinics.map(renderClinicCard).join('');
  } catch (err) {
    grid.innerHTML = `
      <div class="col-span-3 text-center py-16">
        <div class="w-20 h-20 mx-auto mb-4 rounded-2xl bg-red-100 flex items-center justify-center">
          <svg class="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-text-primary font-poppins mb-2">Error loading clinics</h3>
        <p class="text-text-soft font-roboto">${err.message}</p>
      </div>
    `;
  }
}

// Global functions for onclick handlers
window.searchClinicsHere = function() {
  const location = document.getElementById('clinic-search').value;
  if (location.trim()) {
    window.location.hash = `#/clinics?location=${encodeURIComponent(location)}`;
  } else {
    window.location.hash = '#/clinics';
  }
};

window.loadMoreClinics = function() {
  // Implement pagination
};

window.viewClinicDetails = function(id) {
  window.location.hash = `#/clinic/${id}`;
};
