// Enhanced Register Page with animations, dark mode, and improved UX
export function registerPage() {
    return `
    <section class="min-h-screen bg-gradient-to-br from-lavender-light/30 via-white to-softpink-light/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-8 px-4 transition-colors duration-300">
        
        <!-- Background decorations -->
        <div class="fixed inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-20 left-20 w-72 h-72 bg-lavender/10 rounded-full blur-3xl animate-float"></div>
            <div class="absolute bottom-20 right-20 w-96 h-96 bg-softpink/10 rounded-full blur-3xl animate-float" style="animation-delay: 1.5s"></div>
            <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-lightblue/10 rounded-full blur-3xl animate-pulse-soft"></div>
        </div>
        
        <main class="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-scale-in">
            
            <!-- Theme toggle -->
            <button id="register-theme-toggle" class="absolute top-4 right-4 p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10" aria-label="Toggle dark mode">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
                <svg class="w-5 h-5 text-yellow-400 hidden dark:block" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"/>
                </svg>
            </button>
            
            <!-- Header gradient bar -->
            <div class="h-2 bg-gradient-to-r from-lavender via-pink to-lightblue"></div>
            
            <div class="p-6 sm:p-8">
                <!-- Logo & Header -->
                <div class="text-center mb-8">
                    <a href="#/" class="inline-flex items-center gap-2 group mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-lavender to-pink rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow-lavender transition-all duration-300 group-hover:scale-105">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </div>
                    </a>
                    <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2">Create your account</h1>
                    <p class="text-gray-500 dark:text-gray-400">Join the VetCare community today</p>
                </div>

                <!-- Progress Steps -->
                <div class="flex justify-center items-center gap-4 sm:gap-8 mb-8">
                    <div class="flex items-center gap-2" id="step-1-indicator">
                        <span class="w-8 h-8 rounded-full bg-gradient-to-br from-lavender to-pink text-white flex items-center justify-center text-sm font-bold shadow-lg">1</span>
                        <span class="text-sm font-medium text-gray-800 dark:text-white hidden sm:inline">Information</span>
                    </div>
                    <div class="w-12 sm:w-24 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div id="progress-bar" class="h-full bg-gradient-to-r from-lavender to-pink w-0 transition-all duration-500"></div>
                    </div>
                    <div class="flex items-center gap-2" id="step-2-indicator">
                        <span class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 flex items-center justify-center text-sm font-bold transition-all duration-300">2</span>
                        <span class="text-sm font-medium text-gray-400 hidden sm:inline">Profile Type</span>
                    </div>
                </div>

                <!-- Error/Success Message -->
                <div id="form-message" class="hidden mb-6 p-4 rounded-xl text-sm animate-fade-in flex items-center gap-2"></div>

                <form id="register-form" class="space-y-6">
                    <!-- Personal Information -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                    </svg>
                                </div>
                                <input 
                                    id="name" 
                                    type="text" 
                                    placeholder="e.g. Mariana Lopez"
                                    class="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-lavender focus:ring-4 focus:ring-lavender/10 transition-all duration-200"
                                    required
                                >
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                                    </svg>
                                </div>
                                <input 
                                    id="email" 
                                    type="email" 
                                    placeholder="example@gmail.com"
                                    class="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-lavender focus:ring-4 focus:ring-lavender/10 transition-all duration-200"
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
                                    id="password" 
                                    type="password" 
                                    placeholder="Min. 8 characters"
                                    class="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-lavender focus:ring-4 focus:ring-lavender/10 transition-all duration-200"
                                    required
                                >
                            </div>
                            <!-- Password strength indicator -->
                            <div class="flex gap-1 mt-2">
                                <div id="strength-1" class="h-1 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"></div>
                                <div id="strength-2" class="h-1 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"></div>
                                <div id="strength-3" class="h-1 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"></div>
                                <div id="strength-4" class="h-1 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"></div>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                </div>
                                <input 
                                    id="confirmPassword" 
                                    type="password" 
                                    placeholder="Confirm your password"
                                    class="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-lavender focus:ring-4 focus:ring-lavender/10 transition-all duration-200"
                                    required
                                >
                            </div>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div class="relative py-4">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div class="relative flex justify-center">
                            <span class="px-4 bg-white dark:bg-gray-900 text-sm font-medium text-gray-500 dark:text-gray-400">How are you joining us?</span>
                        </div>
                    </div>
                    
                    <!-- Role Selection -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <label class="relative cursor-pointer group">
                            <input type="radio" name="role" value="user" class="peer sr-only" required>
                            <div class="border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center transition-all duration-300 peer-checked:border-lavender peer-checked:bg-lavender-light/30 dark:peer-checked:bg-lavender-dark/20 hover:border-lavender/50 hover:shadow-lg group-hover:scale-[1.02]">
                                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-lightblue-light to-lightblue dark:from-blue-dark/30 dark:to-blue/30 rounded-2xl flex items-center justify-center">
                                    <svg class="w-8 h-8 text-blue-dark dark:text-lightblue" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm3.5 2c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5-1.5-.8-1.5-1.5.8-1.5 1.5-1.5zm-7 0c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5S7 9.7 7 9s.8-1.5 1.5-1.5zM18 12c.7 0 1.5.8 1.5 1.5s-.8 1.5-1.5 1.5-1.5-.8-1.5-1.5.8-1.5 1.5-1.5zM6 12c.7 0 1.5.8 1.5 1.5S6.7 15 6 15s-1.5-.8-1.5-1.5S5.3 12 6 12zm6 1c2.2 0 4 2.2 4 5 0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2 0-2.8 1.8-5 4-5z"/>
                                    </svg>
                                </div>
                                <h3 class="font-bold text-gray-800 dark:text-white mb-2">I'm a Pet Owner</h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">I'm looking for the best services for my pet</p>
                                <div class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-lavender peer-checked:bg-lavender flex items-center justify-center transition-all">
                                    <svg class="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                        </label>
                        
                        <label class="relative cursor-pointer group">
                            <input type="radio" name="role" value="vet" class="peer sr-only">
                            <div class="border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center transition-all duration-300 peer-checked:border-lavender peer-checked:bg-lavender-light/30 dark:peer-checked:bg-lavender-dark/20 hover:border-lavender/50 hover:shadow-lg group-hover:scale-[1.02]">
                                <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-light to-green dark:from-green-dark/30 dark:to-green/30 rounded-2xl flex items-center justify-center">
                                    <svg class="w-8 h-8 text-green-dark dark:text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                    </svg>
                                </div>
                                <h3 class="font-bold text-gray-800 dark:text-white mb-2">Veterinary Clinic</h3>
                                <p class="text-xs text-gray-500 dark:text-gray-400">I want to offer my services and clinics</p>
                                <div class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-lavender peer-checked:bg-lavender flex items-center justify-center transition-all">
                                    <svg class="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                        </label>
                    </div>
                    
                    <!-- Terms checkbox -->
                    <div class="flex items-start gap-3">
                        <input type="checkbox" id="terms" class="mt-1 w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-lavender focus:ring-lavender" required>
                        <label for="terms" class="text-sm text-gray-600 dark:text-gray-400">
                            I agree to the <a href="#" class="text-lavender hover:underline">Terms of Service</a> and <a href="#" class="text-lavender hover:underline">Privacy Policy</a>
                        </label>
                    </div>
                    
                    <button type="submit" id="register-submit-btn" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-lavender to-pink hover:from-lavender-dark hover:to-pink-dark text-white font-semibold shadow-lg hover:shadow-glow-lavender transition-all duration-300 hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-2">
                        <span>Create Account</span>
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                    </button>

                    <p class="text-center text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?
                        <a href="#/login" class="text-lavender hover:text-lavender-dark font-semibold ml-1 transition-colors">
                            Sign In
                        </a>
                    </p>
                </form>
                
                <!-- Footer -->
                <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Your data is protected</span>
                    </div>
                    <div class="flex gap-4">
                        <a href="#" class="hover:text-lavender transition-colors">Terms</a>
                        <a href="#" class="hover:text-lavender transition-colors">Privacy</a>
                        <a href="#" class="hover:text-lavender transition-colors">Support</a>
                    </div>
                </div>
            </div>
        </main>
    </section>
    `;
}

