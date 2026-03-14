export function healthTipsPage() {
  const tips = [
    {
      category: 'Nutrition',
      color: 'pawsGreen',
      icon: '🥦',
      title: 'Balanced Diet for Your Pet',
      description: 'A proper diet is the foundation of your pet\'s health. Make sure to provide age-appropriate food with the right balance of proteins, carbohydrates, and fats.',
      tips: ['Choose food appropriate for your pet\'s life stage', 'Avoid giving human food — many are toxic to pets', 'Always keep fresh water available', 'Measure portions to prevent obesity']
    },
    {
      category: 'Exercise',
      color: 'pawsBlue',
      icon: '🏃',
      title: 'Keep Them Active & Happy',
      description: 'Regular physical activity prevents obesity, strengthens muscles, and improves your pet\'s mental wellbeing. Each species has different needs.',
      tips: ['Dogs need at least 30 min of exercise daily', 'Cats benefit from interactive toys and climbing structures', 'Avoid intense exercise in extreme heat', 'Introduce new activities gradually']
    },
    {
      category: 'Preventive Care',
      color: 'pawsPurple',
      icon: '💉',
      title: 'Vaccines & Deworming',
      description: 'Prevention is always better than cure. Keeping your pet\'s vaccination schedule up to date protects them and the whole family.',
      tips: ['Schedule annual vaccine boosters', 'Deworm every 3 months for dogs and cats', 'Use flea and tick prevention year-round', 'Keep a health record for your pet']
    },
    {
      category: 'Dental Health',
      color: 'pawsYellow',
      icon: '🦷',
      title: 'Don\'t Ignore Their Teeth',
      description: 'Dental disease affects over 80% of pets by age 3. Good oral hygiene prevents pain, infections, and even heart disease.',
      tips: ['Brush teeth 2-3 times per week', 'Offer dental chews approved by vets', 'Schedule annual dental cleanings', 'Watch for bad breath — it\'s a warning sign']
    },
    {
      category: 'Mental Wellbeing',
      color: 'pawsPink',
      icon: '🧠',
      title: 'Emotional Health Matters Too',
      description: 'Pets experience stress, anxiety, and boredom. A stimulating environment and quality time with you are essential for their emotional balance.',
      tips: ['Provide enrichment toys and puzzles', 'Maintain consistent daily routines', 'Socialize puppies and kittens early', 'Never punish — use positive reinforcement']
    },
    {
      category: 'Grooming',
      color: 'pawsGreen',
      icon: '✂️',
      title: 'Grooming is Health Care',
      description: 'Regular grooming does more than keep your pet looking great. It helps you detect lumps, skin issues, or parasites before they become serious.',
      tips: ['Brush coat weekly to prevent matting', 'Trim nails every 3-4 weeks', 'Clean ears monthly to prevent infections', 'Check skin for unusual lumps or redness']
    }
  ];

  const colorMap = {
    pawsGreen: { bg: 'bg-pawsGreen', text: 'text-green-800', darkText: 'dark:text-green-200' },
    pawsBlue: { bg: 'bg-pawsBlue', text: 'text-blue-800', darkText: 'dark:text-blue-200' },
    pawsPurple: { bg: 'bg-pawsPurple', text: 'text-purple-800', darkText: 'dark:text-purple-200' },
    pawsYellow: { bg: 'bg-pawsYellow', text: 'text-yellow-800', darkText: 'dark:text-yellow-200' },
    pawsPink: { bg: 'bg-pawsPink', text: 'text-pink-800', darkText: 'dark:text-pink-200' },
  };

  const seasonalTips = [
    { season: 'Spring', icon: '🌸', tip: 'Watch for seasonal allergies and increase grooming frequency', color: 'pawsPink' },
    { season: 'Summer', icon: '☀️', tip: 'Hydration is critical. Never leave pets in parked cars', color: 'pawsYellow' },
    { season: 'Rainy Season', icon: '🌧️', tip: 'Check for fungal infections and keep paws dry after walks', color: 'pawsBlue' },
    { season: 'Year-Round', icon: '🌿', tip: 'In Medellin\'s climate, mosquito prevention is always needed', color: 'pawsGreen' }
  ];

  return `
    <div class="p-6 lg:p-8">

      <!-- Filter Bar -->
      <div class="flex flex-wrap gap-2 mb-8">
        <span class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide py-2">Filter:</span>
        <button class="filter-pill active px-4 py-2 rounded-full text-sm font-medium bg-primary text-white border-2 border-primary transition-all" data-filter="all">
          All Topics
        </button>
        ${['Nutrition', 'Exercise', 'Preventive Care', 'Dental Health', 'Mental Wellbeing', 'Grooming'].map(cat => `
          <button class="filter-pill px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary dark:hover:border-purple-400 dark:hover:text-purple-400 transition-all" data-filter="${cat}">
            ${cat}
          </button>
        `).join('')}
      </div>

      <!-- Tips Grid -->
      <div id="tips-grid" class="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        ${tips.map((tip, i) => {
          const colors = colorMap[tip.color];
          return `
            <div class="tip-card bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden" data-category="${tip.category}" style="animation-delay: ${i * 0.08}s;">
              <!-- Accent Bar -->
              <div class="absolute top-0 left-0 right-0 h-1 ${colors.bg}"></div>
              
              <!-- Category Badge -->
              <div class="inline-flex items-center gap-1.5 ${colors.bg} ${colors.text} text-xs font-semibold px-3 py-1 rounded-full mb-4">
                <span>${tip.icon}</span>
                <span>${tip.category}</span>
              </div>
              
              <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2 font-title">${tip.title}</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">${tip.description}</p>
              
              <!-- Tips List -->
              <div class="space-y-2">
                ${tip.tips.map(t => `
                  <div class="flex items-start gap-2 text-sm">
                    <span class="w-5 h-5 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</span>
                    <span class="text-gray-600 dark:text-gray-400">${t}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Seasonal Section -->
      <section class="mb-12">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2 font-title">Seasonal Care Guide</h2>
          <p class="text-gray-500 dark:text-gray-400">Tips tailored to Medellin's climate</p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          ${seasonalTips.map(s => {
            const colors = colorMap[s.color];
            return `
              <div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center">
                <div class="text-4xl mb-3">${s.icon}</div>
                <div class="font-semibold text-gray-800 dark:text-white mb-2 text-sm">${s.season}</div>
                <p class="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">${s.tip}</p>
                <div class="h-1 ${colors.bg} rounded-full mt-4"></div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-center text-white relative overflow-hidden">
        <!-- Decorative -->
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        
        <div class="relative z-10">
          <h2 class="text-2xl font-bold mb-2 font-title">Get Weekly Health Tips</h2>
          <p class="opacity-90 mb-6">Join 500+ pet owners in Medellin who receive expert advice every week.</p>
          
          <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              id="newsletter-email"
              class="flex-1 px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
            <button 
              id="newsletter-btn"
              class="bg-pawsGreen hover:bg-green-200 text-gray-800 px-6 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          
          <p class="text-xs opacity-70 mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

    </div>
  `;
}

export function healthTipsEvents() {
  // Events handled inline via onclick
}
