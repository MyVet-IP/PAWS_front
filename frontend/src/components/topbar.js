import { getTheme } from "../utils.js";

export function Topbar(role, currentPath) {
  if (!role) return "";

  const isDark = getTheme() === 'dark';
  const pathTitle = getPathTitle(currentPath);

  return `
    <header class="topbar bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between transition-colors duration-200">
      <!-- Left: Breadcrumb -->
      <div class="flex items-center gap-3">
        <div>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Welcome back, ${role === "vet" ? "Doctor" : "User"}
          </p>
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white font-title">
            ${pathTitle}
          </h2>
        </div>
      </div>

      <!-- Right: Actions -->
      <div class="flex items-center gap-3">
        <!-- Theme Toggle -->
        <button 
          id="themeToggle" 
          class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-pawsPurple dark:hover:bg-purple-900 flex items-center justify-center transition-all duration-200 hover:scale-105"
          aria-label="Toggle theme"
        >
          <span id="themeIcon" class="text-lg">
            ${isDark ? '☀️' : '🌙'}
          </span>
        </button>

        <!-- Notifications -->
        <button 
          class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-pawsBlue dark:hover:bg-blue-900 flex items-center justify-center transition-all duration-200 relative"
          aria-label="Notifications"
        >
          <span class="text-lg">🔔</span>
          <span class="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">2</span>
        </button>

        <!-- Profile -->
        <div class="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
          <div class="w-10 h-10 rounded-full bg-pawsGreen flex items-center justify-center">
            <span class="text-lg">${role === "vet" ? "🩺" : "👤"}</span>
          </div>
          <button 
            id="logoutBtn" 
            class="btn btn-ghost text-sm text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  `;
}

function getPathTitle(path) {
  const titles = {
    '/user-dashboard': 'Dashboard',
    '/veterinary': 'Clinic Dashboard',
    '/pet-profile': 'My Pets',
    '/clinicas': 'Find Clinics',
    '/emergencias': 'Emergency',
    '/health-tips': 'Health Tips',
    '/map': 'Clinic Map',
  };
  return titles[path] || 'Dashboard';
}

export function initTopbarEvents() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const logoutBtn = document.getElementById('logoutBtn');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const { toggleTheme, getTheme } = window.pawsUtils || {};
      if (toggleTheme) {
        toggleTheme();
        const newTheme = getTheme();
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      window.location.hash = '#/login';
    });
  }
}
