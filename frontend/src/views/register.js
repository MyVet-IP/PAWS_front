export function registerPage() {
    return `
    <section class="min-h-screen bg-gradient-to-br from-pawsPurple/20 via-white to-pawsBlue/20 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20 py-8 px-4 transition-colors duration-300">
        <main class="bg-white dark:bg-gray-800 rounded-3xl shadow-xl w-full max-w-xl mx-auto p-8 transition-colors duration-200">

            <!-- Header -->
            <div class="text-center mb-8">
                <div class="mx-auto w-16 h-16 rounded-2xl bg-pawsGreen flex items-center justify-center mb-4 shadow-lg">
                    <span class="text-3xl">🐾</span>
                </div>
                <h1 class="text-3xl font-bold text-gray-800 dark:text-white font-title">Create your account</h1>
                <p class="text-gray-500 dark:text-gray-400 mt-2">Join the MedellinVet community</p>
            </div>

            <!-- Progress Steps -->
            <div class="flex justify-center items-center gap-4 mb-8">
                <div class="flex items-center gap-2">
                    <span class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">1</span>
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Information</span>
                </div>
                <div class="w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                <div class="flex items-center gap-2">
                    <span class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 flex items-center justify-center text-sm font-semibold">2</span>
                    <span class="text-sm text-gray-400 dark:text-gray-500">Profile Type</span>
                </div>
            </div>

            <!-- Error/Success Message -->
            <div id="form-message" class="hidden mb-4 p-3 rounded-xl text-sm"></div>

            <form id="register-form" class="space-y-5">

                <!-- Name & Email Row -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="e.g. Mariana Lopez"
                            class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            required
                        >
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="you@example.com"
                            class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            required
                        >
                    </div>
                </div>

                <!-- Password Row -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            placeholder="Min. 8 characters"
                            class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            required
                        >
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
                        <input 
                            id="confirmPassword" 
                            type="password" 
                            placeholder="Repeat password"
                            class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            required
                        >
                    </div>
                </div>

                <!-- Divider -->
                <div class="relative py-4">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div class="relative flex justify-center">
                        <span class="px-4 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400">How are you joining us?</span>
                    </div>
                </div>

                <!-- Role Selection -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label class="role-card cursor-pointer">
                        <input type="radio" name="role" value="user" class="hidden peer" required>
                        <div class="border-2 border-gray-200 dark:border-gray-600 rounded-2xl p-5 text-center transition-all hover:border-pawsGreen hover:shadow-md peer-checked:border-pawsGreen peer-checked:bg-pawsGreen/10 dark:peer-checked:bg-pawsGreen/20">
                            <div class="text-4xl mb-3">🐕</div>
                            <h3 class="font-semibold text-gray-800 dark:text-white">Pet Owner</h3>
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Find the best care for my pets</p>
                        </div>
                    </label>
                    
                    <label class="role-card cursor-pointer">
                        <input type="radio" name="role" value="vet" class="hidden peer">
                        <div class="border-2 border-gray-200 dark:border-gray-600 rounded-2xl p-5 text-center transition-all hover:border-pawsPurple hover:shadow-md peer-checked:border-pawsPurple peer-checked:bg-pawsPurple/10 dark:peer-checked:bg-pawsPurple/20">
                            <div class="text-4xl mb-3">🩺</div>
                            <h3 class="font-semibold text-gray-800 dark:text-white">Veterinary Clinic</h3>
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Offer my professional services</p>
                        </div>
                    </label>
                </div>

                <!-- Terms Checkbox -->
                <div class="flex items-start gap-3 mt-4">
                    <input type="checkbox" id="terms" class="w-5 h-5 accent-primary mt-0.5 rounded" required>
                    <label for="terms" class="text-sm text-gray-600 dark:text-gray-400">
                        I agree to the <a href="#" class="text-primary dark:text-purple-400 hover:underline">Terms of Service</a> and <a href="#" class="text-primary dark:text-purple-400 hover:underline">Privacy Policy</a>
                    </label>
                </div>

                <!-- Submit Button -->
                <button 
                    type="submit" 
                    class="w-full mt-6 bg-primary hover:bg-primary-dark text-white cursor-pointer rounded-xl py-3.5 font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                    Create Account
                    <span>→</span>
                </button>

                <p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                    Already have an account?
                    <a href="#/login" class="text-primary dark:text-purple-400 font-semibold hover:underline ml-1">Sign In</a>
                </p>

                <!-- Footer -->
                <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                    <div class="flex items-center gap-2">
                        <span class="text-pawsGreen">🔒</span>
                        <span>Your data is protected</span>
                    </div>
                    <div class="flex gap-4">
                        <a href="#" class="hover:text-gray-600 dark:hover:text-gray-300">Terms</a>
                        <a href="#" class="hover:text-gray-600 dark:hover:text-gray-300">Privacy</a>
                    </div>
                </div>

            </form>
        </main>
    </section>
    `;
}

export function registerEvents() {
    const registerForm = document.getElementById("register-form");
    const registerMessage = document.getElementById("form-message");

    if (!registerForm) return;

    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const role = document.querySelector("input[name='role']:checked");
        const terms = document.getElementById("terms").checked;
        const submitBtn = registerForm.querySelector('button[type="submit"]');

        // Validation
        if (!name || !email || !password || !confirmPassword) {
            showMessage(registerMessage, "All fields are required", false);
            return;
        }

        if (!role) {
            showMessage(registerMessage, "Please select how you're joining us", false);
            return;
        }

        if (!terms) {
            showMessage(registerMessage, "Please agree to the Terms of Service", false);
            return;
        }

        if (password.length < 8) {
            showMessage(registerMessage, "Password must be at least 8 characters", false);
            return;
        }

        if (password !== confirmPassword) {
            showMessage(registerMessage, "Passwords do not match", false);
            return;
        }

        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⏳</span> Creating account...';
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
                showMessage(registerMessage, data.message || "Registration failed", false);
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                return;
            }

            showMessage(registerMessage, "Account created successfully! Redirecting...", true);

            setTimeout(() => {
                window.location.hash = "#/login";
            }, 1500);

        } catch (error) {
            showMessage(registerMessage, "Connection error. Please try again.", false);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

function showMessage(element, message, success) {
    if (!element) return;
    
    element.classList.remove("hidden");
    element.className = `mb-4 p-3 rounded-xl text-sm ${
        success 
            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800" 
            : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800"
    }`;
    element.textContent = message;
    
    // Scroll to message
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
