// Enhanced User Dashboard with animations, dark mode, and improved UX
export function dashboardEvents() {
    // Initialize theme toggle
    const themeToggle = document.getElementById('dashboard-theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const html = document.documentElement;
            const isDark = html.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                html.removeAttribute('data-theme');
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.setAttribute('data-theme', 'dark');
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Mobile sidebar toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('dashboard-sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
            sidebarOverlay?.classList.toggle('hidden');
        });
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
            sidebar?.classList.add('-translate-x-full');
            sidebarOverlay.classList.add('hidden');
        });
    }

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.hash = '#/login';
        });
    }

    // Add pet modal
    const addPetBtn = document.getElementById('btn-add-pet');
    const addPetModal = document.getElementById('modal-add-pet');
    const modalClose = document.getElementById('modal-close');
    
    if (addPetBtn && addPetModal) {
        addPetBtn.addEventListener('click', () => {
            addPetModal.classList.remove('hidden');
            addPetModal.classList.add('flex');
        });
    }
    
    if (modalClose && addPetModal) {
        modalClose.addEventListener('click', () => {
            addPetModal.classList.add('hidden');
            addPetModal.classList.remove('flex');
        });
        
        // Close on backdrop click
        addPetModal.addEventListener('click', (e) => {
            if (e.target === addPetModal) {
                addPetModal.classList.add('hidden');
                addPetModal.classList.remove('flex');
            }
        });
    }

    // Add pet form
    const addPetForm = document.getElementById('add-pet-form');
    if (addPetForm) {
        addPetForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const user = JSON.parse(localStorage.getItem('currentUser'));
            
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
                    addPetModal.classList.add('hidden');
                    addPetForm.reset();
                    // Reload pets
                    loadPets();
                }
            } catch (error) {
                console.error('Error adding pet:', error);
            }
        });
    }

    // Load pets data
    loadPets();
}

async function loadPets() {
    const grid = document.getElementById('pets-grid');
    const countEl = document.getElementById('pets-count');
    if (!grid) return;

    try {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user) return;

        // Show loading skeletons
        grid.innerHTML = Array(3).fill(`
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card">
                <div class="skeleton h-40 rounded-xl mb-4"></div>
                <div class="skeleton skeleton-title mb-2"></div>
                <div class="skeleton skeleton-text w-2/3 mb-4"></div>
                <div class="skeleton h-10 rounded-full"></div>
            </div>
        `).join('');

        const response = await fetch(`/api/users/${user.id_cliente}/dashboard`);
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        const pets = data.mascotas || [];

        if (countEl) countEl.textContent = pets.length;

        renderPetsGrid(pets);
    } catch (error) {
        // Show demo pets
        renderPetsGrid([
            { nombre: 'Luna', especie: 'Dog', raza: 'Golden Retriever', edad: 3 },
            { nombre: 'Max', especie: 'Cat', raza: 'Persian', edad: 2 }
        ]);
        if (countEl) countEl.textContent = '2';
    }
}

