// Enhanced Landing Page with animations, dark mode, and improved UX
export function landingPage() {
    return `
<<<<<<< HEAD
<!-- Hero Section -->
<div class="bg-[#FBF8CC] min-h-screen font-roboto rounded-[3rem] mx-4 lg:mx-8 mt-1 flex items-center justify-center">
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <div class="inline-flex items-center gap-2 bg-[#FFCFD2] text-[#6A4C93] px-4 py-2 rounded-full text-xs font-semibold font-poppins">
          GUARANTEED PROFESSIONAL CARE
=======
        <div class="hero-gradient min-h-screen dark:bg-gray-900 transition-colors duration-300">
        
        <!-- Enhanced Navigation -->
        <nav class="main-nav bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50 sticky-nav backdrop-blur-xl animate-fade-in-down">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16 md:h-20">
                    <a href="#/" class="flex items-center gap-3 group">
                        <div class="w-11 h-11 bg-gradient-to-br from-lavender to-pink rounded-2xl flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-glow-lavender transition-all duration-300 group-hover:scale-105">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        <span class="text-xl font-bold text-gray-800 dark:text-white">VetCare</span>
                    </a>

                    <div class="hidden md:flex items-center gap-8">
                        <a href="#/clinicas" class="nav-link text-gray-700 dark:text-gray-300 hover:text-lavender dark:hover:text-lavender font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lavender after:transition-all hover:after:w-full">Clinics</a>
                        <a href="#/emergencias" class="nav-link text-red-500 hover:text-red-600 font-medium transition-colors flex items-center gap-1">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            Emergencies
                        </a>
                        <a href="#/tips" class="nav-link text-gray-700 dark:text-gray-300 hover:text-lavender dark:hover:text-lavender font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lavender after:transition-all hover:after:w-full">Health Tips</a>
                    </div>

                    <div class="flex items-center gap-3">
                        <!-- Dark Mode Toggle -->
                        <button id="theme-toggle" class="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle dark mode">
                            <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                            </svg>
                            <svg class="w-5 h-5 text-yellow-400 hidden dark:block" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                            </svg>
                        </button>
                        
                        <div class="hidden lg:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2.5 focus-within:ring-2 focus-within:ring-lavender/50 transition-all">
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                            <input type="text" placeholder="Search specialist..." class="bg-transparent border-none outline-none text-sm w-40 dark:text-white placeholder-gray-400">
                        </div>
                        <button id="btn-ingresar" class="btn-primary font-semibold px-6 py-2.5 rounded-full hover:scale-105 active:scale-100 transition-transform">Sign In</button>
                        
                        <!-- Mobile menu button -->
                        <button id="mobile-menu-btn" class="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800" aria-label="Menu">
                            <svg class="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-4 px-4">
                <div class="flex flex-col gap-3">
                    <a href="#/clinicas" class="px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium transition-colors">Clinics</a>
                    <a href="#/emergencias" class="px-4 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 font-medium transition-colors">Emergencies</a>
                    <a href="#/tips" class="px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium transition-colors">Health Tips</a>
                </div>
            </div>
        </nav>

        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <!-- Hero Section -->
            <div class="grid lg:grid-cols-2 gap-12 items-center hero-section">
                <div class="space-y-6 animate-fade-in-up">
                    <div class="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-lavender-light dark:from-pink-900/30 dark:to-lavender-dark/30 text-pink-600 dark:text-pink-400 px-4 py-2 rounded-full text-xs font-semibold animate-bounce-gentle">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        GUARANTEED PROFESSIONAL CARE
                    </div>

                    <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight text-balance">
                        Find the best <span class="gradient-text-animated">care</span> for your pet
                    </h1>

                    <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
                        We connect pet owners with the most qualified veterinary clinics and trusted specialists. Your best friend deserves exceptional care.
                    </p>

                    <div class="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-3xl shadow-card hover:shadow-card-hover p-2 transition-shadow duration-300">
                        <div class="flex items-center gap-2 px-4 flex-1">
                            <svg class="w-5 h-5 text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <input type="text" id="searchInput" placeholder="City or zip code" class="flex-1 border-none outline-none py-3 bg-transparent dark:text-white placeholder-gray-400">
                        </div>
                        <button id="btn-search" class="btn-primary font-semibold px-6 sm:px-8 py-3 rounded-2xl flex items-center gap-2 hover:scale-105 active:scale-100 transition-transform">
                            <span class="hidden sm:inline">Search</span>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>

                    <div class="flex items-center gap-4 pt-2">
                        <div class="flex -space-x-3">
                            <div class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 avatar-gradient-1 animate-pulse-soft shadow-lg"></div>
                            <div class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 avatar-gradient-2 animate-pulse-soft shadow-lg" style="animation-delay: 0.2s"></div>
                            <div class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 avatar-gradient-3 animate-pulse-soft shadow-lg" style="animation-delay: 0.4s"></div>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-800 dark:text-white font-semibold">+2,500 pets treated</span>
                            <span class="text-xs text-gray-500">this month in our network</span>
                        </div>
                    </div>
                </div>

                <!-- Hero Image -->
                <div class="relative animate-fade-in-up" style="animation-delay: 0.2s">
                    <div class="rounded-3xl shadow-2xl overflow-hidden relative group">
                        <div class="absolute inset-0 bg-gradient-to-t from-lavender/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <img src="./frontend/assets/images/lllll.jpg" alt="Professional veterinarian caring for pet" class="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700">

                        <!-- Floating Cards -->
                        <div class="absolute top-6 sm:top-8 right-4 sm:right-8 bg-sky-100 dark:bg-sky-900/80 rounded-2xl p-4 shadow-card max-w-[180px] sm:max-w-xs animate-float z-20 backdrop-blur-sm">
                            <div class="flex items-start gap-3">
                                <div class="w-10 h-10 bg-sky-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-bold text-gray-800 dark:text-white text-sm">Expert Care</p>
                                    <p class="text-xs text-gray-600 dark:text-gray-300">Over 500 verified clinics</p>
                                </div>
                            </div>
                        </div>

                        <div class="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 bg-rose-100 dark:bg-rose-900/80 rounded-2xl p-4 shadow-card max-w-[180px] sm:max-w-xs animate-float z-20 backdrop-blur-sm" style="animation-delay: 1.5s">
                            <div class="flex gap-1 mb-2">
                                ${[1, 2, 3, 4, 5].map(() => `
                                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                `).join('')}
                                <span class="ml-1 text-sm font-bold text-gray-800 dark:text-white">4.9/5</span>
                            </div>
                            <p class="text-xs text-gray-700 dark:text-gray-300">"The best service for my cat Luna"</p>
                        </div>
                    </div>
                    
                    <!-- Decorative elements -->
                    <div class="absolute -z-10 top-10 -right-10 w-40 h-40 bg-lavender/30 rounded-full blur-3xl"></div>
                    <div class="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-softpink/30 rounded-full blur-3xl"></div>
                </div>
            </div>

            <!-- Featured Clinics Section -->
            <section class="mt-20 md:mt-32 scroll-reveal">
                <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
                    <div>
                        <span class="text-lavender dark:text-lavender font-semibold text-sm tracking-wide uppercase mb-2 block">Top Rated</span>
                        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2 text-balance">Featured Clinics</h2>
                        <p class="text-gray-600 dark:text-gray-400 max-w-lg">We carefully select clinics with the best ratings and specialized services for your family's peace of mind.</p>
                    </div>
                    <a href="#/clinicas" class="group text-lavender hover:text-lavender-dark font-medium flex items-center gap-1 transition-colors shrink-0">
                        View all clinics
                        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>

                <div id="clinicCards" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
                    <!-- Loading skeleton -->
                    <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card">
                        <div class="skeleton h-48"></div>
                        <div class="p-6">
                            <div class="skeleton skeleton-title mb-4"></div>
                            <div class="skeleton skeleton-text w-3/4 mb-4"></div>
                            <div class="skeleton h-10 rounded-xl"></div>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card hidden sm:block">
                        <div class="skeleton h-48"></div>
                        <div class="p-6">
                            <div class="skeleton skeleton-title mb-4"></div>
                            <div class="skeleton skeleton-text w-3/4 mb-4"></div>
                            <div class="skeleton h-10 rounded-xl"></div>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card hidden lg:block">
                        <div class="skeleton h-48"></div>
                        <div class="p-6">
                            <div class="skeleton skeleton-title mb-4"></div>
                            <div class="skeleton skeleton-text w-3/4 mb-4"></div>
                            <div class="skeleton h-10 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Choose Us Section -->
            <section class="mt-20 md:mt-32 scroll-reveal">
                <div class="text-center mb-12 md:mb-16">
                    <span class="text-lavender dark:text-lavender font-semibold text-sm tracking-wide uppercase mb-2 block">Our Promise</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-balance">Why choose VetCare?</h2>
                    <p class="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">We design a stress-free experience so finding the best medical care is as easy as a walk in the park</p>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 stagger-children">
                    <!-- Feature Card 1 -->
                    <div class="group bg-white dark:bg-gray-800 rounded-3xl shadow-card hover:shadow-card-hover p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1">
                        <div class="w-16 h-16 bg-gradient-to-br from-lavender-light to-lavender dark:from-lavender-dark/30 dark:to-lavender/30 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-8 h-8 text-lavender-dark dark:text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">Verified Veterinarians</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Every specialist and clinic in our network undergoes a rigorous license and certification validation process</p>
                    </div>

                    <!-- Feature Card 2 -->
                    <div class="group bg-white dark:bg-gray-800 rounded-3xl shadow-card hover:shadow-card-hover p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1">
                        <div class="w-16 h-16 bg-gradient-to-br from-softpink-light to-softpink dark:from-pink-dark/30 dark:to-pink/30 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-8 h-8 text-pink-dark dark:text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">Instant Scheduling</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Forget endless phone calls. Book your appointment directly from our platform in seconds, 24/7</p>
                    </div>

                    <!-- Feature Card 3 -->
                    <div class="group bg-white dark:bg-gray-800 rounded-3xl shadow-card hover:shadow-card-hover p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                        <div class="w-16 h-16 bg-gradient-to-br from-lightblue-light to-lightblue dark:from-blue-dark/30 dark:to-blue/30 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-8 h-8 text-blue-dark dark:text-lightblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">Continuous Support</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Our team is available to help you find specialists or answer questions about your booking at any time</p>
                    </div>
                </div>

                <!-- CTA Banner -->
                <div class="relative bg-gradient-to-br from-lavender via-lavender-dark to-pink rounded-3xl md:rounded-[3rem] p-8 md:p-12 lg:p-16 overflow-hidden group">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" style="transition: transform 0.7s"></div>
                    
                    <div class="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-balance">Ready to give your pet the care they deserve?</h2>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onclick="window.location.hash='#/register'" class="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-medium transition-all hover:scale-105 active:scale-100 shadow-lg">
                                Start today free
                            </button>
                            <button onclick="window.location.hash='#/clinicas'" class="bg-white/90 hover:bg-white text-gray-800 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-medium transition-all hover:scale-105 active:scale-100 shadow-lg">
                                I'm a clinic
                            </button>
                        </div>
                    </div>
                    
                    <!-- Decorative elements -->
                    <div class="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 opacity-20 hidden md:block animate-heartbeat">
                        <svg class="w-32 md:w-48 h-32 md:h-48 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </div>
                    <div class="absolute left-8 bottom-8 opacity-10 hidden lg:block">
                        <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.5 9.5a5 5 0 017.92-4.06 3.5 3.5 0 110 7A5 5 0 014.5 9.5zM15.5 9.5a5 5 0 017.92-4.06 3.5 3.5 0 110 7A5 5 0 0115.5 9.5z"/>
                        </svg>
                    </div>
                </div>
            </section>
        </main>

        <!-- Enhanced Footer -->
        <footer class="bg-gray-900 dark:bg-black text-white pt-12 md:pt-16 pb-8 mt-16 md:mt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    <!-- Brand Column -->
                    <div class="col-span-2 md:col-span-1">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-lavender to-pink rounded-xl flex items-center justify-center">
                                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </div>
                            <span class="text-xl font-bold">VetCare</span>
                        </div>
                        <p class="text-gray-400 text-sm mb-6 leading-relaxed">
                            The leading platform for pet health search and management in Latin America. Your pet, our priority.
                        </p>
                        <div class="flex gap-3">
                            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-lavender rounded-xl flex items-center justify-center transition-colors" aria-label="Twitter">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-lavender rounded-xl flex items-center justify-center transition-colors" aria-label="Instagram">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Links Columns -->
                    <div>
                        <h3 class="font-bold text-lg mb-4">Platform</h3>
                        <ul class="space-y-3">
                            <li><a href="#/clinicas" class="footer-link text-gray-400 hover:text-lavender text-sm transition-colors">Find Clinics</a></li>
                            <li><a href="#/emergencias" class="footer-link text-gray-400 hover:text-lavender text-sm transition-colors">24/7 Services</a></li>
                            <li><a href="#/especialistas" class="footer-link text-gray-400 hover:text-lavender text-sm transition-colors">Specialists</a></li>
                            <li><a href="#/tips" class="footer-link text-gray-400 hover:text-lavender text-sm transition-colors">Health Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-bold text-lg mb-4">Company</h3>
                        <ul class="space-y-3">
                            <li><a href="#/nosotros" class="footer-link text-gray-400 hover:text-lavender text-sm transition-colors">About Us</a></li>
                            <li><a href="#/trabajo" class="footer-link text-gray-400 hover:text-lavender text-sm transition-colors">Work with us</a></li>
                            <li><a href="#/contacto" class="footer-link text-gray-400 hover:text-lavender text-sm transition-colors">Contact</a></li>
                            <li><a href="#/prensa" class="footer-link text-gray-400 hover:text-lavender text-sm transition-colors">Press</a></li>
                        </ul>
                    </div>

                    <div class="col-span-2 md:col-span-1">
                        <h3 class="font-bold text-lg mb-4">Subscribe</h3>
                        <p class="text-gray-400 text-sm mb-4">Receive weekly health tips for your pets.</p>
                        <form class="space-y-3">
                            <input type="email" placeholder="your@email.com" class="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-lavender transition-colors">
                            <button type="submit" class="w-full bg-gradient-to-r from-lavender to-pink hover:from-lavender-dark hover:to-pink-dark text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-100">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div class="border-t border-gray-800 pt-8">
                    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p class="text-gray-500 text-sm">2026 VetCare. All rights reserved.</p>
                        <div class="flex flex-wrap justify-center gap-4 md:gap-6">
                            <a href="#/terminos" class="text-gray-500 hover:text-lavender text-sm transition-colors">Terms & Conditions</a>
                            <a href="#/privacidad" class="text-gray-500 hover:text-lavender text-sm transition-colors">Privacy</a>
                            <a href="#/cookies" class="text-gray-500 hover:text-lavender text-sm transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Emergency FAB -->
        <button id="btn-emergency-fab" class="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 emergency-fab rounded-full shadow-lg z-40 animate-bounce-gentle hover:animate-none" aria-label="Emergencies">
            <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
        </button>

        <div id="modalsContainer"></div>
>>>>>>> develop
        </div>

        <h1 class="text-5xl md:text-6xl font-bold text-[#333333] leading-tight font-poppins">
          Elevated Care for your <span class="text-[#6A4C93]">best friend.</span>
        </h1>

        <p class="text-[#4A4A4A] text-lg font-roboto">
          We connect pet owners with the most qualified veterinary clinics and trusted specialists. 
          Your best friend deserves exceptional care.
        </p>

        <div class="flex items-center gap-3 bg-white rounded-3xl shadow-md p-2">
          <input type="text" id="searchInput" placeholder="City or zip code" 
                 class="flex-1 border-none outline-none py-3 font-roboto text-[#333333] px-4 rounded-3xl">
          <button id="btn-search" 
                  class="bg-[#B9FBC0] text-[#333333] font-poppins font-semibold px-8 py-3 rounded-3xl hover:bg-[#9FEFA8] transition">
            Search
          </button>
        </div>

        <div class="flex items-center gap-3">
          <div class="flex -space-x-2">
            <div class="w-10 h-10 rounded-full border-2 border-white bg-[#B9FBC0]"></div>
            <div class="w-10 h-10 rounded-full border-2 border-white bg-[#F1C0E8]"></div>
            <div class="w-10 h-10 rounded-full border-2 border-white bg-[#90BDF4]"></div>
          </div>
          <span class="text-sm text-[#4A4A4A] font-medium font-roboto">+2k pets treated this month</span>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-3xl shadow-2xl overflow-hidden relative">
          <img src="./frontend/assets/images/hero-pet.jpg" alt="Professional veterinarian caring for pet" class="w-full h-96 object-cover">
          <div class="absolute bottom-8 left-8 bg-[#FFCFD2] rounded-3xl p-4 shadow-md max-w-xs">
            <span class="ml-1 text-sm font-bold text-[#333333] font-poppins">4.9/5</span>
            <p class="text-xs text-[#4A4A4A] font-roboto">"The best service for my cat Luna"</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

<!-- Featured Clinics -->
<section class="mt-24 mb-16 mx-4 lg:mx-8">
  <div class="flex items-start justify-between mb-8">
    <div>
      <h2 class="text-4xl font-bold text-[#333333] mb-2 font-poppins">Featured Clinics</h2>
      <p class="text-[#4A4A4A] font-roboto">We carefully select clinics with the best ratings and<br>specialized services for your family's peace of mind.</p>
    </div>
    <a href="#/clinicas" class="text-[#6A4C93] hover:text-[#F1C0E8] font-medium flex items-center gap-1 font-poppins">
      View all clinics
    </a>
  </div>
  <div id="clinicCards" class="grid md:grid-cols-3 gap-6">
    <div class="col-span-3 text-center py-12 text-[#90BDF4] font-roboto">Loading clinics...</div>
  </div>
</section>

<!-- Why choose PAWS -->
<section class="mt-24 mb-16">
  <div class="text-center mb-16">
    <h2 class="text-3xl md:text-4xl font-semibold text-[#333333] mb-4 font-poppins">Why choose PAWS?</h2>
    <p class="text-[#4A4A4A] max-w-2xl mx-auto font-roboto">We design a stress-free experience so finding the best medical care is as easy as a walk in the park</p>
  </div>

  <div class="grid md:grid-cols-3 gap-8 mb-16">
    <div class="bg-[#FBF8CC] rounded-3xl shadow-sm p-8 text-center">
      <h3 class="text-xl font-semibold text-[#333333] mb-3 font-poppins">Verified Veterinarians</h3>
      <p class="text-[#4A4A4A] text-sm font-roboto">Every specialist and clinic undergoes rigorous validation</p>
    </div>
    <div class="bg-[#FFCFD2] rounded-3xl shadow-sm p-8 text-center">
      <h3 class="text-xl font-semibold text-[#333333] mb-3 font-poppins">Instant Scheduling</h3>
      <p class="text-[#4A4A4A] text-sm font-roboto">Book your appointment directly from our platform in seconds</p>
    </div>
    <div class="bg-[#90BDF4] rounded-3xl shadow-sm p-8 text-center">
      <h3 class="text-xl font-semibold text-[#333333] mb-3 font-poppins">Continuous Support</h3>
      <p class="text-[#4A4A4A] text-sm font-roboto">Our team is available to help you anytime</p>
    </div>
  </div>

  <div class="bg-gradient-to-br from-[#F1C0E8] to-[#B9FBC0] rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
    <div class="relative z-10 text-center max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-semibold text-[#333333] mb-8 font-poppins">Ready to give your pet<br>the care they deserve?</h2>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button onclick="window.location.hash='#/register'" class="bg-[#B9FBC0] text-[#333333] px-8 py-4 rounded-3xl font-poppins font-semibold hover:bg-[#9FEFA8] transition">Start today free</button>
        <button class="bg-white border-2 border-[#6A4C93] text-[#6A4C93] px-8 py-4 rounded-3xl font-poppins font-semibold hover:bg-[#F1C0E8] transition">I'm a clinic</button>
      </div>
    </div>
  </div>
</section>

<footer class="bg-[#F1C0E8] text-[#333333] pt-16 pb-8 font-roboto rounded-[3rem] mx-4 lg:mx-8 mb-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <div>
        <div class="flex items-center gap-2 mb-4">
          <div class="w-10 h-10 bg-[#B9FBC0] rounded-full flex items-center justify-center overflow-hidden">
            <img src="./frontend/assets/images/lllll.jpg" alt="PAWS Logo" class="w-full h-full object-cover">
          </div>
          <span class="text-xl font-bold font-poppins">PAWS</span>
        </div>
        <p class="text-[#4A4A4A] text-sm mb-6">
          The leading platform for pet health search and management in Latin America. Your pet, our priority.
        </p>
        <div class="flex gap-3">
          <a href="#twitter" class="w-10 h-10 bg-[#FFCFD2] hover:bg-[#90BDF4] rounded-full flex items-center justify-center transition" aria-label="Twitter">
            <svg class="w-5 h-5 text-[#333333]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832..."/>
            </svg>
          </a>
          <a href="#instagram" class="w-10 h-10 bg-[#FFCFD2] hover:bg-[#90BDF4] rounded-full flex items-center justify-center transition" aria-label="Instagram">
            <svg class="w-5 h-5 text-[#333333]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204..."/>
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-4 font-poppins">Platform</h3>
        <ul class="space-y-3">
          <li><a href="#/clinicas" class="text-[#4A4A4A] text-sm hover:text-[#6A4C93]">Find Clinics</a></li>
          <li><a href="#/emergencias" class="text-[#4A4A4A] text-sm hover:text-[#6A4C93]">24/7 Services</a></li>
          <li><a href="#/especialistas" class="text-[#4A4A4A] text-sm hover:text-[#6A4C93]">Specialists</a></li>
          <li><a href="#/tips" class="text-[#4A4A4A] text-sm hover:text-[#6A4C93]">Health Blog</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-4 font-poppins">Company</h3>
        <ul class="space-y-3">
          <li><a href="#/nosotros" class="text-[#4A4A4A] text-sm hover:text-[#6A4C93]">About Us</a></li>
          <li><a href="#/trabajo" class="text-[#4A4A4A] text-sm hover:text-[#6A4C93]">Work with us</a></li>
          <li><a href="#/contacto" class="text-[#4A4A4A] text-sm hover:text-[#6A4C93]">Contact</a></li>
          <li><a href="#/prensa" class="text-[#4A4A4A] text-sm hover:text-[#6A4C93]">Press</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-lg mb-4 font-poppins">Subscribe</h3>
        <p class="text-[#4A4A4A] text-sm mb-4">Receive weekly health tips for your pets.</p>
        <form>
          <input type="email" placeholder="your@email.com" 
                 class="w-full px-4 py-3 rounded-full bg-[#FBF8CC] border border-[#90BDF4] text-[#333333] placeholder-[#6A4C93] text-sm mb-3">
          <button type="submit" 
                  class="w-full bg-[#B9FBC0] hover:bg-[#9FEFA8] text-[#333333] font-semibold px-6 py-3 rounded-full transition font-poppins">
            Join
          </button>
        </form>
      </div>
    </div>

    <div class="border-t border-[#90BDF4] pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-[#4A4A4A] text-sm font-roboto">© 2026 PAWS. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#/terminos" class="text-[#4A4A4A] text-sm hover:text-[#6A4C93]">Terms & Conditions</a>
          <a href="#/privacidad" class="text-[#4A4A4A] text-sm hover:text-[#6A4C93]">Privacy</a>
          <a href="#/cookies" class="text-[#4A4A4A] text-sm hover:text-[#6A4C93]">Cookies</a>
        </div>
      </div>
    </div>
  </div>
</footer>
<div id="modalsContainer"></div>
    `;
}

