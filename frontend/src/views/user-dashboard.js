export function dashboardEvents() {
  // Modal controls
  const addPetBtn = document.getElementById('btn-add-pet');
  const modal = document.getElementById('modal-add-pet');
  const modalClose = document.getElementById('modal-close');
  const addPetForm = document.getElementById('add-pet-form');

  if (addPetBtn && modal) {
    addPetBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  }

  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }

  if (addPetForm) {
    addPetForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = addPetForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Saving...';
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        window.pawsUtils?.showToast('Pet added successfully!', 'success');
        modal.classList.add('hidden');
        addPetForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }
}

export function dashboardPage() {
  // Sample data for demonstration
  const stats = [
    { icon: '🐾', label: 'My Pets', value: '3', bg: 'bg-pawsGreen' },
    { icon: '📅', label: 'Next Appointment', value: 'Oct 24', bg: 'bg-pawsBlue' },
    { icon: '💊', label: 'Active Prescriptions', value: '2', bg: 'bg-pawsPurple' },
    { icon: '🏥', label: 'Nearby Clinics', value: '12', bg: 'bg-pawsPink' },
  ];

  const pets = [
    { name: 'Bruno', species: 'Dog', breed: 'Golden Retriever', age: 3, icon: '🐕' },
    { name: 'Luna', species: 'Cat', breed: 'Siamese', age: 2, icon: '🐈' },
    { name: 'Max', species: 'Dog', breed: 'Beagle', age: 5, icon: '🐕' },
  ];

  const upcomingAppointments = [
    { pet: 'Bruno', clinic: 'San Juan Pet Clinic', date: 'Oct 24, 2024', time: '10:00 AM', type: 'Vaccination' },
    { pet: 'Luna', clinic: 'MedellinVet Central', date: 'Nov 5, 2024', time: '2:30 PM', type: 'Checkup' },
  ];

  return `
    <div class="p-6 lg:p-8">
      
      <!-- Welcome Header -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 id="dash-username" class="text-3xl font-bold text-gray-800 dark:text-white font-title">
            Welcome back!
          </h1>
          <p class="text-gray-500 dark:text-gray-400 mt-1">Here's what's happening with your pets today.</p>
        </div>
        <button 
          id="btn-add-pet" 
          class="bg-pawsGreen hover:bg-green-200 text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <span class="text-xl">+</span>
          Add New Pet
        </button>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        ${stats.map(stat => `
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm flex items-center gap-4 transition-all duration-200 hover:shadow-md hover:-translate-y-1">
            <div class="${stat.bg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl">
              ${stat.icon}
            </div>
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">${stat.label}</p>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white font-title">${stat.value}</h3>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Pets Section (2 columns) -->
        <div class="lg:col-span-2">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white font-title">Your Pets</h2>
            <a href="#/pet-profile" class="text-sm text-primary dark:text-purple-400 hover:underline">View all</a>
          </div>
          
          <div id="pets-grid" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            ${pets.map(pet => `
              <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group">
                <div class="bg-gradient-to-br from-pawsBlue/30 to-pawsPurple/30 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl h-32 flex items-center justify-center mb-4">
                  <span class="text-5xl group-hover:scale-110 transition-transform">${pet.icon}</span>
                </div>
                <h3 class="font-bold text-lg text-gray-800 dark:text-white">${pet.name}</h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm mb-3">${pet.breed} - ${pet.age} ${pet.age === 1 ? 'year' : 'years'} old</p>
                <button class="w-full bg-gray-100 dark:bg-gray-700 hover:bg-pawsGreen dark:hover:bg-pawsGreen text-gray-700 dark:text-gray-200 dark:hover:text-gray-800 py-2 rounded-xl font-medium text-sm transition-colors">
                  View Profile
                </button>
              </div>
            `).join('')}
            
            <!-- Add Pet Card -->
            <div 
              onclick="document.getElementById('modal-add-pet').classList.remove('hidden')"
              class="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-5 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 cursor-pointer hover:border-pawsGreen hover:text-pawsGreen dark:hover:border-pawsGreen dark:hover:text-pawsGreen transition-all min-h-[200px]"
            >
              <span class="text-4xl mb-2">+</span>
              <p class="font-medium">Add New Pet</p>
            </div>
          </div>
        </div>

        <!-- Right Sidebar -->
        <div class="space-y-6">
          
          <!-- Upcoming Appointments -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition-colors duration-200">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-semibold text-gray-800 dark:text-white font-title">Upcoming Appointments</h3>
              <span class="text-xs text-gray-400">📅</span>
            </div>
            <div class="space-y-3">
              ${upcomingAppointments.map(apt => `
                <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-medium text-gray-800 dark:text-white text-sm">${apt.pet}</span>
                    <span class="text-xs px-2 py-0.5 bg-pawsGreen/50 rounded-full text-gray-700">${apt.type}</span>
                  </div>
                  <p class="text-xs text-gray-500 dark:text-gray-400">${apt.clinic}</p>
                  <p class="text-xs text-primary dark:text-purple-400 mt-1">${apt.date} at ${apt.time}</p>
                </div>
              `).join('')}
            </div>
            <button class="w-full mt-4 py-2 text-sm text-primary dark:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors font-medium">
              + Book Appointment
            </button>
          </div>

          <!-- Quick Actions -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm transition-colors duration-200">
            <h3 class="font-semibold text-gray-800 dark:text-white mb-4 font-title">Quick Actions</h3>
            <div class="space-y-2">
              <a href="#/clinicas" class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span class="w-8 h-8 bg-pawsBlue/30 rounded-lg flex items-center justify-center">🏥</span>
                <span class="text-sm text-gray-700 dark:text-gray-300">Find Nearby Clinics</span>
              </a>
              <a href="#/health-tips" class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span class="w-8 h-8 bg-pawsGreen/30 rounded-lg flex items-center justify-center">💡</span>
                <span class="text-sm text-gray-700 dark:text-gray-300">Health Tips</span>
              </a>
              <a href="#/emergencias" class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span class="w-8 h-8 bg-pawsPink/30 rounded-lg flex items-center justify-center">🚨</span>
                <span class="text-sm text-gray-700 dark:text-gray-300">Emergency Services</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- ADD PET MODAL -->
    <div id="modal-add-pet" class="hidden fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-xl animate-slide-up">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold text-gray-800 dark:text-white font-title">Add New Pet</h2>
          <button id="modal-close" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl transition-colors">
            x
          </button>
        </div>
        <form id="add-pet-form" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pet Name</label>
            <input 
              id="pet-nombre" 
              type="text" 
              required 
              placeholder="e.g. Bruno"
              class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Species</label>
            <select 
              id="pet-especie" 
              class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            >
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Breed</label>
            <input 
              id="pet-raza" 
              type="text" 
              placeholder="e.g. Golden Retriever"
              class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Age (years)</label>
            <input 
              id="pet-edad" 
              type="number" 
              min="0" 
              max="30" 
              required
              placeholder="e.g. 3"
              class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            >
          </div>
          <button 
            type="submit"
            class="w-full bg-pawsGreen hover:bg-green-200 text-gray-800 py-3 rounded-xl font-semibold transition-all duration-200 mt-2"
          >
            Add Pet
          </button>
        </form>
      </div>
    </div>
  `;
}
