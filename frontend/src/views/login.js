// Enhanced Login Page with animations, dark mode, and improved UX
export function loginPage() {
    return `
    <section class="min-h-screen bg-gradient-to-br from-lavender-light/50 via-white to-softpink-light/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <main class="flex min-h-screen">

            <!-- LEFT PANEL - Decorative -->
            <section class="hidden lg:flex w-1/2 bg-gradient-to-br from-green-light to-lightblue dark:from-gray-800 dark:to-gray-900 items-center justify-center relative overflow-hidden">
                <!-- Background decoration -->
                <div class="absolute inset-0 overflow-hidden">
                    <div class="absolute top-20 left-20 w-64 h-64 bg-lavender/20 rounded-full blur-3xl animate-float"></div>
                    <div class="absolute bottom-20 right-20 w-80 h-80 bg-softpink/20 rounded-full blur-3xl animate-float" style="animation-delay: 1s"></div>
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lightblue/20 rounded-full blur-3xl animate-pulse-soft"></div>
                </div>
                
                <div class="relative z-10 text-center max-w-md px-8 animate-fade-in-up">
                    <!-- 3D-like card -->
                    <div class="bg-gradient-to-br from-teal-600 to-teal-800 dark:from-gray-700 dark:to-gray-800 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 mb-8">
                        <div class="w-32 h-32 mx-auto bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <svg class="w-20 h-20 text-white/90 animate-heartbeat" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                        
                        <!-- Pet silhouettes -->
                        <div class="flex justify-center gap-4 mt-6">
                            <div class="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                                <svg class="w-10 h-10 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3.5 2c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5-1.5-.8-1.5-1.5.8-1.5 1.5-1.5zm-7 0c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5S7 9.7 7 9s.8-1.5 1.5-1.5zM18 12c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5-1.5-.8-1.5-1.5.8-1.5 1.5-1.5zM6 12c.7 0 1.5.8 1.5 1.5S6.7 15 6 15s-1.5-.8-1.5-1.5S5.3 12 6 12zm6 1c2.2 0 4 2.2 4 5 0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2 0-2.8 1.8-5 4-5z"/>
                                </svg>
                            </div>
                            <div class="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                                <svg class="w-10 h-10 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-6.5 4c0-1.2.43-2.3 1.12-3.18L4.3 6.5C2.88 8.16 2 10.35 2 12.76c0 2.4.87 4.6 2.29 6.25l2.32-2.32C5.92 15.99 5.5 14.9 5.5 12zm13 0c0 1.2-.43 2.3-1.12 3.18l2.32 2.32c1.42-1.66 2.3-3.85 2.3-6.26 0-2.4-.87-4.6-2.29-6.25l-2.32 2.32c.68.7 1.11 1.79 1.11 2.99z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3 animate-fade-in-up" style="animation-delay: 0.2s">
                        We care for what you love
                    </h2>
                    <p class="text-gray-600 dark:text-gray-400 animate-fade-in-up" style="animation-delay: 0.3s">
                        Connecting pet owners in Medellin with the best veterinary professionals
                    </p>
                    
                    <!-- Trust badges -->
                    <div class="flex justify-center gap-6 mt-8 animate-fade-in-up" style="animation-delay: 0.4s">
                        <div class="text-center">
                            <p class="text-2xl font-bold text-gray-800 dark:text-white">500+</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Verified Clinics</p>
                        </div>
                        <div class="w-px bg-gray-300 dark:bg-gray-600"></div>
                        <div class="text-center">
                            <p class="text-2xl font-bold text-gray-800 dark:text-white">50k+</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Happy Pets</p>
                        </div>
                        <div class="w-px bg-gray-300 dark:bg-gray-600"></div>
                        <div class="text-center">
                            <p class="text-2xl font-bold text-gray-800 dark:text-white">4.9</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Star Rating</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- RIGHT PANEL - Login Form -->
            <section class="w-full lg:w-1/2 bg-white dark:bg-gray-900 flex items-center justify-center px-4 sm:px-8 py-12 relative">
                <!-- Theme toggle -->
                <button id="login-theme-toggle" class="absolute top-6 right-6 p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle dark mode">
                    <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                    </svg>
                    <svg class="w-5 h-5 text-yellow-400 hidden dark:block" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                    </svg>
                </button>
                
                <div class="w-full max-w-md animate-fade-in-up">
                    <!-- Logo & Header -->
                    <div class="flex items-center gap-3 mb-8">
                        <a href="#/" class="flex items-center gap-2 group">
                            <div class="w-10 h-10 bg-gradient-to-br from-lavender to-pink rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow-lavender transition-shadow">
                                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </div>
                            <span class="font-bold text-xl text-gray-800 dark:text-white">VetCare</span>
                        </a>
                        <span class="px-3 py-1 rounded-full bg-lightblue-light dark:bg-lightblue-dark/30 text-lightblue-dark dark:text-lightblue text-xs font-semibold">
                            Pet Health Platform
                        </span>
                    </div>
                    
                    <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-2">Welcome back!</h1>
                    <p class="text-gray-500 dark:text-gray-400 mb-8">
                        Enter your credentials to access your account
                    </p>
                    
                    <!-- Error message -->
                    <div id="login-error" class="hidden mb-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm animate-fade-in flex items-center gap-2">
                        <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                        </svg>
                        <span id="login-error-text"></span>
                    </div>
                    
                    <!-- Login Form -->
                    <form id="login-form" class="space-y-5">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                                    </svg>
                                </div>
                                <input 
                                    id="login-email" 
                                    type="email" 
                                    placeholder="mail@example.com" 
                                    class="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-lavender dark:focus:border-lavender focus:ring-4 focus:ring-lavender/10 transition-all duration-200" 
                                    required
                                >
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                    </svg>
                                </div>
                                <input 
                                    id="login-password" 
                                    type="password" 
                                    placeholder="Enter your password" 
                                    class="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-lavender dark:focus:border-lavender focus:ring-4 focus:ring-lavender/10 transition-all duration-200" 
                                    required
                                >
                                <button type="button" id="toggle-password" class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                    <svg class="w-5 h-5 eye-open" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                    </svg>
                                    <svg class="w-5 h-5 eye-closed hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="flex justify-between items-center">
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-lavender focus:ring-lavender">
                                <span class="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                            </label>
                            <a href="#" class="text-sm text-lavender hover:text-lavender-dark font-medium transition-colors">
                                Forgot your password?
                            </a>
                        </div>
                        
                        <button type="submit" id="login-submit-btn" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-lavender to-pink hover:from-lavender-dark hover:to-pink-dark text-white font-semibold shadow-lg hover:shadow-glow-lavender transition-all duration-300 hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-2">
                            <span>Sign In</span>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                            </svg>
                        </button>
                        
                        <!-- Divider -->
                        <div class="relative my-6">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-4 bg-white dark:bg-gray-900 text-gray-500">Or continue with</span>
                            </div>
                        </div>
                        
                        <!-- Social login -->
                        <div class="grid grid-cols-2 gap-4">
                            <button type="button" class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <svg class="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
                            </button>
                            <button type="button" class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <svg class="w-5 h-5 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                                </svg>
                                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Apple</span>
                            </button>
                        </div>
                        
                        <p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                            Don't have an account?
                            <a href="#/register" class="text-lavender hover:text-lavender-dark font-semibold ml-1 transition-colors">
                                Sign Up
                            </a>
                        </p>
                    </form>
                    
                    <!-- Footer -->
                    <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-400">
                        <span>VetCare 2026</span>
                        <div class="flex gap-4">
                            <a href="#" class="hover:text-lavender transition-colors">Privacy</a>
                            <a href="#" class="hover:text-lavender transition-colors">Terms</a>
                            <a href="#" class="hover:text-lavender transition-colors">Support</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </section>
    `;
}