export async function landingEvents() {
    const btnSearch = document.getElementById('btn-search');
<<<<<<< HEAD
=======
    const btnEmergencyFab = document.getElementById('btn-emergency-fab');
    const themeToggle = document.getElementById('theme-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Sign in button
    if (btnIngresar) {
        btnIngresar.addEventListener('click', () => {
            window.location.hash = '#/login';
        });
    }
>>>>>>> develop

    // Search button
    if (btnSearch) {
        btnSearch.addEventListener('click', () => {
            const searchInput = document.getElementById('searchInput');
            const location = searchInput?.value || '';
            window.location.hash = `#/clinicas?location=${encodeURIComponent(location)}`;
        });
    }

<<<<<<< HEAD
=======
    // Search on Enter key
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const location = searchInput.value || '';
                window.location.hash = `#/clinicas?location=${encodeURIComponent(location)}`;
            }
        });
    }

    // Emergency FAB
    if (btnEmergencyFab) {
        btnEmergencyFab.addEventListener('click', () => {
            window.location.hash = '#/emergencias';
        });
    }

    // Dark mode toggle
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

    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Initialize scroll reveal animations
    initScrollReveal();

    // Load clinics
>>>>>>> develop
    try {
        const response = await fetch('/api/clinics');
        if (response.ok) {
            const clinics = await response.json();
            renderClinicCards(clinics.slice(0, 3));
        }
    } catch (error) {
        console.error('Error loading clinics:', error);
        // Show fallback cards
        renderFallbackCards();
    }
}

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

