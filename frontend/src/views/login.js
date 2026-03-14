export function loginPage() {
    return `
    <section class="min-h-screen bg-gradient-to-br from-pawsYellow/30 via-white to-pawsPurple/20 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 transition-colors duration-300">
        <main class="flex min-h-screen">

            <!-- LEFT - Hero Section -->
            <section class="hidden lg:flex w-1/2 bg-gradient-to-br from-pawsGreen/40 to-pawsBlue/40 dark:from-green-900/30 dark:to-blue-900/30 items-center justify-center p-12 relative overflow-hidden">
                <!-- Decorative Elements -->
                <div class="absolute top-20 left-20 w-32 h-32 bg-pawsPurple/30 rounded-full blur-3xl"></div>
                <div class="absolute bottom-20 right-20 w-48 h-48 bg-pawsGreen/30 rounded-full blur-3xl"></div>
                
                <div class="text-center max-w-md relative z-10">
                    <!-- Illustration Container -->
                    <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl mb-8">
                        <div class="text-8xl mb-4">🐾</div>
                        <div class="flex justify-center gap-4 text-5xl">
                            <span>🐕</span>
                            <span>🐈</span>
                            <span>🐰</span>
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-3 font-title">
                        We care for what you love
                    </h2>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Connecting pet owners in Medellin with the best veterinary professionals for quality care your pets deserve.
                    </p>
                    
                    <!-- Trust Badges -->
                    <div class="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <div class="flex items-center gap-2">
                            <span class="text-pawsGreen">✓</span>
                            <span>200+ Clinics</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-pawsGreen">✓</span>
                            <span>50k+ Pets</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-pawsGreen">✓</span>
                            <span>4.9 Rating</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- RIGHT - Login Form -->
            <section class="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div class="w-full max-w-md">

                    <!-- Logo & Header -->
                    <div class="flex items-center gap-3 mb-8">
                        <div class="w-12 h-12 bg-pawsGreen rounded-xl flex items-center justify-center">
                            <span class="text-2xl">🐾</span>
                        </div>
                        <div>
                            <h1 class="text-xl font-bold text-gray-800 dark:text-white font-title">MedellinVet</h1>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Pet Health Platform</p>
                        </div>
                    </div>

                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-2 font-title">Welcome back!</h2>
                    <p class="text-gray-500 dark:text-gray-400 mb-8">
                        Enter your credentials to access your account
                    </p>

                    <!-- Error Message -->
                    <div id="login-error" class="hidden mb-4 p-3 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm"></div>

                    <!-- Login Form -->
                    <form id="login-form" class="space-y-5">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <input 
                                id="login-email" 
                                type="email" 
                                placeholder="you@example.com" 
                                class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                required
                            >
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                            <input 
                                id="login-password" 
                                type="password" 
                                placeholder="Enter your password" 
                                class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                required
                            >
                        </div>

                        <div class="flex justify-between items-center">
                            <label class="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" class="w-4 h-4 accent-primary rounded">
                                <span class="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                            </label>
                            <a href="#" class="text-sm text-primary dark:text-purple-400 hover:underline font-medium">
                                Forgot password?
                            </a>
                        </div>

                        <button 
                            type="submit"
                            class="w-full py-3.5 rounded-xl bg-pawsGreen hover:bg-green-200 text-gray-800 font-semibold shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            Sign In
                            <span>→</span>
                        </button>

                        <!-- Divider -->
                        <div class="relative my-6">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-4 bg-gradient-to-br from-pawsYellow/30 via-white to-pawsPurple/20 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20 text-gray-500 dark:text-gray-400">or continue with</span>
                            </div>
                        </div>

                        <!-- Social Login -->
                        <div class="grid grid-cols-2 gap-3">
                            <button type="button" class="flex items-center justify-center gap-2 py-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <span>🌐</span>
                                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
                            </button>
                            <button type="button" class="flex items-center justify-center gap-2 py-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <span>🍎</span>
                                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Apple</span>
                            </button>
                        </div>

                        <p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
                            Don't have an account?
                            <a href="#/register" class="text-primary dark:text-purple-400 font-semibold hover:underline ml-1">Sign Up</a>
                        </p>
                    </form>

                    <!-- Footer -->
                    <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-xs text-gray-400 dark:text-gray-500">
                        <div class="flex items-center justify-center gap-4">
                            <a href="#" class="hover:text-gray-600 dark:hover:text-gray-300">Privacy</a>
                            <span>|</span>
                            <a href="#" class="hover:text-gray-600 dark:hover:text-gray-300">Terms</a>
                            <span>|</span>
                            <a href="#" class="hover:text-gray-600 dark:hover:text-gray-300">Support</a>
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
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        const errBox = document.getElementById('login-error');
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Reset error state
        errBox.classList.add('hidden');
        errBox.textContent = '';
        
        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⏳</span> Signing in...';
        submitBtn.disabled = true;

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            
            if (!res.ok) { 
                errBox.textContent = data.error || 'Invalid credentials';
                errBox.classList.remove('hidden');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                return; 
            }

            localStorage.setItem('currentUser', JSON.stringify(data));
            
            // Redirect based on role
            if (data.role === 'vet') {
                window.location.hash = '#/veterinary';
            } else {
                window.location.hash = '#/user-dashboard';
            }
        } catch {
            errBox.textContent = 'Connection error. Please try again.';
            errBox.classList.remove('hidden');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