export function registerEvents() {
    const registerForm = document.getElementById("register-form");
    const themeToggle = document.getElementById("register-theme-toggle");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    if (!registerForm) return;

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

    // Password strength indicator
    if (passwordInput) {
        passwordInput.addEventListener('input', (e) => {
            const password = e.target.value;
            const strength = calculatePasswordStrength(password);
            updateStrengthIndicator(strength);
        });
    }

    // Real-time password match validation
    if (confirmPasswordInput && passwordInput) {
        confirmPasswordInput.addEventListener('input', () => {
            if (confirmPasswordInput.value && confirmPasswordInput.value !== passwordInput.value) {
                confirmPasswordInput.classList.add('border-red-400');
                confirmPasswordInput.classList.remove('border-gray-200', 'dark:border-gray-700');
            } else {
                confirmPasswordInput.classList.remove('border-red-400');
                confirmPasswordInput.classList.add('border-gray-200', 'dark:border-gray-700');
            }
        });
    }

    // Update progress bar when role is selected
    document.querySelectorAll('input[name="role"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const progressBar = document.getElementById('progress-bar');
            const step2 = document.getElementById('step-2-indicator');
            if (progressBar) progressBar.style.width = '100%';
            if (step2) {
                step2.querySelector('span').classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-500');
                step2.querySelector('span').classList.add('bg-gradient-to-br', 'from-lavender', 'to-pink', 'text-white');
            }
        });
    });

    // Form submission
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const role = document.querySelector("input[name='role']:checked");
        const submitBtn = document.getElementById("register-submit-btn");

        // Validation
        if (!name || !email || !password || !confirmPassword || !role) {
            showMessage("All fields are required", false);
            return;
        }

        if (password !== confirmPassword) {
            showMessage("Passwords do not match", false);
            return;
        }

        if (password.length < 8) {
            showMessage("Password must be at least 8 characters", false);
            return;
        }

        // Show loading state
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = `
            <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Creating account...</span>
        `;
        submitBtn.disabled = true;

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role: role.value
                })
            });

            const data = await response.json();

            if (!response.ok) {
                showMessage(data.message || "Registration failed", false);
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                return;
            }

            showMessage("Account created successfully!", true);

            // Success animation
            submitBtn.innerHTML = `
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Success!</span>
            `;

            setTimeout(() => {
                window.location.hash = "#/login";
            }, 1500);

        } catch (error) {
            showMessage("Connection error. Please try again.", false);
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        }
    });
}