function renderPetsGrid(pets) {
    const grid = document.getElementById('pets-grid');
    if (!grid) return;

    const petCards = pets.map((pet, index) => `
        <div class="group bg-white dark:bg-gray-800 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-1 animate-fade-in-up" style="animation-delay: ${index * 100}ms">
            <div class="h-40 bg-gradient-to-br ${pet.especie === 'Cat' ? 'from-softpink-light to-softpink dark:from-pink-dark/30 dark:to-pink/30' : 'from-lightblue-light to-lightblue dark:from-blue-dark/30 dark:to-blue/30'} flex items-center justify-center relative overflow-hidden">
                <div class="text-6xl group-hover:scale-110 transition-transform duration-300">
                    ${pet.especie === 'Cat' ? `
                        <svg class="w-20 h-20 text-pink-dark/50 dark:text-pink/50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-6.5 4c0-1.2.43-2.3 1.12-3.18L4.3 6.5C2.88 8.16 2 10.35 2 12.76c0 2.4.87 4.6 2.29 6.25l2.32-2.32C5.92 15.99 5.5 14.9 5.5 12zm13 0c0 1.2-.43 2.3-1.12 3.18l2.32 2.32c1.42-1.66 2.3-3.85 2.3-6.26 0-2.4-.87-4.6-2.29-6.25l-2.32 2.32c.68.7 1.11 1.79 1.11 2.99z"/>
                        </svg>
                    ` : `
                        <svg class="w-20 h-20 text-blue-dark/50 dark:text-lightblue/50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3.5 2c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5-1.5-.8-1.5-1.5.8-1.5 1.5-1.5zm-7 0c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5S7 9.7 7 9s.8-1.5 1.5-1.5zM18 12c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5-1.5-.8-1.5-1.5.8-1.5 1.5-1.5zM6 12c.7 0 1.5.8 1.5 1.5S6.7 15 6 15s-1.5-.8-1.5-1.5S5.3 12 6 12zm6 1c2.2 0 4 2.2 4 5 0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2 0-2.8 1.8-5 4-5z"/>
                        </svg>
                    `}
                </div>
                <!-- Status badge -->
                <span class="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                    <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Healthy
                </span>
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg text-gray-800 dark:text-white mb-1">${pet.nombre}</h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">${pet.raza || pet.especie} &bull; ${pet.edad} ${pet.edad === 1 ? 'year' : 'years'}</p>
                <button onclick="window.location.hash='#/pet-profile'" class="w-full bg-lavender-light dark:bg-lavender-dark/30 hover:bg-lavender dark:hover:bg-lavender/50 text-lavender-dark dark:text-lavender hover:text-white font-semibold py-2.5 rounded-xl transition-all duration-300">
                    View profile
                </button>
            </div>
        </div>
    `).join('');

    // Add pet card
    const addPetCard = `
        <div onclick="document.getElementById('modal-add-pet').classList.remove('hidden'); document.getElementById('modal-add-pet').classList.add('flex');"
             class="group border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl flex flex-col items-center justify-center min-h-[260px] cursor-pointer hover:border-lavender dark:hover:border-lavender hover:bg-lavender-light/20 dark:hover:bg-lavender-dark/10 transition-all duration-300 animate-fade-in-up" style="animation-delay: ${pets.length * 100}ms">
            <div class="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-lavender-light dark:group-hover:bg-lavender-dark/30 group-hover:scale-110 transition-all duration-300">
                <svg class="w-8 h-8 text-gray-400 group-hover:text-lavender transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
            </div>
            <p class="text-gray-500 dark:text-gray-400 font-medium group-hover:text-lavender transition-colors">Add new pet</p>
        </div>
    `;

    grid.innerHTML = petCards + addPetCard;
}

