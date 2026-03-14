export function petProfilepage() {
  const pet = {
    name: 'Luna',
    breed: 'Golden Retriever',
    species: 'Dog',
    gender: 'Female',
    age: '3.5 years',
    weight: '28 kg',
    bloodType: 'DEA 1+',
    microchip: '985141000123456',
    status: 'Healthy',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop',
    owner: 'Maria Garcia',
    ownerPhone: '+57 300 123 4567',
  };

  const reminders = [
    {
      id: 1,
      title: 'Rabies Booster',
      description: 'Annual mandatory vaccination.',
      dueIn: '12 days',
      type: 'vaccine',
      color: 'softpink',
      urgent: false,
    },
    {
      id: 2,
      title: 'Deworming Pill',
      description: 'Monthly treatment reminder.',
      dueIn: '3 weeks',
      type: 'medication',
      color: 'lightblue',
      urgent: false,
    },
    {
      id: 3,
      title: 'Annual Checkup',
      description: 'Complete physical examination.',
      dueIn: '2 months',
      type: 'checkup',
      color: 'lavender',
      urgent: false,
    },
  ];

  const medicalHistory = [
    {
      id: 1,
      date: 'Jan 20, 2024',
      title: 'Annual Checkup',
      description: 'Comprehensive physical examination. Heart and dental health are excellent. Weight stable.',
      type: 'checkup',
      doctor: 'Dr. Carlos Cardona',
      color: 'softpink',
    },
    {
      id: 2,
      date: 'Nov 15, 2023',
      title: 'Dental Cleaning',
      description: 'Professional dental cleaning and scaling. Mild tartar buildup removed. No extractions needed.',
      type: 'dental',
      doctor: 'Dra. Ana Ruiz',
      color: 'lightblue',
    },
    {
      id: 3,
      date: 'Sep 8, 2023',
      title: 'Vaccination - DHPP',
      description: 'Distemper, Hepatitis, Parainfluenza, and Parvovirus booster administered.',
      type: 'vaccine',
      doctor: 'Dr. Carlos Cardona',
      color: 'lavender',
    },
    {
      id: 4,
      date: 'Jun 22, 2023',
      title: 'Skin Allergy Treatment',
      description: 'Diagnosed with seasonal allergies. Prescribed antihistamines and medicated shampoo.',
      type: 'treatment',
      doctor: 'Dra. Ana Ruiz',
      color: 'green',
    },
  ];

  const getTypeIcon = (type) => {
    const icons = {
      checkup: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`,
      vaccine: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>`,
      dental: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`,
      medication: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>`,
      treatment: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>`,
    };
    return icons[type] || icons.checkup;
  };

  const getColorClasses = (color, variant = 'bg') => {
    const colors = {
      softpink: {
        bg: 'bg-softpink-light dark:bg-softpink/20',
        text: 'text-pink-dark dark:text-softpink',
        border: 'border-softpink',
      },
      lightblue: {
        bg: 'bg-lightblue-light dark:bg-lightblue/20',
        text: 'text-blue-dark dark:text-lightblue',
        border: 'border-lightblue',
      },
      lavender: {
        bg: 'bg-lavender-light dark:bg-lavender/20',
        text: 'text-lavender-dark dark:text-lavender',
        border: 'border-lavender',
      },
      green: {
        bg: 'bg-green-light dark:bg-green/20',
        text: 'text-green-700 dark:text-green',
        border: 'border-green',
      },
    };
    return colors[color]?.[variant] || colors.lavender[variant];
  };

  return `
<<<<<<< HEAD
  <section class="flex gap-12 p-10 bg-gray-50 min-h-screen">

    <!-- RIGHT CONTENT -->
    <main class="flex-1">

      <!-- TOP ACTIONS -->
      <div class="flex justify-end gap-4 mb-6">
        <button class="border border-pink text-gray-700 px-5 py-2 rounded-full">
          Medical Report
=======
  <section class="min-h-screen bg-gradient-to-br from-lavender-light/20 via-white to-softpink-light/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
    
    <!-- Mobile Header -->
    <header class="lg:hidden sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-700 px-4 py-4">
      <div class="flex items-center justify-between">
        <button onclick="window.history.back()" class="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
          <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
>>>>>>> develop
        </button>
        <h1 class="font-bold text-gray-800 dark:text-white">Pet Profile</h1>
        <button class="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
          <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
          </svg>
        </button>
      </div>
    </header>

    <div class="flex flex-col lg:flex-row gap-6 lg:gap-8 p-4 md:p-6 lg:p-10 max-w-7xl mx-auto animate-fade-in">

      <!-- LEFT COLUMN - Pet Info Card -->
      <aside class="w-full lg:w-[380px] lg:flex-shrink-0">
        <div class="card overflow-hidden sticky top-6">
          <!-- Header gradient -->
          <div class="h-28 bg-gradient-to-r from-lavender via-softpink to-lightblue relative overflow-hidden">
            <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            <div class="absolute inset-0 flex items-center px-6">
              <p class="text-white font-semibold tracking-wide text-sm uppercase flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                General Info
              </p>
            </div>
            
            <!-- Desktop back button -->
            <button onclick="window.history.back()" class="hidden lg:flex absolute top-4 right-4 p-2 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="px-6 pb-8 text-center relative">
            <!-- Pet Image Container -->
            <div class="relative -mt-16 mb-6 flex justify-center">
              <div class="w-36 h-36 md:w-44 md:h-44 rounded-3xl bg-gradient-to-br from-lightblue to-lightblue-dark p-1.5 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="${pet.image}"
                  alt="${pet.name}"
                  class="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <!-- Health Badge -->
              <span class="absolute -bottom-2 bg-gradient-to-r from-green to-green-dark text-white text-xs px-4 py-1.5 rounded-full shadow-lg font-medium flex items-center gap-1.5">
                <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                ${pet.status.toUpperCase()}
              </span>
            </div>

            <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-1">
              ${pet.name}
            </h2>
            <p class="text-gray-500 dark:text-gray-400 text-sm tracking-wide uppercase">
              ${pet.breed} - ${pet.gender}
            </p>

            <!-- Stats Grid -->
            <div class="grid grid-cols-3 gap-3 mt-8">
              <div class="bg-softpink-light dark:bg-softpink/20 p-4 rounded-2xl hover:shadow-md transition-shadow">
                <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Age</p>
                <p class="font-bold text-gray-800 dark:text-white text-lg">${pet.age.split(' ')[0]}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">${pet.age.split(' ')[1]}</p>
              </div>

              <div class="bg-lightblue-light dark:bg-lightblue/20 p-4 rounded-2xl hover:shadow-md transition-shadow">
                <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Weight</p>
                <p class="font-bold text-gray-800 dark:text-white text-lg">${pet.weight.split(' ')[0]}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">${pet.weight.split(' ')[1]}</p>
              </div>

              <div class="bg-lavender-light dark:bg-lavender/20 p-4 rounded-2xl hover:shadow-md transition-shadow">
                <p class="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Blood</p>
                <p class="font-bold text-gray-800 dark:text-white text-lg">${pet.bloodType.split('+')[0]}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">${pet.bloodType.includes('+') ? 'Positive' : 'Negative'}</p>
              </div>
            </div>

            <!-- Additional Info -->
            <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl text-left space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400">Microchip</span>
                <span class="text-sm font-medium text-gray-800 dark:text-white font-mono">${pet.microchip}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400">Owner</span>
                <span class="text-sm font-medium text-gray-800 dark:text-white">${pet.owner}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400">Contact</span>
                <span class="text-sm font-medium text-lavender-dark dark:text-lavender">${pet.ownerPhone}</span>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="grid grid-cols-2 gap-3 mt-6">
              <button class="btn-secondary text-sm py-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Medical Report
              </button>
              <button class="btn-primary text-sm py-3">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </aside>

      <!-- RIGHT CONTENT -->
      <main class="flex-1 space-y-6 lg:space-y-8">

        <!-- HEALTH REMINDERS -->
        <section class="animate-fade-in-up" style="animation-delay: 0.2s">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-softpink-light dark:bg-softpink/20 flex items-center justify-center">
                <svg class="w-4 h-4 text-pink-dark dark:text-softpink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
              </div>
              Health Reminders
            </h2>
            <button class="text-sm text-lavender-dark dark:text-lavender hover:underline font-medium">
              View All
            </button>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${reminders.map((reminder, i) => `
              <div class="card p-5 hover-lift group border-l-4 ${getColorClasses(reminder.color, 'border')}" style="animation-delay: ${0.3 + i * 0.1}s">
                <div class="flex items-start justify-between mb-3">
                  <div class="w-10 h-10 rounded-xl ${getColorClasses(reminder.color, 'bg')} flex items-center justify-center ${getColorClasses(reminder.color, 'text')} group-hover:scale-110 transition-transform">
                    ${getTypeIcon(reminder.type)}
                  </div>
                  <span class="text-xs font-bold ${getColorClasses(reminder.color, 'text')} uppercase">
                    In ${reminder.dueIn}
                  </span>
                </div>
                <h3 class="font-bold text-gray-800 dark:text-white mb-1">
                  ${reminder.title}
                </h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  ${reminder.description}
                </p>
                <button class="${getColorClasses(reminder.color, 'text')} font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Confirm Appointment
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- MEDICAL HISTORY -->
        <section class="animate-fade-in-up" style="animation-delay: 0.5s">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-lavender-light dark:bg-lavender/20 flex items-center justify-center">
                <svg class="w-4 h-4 text-lavender-dark dark:text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              Medical History
            </h2>
            <button class="text-sm text-lavender-dark dark:text-lavender hover:underline font-medium">
              Download PDF
            </button>
          </div>

          <div class="space-y-4">
            ${medicalHistory.map((record, i) => `
              <div class="card p-5 hover-lift group" style="animation-delay: ${0.6 + i * 0.1}s">
                <div class="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 rounded-xl ${getColorClasses(record.color, 'bg')} flex items-center justify-center ${getColorClasses(record.color, 'text')} group-hover:scale-110 transition-transform">
                      ${getTypeIcon(record.type)}
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 class="font-bold text-gray-800 dark:text-white text-lg">
                        ${record.title}
                      </h3>
                      <span class="text-sm font-semibold ${getColorClasses(record.color, 'text')}">
                        ${record.date}
                      </span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      ${record.description}
                    </p>
                    <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      ${record.doctor}
                    </div>
                  </div>
                  <button class="hidden sm:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-all">
                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Load More Button -->
          <button class="w-full mt-6 py-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl text-gray-500 dark:text-gray-400 hover:border-lavender hover:text-lavender-dark dark:hover:border-lavender dark:hover:text-lavender transition-colors font-medium">
            Load More Records
          </button>
        </section>

      </main>

    </div>
  </section>
  `;
}

export function setupPetProfileEvents() {
  // Add any event listeners for the pet profile page
}
