export function dashboardEvents() {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  
  // Update username
  const nameEl = document.getElementById('dash-username');
  if (nameEl && user) {
    nameEl.textContent = `Welcome, ${user.nombre?.split(' ')[0] || 'User'}!`;
  }

  // Logout button
  const logoutBtn = document.getElementById('btn-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('user');
      window.location.hash = '#/';
    });
  }

  // Add pet modal
  const addPetBtn = document.getElementById('btn-add-pet');
  const modalClose = document.getElementById('modal-close');
  const modal = document.getElementById('modal-add-pet');

  if (addPetBtn && modal) {
    addPetBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  }

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  // Close modal on backdrop click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }

  // Add pet form
  const addForm = document.getElementById('add-pet-form');
  if (addForm) {
    addForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem('user'));
      const body = {
        nombre: document.getElementById('pet-nombre').value,
        especie: document.getElementById('pet-especie').value,
        raza: document.getElementById('pet-raza').value,
        edad: parseInt(document.getElementById('pet-edad').value),
        id_cliente: user?.id_cliente
      };

      try {
        const res = await fetch('/api/mascotas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        if (res.ok) {
          modal.classList.add('hidden');
          addForm.reset();
          loadPets();
        }
      } catch (error) {
        console.error('Error adding pet:', error);
      }
    });
  }

  // Load pets
  loadPets();
}

async function loadPets() {
  const grid = document.getElementById('pets-grid');
  const countEl = document.getElementById('pets-count');
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  
  if (!grid || !user) return;

  try {
    const res = await fetch(`/api/users/${user.id_cliente}/dashboard`);
    if (!res.ok) throw new Error('Failed to load pets');
    
    const data = await res.json();
    const pets = data.mascotas || [];

    if (countEl) countEl.textContent = pets.length;

    if (pets.length === 0) {
      grid.innerHTML = `
        <div onclick="document.getElementById('modal-add-pet').classList.remove('hidden')"
             class="w-64 border-2 border-dashed border-paws-purple/50 rounded-3xl flex flex-col items-center justify-center py-16 text-text-muted cursor-pointer hover:border-paws-purple hover:bg-paws-purple/5 transition group">
          <div class="w-14 h-14 rounded-2xl bg-paws-purple/10 flex items-center justify-center mb-4 group-hover:bg-paws-purple/20 transition">
            <svg class="w-7 h-7 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </div>
          <p class="font-poppins font-medium text-text-soft">Add your first pet</p>
        </div>
      `;
      return;
    }

    const cards = pets.map(p => `
      <div class="bg-white rounded-3xl shadow-card w-64 p-6 hover:shadow-medium hover:-translate-y-1 transition group">
        <div class="w-full h-40 bg-gradient-to-br ${p.especie === 'Cat' ? 'from-paws-purple/30 to-paws-pink/30' : 'from-paws-blue/30 to-paws-green/30'} rounded-2xl mb-4 flex items-center justify-center">
          <svg class="w-16 h-16 text-text-highlight opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            ${p.especie === 'Cat' ? 
              '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>' : 
              '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>'
            }
          </svg>
        </div>
        <h3 class="font-bold text-lg text-text-primary font-poppins">${p.nombre}</h3>
        <p class="text-text-soft text-sm mb-4 font-roboto">${p.raza || p.especie} - ${p.edad} ${p.edad === 1 ? 'year' : 'years'}</p>
        <button class="btn btn-accent w-full py-2 text-sm">View profile</button>
      </div>
    `).join('');

    grid.innerHTML = cards + `
      <div onclick="document.getElementById('modal-add-pet').classList.remove('hidden')"
           class="w-64 border-2 border-dashed border-paws-purple/50 rounded-3xl flex flex-col items-center justify-center py-16 text-text-muted cursor-pointer hover:border-paws-purple hover:bg-paws-purple/5 transition group">
        <div class="w-14 h-14 rounded-2xl bg-paws-purple/10 flex items-center justify-center mb-4 group-hover:bg-paws-purple/20 transition">
          <svg class="w-7 h-7 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
        </div>
        <p class="font-poppins font-medium text-text-soft">Add pet</p>
      </div>
    `;
  } catch (error) {
    grid.innerHTML = `
      <p class="text-text-muted font-roboto">Unable to load pets. Please try again.</p>
    `;
  }
}

