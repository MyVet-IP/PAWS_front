// frontend/src/views/vet-dashboard.js

export function vetDashboardEvents() {
  const logoutBtn = document.getElementById('btn-logout-vet');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('user');
      window.location.hash = '#/';
    });
  }
}

export function vetDashboardPage() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const clinicName = user.nombre || 'My Clinic';

  return `
  <section class="flex min-h-screen bg-surface-soft">

    <!-- SIDEBAR -->
    <aside class="w-72 bg-white shadow-card px-6 py-8 flex flex-col justify-between">

      <div>
        <div class="flex items-center gap-3 mb-10">
          <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-paws-purple to-paws-blue flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div>
            <h2 class="text-lg font-bold text-text-primary font-poppins">${clinicName}</h2>
            <p class="text-xs text-text-muted">Veterinary Clinic</p>
          </div>
        </div>

        <nav class="flex flex-col gap-2 text-text-soft">

          <a href="#/vet-dashboard" class="flex items-center gap-3 p-4 rounded-2xl bg-paws-purple/10 text-text-highlight font-medium font-poppins">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
            Dashboard
          </a>

          <a href="#/patients" class="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-100 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            Patients
          </a>

          <a href="#/appointments" class="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-100 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Appointments
          </a>

          <a href="#/clinic-settings" class="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-100 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            My Clinic
          </a>

          <a href="#/settings" class="flex items-center gap-3 p-4 rounded-2xl hover:bg-gray-100 transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Settings
          </a>

        </nav>
      </div>

      <button id="btn-logout-vet" class="btn btn-accent w-full py-3">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
        </svg>
        Sign Out
      </button>

    </aside>

    <!-- MAIN -->
    <main class="flex-1 p-8 flex gap-8">

      <!-- CENTER CONTENT -->
      <div class="flex-1">

        <!-- TOP BANNER -->
        <div class="relative rounded-3xl overflow-hidden shadow-card mb-8 bg-gradient-to-br from-paws-purple to-paws-blue">
          <div class="absolute inset-0 opacity-20">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div class="relative z-10 flex items-center justify-between px-10 py-12">
            <div>
              <h1 class="text-3xl font-bold text-text-primary font-poppins mb-2">
                Welcome back!
              </h1>
              <p class="text-text-soft">Manage your clinic and appointments</p>
            </div>

            <button class="btn bg-white text-text-highlight hover:bg-white/90 px-6">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
              Edit Profile
            </button>
          </div>
        </div>

        <!-- STATS ROW -->
        <div class="grid grid-cols-4 gap-4 mb-8">
          <div class="bg-white rounded-2xl p-5 shadow-card">
            <div class="flex items-center justify-between mb-3">
              <div class="w-10 h-10 rounded-xl bg-paws-green/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <span class="text-xs text-green-500 font-medium bg-green-50 px-2 py-1 rounded-full">+12%</span>
            </div>
            <p class="text-2xl font-bold text-text-primary font-poppins">156</p>
            <p class="text-sm text-text-muted">Total Patients</p>
          </div>

          <div class="bg-white rounded-2xl p-5 shadow-card">
            <div class="flex items-center justify-between mb-3">
              <div class="w-10 h-10 rounded-xl bg-paws-blue/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <span class="text-xs text-green-500 font-medium bg-green-50 px-2 py-1 rounded-full">+5%</span>
            </div>
            <p class="text-2xl font-bold text-text-primary font-poppins">24</p>
            <p class="text-sm text-text-muted">This Week</p>
          </div>

          <div class="bg-white rounded-2xl p-5 shadow-card">
            <div class="flex items-center justify-between mb-3">
              <div class="w-10 h-10 rounded-xl bg-paws-pink/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span class="text-xs text-orange-500 font-medium bg-orange-50 px-2 py-1 rounded-full">3 pending</span>
            </div>
            <p class="text-2xl font-bold text-text-primary font-poppins">8</p>
            <p class="text-sm text-text-muted">Today</p>
          </div>

          <div class="bg-white rounded-2xl p-5 shadow-card">
            <div class="flex items-center justify-between mb-3">
              <div class="w-10 h-10 rounded-xl bg-paws-yellow/50 flex items-center justify-center">
                <svg class="w-5 h-5 text-text-highlight" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
            <p class="text-2xl font-bold text-text-primary font-poppins">4.9</p>
            <p class="text-sm text-text-muted">Average Rating</p>
          </div>
        </div>

        <!-- GENERAL INFO -->
        <div class="bg-white p-8 rounded-3xl shadow-card mb-8">
          <h3 class="text-xl font-bold text-text-primary font-poppins mb-4">
            General Information
          </h3>
          <p class="text-text-soft leading-relaxed max-w-3xl font-roboto">
            We provide comprehensive care for pets with modern technology, specialized staff, and a focus on animal wellbeing. Our commitment is to offer precise diagnoses and close service for each patient.
          </p>
        </div>

        <!-- SERVICES -->
        <div class="bg-white p-8 rounded-3xl shadow-card mb-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-bold text-text-primary font-poppins">
              Our Services
            </h3>
            <button class="text-text-highlight text-sm font-medium hover:underline flex items-center gap-1">
              Edit services
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-paws-green/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:shadow-soft transition">
              <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-soft">
                <svg class="w-6 h-6 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <p class="text-sm font-semibold text-text-primary font-poppins">Vaccination</p>
            </div>

            <div class="bg-paws-blue/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:shadow-soft transition">
              <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-soft">
                <svg class="w-6 h-6 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <p class="text-sm font-semibold text-text-primary font-poppins">Consultation</p>
            </div>

            <div class="bg-paws-pink/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:shadow-soft transition">
              <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-soft">
                <svg class="w-6 h-6 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <p class="text-sm font-semibold text-text-primary font-poppins">X-Ray</p>
            </div>

            <div class="bg-paws-purple/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:shadow-soft transition">
              <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-soft">
                <svg class="w-6 h-6 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <p class="text-sm font-semibold text-text-primary font-poppins">Laboratory</p>
            </div>

            <div class="bg-paws-yellow/30 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:shadow-soft transition">
              <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-soft">
                <svg class="w-6 h-6 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <p class="text-sm font-semibold text-text-primary font-poppins">Surgery</p>
            </div>

            <div class="bg-paws-green/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:shadow-soft transition">
              <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-soft">
                <svg class="w-6 h-6 text-text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
              <p class="text-sm font-semibold text-text-primary font-poppins">Deworming</p>
            </div>

            <div class="col-span-2 border-2 border-dashed border-paws-purple/50 rounded-2xl p-5 flex items-center justify-center text-center hover:border-paws-purple hover:bg-paws-purple/5 transition cursor-pointer">
              <div class="flex items-center gap-2 text-text-highlight">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                <p class="text-sm font-semibold font-poppins">Add Service</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- RIGHT PANEL -->
      <aside class="w-80 flex flex-col gap-6">

        <!-- SCHEDULE -->
        <div class="bg-white p-6 rounded-3xl shadow-card">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-paws-purple/20 text-text-highlight rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-text-primary font-poppins">
              Schedule
            </h3>
          </div>

          <div class="space-y-4 text-sm font-roboto">
            <div class="flex justify-between items-center">
              <span class="text-text-primary font-medium">Monday</span>
              <span class="text-text-muted">09:00 - 20:00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-text-primary font-medium">Tuesday</span>
              <span class="text-text-muted">10:00 - 18:00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-text-primary font-medium">Wednesday</span>
              <span class="text-text-muted">10:00 - 18:00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-text-primary font-medium">Thursday</span>
              <span class="text-text-muted">10:00 - 18:00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-text-primary font-medium">Friday</span>
              <span class="text-text-muted">10:00 - 18:00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-text-primary font-medium">Saturday</span>
              <span class="text-text-muted">10:00 - 14:00</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-text-primary font-medium">Sunday</span>
              <span class="text-red-400">Closed</span>
            </div>
          </div>

          <button class="mt-6 w-full text-text-highlight text-sm font-medium hover:underline">
            Edit schedule
          </button>
        </div>

        <!-- TEAM -->
        <div class="bg-white p-6 rounded-3xl shadow-card">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-semibold text-text-primary font-poppins">Our Team</h3>
            <button class="text-text-highlight text-sm hover:underline">Add</button>
          </div>

          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-paws-green flex items-center justify-center text-sm font-medium">CC</div>
              <div>
                <p class="text-text-primary font-medium text-sm">Dr. Carlos Cardona</p>
                <p class="text-text-muted text-xs">General Veterinary</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-paws-pink flex items-center justify-center text-sm font-medium">AR</div>
              <div>
                <p class="text-text-primary font-medium text-sm">Dra. Ana Ruiz</p>
                <p class="text-text-muted text-xs">Specialist in Surgery</p>
              </div>
            </div>
          </div>
        </div>

        <!-- LOCATION -->
        <div class="bg-white p-6 rounded-3xl shadow-card">
          <h3 class="font-semibold text-text-primary font-poppins mb-4">
            Location
          </h3>
          <div class="w-full h-32 bg-paws-blue/20 rounded-2xl flex items-center justify-center mb-3">
            <svg class="w-10 h-10 text-text-highlight opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <p class="text-sm text-text-soft font-roboto">Medellin, Colombia</p>
        </div>

      </aside>

    </main>
  </section>
  `;
}