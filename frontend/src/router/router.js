import { clinicsPage } from "../views/clinics-view.js";
import { petProfilepage } from "../views/pet-profile.js";
import { loginPage, loginEvents } from "../views/login.js";
import { landingPage, landingEvents } from "../views/landing-page.js";
import { emergencyPage, emergencyEvents } from "../views/emergency.js";
import { registerPage, registerEvents } from "../views/register.js";
import { dashboardPage, dashboardEvents } from "../views/user-dashboard.js";
import { vetDashboardPage, vetDashboardEvents } from "../views/vet-dashboard.js";
import { healthTipsPage, healthTipsEvents } from "../views/health-tips.js";
import { loadMapPage, loadMapEvents } from "../views/map-page.js";
import { Layout } from "../layout/layout.js";

// Route configuration with metadata
const routes = {
  "/": { view: landingPage, events: landingEvents, role: "guest" },
  "/login": { view: loginPage, events: loginEvents, role: "guest" },
  "/register": { view: registerPage, events: registerEvents, role: "guest" },
  "/clinicas": { view: clinicsPage, events: null, role: "user" },
  "/emergencias": { view: emergencyPage, events: emergencyEvents, role: "user" },
  "/pet-profile": { view: petProfilepage, events: null, role: "user" },
  "/veterinary": { view: vetDashboardPage, events: vetDashboardEvents, role: "vet" },
  "/user-dashboard": { view: dashboardPage, events: dashboardEvents, role: "user" },
  "/health-tips": { view: healthTipsPage, events: healthTipsEvents, role: "user" },
  "/map-page": { view: loadMapPage, events: loadMapEvents, role: "user" },
};

// Get current user role from localStorage
function getCurrentRole() {
  const user = localStorage.getItem('currentUser');
  if (user) {
    try {
      const parsed = JSON.parse(user);
      return parsed.role || 'user';
    } catch {
      return 'user';
    }
  }
  return null;
}

export function router() {
  const path = window.location.hash.slice(1) || "/";
  const app = document.getElementById("app");

  const route = routes[path];

  try {
    if (route) {
      const currentRole = getCurrentRole();
      const viewContent = route.view();
      
      // Determine if we should use layout (authenticated routes)
      const isGuestRoute = route.role === "guest";
      const effectiveRole = isGuestRoute ? "guest" : (currentRole || "user");
      
      // Wrap with layout for authenticated routes
      if (isGuestRoute) {
        app.innerHTML = viewContent;
      } else {
        app.innerHTML = Layout(viewContent, effectiveRole, path);
      }
      
      // Initialize page events
      pageEvents();
      
      // Call route-specific events
      if (route.events) {
        route.events();
      }

    } else {
      // 404 Page
      app.innerHTML = `
        <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
          <div class="text-center">
            <div class="text-6xl mb-4">🐾</div>
            <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-2 font-title">Page Not Found</h1>
            <p class="text-gray-500 dark:text-gray-400 mb-6">The page you're looking for doesn't exist.</p>
            <a href="#/" class="inline-flex items-center gap-2 bg-pawsGreen text-gray-800 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              Go Home
            </a>
          </div>
        </div>
      `;
    }
  } catch (error) {
    console.error("Error loading view:", error);
    app.innerHTML = `
      <div class="min-h-screen flex items-center justify-center bg-red-50 dark:bg-red-900/20 p-8">
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-lg w-full">
          <div class="text-4xl mb-4">⚠️</div>
          <h2 class="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Error Loading View</h2>
          <pre class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-auto text-gray-800 dark:text-gray-200">${error.message}</pre>
          <a href="#/" class="mt-4 inline-block text-primary dark:text-purple-400 hover:underline">Return Home</a>
        </div>
      </div>
    `;
  }
}

// Function to initialize navigation events
function pageEvents() {
  // Landing page navigation buttons
  const loginBtn = document.querySelector('.btn-primary');
  const searchBtn = document.querySelector('button[class*="btn-primary"]:has(svg)');

  if (loginBtn && loginBtn.textContent.includes('Sign In')) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '#/login';
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '#/clinicas';
    });
  }

  // Navbar links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href !== '#') {
        window.location.hash = href;
      }
    });
  });
}