function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    return strength;
}

function updateStrengthIndicator(strength) {
    const colors = ['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400'];

    for (let i = 1; i <= 4; i++) {
        const bar = document.getElementById(`strength-${i}`);
        if (bar) {
            bar.classList.remove('bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400', 'bg-gray-200', 'dark:bg-gray-700');
            if (i <= strength) {
                bar.classList.add(colors[strength - 1]);
            } else {
                bar.classList.add('bg-gray-200', 'dark:bg-gray-700');
            }
        }
    }
}

function showMessage(message, success) {
    const messageEl = document.getElementById("form-message");
    if (!messageEl) return;

    messageEl.classList.remove("hidden", "bg-red-50", "dark:bg-red-900/30", "text-red-600", "dark:text-red-400", "bg-green-50", "dark:bg-green-900/30", "text-green-600", "dark:text-green-400");

    if (success) {
        messageEl.classList.add("bg-green-50", "dark:bg-green-900/30", "text-green-600", "dark:text-green-400");
        messageEl.innerHTML = `
            <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>${message}</span>
        `;
    } else {
        messageEl.classList.add("bg-red-50", "dark:bg-red-900/30", "text-red-600", "dark:text-red-400");
        messageEl.innerHTML = `
            <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
            </svg>
            <span>${message}</span>
        `;
    }
}
