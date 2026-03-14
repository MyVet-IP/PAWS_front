export function Aside(role, path) {
  if (!role) return "";

  const userLinks = [
    { href: '#/user-dashboard', icon: '📊', label: 'Dashboard' },
    { href: '#/pet-profile', icon: '🐾', label: 'My Pets' },
    { href: '#/clinicas', icon: '🏥', label: 'Find Clinics' },
    { href: '#/health-tips', icon: '💡', label: 'Health Tips' },
    { href: '#/emergencias', icon: '🚨', label: 'Emergency' },
  ];

  const vetLinks = [
    { href: '#/veterinary', icon: '📊', label: 'Dashboard' },
    { href: '#/clinicas', icon: '🏥', label: 'My Clinic' },
    { href: '#/appointments', icon: '📅', label: 'Appointments' },
    { href: '#/patients', icon: '🐕', label: 'Patients' },
  ];

  const links = role === 'vet' ? vetLinks : userLinks;
  const currentPath = path || '';

  return `
    <aside class="w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 px-4 py-6 flex flex-col transition-colors duration-200">
      
      <!-- Logo -->
      <div class="flex items-center gap-3 px-3 mb-8">
        <div class="w-10 h-10 rounded-xl bg-pawsGreen flex items-center justify-center">
          <span class="text-xl">🐾</span>
        </div>
        <div>
          <h2 class="text-lg font-bold text-gray-800 dark:text-white font-title">MedellinVet</h2>
          <p class="text-xs text-gray-500 dark:text-gray-400">${role === 'vet' ? 'Clinic Panel' : 'Pet Owner'}</p>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 flex flex-col gap-1">
        ${links.map(link => {
          const isActive = currentPath === link.href.replace('#', '');
          return `
            <a 
              href="${link.href}" 
              class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-pawsGreen text-gray-800 shadow-sm' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-800 dark:hover:text-white'
                }"
            >
              <span class="text-lg">${link.icon}</span>
              <span class="text-sm">${link.label}</span>
            </a>
          `;
        }).join('')}
      </nav>

      <!-- Bottom Section -->
      <div class="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
        ${role === 'user' ? `
          <!-- Premium Upgrade Card -->
          <div class="bg-gradient-to-br from-pawsPurple to-pawsPink rounded-xl p-4 mb-4">
            <p class="font-semibold text-gray-800 text-sm mb-1">Go Premium</p>
            <p class="text-xs text-gray-600 mb-3">Unlimited consultations</p>
            <button class="w-full bg-white text-gray-800 text-sm font-semibold py-2 rounded-lg hover:shadow-md transition-all">
              Upgrade Now
            </button>
          </div>
        ` : ''}
        
        <!-- Help Link -->
        <a 
          href="#/help" 
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <span class="text-lg">❓</span>
          <span class="text-sm">Help & Support</span>
        </a>
      </div>
    </aside>
  `;
}