function renderClinicCards(clinics) {
    const container = document.getElementById('clinicCards');
    if (!container || !clinics || clinics.length === 0) {
        renderFallbackCards();
        return;
    }

    container.innerHTML = clinics.map((clinic, index) => `
        <div class="group bg-white dark:bg-gray-800 rounded-3xl shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style="animation-delay: ${index * 100}ms">
            <div class="relative h-48 overflow-hidden">
                <img src="${clinic.imagen || './frontend/assets/images/lllll.jpg'}" alt="${clinic.nombre}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                ${clinic.estado === 'Activa' ? `
                    <span class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                        <span class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        Open now
                    </span>
                ` : ''}
            </div>
            <div class="p-6">
                <div class="flex items-start justify-between mb-3">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-lavender transition-colors">${clinic.nombre}</h3>
                    <div class="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-lg">
                        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">${clinic.rating || '4.9'}</span>
                    </div>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 flex items-center gap-2">
                    <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span class="truncate">${clinic.direccion || 'Medellin, Colombia'}</span>
                </p>
                <button onclick="window.location.hash='#/clinicas'" class="w-full bg-lavender-light dark:bg-lavender-dark/30 hover:bg-lavender dark:hover:bg-lavender/50 text-lavender-dark dark:text-lavender hover:text-white font-semibold py-2.5 rounded-xl transition-all duration-300">
                    View details
                </button>
            </div>
        </div>
    `).join('');
}

