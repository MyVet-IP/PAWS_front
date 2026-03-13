// frontend/src/views/vet-dashboard.js

export function vetDashboardPage() {
  const schedule = [
    { day: 'Lunes', hours: '09:00 - 20:00', active: true },
    { day: 'Martes', hours: '10:00 - 18:00', active: true },
    { day: 'Miércoles', hours: '10:00 - 18:00', active: true },
    { day: 'Jueves', hours: '10:00 - 18:00', active: true },
    { day: 'Viernes', hours: '10:00 - 18:00', active: true },
    { day: 'Sábado', hours: '10:00 - 14:00', active: true },
    { day: 'Domingo', hours: 'Cerrado', active: false },
  ];

  const services = [
    { icon: 'vaccination', name: 'Vacunación', color: 'lavender' },
    { icon: 'consultation', name: 'Consulta', color: 'softpink' },
    { icon: 'xray', name: 'Rayos X', color: 'lightblue' },
    { icon: 'laboratory', name: 'Laboratorio', color: 'green' },
    { icon: 'surgery', name: 'Cirugía', color: 'lavender' },
    { icon: 'deworming', name: 'Desparasitación', color: 'softpink' },
  ];

  const team = [
    { name: 'Dr. Carlos Cardona', role: 'Director Médico', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Dra. Ana Ruiz', role: 'Veterinaria Senior', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Dr. Miguel Torres', role: 'Cirujano', image: 'https://randomuser.me/api/portraits/men/67.jpg' },
  ];

  const stats = [
    { label: 'Pacientes Atendidos', value: '1,248', change: '+12%', icon: 'patients' },
    { label: 'Citas Este Mes', value: '156', change: '+8%', icon: 'calendar' },
    { label: 'Valoración', value: '4.9', change: '+0.2', icon: 'star' },
  ];

  const getServiceIcon = (icon) => {
    const icons = {
      vaccination: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>`,
      consultation: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>`,
      xray: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>`,
      laboratory: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>`,
      surgery: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>`,
      deworming: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`,
    };
    return icons[icon] || icons.consultation;
  };

  const getStatIcon = (icon) => {
    const icons = {
      patients: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>`,
      calendar: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>`,
      star: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>`,
    };
    return icons[icon] || icons.patients;
  };

  const getColorClasses = (color) => {
    const colors = {
      lavender: 'bg-lavender-light dark:bg-lavender/20 text-lavender-dark dark:text-lavender',
      softpink: 'bg-softpink-light dark:bg-softpink/20 text-pink-dark dark:text-softpink',
      lightblue: 'bg-lightblue-light dark:bg-lightblue/20 text-blue-dark dark:text-lightblue',
      green: 'bg-green-light dark:bg-green/20 text-green-700 dark:text-green',
    };
    return colors[color] || colors.lavender;
  };

  return `
  <section class="flex min-h-screen bg-gradient-to-br from-lavender-light/20 via-white to-softpink-light/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">

    <!-- SIDEBAR -->
    <aside class="hidden lg:flex w-72 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg px-6 py-8 flex-col justify-between border-r border-gray-100 dark:border-gray-700 animate-fade-in">
      <div>
        <!-- Logo -->
        <div class="flex items-center gap-3 mb-10">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-lavender to-lavender-dark flex items-center justify-center shadow-glow-lavender">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <div>
            <h2 class="text-xl font-bold text-gray-800 dark:text-white">San Juan Pet</h2>
            <p class="text-xs text-gray-500 dark:text-gray-400">Panel Veterinario</p>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-col gap-2">
          <a href="#" class="nav-item-active flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-lavender/20 to-softpink/10 dark:from-lavender/30 dark:to-softpink/20 text-gray-800 dark:text-white font-medium border border-lavender/20 dark:border-lavender/30 transition-all">
            <div class="w-9 h-9 rounded-lg bg-lavender/20 dark:bg-lavender/30 flex items-center justify-center">
              <svg class="w-5 h-5 text-lavender-dark dark:text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
              </svg>
            </div>
            Dashboard
          </a>

          <a href="#" class="nav-item flex items-center gap-3 p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group">
            <div class="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-softpink-light dark:group-hover:bg-softpink/20 transition-colors">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-softpink dark:group-hover:text-softpink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m9 5.197v1"/>
              </svg>
            </div>
            Pacientes
          </a>

          <a href="#" class="nav-item flex items-center gap-3 p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group">
            <div class="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-lightblue-light dark:group-hover:bg-lightblue/20 transition-colors">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-lightblue dark:group-hover:text-lightblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            Citas
          </a>

          <a href="#" class="nav-item flex items-center gap-3 p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group">
            <div class="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-green-light dark:group-hover:bg-green/20 transition-colors">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            Mi Clínica
          </a>

          <a href="#" class="nav-item flex items-center gap-3 p-3 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group">
            <div class="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-lavender-light dark:group-hover:bg-lavender/20 transition-colors">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-lavender-dark dark:group-hover:text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            Configuración
          </a>
        </nav>
      </div>

      <!-- Logout Button -->
      <div class="space-y-4">
        <!-- Dark Mode Toggle -->
        <button id="theme-toggle-sidebar" class="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
          <svg class="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <svg class="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
          <span class="text-sm font-medium">Cambiar Tema</span>
        </button>

        <button class="w-full bg-gradient-to-r from-lavender to-lavender-dark text-white py-3.5 rounded-xl font-semibold shadow-glow-lavender hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          Cerrar Sesión
        </button>
      </div>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
      <!-- Mobile Header -->
      <div class="lg:hidden flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender to-lavender-dark flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <h2 class="text-lg font-bold text-gray-800 dark:text-white">San Juan Pet</h2>
        </div>
        <button id="mobile-menu-btn" class="p-2 rounded-xl bg-gray-100 dark:bg-gray-700">
          <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <div class="flex flex-col xl:flex-row gap-6 lg:gap-8">
        <!-- CENTER CONTENT -->
        <div class="flex-1 space-y-6 lg:space-y-8">

          <!-- TOP BANNER -->
          <div class="relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow animate-fade-in-up" style="animation-delay: 0.1s">
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&h=400&fit=crop"
              alt="Veterinary clinic"
              class="w-full h-48 md:h-56 object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent"></div>

            <div class="absolute inset-0 flex items-center justify-between px-6 md:px-8">
              <div>
                <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-3">
                  Panel de Administración
                </span>
                <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Mi Clínica Veterinaria
                </h1>
                <p class="text-white/80 text-sm md:text-base max-w-md">
                  Gestiona tu clínica, pacientes y citas desde un solo lugar
                </p>
              </div>

              <button class="hidden md:flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:bg-white hover:scale-105 active:scale-95 transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
                Editar Información
              </button>
            </div>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            ${stats.map((stat, i) => `
              <div class="card p-5 lg:p-6 hover-lift group animate-fade-in-up" style="animation-delay: ${0.2 + i * 0.1}s">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${i === 0 ? 'from-lavender to-lavender-dark' : i === 1 ? 'from-softpink to-pink' : 'from-yellow-400 to-orange-400'} flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    ${getStatIcon(stat.icon)}
                  </div>
                  <span class="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2.5 py-1 rounded-full">
                    ${stat.change}
                  </span>
                </div>
                <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">${stat.value}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">${stat.label}</p>
              </div>
            `).join('')}
          </div>

          <!-- GENERAL INFO -->
          <div class="card p-6 lg:p-8 animate-fade-in-up" style="animation-delay: 0.5s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-lavender-light dark:bg-lavender/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-lavender-dark dark:text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 dark:text-white">
                Información General
              </h3>
            </div>

            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              En San Juan Pet brindamos atención integral para mascotas con tecnología
              moderna, personal especializado y un enfoque centrado en el bienestar
              animal. Nuestro compromiso es ofrecer diagnósticos precisos y un servicio
              cercano para cada paciente. Contamos con equipos de última generación y
              un equipo profesional altamente capacitado.
            </p>

            <div class="flex flex-wrap gap-3 mt-6">
              <span class="px-4 py-2 bg-lavender-light dark:bg-lavender/20 text-lavender-dark dark:text-lavender rounded-full text-sm font-medium">
                Atención 24/7
              </span>
              <span class="px-4 py-2 bg-softpink-light dark:bg-softpink/20 text-pink-dark dark:text-softpink rounded-full text-sm font-medium">
                Urgencias
              </span>
              <span class="px-4 py-2 bg-lightblue-light dark:bg-lightblue/20 text-blue-dark dark:text-lightblue rounded-full text-sm font-medium">
                Certificado
              </span>
            </div>
          </div>

          <!-- SERVICES -->
          <div class="card p-6 lg:p-8 animate-fade-in-up" style="animation-delay: 0.6s">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-softpink-light dark:bg-softpink/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-pink-dark dark:text-softpink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-white">
                  Nuestros Servicios
                </h3>
              </div>
              <button class="text-sm text-lavender-dark dark:text-lavender hover:underline font-medium">
                Ver todos
              </button>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              ${services.map((service, i) => `
                <div class="group p-4 lg:p-5 rounded-2xl ${getColorClasses(service.color)} hover:scale-105 hover:shadow-lg transition-all cursor-pointer text-center" style="animation-delay: ${0.7 + i * 0.05}s">
                  <div class="mx-auto mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    ${getServiceIcon(service.icon)}
                  </div>
                  <p class="text-sm font-semibold">${service.name}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- RIGHT PANEL -->
        <aside class="w-full xl:w-80 space-y-6">

          <!-- SCHEDULE -->
          <div class="card p-6 animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 rounded-xl bg-lightblue-light dark:bg-lightblue/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-dark dark:text-lightblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Horarios
              </h3>
            </div>

            <div class="space-y-3">
              ${schedule.map(item => `
                <div class="flex justify-between items-center p-3 rounded-xl ${item.active ? 'hover:bg-gray-50 dark:hover:bg-gray-700/50' : 'opacity-60'} transition-colors">
                  <span class="text-gray-800 dark:text-gray-200 font-medium">
                    ${item.day}
                  </span>
                  <span class="text-sm ${item.active ? 'text-gray-500 dark:text-gray-400' : 'text-red-500 dark:text-red-400'} font-medium">
                    ${item.hours}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- TEAM -->
          <div class="card p-6 animate-fade-in-up" style="animation-delay: 0.5s">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-green-light dark:bg-green/20 flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-700 dark:text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                  Nuestro Equipo
                </h3>
              </div>
              <button class="text-xs text-lavender-dark dark:text-lavender hover:underline font-medium">
                Ver más
              </button>
            </div>

            <div class="space-y-4">
              ${team.map((member, i) => `
                <div class="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer group">
                  <img 
                    src="${member.image}" 
                    alt="${member.name}"
                    class="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-700 shadow-md group-hover:ring-lavender transition-all"
                  />
                  <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-gray-800 dark:text-white truncate">${member.name}</h4>
                    <p class="text-sm text-gray-500 dark:text-gray-400">${member.role}</p>
                  </div>
                  <svg class="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- LOCATION -->
          <div class="card p-6 animate-fade-in-up" style="animation-delay: 0.6s">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-lavender-light dark:bg-lavender/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-lavender-dark dark:text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Ubicación
              </h3>
            </div>
            
            <div class="relative rounded-2xl overflow-hidden">
              <img 
                src="https://maps.googleapis.com/maps/api/staticmap?center=Medellin&zoom=14&size=400x200&maptype=roadmap&style=feature:all|saturation:-80"
                alt="Ubicación de la clínica"
                class="w-full h-40 object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <p class="text-white text-sm font-medium">Calle 10 #43A-25, El Poblado</p>
                <p class="text-white/70 text-xs">Medellín, Colombia</p>
              </div>
            </div>

            <button class="w-full mt-4 py-3 bg-gradient-to-r from-lavender to-lavender-dark text-white rounded-xl font-medium hover:shadow-glow-lavender hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
              </svg>
              Abrir en Google Maps
            </button>
          </div>

        </aside>
      </div>
    </main>
  </section>
  `;
}

// Event setup function
export function setupVetDashboardEvents() {
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle-sidebar');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const html = document.documentElement;
      const isDark = html.classList.contains('dark');
      
      if (isDark) {
        html.classList.remove('dark');
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      // Toggle mobile menu visibility
      console.log('Mobile menu clicked');
    });
  }
}