export function dashboardPage() {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userName = user.nombre?.split(' ')[0] || 'User';

    return `
    <section class="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

        <!-- Mobile sidebar overlay -->
        <div id="sidebar-overlay" class="hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"></div>

        <!-- SIDEBAR -->
        <aside id="dashboard-sidebar" class="fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-softpink to-pink dark:from-gray-800 dark:to-gray-900 px-6 py-8 flex flex-col justify-between transform -translate-x-full lg:translate-x-0 transition-transform duration-300 shadow-xl lg:shadow-none">
            <div>
                <!-- Logo -->
                <div class="flex items-center gap-3 mb-10">
                    <a href="#/" class="flex items-center gap-3 group">
                        <div class="w-11 h-11 rounded-2xl bg-white/30 dark:bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-white">VetCare</h2>
                    </a>
                </div>

                <!-- Navigation -->
                <nav class="flex flex-col gap-2">
                    <a href="#/user-dashboard" class="flex items-center gap-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-white p-3.5 rounded-xl font-medium shadow-lg transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                        Dashboard
                    </a>

                    <a href="#/profile" class="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/20 p-3.5 rounded-xl font-medium transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        My Profile
                    </a>

                    <a href="#/pet-profile" class="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/20 p-3.5 rounded-xl font-medium transition-all">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3.5 2c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5-1.5-.8-1.5-1.5.8-1.5 1.5-1.5zm-7 0c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5S7 9.7 7 9s.8-1.5 1.5-1.5zM18 12c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5-1.5-.8-1.5-1.5.8-1.5 1.5-1.5zM6 12c.7 0 1.5.8 1.5 1.5S6.7 15 6 15s-1.5-.8-1.5-1.5S5.3 12 6 12zm6 1c2.2 0 4 2.2 4 5 0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2 0-2.8 1.8-5 4-5z"/>
                        </svg>
                        My Pets
                    </a>

                    <a href="#/appointments" class="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/20 p-3.5 rounded-xl font-medium transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        Appointments
                    </a>

                    <a href="#/history" class="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/20 p-3.5 rounded-xl font-medium transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Medical History
                    </a>

                    <a href="#/emergencias" class="flex items-center gap-3 text-red-200 hover:text-white hover:bg-red-500/30 p-3.5 rounded-xl font-medium transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                        </svg>
                        Emergency
                    </a>
                </nav>
            </div>

            <!-- Premium box -->
            <div class="bg-white/20 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-5 text-white">
                <div class="flex items-center gap-2 mb-2">
                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <p class="font-semibold">Premium Plan</p>
                </div>
                <p class="text-white/80 text-sm mb-4">Unlimited consultations in Medellin</p>
                <button class="w-full bg-white text-pink dark:text-pink-dark py-2.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Upgrade
                </button>
            </div>
        </aside>

        <!-- MAIN CONTENT -->
        <main class="flex-1 flex flex-col min-h-screen">
            <!-- TOPBAR -->
            <header class="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 px-4 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-30">
                <!-- Mobile menu button -->
                <button id="sidebar-toggle" class="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
                
                <!-- Search bar (desktop) -->
                <div class="hidden md:flex items-center gap-3 bg-gray-100 dark:bg-gray-700 rounded-xl px-4 py-2.5 flex-1 max-w-md">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    <input type="text" placeholder="Search pets, clinics..." class="bg-transparent border-none outline-none flex-1 text-gray-700 dark:text-gray-200 placeholder-gray-400">
                </div>
                
                <div class="flex items-center gap-3">
                    <!-- Theme toggle -->
                    <button id="dashboard-theme-toggle" class="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle dark mode">
                        <svg class="w-5 h-5 text-gray-600 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400 hidden dark:block" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"/>
                        </svg>
                    </button>
                    
                    <!-- Notifications -->
                    <button class="relative p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                        <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    
                    <!-- User menu -->
                    <div class="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
                        <div class="text-right hidden sm:block">
                            <p class="text-sm font-medium text-gray-800 dark:text-white">${userName}</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Pet Owner</p>
                        </div>
                        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender to-pink flex items-center justify-center text-white font-bold">
                            ${userName.charAt(0).toUpperCase()}
                        </div>
                    </div>
                </div>
            </header>

            <!-- CONTENT -->
            <div class="flex-1 p-4 lg:p-8 overflow-y-auto">
                <!-- Header -->
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 animate-fade-in-up">
                    <div>
                        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1">Welcome back, ${userName}!</h1>
                        <p class="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            Medellin, Colombia
                        </p>
                    </div>
                    <button id="btn-add-pet" class="flex items-center gap-2 bg-gradient-to-r from-lavender to-pink hover:from-lavender-dark hover:to-pink-dark text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:shadow-glow-lavender transition-all hover:scale-105 active:scale-100">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                        Add pet
                    </button>
                </div>

                <!-- STATS -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-10 stagger-children">
                    <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 lg:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center gap-4 group">
                        <div class="w-14 h-14 bg-gradient-to-br from-lightblue-light to-lightblue dark:from-blue-dark/30 dark:to-blue/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg class="w-7 h-7 text-blue-dark dark:text-lightblue" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3.5 2c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5-1.5-.8-1.5-1.5.8-1.5 1.5-1.5zm-7 0c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5S7 9.7 7 9s.8-1.5 1.5-1.5z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-gray-500 dark:text-gray-400 text-sm">My Pets</p>
                            <h3 id="pets-count" class="text-2xl font-bold text-gray-800 dark:text-white">...</h3>
                        </div>
                    </div>

                    <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 lg:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center gap-4 group">
                        <div class="w-14 h-14 bg-gradient-to-br from-softpink-light to-softpink dark:from-pink-dark/30 dark:to-pink/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg class="w-7 h-7 text-pink-dark dark:text-softpink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-gray-500 dark:text-gray-400 text-sm">Next Appointment</p>
                            <h3 class="text-2xl font-bold text-gray-800 dark:text-white">Mar 28</h3>
                        </div>
                    </div>

                    <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 lg:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center gap-4 group sm:col-span-2 lg:col-span-1">
                        <div class="w-14 h-14 bg-gradient-to-br from-lavender-light to-lavender dark:from-lavender-dark/30 dark:to-lavender/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg class="w-7 h-7 text-lavender-dark dark:text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                            </svg>
                        </div>
                        <div>
                            <p class="text-gray-500 dark:text-gray-400 text-sm">Active Prescriptions</p>
                            <h3 class="text-2xl font-bold text-gray-800 dark:text-white">2</h3>
                        </div>
                    </div>
                </div>

                <!-- Pets Section -->
                <div class="mb-8 animate-fade-in-up" style="animation-delay: 0.2s">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">Your pets</h2>
                        <a href="#/pet-profile" class="text-lavender hover:text-lavender-dark font-medium text-sm flex items-center gap-1 transition-colors">
                            View all
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                    <div id="pets-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                        <!-- Loading skeletons -->
                        <div class="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card">
                            <div class="skeleton h-40 rounded-xl mb-4"></div>
                            <div class="skeleton skeleton-title mb-2"></div>
                            <div class="skeleton skeleton-text w-2/3 mb-4"></div>
                            <div class="skeleton h-10 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="animate-fade-in-up" style="animation-delay: 0.3s">
                    <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-6">Quick actions</h2>
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <a href="#/clinicas" class="group bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 text-center hover:-translate-y-1">
                            <div class="w-12 h-12 mx-auto mb-3 bg-lavender-light dark:bg-lavender-dark/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg class="w-6 h-6 text-lavender-dark dark:text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                </svg>
                            </div>
                            <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Find Clinic</p>
                        </a>
                        
                        <a href="#/appointments" class="group bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 text-center hover:-translate-y-1">
                            <div class="w-12 h-12 mx-auto mb-3 bg-softpink-light dark:bg-pink-dark/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg class="w-6 h-6 text-pink-dark dark:text-softpink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Book Visit</p>
                        </a>
                        
                        <a href="#/history" class="group bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 text-center hover:-translate-y-1">
                            <div class="w-12 h-12 mx-auto mb-3 bg-lightblue-light dark:bg-blue-dark/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg class="w-6 h-6 text-blue-dark dark:text-lightblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                </svg>
                            </div>
                            <p class="text-sm font-medium text-gray-700 dark:text-gray-300">View Records</p>
                        </a>
                        
                        <a href="#/emergencias" class="group bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 text-center hover:-translate-y-1">
                            <div class="w-12 h-12 mx-auto mb-3 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                </svg>
                            </div>
                            <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Emergency</p>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Logout button (mobile) -->
            <div class="lg:hidden p-4 border-t border-gray-100 dark:border-gray-800">
                <button id="logoutBtn" class="w-full flex items-center justify-center gap-2 text-red-500 hover:text-red-600 py-3 font-medium transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    Sign Out
                </button>
            </div>
        </main>
    </section>

    <!-- ADD PET MODAL -->
    <div id="modal-add-pet" class="hidden fixed inset-0 bg-black/50 backdrop-blur-sm items-center justify-center z-50 p-4">
        <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl animate-scale-in">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-bold text-gray-800 dark:text-white">Add new pet</h2>
                <button id="modal-close" class="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <form id="add-pet-form" class="space-y-4">
                <div>
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input id="pet-nombre" type="text" required placeholder="e.g. Bruno"
                        class="mt-1 w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-lavender transition-colors">
                </div>
                <div>
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Species</label>
                    <select id="pet-especie" class="mt-1 w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-lavender transition-colors">
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Breed</label>
                    <input id="pet-raza" type="text" placeholder="e.g. Labrador"
                        class="mt-1 w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-lavender transition-colors">
                </div>
                <div>
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Age (years)</label>
                    <input id="pet-edad" type="number" min="0" max="30" required
                        class="mt-1 w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-lavender transition-colors">
                </div>
                <button type="submit" class="w-full bg-gradient-to-r from-lavender to-pink hover:from-lavender-dark hover:to-pink-dark text-white py-3 rounded-xl font-semibold transition-all hover:shadow-glow-lavender">
                    Save Pet
                </button>
            </form>
        </div>
    </div>
    `;
}