function renderFallbackCards() {
    const container = document.getElementById('clinicCards');
    if (!container) return;

    const fallbackClinics = [
        { nombre: 'VetCare Central', direccion: 'Poblado, Medellin', rating: '4.9' },
        { nombre: 'Happy Paws Clinic', direccion: 'Laureles, Medellin', rating: '4.8' },
        { nombre: 'Pet Health Center', direccion: 'Envigado, Medellin', rating: '4.9' }
    ];

    container.innerHTML = fallbackClinics.map((clinic, index) => `
        <div class="group bg-white dark:bg-gray-800 rounded-3xl shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-300 hover:-translate-y-1 animate-fade-in-up" style="animation-delay: ${index * 100}ms">
            <div class="relative h-48 overflow-hidden bg-gradient-to-br from-lavender-light to-softpink-light dark:from-lavender-dark/30 dark:to-pink-dark/30">
                <div class="absolute inset-0 flex items-center justify-center">
                    <svg class="w-20 h-20 text-lavender/50 dark:text-lavender/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>
            </div>
            <div class="p-6">
                <div class="flex items-start justify-between mb-3">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-lavender transition-colors">${clinic.nombre}</h3>
                    <div class="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-lg">
                        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">${clinic.rating}</span>
                    </div>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm mb-4 flex items-center gap-2">
                    <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    ${clinic.direccion}
                </p>
                <button onclick="window.location.hash='#/clinicas'" class="w-full bg-lavender-light dark:bg-lavender-dark/30 hover:bg-lavender dark:hover:bg-lavender/50 text-lavender-dark dark:text-lavender hover:text-white font-semibold py-2.5 rounded-xl transition-all duration-300">
                    View details
                </button>
            </div>
        </div>
    `).join('');
}