export function dashboardPage() {
  return `
  <section class="flex min-h-screen bg-surface-soft">

    <!-- SIDEBAR -->
    <aside class="w-72 bg-gradient-to-b from-paws-pink to-paws-purple px-6 py-8 flex flex-col justify-between">

      <div>
        <div class="flex items-center gap-3 mb-10">
          <div class="w-11 h-11 rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center">
            <svg class="w-6 h-6 text-text-highlight" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h2 class="text-xl font-bold text-text-primary font-poppins">PAWS</h2>
        </div>

        <nav class="flex flex-col gap-2 text-text-primary/90">

          <a href="#/dashboard" class="flex items-center gap-3 bg-white text-text-primary p-4 rounded-2xl font-medium font-poppins shadow-soft">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Dashboard
          </a>

          <a href="#/profile" class="flex items-center gap-3 hover:bg-white/20 p-4 rounded-2xl transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            My Profile
          </a>

          <a href="#/my-pets" class="flex items-center gap-3 hover:bg-white/20 p-4 rounded-2xl transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            My Pets
          </a>

          <a href="#/appointments" class="flex items-center gap-3 hover:bg-white/20 p-4 rounded-2xl transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Appointments
          </a>

          <a href="#/medical-records" class="flex items-center gap-3 hover:bg-white/20 p-4 rounded-2xl transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Medical History
          </a>

        </nav>
      </div>

      <!-- Premium Card -->
      <div class="bg-white/30 backdrop-blur-sm rounded-2xl p-5 text-text-primary">
        <p class="font-semibold mb-1 font-poppins">Premium Plan</p>
        <p class="text-sm text-text-soft mb-4 font-roboto">Unlimited consultations in Medellin</p>
        <button class="btn btn-primary w-full py-2 text-sm">
          Upgrade
        </button>
      </div>

    </aside>


    <!-- MAIN CONTENT -->
    <main class="flex-1 p-10 overflow-y-auto">

      <!-- HEADER -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 id="dash-username" class="text-3xl font-bold text-text-primary font-poppins">Welcome!</h1>
          <p class="text-text-soft font-roboto flex items-center gap-2 mt-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Medellin, Colombia
          </p>
        </div>
        <div class="flex items-center gap-4">
          <button id="btn-add-pet" class="btn btn-primary px-6">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            Add pet
          </button>
          <button id="btn-logout" class="btn btn-secondary px-4">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- STATS -->
      <div class="grid grid-cols-3 gap-6 mb-10">

        <div class="bg-white rounded-3xl p-6 shadow-card flex items-center gap-4">
          <div class="w-14 h-14 bg-paws-blue/30 rounded-2xl flex items-center justify-center">
            <svg class="w-7 h-7 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <div>
            <p class="text-text-soft text-sm font-roboto">Pets</p>
            <h3 id="pets-count" class="text-2xl font-bold text-text-primary font-poppins">0</h3>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 shadow-card flex items-center gap-4">
          <div class="w-14 h-14 bg-paws-pink/30 rounded-2xl flex items-center justify-center">
            <svg class="w-7 h-7 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <div>
            <p class="text-text-soft text-sm font-roboto">Next Appointment</p>
            <h3 class="text-2xl font-bold text-text-primary font-poppins">--</h3>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 shadow-card flex items-center gap-4">
          <div class="w-14 h-14 bg-paws-purple/30 rounded-2xl flex items-center justify-center">
            <svg class="w-7 h-7 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
          </div>
          <div>
            <p class="text-text-soft text-sm font-roboto">Active Rx</p>
            <h3 class="text-2xl font-bold text-text-primary font-poppins">0</h3>
          </div>
        </div>

      </div>

      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold text-text-primary font-poppins">Your pets</h2>
        <a href="#/my-pets" class="text-text-highlight hover:underline text-sm font-medium font-poppins flex items-center gap-1">
          View all
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
      
      <div id="pets-grid" class="flex gap-6 flex-wrap">
        <div class="text-text-muted font-roboto flex items-center gap-2">
          <svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          Loading...
        </div>
      </div>

    </main>
  </section>

  <!-- ADD PET MODAL -->
  <div id="modal-add-pet" class="hidden fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white rounded-3xl p-8 w-full max-w-md shadow-medium animate-scale-in">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold text-text-primary font-poppins">Add new pet</h2>
        <button id="modal-close" class="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-text-muted hover:text-text-primary transition">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <form id="add-pet-form" class="space-y-5">
        <div>
          <label for="pet-nombre" class="block text-sm font-medium text-text-primary mb-2">Name</label>
          <input id="pet-nombre" type="text" required placeholder="e.g. Bruno" class="input">
        </div>
        <div>
          <label for="pet-especie" class="block text-sm font-medium text-text-primary mb-2">Species</label>
          <select id="pet-especie" class="input">
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label for="pet-raza" class="block text-sm font-medium text-text-primary mb-2">Breed</label>
          <input id="pet-raza" type="text" placeholder="e.g. Labrador" class="input">
        </div>
        <div>
          <label for="pet-edad" class="block text-sm font-medium text-text-primary mb-2">Age (years)</label>
          <input id="pet-edad" type="number" min="0" max="30" required class="input">
        </div>
        <button type="submit" class="btn btn-primary w-full py-3">
          Save Pet
        </button>
      </form>
    </div>
  </div>
  `;
}
