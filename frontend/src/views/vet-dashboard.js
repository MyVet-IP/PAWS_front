// frontend/src/views/vet-dashboard.js

export function vetDashboardPage() {
  const schedule = [
    { day: 'Monday', hours: '09:00 - 20:00' },
    { day: 'Tuesday', hours: '10:00 - 18:00' },
    { day: 'Wednesday', hours: '10:00 - 18:00' },
    { day: 'Thursday', hours: '10:00 - 18:00' },
    { day: 'Friday', hours: '10:00 - 18:00' },
    { day: 'Saturday', hours: '10:00 - 14:00' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const services = [
    { icon: '💉', name: 'Vaccination' },
    { icon: '🩺', name: 'Consultation' },
    { icon: '🩻', name: 'X-Ray' },
    { icon: '🔬', name: 'Laboratory' },
    { icon: '🏥', name: 'Surgery' },
    { icon: '🧴', name: 'Deworming' },
  ];

  const team = [
    { name: 'Dr. Carlos Cardona', role: 'Lead Veterinarian', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Dr. Ana Ruiz', role: 'Veterinary Surgeon', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  ];

  const stats = [
    { icon: '🐕', label: 'Patients Today', value: '12', bg: 'bg-pawsGreen' },
    { icon: '📅', label: 'Appointments', value: '8', bg: 'bg-pawsBlue' },
    { icon: '⭐', label: 'Rating', value: '4.9', bg: 'bg-pawsYellow' },
  ];

  return `
    <div class="p-6 lg:p-8">
      
      <!-- Stats Row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        ${stats.map(stat => `
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm flex items-center gap-4 transition-all duration-200 hover:shadow-md">
            <div class="${stat.bg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl">
              ${stat.icon}
            </div>
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">${stat.label}</p>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white font-title">${stat.value}</h3>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="flex flex-col lg:flex-row gap-6">
        
        <!-- Main Content -->
        <div class="flex-1 space-y-6">
          
          <!-- Clinic Banner -->
          <div class="relative rounded-2xl overflow-hidden shadow-sm h-48">
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80"
              alt="Clinic Banner"
              class="w-full h-full object-cover"
              crossorigin="anonymous"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-between px-8">
              <div>
                <h1 class="text-3xl font-bold text-white font-title">San Juan Pet Clinic</h1>
                <p class="text-white/80 text-sm mt-1">Medellin, Colombia</p>
              </div>
              <button class="bg-white text-gray-800 px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Edit Profile
              </button>
            </div>
          </div>

          <!-- About Section -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm transition-colors duration-200">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3 font-title">
              About Our Clinic
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              At San Juan Pet Clinic, we provide comprehensive care for pets using modern technology, 
              specialized staff, and a patient-centered approach to animal welfare. Our commitment is to 
              offer accurate diagnoses and personalized service for every patient that walks through our doors.
            </p>
          </div>

          <!-- Services Grid -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm transition-colors duration-200">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-6 font-title">
              Our Services
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              ${services.map(service => `
                <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <div class="text-3xl mb-2">${service.icon}</div>
                  <p class="text-sm font-medium text-gray-700 dark:text-gray-200">${service.name}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="grid grid-cols-2 gap-4">
            <button class="bg-pawsGreen hover:bg-green-200 text-gray-800 p-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-md">
              <span class="text-xl">➕</span>
              New Appointment
            </button>
            <button class="bg-pawsPurple hover:bg-purple-200 text-gray-800 p-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-md">
              <span class="text-xl">📋</span>
              Patient Records
            </button>
          </div>

        </div>

        <!-- Right Sidebar -->
        <aside class="w-full lg:w-80 space-y-6">

          <!-- Schedule Card -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm transition-colors duration-200">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-10 h-10 bg-pawsPurple/30 rounded-full flex items-center justify-center text-lg">
                ⏰
              </div>
              <h3 class="text-lg font-bold text-gray-800 dark:text-white font-title">
                Business Hours
              </h3>
            </div>
            <div class="space-y-3">
              ${schedule.map(s => `
                <div class="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <span class="text-gray-700 dark:text-gray-300 text-sm">${s.day}</span>
                  <span class="text-sm font-medium ${s.hours === 'Closed' ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}">
                    ${s.hours}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Team Card -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm transition-colors duration-200">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-4 font-title">
              Our Team
            </h3>
            <div class="space-y-4">
              ${team.map(member => `
                <div class="flex items-center gap-3">
                  <img 
                    src="${member.image}" 
                    alt="${member.name}"
                    class="w-12 h-12 rounded-full object-cover border-2 border-pawsGreen"
                    crossorigin="anonymous"
                  />
                  <div>
                    <span class="block text-gray-800 dark:text-white font-medium">${member.name}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">${member.role}</span>
                  </div>
                </div>
              `).join('')}
            </div>
            <button class="w-full mt-4 py-2 text-sm text-primary dark:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
              + Add Team Member
            </button>
          </div>

          <!-- Location Card -->
          <div class="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm transition-colors duration-200">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-3 font-title">
              Location
            </h3>
            <div class="bg-gray-100 dark:bg-gray-700 rounded-xl h-32 flex items-center justify-center mb-3">
              <span class="text-gray-400 text-sm">Map placeholder</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Calle 50 #45-32, El Poblado<br/>
              Medellin, Antioquia
            </p>
          </div>

        </aside>

      </div>
    </div>
  `;
}

export function vetDashboardEvents() {
  // Event handlers for vet dashboard
}
