export function petProfilepage() {
  // Sample pet data - in production would come from API
  const pet = {
    name: 'Max',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: '3 years',
    weight: '32 kg',
    gender: 'Male',
    microchip: 'CHIP-2024-00142',
    birthday: 'March 15, 2021',
    color: 'Golden',
    allergies: ['Chicken', 'Certain antibiotics'],
    conditions: ['Hip dysplasia (mild)']
  };

  const reminders = [
    { title: 'Rabies Booster', date: 'In 12 days', description: 'Annual mandatory vaccination.', type: 'vaccine', color: '#FFCFD2', accent: '#dc2626' },
    { title: 'Deworming Pill', date: 'In 3 weeks', description: 'Monthly treatment reminder.', type: 'medication', color: '#90BDF4', accent: '#2563eb' },
    { title: 'Dental Checkup', date: 'In 2 months', description: 'Routine dental examination.', type: 'checkup', color: '#B9FBC0', accent: '#059669' }
  ];

  const history = [
    { date: 'Jan 20, 2024', title: 'Annual Checkup', description: 'Comprehensive physical examination. Heart and dental health are excellent. Weight stable.', type: 'checkup', color: '#F1C0E8' },
    { date: 'Nov 15, 2023', title: 'Dental Cleaning', description: 'Professional scale and polish. Minor tartar removed. No extractions needed.', type: 'dental', color: '#90BDF4' },
    { date: 'Aug 10, 2023', title: 'Vaccination Update', description: 'DHPP booster administered. No adverse reactions observed.', type: 'vaccine', color: '#B9FBC0' },
    { date: 'May 22, 2023', title: 'Skin Allergy Treatment', description: 'Treated for seasonal allergies. Prescribed antihistamines for 2 weeks.', type: 'treatment', color: '#FFCFD2' }
  ];

  return `
    <div class="min-h-screen bg-surface-soft dark:bg-dark-bg font-roboto">
      
      <!-- Header -->
      <header class="bg-white dark:bg-dark-surface shadow-sm border-b border-gray-100 dark:border-dark-muted">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex items-center justify-between">
            <button onclick="window.location.hash='#/dashboard'" class="text-text-highlight dark:text-paws-green hover:opacity-75 transition font-medium font-poppins text-sm flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              Back to Dashboard
            </button>
            <div class="flex gap-3">
              <button class="px-4 py-2 border border-paws-pink text-text-primary dark:text-white rounded-xl font-poppins font-medium text-sm hover:bg-paws-pink/10 transition">
                Medical Report
              </button>
              <button class="px-4 py-2 bg-text-highlight text-white rounded-xl font-poppins font-medium text-sm hover:opacity-90 transition">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </header>

      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid lg:grid-cols-3 gap-8">
          
          <!-- Left Column: Pet Info -->
          <div class="lg:col-span-1">
            
            <!-- Pet Card -->
            <div class="bg-white dark:bg-dark-surface rounded-2xl shadow-card overflow-hidden mb-6">
              <!-- Pet Image Banner -->
              <div class="h-32 bg-gradient-to-br from-paws-purple to-paws-pink relative">
                <div class="absolute -bottom-12 left-6">
                  <div class="w-24 h-24 bg-white dark:bg-dark-surface rounded-full border-4 border-white dark:border-dark-surface shadow-medium flex items-center justify-center text-4xl">
                    🐕
                  </div>
                </div>
              </div>
              
              <div class="pt-16 pb-6 px-6">
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h1 class="text-2xl font-bold text-text-primary dark:text-white font-poppins">${pet.name}</h1>
                    <p class="text-text-soft dark:text-gray-400 font-roboto">${pet.breed}</p>
                  </div>
                  <span class="px-3 py-1 bg-paws-green/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold font-poppins">Healthy</span>
                </div>
                
                <!-- Quick Stats -->
                <div class="grid grid-cols-3 gap-3 mb-6">
                  <div class="text-center p-3 bg-surface-soft dark:bg-dark-muted rounded-xl">
                    <p class="text-lg font-bold text-text-primary dark:text-white font-poppins">${pet.age}</p>
                    <p class="text-xs text-text-muted dark:text-gray-400">Age</p>
                  </div>
                  <div class="text-center p-3 bg-surface-soft dark:bg-dark-muted rounded-xl">
                    <p class="text-lg font-bold text-text-primary dark:text-white font-poppins">${pet.weight}</p>
                    <p class="text-xs text-text-muted dark:text-gray-400">Weight</p>
                  </div>
                  <div class="text-center p-3 bg-surface-soft dark:bg-dark-muted rounded-xl">
                    <p class="text-lg font-bold text-text-primary dark:text-white font-poppins">${pet.gender}</p>
                    <p class="text-xs text-text-muted dark:text-gray-400">Gender</p>
                  </div>
                </div>
                
                <!-- Details -->
                <div class="space-y-3">
                  <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-muted">
                    <span class="text-text-muted dark:text-gray-400 text-sm">Species</span>
                    <span class="text-text-primary dark:text-white font-medium text-sm">${pet.species}</span>
                  </div>
                  <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-muted">
                    <span class="text-text-muted dark:text-gray-400 text-sm">Birthday</span>
                    <span class="text-text-primary dark:text-white font-medium text-sm">${pet.birthday}</span>
                  </div>
                  <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-dark-muted">
                    <span class="text-text-muted dark:text-gray-400 text-sm">Color</span>
                    <span class="text-text-primary dark:text-white font-medium text-sm">${pet.color}</span>
                  </div>
                  <div class="flex justify-between items-center py-2">
                    <span class="text-text-muted dark:text-gray-400 text-sm">Microchip</span>
                    <span class="text-text-highlight dark:text-paws-blue font-medium text-sm">${pet.microchip}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Allergies & Conditions -->
            <div class="bg-white dark:bg-dark-surface rounded-2xl shadow-card p-6">
              <h3 class="font-bold text-text-primary dark:text-white font-poppins mb-4">Health Notes</h3>
              
              ${pet.allergies.length > 0 ? `
              <div class="mb-4">
                <p class="text-xs text-text-muted dark:text-gray-400 uppercase tracking-wide mb-2 font-poppins">Allergies</p>
                <div class="flex flex-wrap gap-2">
                  ${pet.allergies.map(a => `<span class="px-3 py-1 bg-paws-pink/30 text-pink-700 dark:text-pink-400 rounded-full text-xs font-medium">${a}</span>`).join('')}
                </div>
              </div>
              ` : ''}
              
              ${pet.conditions.length > 0 ? `
              <div>
                <p class="text-xs text-text-muted dark:text-gray-400 uppercase tracking-wide mb-2 font-poppins">Conditions</p>
                <div class="flex flex-wrap gap-2">
                  ${pet.conditions.map(c => `<span class="px-3 py-1 bg-paws-yellow/50 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-medium">${c}</span>`).join('')}
                </div>
              </div>
              ` : ''}
            </div>
            
          </div>
          
          <!-- Right Column: Reminders & History -->
          <div class="lg:col-span-2">
            
            <!-- Health Reminders -->
            <section class="mb-8">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-bold text-text-primary dark:text-white font-poppins">Health Reminders</h2>
                <button class="text-text-highlight dark:text-paws-green text-sm font-medium font-poppins hover:underline">View All</button>
              </div>
              
              <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${reminders.map(r => `
                  <div class="bg-white dark:bg-dark-surface rounded-2xl shadow-card p-5 border-l-4 hover:shadow-soft transition" style="border-left-color: ${r.color};">
                    <p class="text-xs font-semibold uppercase tracking-wide mb-2 font-poppins" style="color: ${r.accent};">${r.date}</p>
                    <h3 class="font-bold text-text-primary dark:text-white font-poppins mb-1">${r.title}</h3>
                    <p class="text-text-soft dark:text-gray-400 text-sm mb-4">${r.description}</p>
                    <button class="font-semibold text-sm font-poppins hover:underline" style="color: ${r.accent};">
                      ${r.type === 'vaccine' ? 'Confirm Appointment' : r.type === 'medication' ? 'Add to Calendar' : 'Schedule Now'} →
                    </button>
                  </div>
                `).join('')}
              </div>
            </section>
            
            <!-- Medical History -->
            <section>
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-bold text-text-primary dark:text-white font-poppins">Medical History</h2>
                <button class="text-text-highlight dark:text-paws-green text-sm font-medium font-poppins hover:underline">Download Records</button>
              </div>
              
              <div class="space-y-4">
                ${history.map(h => `
                  <div class="bg-white dark:bg-dark-surface rounded-2xl shadow-card p-5 hover:shadow-soft transition">
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style="background: ${h.color};">
                        ${h.type === 'checkup' ? '🩺' : h.type === 'dental' ? '🦷' : h.type === 'vaccine' ? '💉' : '💊'}
                      </div>
                      <div class="flex-1">
                        <div class="flex items-start justify-between gap-4 mb-1">
                          <h3 class="font-bold text-text-primary dark:text-white font-poppins">${h.title}</h3>
                          <span class="text-xs text-text-muted dark:text-gray-400 font-poppins shrink-0">${h.date}</span>
                        </div>
                        <p class="text-text-soft dark:text-gray-400 text-sm">${h.description}</p>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
              
              <!-- Load More -->
              <div class="text-center mt-6">
                <button class="px-6 py-3 border border-gray-200 dark:border-dark-muted text-text-soft dark:text-gray-400 rounded-xl font-poppins font-medium text-sm hover:border-text-highlight hover:text-text-highlight dark:hover:border-paws-green dark:hover:text-paws-green transition">
                  Load More Records
                </button>
              </div>
            </section>
            
          </div>
          
        </div>
      </main>
    </div>
  `;
}

export function petProfileEvents() {
  // Events would be handled here for interactive elements
}