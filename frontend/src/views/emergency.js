export function emergencyPage() {
    const urgencyLevels = [
        {
            value: '10',
            color: 'red',
            label: 'Critical',
            symptoms: 'Bleeding / Unresponsive / Seizures / Difficulty Breathing',
            description: 'Go to emergency immediately. Life or death situation.',
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>`,
        },
        {
            value: '5',
            color: 'orange',
            label: 'Urgent',
            symptoms: 'Vomiting / Diarrhea / Moderate Pain / Loss of Appetite',
            description: 'Requires same-day attention. Cannot wait until tomorrow.',
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>`,
        },
        {
            value: '2',
            color: 'green',
            label: 'Consultation',
            symptoms: 'Check-up / Vaccines / Routine Examination',
            description: 'Can be scheduled. Not an emergency situation.',
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>`,
        },
    ];

    const tips = [
        {
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>`,
            text: 'Keep your pet calm and in a safe place',
        },
        {
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>`,
            text: 'Call before going so they will be waiting for you',
        },
        {
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>`,
            text: 'Have your pet\'s medical history and vaccines on hand',
        },
        {
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
            </svg>`,
            text: 'Do not give food or water until the vet authorizes it',
        },
        {
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>`,
            text: 'If bleeding, apply gentle pressure with a clean cloth',
        },
    ];

    const getColorClasses = (color, variant = 'bg') => {
        const colors = {
            red: {
                bg: 'bg-red-50 dark:bg-red-900/20',
                border: 'border-red-300 dark:border-red-700',
                borderActive: 'border-red-500 dark:border-red-500',
                text: 'text-red-600 dark:text-red-400',
                dot: 'bg-red-500',
                button: 'bg-red-600 hover:bg-red-700',
            },
            orange: {
                bg: 'bg-orange-50 dark:bg-orange-900/20',
                border: 'border-orange-300 dark:border-orange-700',
                borderActive: 'border-orange-500 dark:border-orange-500',
                text: 'text-orange-600 dark:text-orange-400',
                dot: 'bg-orange-500',
                button: 'bg-orange-600 hover:bg-orange-700',
            },
            green: {
                bg: 'bg-green-50 dark:bg-green-900/20',
                border: 'border-green-300 dark:border-green-700',
                borderActive: 'border-green-500 dark:border-green-500',
                text: 'text-green-600 dark:text-green-400',
                dot: 'bg-green-500',
                button: 'bg-green-600 hover:bg-green-700',
            },
        };
        return colors[color]?.[variant] || colors.red[variant];
    };

    return `
        <div class="min-h-screen bg-gradient-to-br from-red-50 via-orange-50/50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
            
            <!-- Header -->
            <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-sm border-b border-gray-100 dark:border-gray-700">
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
                    <div class="flex items-center justify-between">
                        <div class="animate-fade-in">
                            <h1 class="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 flex items-center gap-3">
                                <div class="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg animate-pulse">
                                    <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                    </svg>
                                </div>
                                24/7 Emergency
                            </h1>
                            <p class="text-gray-600 dark:text-gray-400 mt-1 md:mt-2">Urgent veterinary care when you need it most</p>
                        </div>
                        <button onclick="window.location.hash='#/'" class="hidden md:flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                            </svg>
                            Back to home
                        </button>
                    </div>
                    <button onclick="window.location.hash='#/'" class="text-[#6A4C93] hover:text-[#333333] font-medium font-poppins transition">
                        ← Back to home
                    </button>
                </div>
            </div>

            <!-- Urgency Selector -->
            <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div class="bg-white rounded-3xl shadow-sm p-8 mb-8">
                    <h2 class="text-2xl font-bold text-[#333333] mb-6 font-poppins">How urgent is the situation?</h2>
                    <div class="space-y-4" id="urgencyOptions">

                        <label class="flex items-start gap-4 p-5 border-2 border-[#FFCFD2] rounded-3xl hover:border-[#6A4C93] cursor-pointer transition">
                            <input type="radio" name="urgency" value="10" class="mt-1.5 w-5 h-5 accent-[#6A4C93]">
                            <div class="flex-1">
                                <p class="font-bold text-[#333333] flex items-center gap-2 text-lg font-poppins">
                                    <span class="w-3 h-3 bg-[#FFCFD2] border-2 border-[#6A4C93] rounded-full"></span>
                                    Critical — Bleeding / Unresponsive / Seizures
                                </p>
                                <p class="text-sm text-[#4A4A4A] mt-1">Go to emergency immediately. Life or death situation.</p>
                            </div>
                        </label>

                        <label class="flex items-start gap-4 p-5 border-2 border-[#FFCFD2] rounded-3xl hover:border-[#6A4C93] cursor-pointer transition">
                            <input type="radio" name="urgency" value="5" class="mt-1.5 w-5 h-5 accent-[#6A4C93]">
                            <div class="flex-1">
                                <p class="font-bold text-[#333333] flex items-center gap-2 text-lg font-poppins">
                                    <span class="w-3 h-3 bg-[#90BDF4] rounded-full"></span>
                                    Urgent — Vomiting / Diarrhea / Moderate pain
                                </p>
                                <p class="text-sm text-[#4A4A4A] mt-1">Requires same-day attention. Cannot wait.</p>
                            </div>
                        </label>

                        <label class="flex items-start gap-4 p-5 border-2 border-[#FFCFD2] rounded-3xl hover:border-[#6A4C93] cursor-pointer transition">
                            <input type="radio" name="urgency" value="2" class="mt-1.5 w-5 h-5 accent-[#6A4C93]">
                            <div class="flex-1">
                                <p class="font-bold text-[#333333] flex items-center gap-2 text-lg font-poppins">
                                    <span class="w-3 h-3 bg-[#B9FBC0] rounded-full"></span>
                                    Consultation — Check-up / Vaccines / Examination
                                </p>
                                <p class="text-sm text-[#4A4A4A] mt-1">Can be scheduled. Not urgent.</p>
                            </div>
                        </label>
                    </div>

                    <button id="btn-find-emergency" class="w-full mt-6 bg-[#6A4C93] hover:bg-[#F1C0E8] text-white hover:text-[#333333] font-bold py-4 rounded-3xl transition text-lg font-poppins">
                        Find Emergency Clinics
                    </button>
                </div>

                <!-- Emergency Clinics List -->
                <div id="emergencyClinicsContainer" class="hidden mt-6 md:mt-8 animate-fade-in-up">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl md:text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <span class="w-3 h-3 rounded-full bg-green animate-pulse"></span>
                            24/7 Clinics Available
                        </h2>
                        <span id="emergency-clinic-count" class="text-sm text-gray-500 dark:text-gray-400"></span>
                    </div>
                    <div id="clinicsList" class="grid md:grid-cols-2 gap-4 md:gap-6"></div>
                </div>
            </section>

            <!-- Emergency Tips -->
            <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                <div class="card p-6 md:p-8 animate-fade-in-up" style="animation-delay: 0.5s">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-lightblue-light dark:bg-lightblue/20 flex items-center justify-center">
                            <svg class="w-5 h-5 text-blue-dark dark:text-lightblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 dark:text-white">While you get to the clinic</h3>
                            <p class="text-gray-500 dark:text-gray-400 text-sm">Important tips to help your pet</p>
                        </div>
                    </div>
                    
                    <div class="grid sm:grid-cols-2 gap-4">
                        ${tips.map((tip, i) => `
                            <div class="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-green-light/30 dark:hover:bg-green/10 transition-colors group" style="animation-delay: ${0.6 + i * 0.1}s">
                                <div class="w-10 h-10 rounded-xl bg-green-light dark:bg-green/20 flex items-center justify-center text-green-600 dark:text-green flex-shrink-0 group-hover:scale-110 transition-transform">
                                    ${tip.icon}
                                </div>
                                <p class="text-gray-700 dark:text-gray-300 pt-2">${tip.text}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Mobile Back Button -->
            <div class="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
                <button onclick="window.location.hash='#/'" class="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full shadow-card hover:shadow-card-hover transition-all font-medium">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    Home
                </button>
            </div>
        </div>

        <style>
            .urgency-option.selected {
                transform: scale(1.02);
                box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            }
            
            .urgency-option.selected .radio-dot {
                opacity: 1;
                transform: scale(1);
            }
            
            .urgency-option[data-color="red"].selected {
                border-color: rgb(239 68 68);
            }
            
            .urgency-option[data-color="orange"].selected {
                border-color: rgb(249 115 22);
            }
            
            .urgency-option[data-color="green"].selected {
                border-color: rgb(34 197 94);
            }
        </style>
    `;
}

export async function emergencyEvents() {
    // Handle urgency option selection
    const urgencyOptions = document.querySelectorAll('.urgency-option');
    urgencyOptions.forEach(option => {
        option.addEventListener('click', () => {
            urgencyOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            option.querySelector('input[type="radio"]').checked = true;
        });
    });

    const btnFind = document.getElementById('btn-find-emergency');
    const container = document.getElementById('emergencyClinicsContainer');
    const clinicsList = document.getElementById('clinicsList');
    const countEl = document.getElementById('emergency-clinic-count');

    if (btnFind) {
        btnFind.addEventListener('click', async () => {
            const selected = document.querySelector('input[name="urgency"]:checked');

            if (!selected) {
                // Show toast or alert
                const toast = document.createElement('div');
                toast.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fade-in-down';
                toast.innerHTML = `
                    <div class="flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                        </svg>
                        Please select the urgency level
                    </div>
                `;
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 3000);
                return;
            }

            // Show loading state
            btnFind.disabled = true;
            btnFind.innerHTML = `
                <svg class="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                Searching clinics...
            `;

            // Show clinics container
            if (container) {
                container.classList.remove('hidden');
            }

            // Load emergency clinics
            try {
                const response = await fetch('/api/veterinarias');
                const clinics = await response.json();

                // Filter only clinics with emergency service
                const emergencyClinics = clinics.filter(clinic =>
                    clinic.servicios_emergencia || clinic.servicios?.includes('Emergencias 24/7')
                );

                if (emergencyClinics.length === 0) {
                    clinicsList.innerHTML = `
                        <div class="col-span-full text-center py-12">
                            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">No emergency clinics found</h3>
                            <p class="text-gray-500 dark:text-gray-400">Please try calling our emergency hotline</p>
                        </div>
                    `;
                } else {
                    if (countEl) countEl.textContent = `${emergencyClinics.length} clinics found`;

                    // Render clinics
                    clinicsList.innerHTML = emergencyClinics.map((clinic, i) => `
                        <div class="card overflow-hidden hover-lift animate-fade-in-up" style="animation-delay: ${i * 0.1}s">
                            <div class="p-5 md:p-6">
                                <div class="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 class="text-lg font-bold text-gray-800 dark:text-white">${clinic.nombre}</h3>
                                        <p class="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 mt-1">
                                            <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                            ${clinic.direccion || 'Address not available'}
                                        </p>
                                    </div>
                                    <span class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">24/7</span>
                                </div>
                                
                                <div class="flex flex-col sm:flex-row gap-3">
                                    ${clinic.telefono ? `
                                        <a href="tel:${clinic.telefono}" class="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-center py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                            </svg>
                                            Call Now
                                        </a>
                                    ` : ''}
                                    <button onclick="window.location.hash='#/clinicas'" class="flex-1 border-2 border-gray-200 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-500 text-gray-700 dark:text-gray-300 hover:text-red-500 py-3 rounded-xl font-semibold transition-all">
                                        View Details
                                    </button>
                                </div>
                                
                                ${clinic.whatsapp ? `
                                    <a href="https://api.whatsapp.com/send/?phone=%2B${clinic.whatsapp}&text=EMERGENCY%20-%20I%20need%20immediate%20help&type=phone_number&app_absent=1" target="_blank"
                                        class="mt-3 flex items-center justify-center gap-2 w-full bg-green hover:bg-green-dark text-white py-3 rounded-xl font-semibold transition-all">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        WhatsApp Emergency
                                    </a>
                                ` : ''}
                            </div>
                        </div>
                    `).join('');
                }

                // Scroll to results
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });

            } catch (error) {
                console.error('Error loading emergency clinics:', error);
                clinicsList.innerHTML = `
                    <div class="col-span-full text-center py-12">
                        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">Error loading clinics</h3>
                        <p class="text-gray-500 dark:text-gray-400 mb-4">Please call our emergency hotline directly</p>
                        <a href="tel:+573001234567" class="btn-primary inline-flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            Call Emergency Line
                        </a>
                    </div>
                `;
            } finally {
                // Reset button
                btnFind.disabled = false;
                btnFind.innerHTML = `
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    Find Emergency Clinics
                `;
            }
        });
    }
}
