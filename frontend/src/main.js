import { router } from "./router/router.js";
import { navbarController } from "./components/navbar.js";
import { initTopbarEvents } from "./components/topbar.js";
import { 
  showToast, 
  showLoading, 
  hideLoading, 
  initTheme, 
  toggleTheme, 
  getTheme, 
  setTheme 
} from "./utils.js";

// Expose theme utilities globally for components
window.pawsUtils = {
  toggleTheme,
  getTheme,
  setTheme,
  showToast
};

// Global functions for HTML
window.viewClinicDetails = function (clinicId) {
  showToast(`Viewing clinic ${clinicId}`, 'info');
  console.log('View clinic details:', clinicId);
};

window.bookAppointment = function (clinicId) {
  showLoading();
  setTimeout(() => {
    hideLoading();
    showToast('Appointment booked successfully!', 'success');
  }, 1500);
};

window.searchClinics = function () {
  const input = document.getElementById('search-location');
  if (input) {
    const location = input.value;
    if (location.trim()) {
      window.location.hash = `#/clinicas?location=${encodeURIComponent(location)}`;
    } else {
      window.location.hash = '#/clinicas';
    }
  }
};

// Initialize application
function initApp() {
  console.log('MedellinVet App initialized');

  // Initialize theme
  initTheme();

  // Load router
  router();

  // Initialize controllers
  navbarController;
}

// After route change, reinitialize topbar events
function onRouteChange() {
  router();
  // Small delay to ensure DOM is ready
  requestAnimationFrame(() => {
    initTopbarEvents();
  });
}

// Event listeners
window.addEventListener("DOMContentLoaded", initApp);
window.addEventListener("load", () => {
  router();
  initTopbarEvents();
});
window.addEventListener("hashchange", onRouteChange);