export function loginEvents() {
    const form = document.getElementById('login-form');
    const themeToggle = document.getElementById('login-theme-toggle');
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('login-password');

    if (!form) return;

<<<<<<< HEAD
    // loginEvents dentro de login.js
=======
    // Theme toggle
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

    // Password visibility toggle
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            const eyeOpen = togglePassword.querySelector('.eye-open');
            const eyeClosed = togglePassword.querySelector('.eye-closed');

            if (type === 'text') {
                eyeOpen.classList.add('hidden');
                eyeClosed.classList.remove('hidden');
            } else {
                eyeOpen.classList.remove('hidden');
                eyeClosed.classList.add('hidden');
            }
        });
    }

    // Form submission
>>>>>>> develop
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        const errBox = document.getElementById('login-error');
        const errText = document.getElementById('login-error-text');
        const submitBtn = document.getElementById('login-submit-btn');

        // Hide previous errors
        errBox.classList.add('hidden');

        // Show loading state
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = `
            <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Signing in...</span>
        `;
        submitBtn.disabled = true;

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                errText.textContent = data.error || 'Invalid credentials';
                errBox.classList.remove('hidden');
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                return;
            }

<<<<<<< HEAD
            // Guardar sesión
            localStorage.setItem('user', JSON.stringify(data));

            // Redirigir según rol
            if(data.role === "owner"){
                window.location.hash = "#/user-dashboard";
            }
            if(data.role === "vet"){
                window.location.hash = "#/veterinary";
            }
            if(data.role === "admin"){
                window.location.hash = "#/admin-dashboard"; // si luego creas esta vista
            }
        } catch {
            errBox.textContent = 'Connection error. Please try again.';
        }
});

}
=======
            localStorage.setItem('currentUser', JSON.stringify(data));

            // Success animation
            submitBtn.innerHTML = `
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Success!</span>
            `;

            setTimeout(() => {
                window.location.hash = data.role === 'vet' ? '#/veterinary' : '#/user-dashboard';
            }, 500);

        } catch (error) {
            errText.textContent = 'Connection error. Please try again.';
            errBox.classList.remove('hidden');
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        }
    });
}
>>>>>>> develop
