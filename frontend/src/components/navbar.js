import { getUser } from "../utils.js";

export function navbarController() {

  const user = getUser();

    // If user is logged in, don't show the guest navbar
    if (user) return "";

    return `
    <nav class="bg-white/80 dark:bg-dark-surface/90 backdrop-blur-md border-b border-gray-100 dark:border-dark-muted px-4 lg:px-8 py-3 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto flex items-center justify-between">

            <!-- Logo -->
            <a 
                href="#/" 
                class="flex items-center gap-2 font-poppins font-bold text-text-primary dark:text-white hover:opacity-80 transition"
            >
                <div class="w-9 h-9 bg-gradient-to-br from-paws-green to-paws-blue rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-text-highlight" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </div>
                <span class="text-lg tracking-tight">PAWS</span>
            </a>

            <!-- Navigation Links (Desktop) -->
            <div class="hidden md:flex items-center gap-1">
                <a href="#/clinics" class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-soft dark:text-gray-300 hover:text-text-primary dark:hover:text-white hover:bg-paws-green/20 dark:hover:bg-paws-green/10 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    Clinics
                </a>

                <a href="#/emergency" class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                    Emergency
                </a>

                <a href="#/services" class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-soft dark:text-gray-300 hover:text-text-primary dark:hover:text-white hover:bg-paws-purple/20 dark:hover:bg-paws-purple/10 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                    </svg>
                    Services
                </a>

                <a href="#/tips" class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-soft dark:text-gray-300 hover:text-text-primary dark:hover:text-white hover:bg-paws-yellow/30 dark:hover:bg-paws-yellow/10 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                    Health Tips
                </a>
            </div>

            <!-- Search Bar (Desktop) -->
            <div class="hidden lg:flex items-center">
                <div class="relative">
                    <svg class="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    <input 
                        type="text" 
                        placeholder="Search clinics, services..." 
                        class="w-64 pl-10 pr-4 py-2 bg-surface-muted dark:bg-dark-muted border border-gray-200 dark:border-dark-muted rounded-full text-sm text-text-primary dark:text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-paws-purple/30 dark:focus:ring-paws-green/30 focus:border-paws-purple dark:focus:border-paws-green transition"
                    />
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-3">
                <!-- Dark Mode Toggle -->
                <button 
                    id="dark-mode-toggle"
                    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-muted transition"
                    aria-label="Toggle dark mode"
                >
                    <svg id="sun-icon" class="w-5 h-5 text-text-primary dark:text-white hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                    <svg id="moon-icon" class="w-5 h-5 text-text-primary dark:text-white block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                    </svg>
                </button>

                <!-- Mobile Menu Button -->
                <button 
                    id="mobile-menu-toggle"
                    class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-muted transition"
                    aria-label="Open menu"
                >
                    <svg class="w-6 h-6 text-text-primary dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                <!-- Sign In Button -->
                <button 
                    id="btn-login"
                    class="btn btn-primary py-2 px-5 text-sm"
                >
                    Sign In
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden hidden mt-4 pb-4 border-t border-gray-100 dark:border-dark-muted pt-4">
            <div class="flex flex-col gap-1">
                <a href="#/clinics" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-text-soft hover:text-text-primary hover:bg-paws-green/20 transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    Clinics
                </a>

                <a href="#/emergency" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:text-red-600 hover:bg-red-50 transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                    Emergency
                </a>

                <a href="#/services" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-text-soft hover:text-text-primary hover:bg-paws-purple/20 transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                    </svg>
                    Services
                </a>

                <a href="#/tips" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-text-soft hover:text-text-primary hover:bg-paws-yellow/30 transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                    Health Tips
                </a>

                <!-- Mobile Search -->
                <div class="px-4 pt-3">
                    <div class="relative">
                        <svg class="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                        <input 
                            type="text" 
                            placeholder="Search clinics, services..." 
                            class="w-full pl-10 pr-4 py-3 bg-surface-muted border border-gray-200 rounded-xl text-sm placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-paws-purple/30 focus:border-paws-purple transition"
                        />
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `;
}

export function navbarEvents() {
    const loginBtn = document.getElementById("btn-login");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Initialize dark mode from localStorage or system preference
    const initDarkMode = () => {
        const savedMode = localStorage.getItem('darkMode');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedMode === 'true' || (!savedMode && prefersDark)) {
            document.documentElement.classList.add('dark');
        }
    };
    initDarkMode();

    // Dark mode toggle event
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            window.location.hash = "#/login";
        });
    }

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener("click", () => {
            const isHidden = mobileMenu.classList.contains("hidden");
            
            if (isHidden) {
                mobileMenu.classList.remove("hidden");
                mobileMenuToggle.innerHTML = `
                    <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                `;
                mobileMenuToggle.setAttribute("aria-label", "Close menu");
            } else {
                mobileMenu.classList.add("hidden");
                mobileMenuToggle.innerHTML = `
                    <svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                `;
                mobileMenuToggle.setAttribute("aria-label", "Open menu");
            }
        });
    }
}