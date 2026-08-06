// ==========================================================================
// SORORA INTERACTIVE APPLICATION, SPA ROUTER & ADMIN PORTAL
// ==========================================================================

// 1. GLOBAL EVENT DATABASE
const EVENTS_DATA = {
  'saddle-and-soul': {
    id: 'saddle-and-soul',
    title: 'Saddle & Soul',
    subtitle: 'An Exclusive Soirée at Zippy Equestrian',
    category: 'Exclusive Soirée',
    tags: ['Women Only', 'Weekend', 'Wellness', 'Creativity'],
    location: 'Zippy Equestrian, JP Nagar, Bengaluru',
    shortLocation: 'JP Nagar, Bengaluru',
    date: 'Saturday, August 02, 2026',
    dateShort: '02 AUG 2026',
    dateIso: '2026-08-02',
    time: '3:00 PM – 6:30 PM',
    duration: '3.5 Hours',
    startingPrice: 1999,
    seatsTotal: 8,
    seatsFilled: 6,
    seatsLeft: 2,
    rating: 4.9,
    reviewsCount: 120,
    joinedCount: '150+',
    featuredBadge: 'Limited Spots',
    heroImg: '/assets/saddle_and_soul.png',
    heroVideo: '/assets/sorora_hero.mp4',
    storyText: "Imagine stepping away from the city's noise into a peaceful equestrian sanctuary, where horses, art, meaningful conversations, and mindful moments help you reconnect—with yourself and with others.",
    pricing: {
      earlyBird: { price: 1999, original: 2499, title: 'Early Bird Pass', status: 'Save ₹500 - 2 Seats Left' },
      regular: { price: 2499, original: 2499, title: 'Regular Pass', status: 'Standard Access' },
      vip: { price: 3499, original: 3999, title: 'VIP Pass', status: 'Front Seat + Sorora Welcome Gift Kit' },
      couple: { price: 3699, original: 4499, title: 'Couple Pass', status: 'Entry for 2 Guests' },
      group: { price: 6999, original: 8999, title: 'Group Pass (4 Pax)', status: 'Entry for 4 Friends' }
    },
    datesAvailable: ['Saturday, August 02, 2026', 'Sunday, August 03, 2026', 'Saturday, August 09, 2026'],
    timeline: [
      { time: '3:00 PM', title: 'Welcome Refreshments', desc: 'Handcrafted botanical spritzers & artisan bites' },
      { time: '3:30 PM', title: 'Circle of Connections', desc: 'Warm icebreakers & meaningful introductions' },
      { time: '4:00 PM', title: 'Horse Connection & Grooming', desc: 'Equine bonding, brushing & gentle communication' },
      { time: '4:45 PM', title: 'Open-Air Sip & Paint', desc: 'Guided canvas painting surrounded by nature' },
      { time: '5:30 PM', title: 'Soul Reflection Circle', desc: 'Mindful journaling & mirror reflection work' },
      { time: '5:50 PM', title: 'Gourmet High Tea', desc: 'Artisanal snacks, herbal infusions & delicacies' },
      { time: '6:10 PM', title: 'Golden Hour Photography', desc: 'Professional portrait & candid photo session' },
      { time: '6:25 PM', title: 'Sunset Farewells & Gift Box', desc: 'Receive your curated Sorora keepsake gift box' }
    ],
    experiences: [
      { icon: '🐎', title: 'Horse Connection', desc: 'Bond with gentle horses through guided touch, grooming, and equine therapy communication.', detail: 'No riding experience needed. Our professional equestrian coaches guide you through calming, therapeutic interactions with gentle horses.' },
      { icon: '🎨', title: 'Sip & Paint', desc: 'Unleash creativity on canvas with easels in the open air, sipping curated herbal beverages.', detail: 'All premium painting supplies, canvas, brushes, and aprons are provided. Take home your original masterpiece!' },
      { icon: '🧘', title: 'Reflection Session', desc: 'Guided introspection, journaling prompts, and meaningful group sharing circles.', detail: 'Led by certified mindfulness facilitators to help you slow down, gain clarity, and express yourself authentically.' },
      { icon: '🍰', title: 'Gourmet High Tea', desc: 'Delectable artisanal snacks, freshly baked scones, and botanical tea blends.', detail: 'Prepared fresh with organic ingredients. Accommodates vegetarian, vegan, and gluten-free dietary preferences.' },
      { icon: '📸', title: 'Professional Photos', desc: 'High-res candid and portrait photos captured by our dedicated photographer.', detail: 'Receive a private Google Drive album link within 48 hours containing all high-resolution edited photos.' },
      { icon: '🤝', title: 'Meet Amazing People', desc: 'Connect with a warm, welcoming circle of like-minded women seeking real friendship.', detail: 'Intimate group cap of 8 participants ensures deep, unhurried conversations and lasting bonds.' }
    ],
    hosts: [
      { name: 'Ananya Roy', role: 'Sorora Founder & Equestrian Coach', bio: 'Equestrian therapist with 10+ years guiding transformational nature retreats for women.', img: '/assets/community_banner.png' },
      { name: 'Meera Sen', role: 'Art Therapy Facilitator', bio: 'Certified expressive arts therapist specializing in mindful canvas painting & creative healing.', img: '/assets/morning_yoga.png' }
    ],
    venue: {
      name: 'Zippy Equestrian Centre',
      address: 'JP Nagar 9th Phase, Off Kanakapura Road, Bengaluru',
      metro: 'Silk Institute / Yelachenahalli (Green Line)',
      parking: 'Free secure on-site valet parking available',
      weather: '24°C Sunny & Pleasant Breeze',
      mapSrc: 'https://maps.google.com/maps?q=Zippy+Equestrian+Centre+JP+Nagar+Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    included: [
      '3.5 Hours Guided Equestrian & Mindfulness Experience',
      'Complete Easel, Canvas & Painting Supplies Kit',
      'Artisanal Gourmet High Tea & Botanical Beverages',
      'Professional High-Resolution Portrait Photoshoot',
      'Personalized Sorora Reflection Journal & Wooden Pen',
      'Curated Sorora Keepsake Gift Box'
    ],
    whatToBring: [
      { icon: '👗', text: 'Comfortable Clothes & Closed Shoes' },
      { icon: '💧', text: 'Reusable Water Bottle' },
      { icon: '😊', text: 'Open & Warm Heart' },
      { icon: '📱', text: 'Smartphone for Memories' }
    ],
    faqs: [
      { q: 'What should I wear for Saddle & Soul?', a: 'We recommend comfortable casual clothing like jeans or leggings with closed-toe shoes (sneakers or boots). Avoid sandals or high heels for equestrian safety.' },
      { q: 'Do I need prior horse riding experience?', a: 'Not at all! Saddle & Soul is 100% beginner-friendly. All horse interactions are conducted on the ground with expert supervision.' },
      { q: 'Can I attend the event alone?', a: 'Yes! Over 80% of our attendees come alone. Sorora is designed to be a safe, welcoming space.' }
    ]
  },
  'into-the-woods': {
    id: 'into-the-woods',
    title: 'Into The Woods',
    subtitle: 'A Serene Weekend Escape into Bandipur Forest',
    category: 'Weekend Getaway',
    tags: ['Weekend', 'Adventure', 'Wellness', 'Women Only'],
    location: 'Bandipur National Park Reserve, Karnataka',
    shortLocation: 'Bandipur Forest',
    date: 'Friday, August 14, 2026',
    dateShort: '14 AUG 2026',
    dateIso: '2026-08-14',
    time: '3 Days & 2 Nights',
    duration: '3 Days 2 Nights',
    startingPrice: 8999,
    seatsTotal: 12,
    seatsFilled: 9,
    seatsLeft: 3,
    rating: 5.0,
    reviewsCount: 88,
    joinedCount: '95+',
    featuredBadge: 'Early Bird Offer',
    heroImg: '/assets/into_the_woods.png',
    heroVideo: '',
    storyText: "Disconnect from screens and reconnect with wilderness. Nestled in the heart of Bandipur forest, enjoy jungle safaris, bonfire stargazing, and soothing yoga.",
    pricing: {
      earlyBird: { price: 8999, original: 10999, title: 'Early Bird Retreat', status: 'Save ₹2000' },
      regular: { price: 10999, original: 10999, title: 'Regular Retreat', status: 'All-inclusive Stay & Safaris' },
      vip: { price: 13999, original: 15999, title: 'Luxury Suite Pass', status: 'Private Villa + Private Safari' }
    },
    datesAvailable: ['Friday, August 14, 2026', 'Friday, August 28, 2026'],
    timeline: [
      { time: 'Day 1 - 12:00 PM', title: 'Forest Lodge Arrival', desc: 'Welcome drink & eco-villa check-in' },
      { time: 'Day 1 - 4:00 PM', title: 'Evening Wildlife Safari', desc: 'Open Jeep safari through tiger reserve' },
      { time: 'Day 2 - 6:30 AM', title: 'Sunrise Forest Yoga', desc: 'Mindful breathing surrounded by birdsong' }
    ],
    experiences: [
      { icon: '🐅', title: 'Jungle Safari', desc: 'Guided open jeep safari with certified forest naturalists.', detail: 'Explore the tiger reserve rich in elephants, deer, leopards, and rare birds.' }
    ],
    hosts: [{ name: 'Radhika Sharma', role: 'Wilderness Lead', bio: 'Certified wildlife tracker & yoga practitioner.', img: '/assets/morning_yoga.png' }],
    venue: { name: 'Sorora Eco Wilderness Resort', address: 'Bandipur Reserve Edge, Gundlupet', metro: 'Mysuru Junction (1.5 hrs by cab)', parking: 'Resort private parking', weather: '22°C Misty Forest', mapSrc: 'https://maps.google.com/maps?q=Bandipur+National+Park&t=&z=12&ie=UTF8&iwloc=&output=embed' },
    included: ['2 Nights Eco-Villa Stay', '4 Jungle Safaris', 'All Meals & Herbal Teas'],
    whatToBring: [{ icon: '🧥', text: 'Warm Jacket & Earthy Clothes' }],
    faqs: [{ q: 'Is transportation provided from Bengaluru?', a: 'Yes, carpooling and luxury sprinter bus pickups can be arranged!' }]
  },
  'morning-yoga': {
    id: 'morning-yoga',
    title: 'Morning Yoga & Botanical Brunch',
    subtitle: 'Rejuvenate Your Mind & Body in Nature',
    category: 'Wellness & Mindfulness',
    tags: ['Wellness', 'Weekend', 'Women Only'],
    location: 'The Sports Drome, Sarjapur Road, Bengaluru',
    shortLocation: 'Sarjapur Road, Bengaluru',
    date: 'Sunday, August 16, 2026',
    dateShort: '16 AUG 2026',
    dateIso: '2026-08-16',
    time: '8:00 AM – 11:30 AM',
    duration: '3.5 Hours',
    startingPrice: 999,
    seatsTotal: 20,
    seatsFilled: 14,
    seatsLeft: 6,
    rating: 4.8,
    reviewsCount: 64,
    joinedCount: '210+',
    featuredBadge: 'Most Popular',
    heroImg: '/assets/morning_yoga.png',
    heroVideo: '',
    storyText: "Start your weekend with gentle Hatha yoga, sound bowl meditation, and a organic farm-to-table botanical brunch on lush green lawns.",
    pricing: {
      earlyBird: { price: 999, original: 1499, title: 'Yoga & Brunch Pass', status: 'Includes Mat & Brunch' },
      vip: { price: 1599, original: 1999, title: 'VIP Wellness Kit Pass', status: 'Includes Mat, Journal & Organic Oils' }
    },
    datesAvailable: ['Sunday, August 16, 2026', 'Sunday, August 23, 2026'],
    timeline: [
      { time: '8:00 AM', title: 'Mat Setup & Herbal Tea', desc: 'Warm botanical infusion' },
      { time: '8:30 AM', title: 'Hatha Vinyasa Flow', desc: '75-min rejuvenating yoga session' },
      { time: '9:45 AM', title: 'Sound Healing Bath', desc: 'Tibetan singing bowls vibration therapy' },
      { time: '10:15 AM', title: 'Organic Farm Brunch', desc: 'Avocado toasts, smoothie bowls & fresh juices' }
    ],
    experiences: [
      { icon: '🧘', title: 'Sound Healing Bath', desc: 'Deep vibrational relaxation using Tibetan singing bowls.', detail: 'Release deep tension and quiet the mind in an immersive auditory bath.' }
    ],
    hosts: [{ name: 'Priya Nambiar', role: 'Lead Yoga Master', bio: '500-hr RYT certified yoga instructor.', img: '/assets/saddle_and_soul.png' }],
    venue: { name: 'The Sports Drome', address: 'Sarjapur Road, Near Wipro Campus, Bengaluru', metro: 'HSR Layout Metro Station (15 mins)', parking: 'Ample parking space', weather: '21°C Fresh Morning Breeze', mapSrc: 'https://maps.google.com/maps?q=Sarjapur+Road+Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed' },
    included: ['Yoga Mat Provided', 'Sound Bath Therapy', 'Full Organic Botanical Brunch'],
    whatToBring: [{ icon: '🧘', text: 'Comfortable Yoga Wear' }],
    faqs: [{ q: 'Do I need to bring my own yoga mat?', a: 'We provide sanitized eco-friendly cork yoga mats, but feel free to bring your personal mat.' }]
  },
  'detective-game-night': {
    id: 'detective-game-night',
    title: 'Detective Game Night & High Tea',
    subtitle: 'Solve a 1920s Murder Mystery Soirée',
    category: 'Immersive Games',
    tags: ['Creativity', 'Networking', 'Weekend', 'Women Only'],
    location: 'The Heritage Manor, Indiranagar, Bengaluru',
    shortLocation: 'Indiranagar, Bengaluru',
    date: 'Saturday, August 22, 2026',
    dateShort: '22 AUG 2026',
    dateIso: '2026-08-22',
    time: '4:00 PM – 7:30 PM',
    duration: '3.5 Hours',
    startingPrice: 1499,
    seatsTotal: 10,
    seatsFilled: 7,
    seatsLeft: 3,
    rating: 4.9,
    reviewsCount: 72,
    joinedCount: '130+',
    featuredBadge: 'Newly Added',
    heroImg: '/assets/detective_game.png',
    heroVideo: '',
    storyText: "Put on your detective hat! Step into a vintage 1920s mansion where every guest gets a secret character role to unravel a mystery over tea and pastries.",
    pricing: {
      regular: { price: 1499, original: 1999, title: 'Detective Pass', status: 'Includes Character Dossier & High Tea' },
      vip: { price: 2199, original: 2699, title: 'VIP Sleuth Pass', status: 'Prime Character Role + Vintage Prop Kit' }
    },
    datesAvailable: ['Saturday, August 22, 2026'],
    timeline: [
      { time: '4:00 PM', title: 'Role Assignment & Costumes', desc: 'Receive your secret persona & clue card' },
      { time: '4:30 PM', title: 'Investigation Rounds', desc: 'Question suspects & find hidden evidence' },
      { time: '6:30 PM', title: 'Grand Reveal & Prizes', desc: 'Award for Best Sleuth & Best Actor' }
    ],
    experiences: [
      { icon: '🕵️‍♀️', title: 'Live Mystery Game', desc: 'Fully scripted murder mystery game where you play the detective or culprit.', detail: 'Fun, theatrical, and engaging for everyone!' }
    ],
    hosts: [{ name: 'Tara Varma', role: 'Game Master', bio: 'Theater director and narrative mystery creator.', img: '/assets/saddle_and_soul.png' }],
    venue: { name: 'The Heritage Manor', address: '100ft Road, Indiranagar, Bengaluru', metro: 'Indiranagar Metro Station (5 mins)', parking: 'Valet parking', weather: '25°C Cozy Indoor Parlor', mapSrc: 'https://maps.google.com/maps?q=Indiranagar+Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed' },
    included: ['Custom Character File', 'High Tea & Mocktails', 'Mystery Props & Prizes'],
    whatToBring: [{ icon: '🕵️‍♀️', text: '1920s Vintage Accessory (Optional)' }],
    faqs: [{ q: 'Do I need acting experience?', a: 'No! It is super easy and playful with clear clue cards.' }]
  }
};

// 2. APP STATE
let currentUser = null; // null for guest, or user object
let currentBookingEvent = EVENTS_DATA['saddle-and-soul'];
let currentBookingStep = 1;
let currentBookingData = {
  tier: 'earlyBird',
  guests: 1,
  selectedDate: 'Saturday, August 02, 2026',
  ticketType: 'Early Bird Pass',
  pricePerTicket: 1999,
  name: 'Ananya Sharma',
  email: 'ananya.sharma@example.com',
  phone: '+91 98765 43210',
  emergency: 'Rahul Sharma (+91 98111 22233)',
  diet: 'Vegetarian',
  requests: 'None',
  paymentMethod: 'upi',
  bookingId: 'SORORA-SS-89421'
};

let currentFilters = {
  search: '',
  category: 'ALL',
  tag: 'ALL',
  maxPrice: 15000,
  dateIso: ''
};

// Registered Admin Bookings Store
let ADMIN_BOOKINGS = [
  { id: 'SORORA-SS-89421', eventTitle: 'Saddle & Soul', guestName: 'Ananya Sharma', email: 'ananya.sharma@example.com', phone: '+91 98765 43210', tier: 'Early Bird Pass', guests: 1, total: 2358, status: 'CONFIRMED', checkedIn: false },
  { id: 'SORORA-IW-54912', eventTitle: 'Into The Woods', guestName: 'Meghna Rao', email: 'meghna@example.com', phone: '+91 98123 45678', tier: 'Regular Retreat', guests: 2, total: 25957, status: 'CONFIRMED', checkedIn: true },
  { id: 'SORORA-MY-10293', eventTitle: 'Morning Yoga', guestName: 'Sneha Patel', email: 'sneha@example.com', phone: '+91 99000 11223', tier: 'Yoga & Brunch Pass', guests: 1, total: 1178, status: 'CONFIRMED', checkedIn: false }
];

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  loadRemoteContentData();
  initRouter();
  initBookingDrawer();
  initAuthModal();
  initAdminPortal();
  initVisitorTracking();
});

function resolveMediaUrl(url) {
  if (!url) return '';
  if (url.startsWith('/uploads/')) {
    return `https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public${url}`;
  }
  return url;
}

async function loadRemoteContentData() {
  try {
    const res = await fetch('/data/content.json?t=' + Date.now());
    if (res.ok) {
      const data = await res.json();

      // Normalize upload paths to raw GitHub CDN URLs
      if (data.events) {
        Object.values(data.events).forEach(e => {
          if (e.heroImg) e.heroImg = resolveMediaUrl(e.heroImg);
          if (e.heroVideo) e.heroVideo = resolveMediaUrl(e.heroVideo);
        });
        localStorage.setItem('SORORA_EVENTS_DATA', JSON.stringify(data.events));
      }
      if (data.hero) {
        if (data.hero.video) data.hero.video = resolveMediaUrl(data.hero.video);
        if (data.hero.poster) data.hero.poster = resolveMediaUrl(data.hero.poster);
        localStorage.setItem('SORORA_HERO_CONFIG', JSON.stringify(data.hero));
      }
      if (data.banners) {
        data.banners.forEach(b => {
          if (b.mediaUrl) b.mediaUrl = resolveMediaUrl(b.mediaUrl);
        });
        localStorage.setItem('SORORA_BANNERS_DATA', JSON.stringify(data.banners));
      }
      if (data.bookPage) localStorage.setItem('SORORA_BOOK_PAGE_CONFIG', JSON.stringify(data.bookPage));
      if (data.footer) localStorage.setItem('SORORA_FOOTER_CONFIG', JSON.stringify(data.footer));
      if (data.bookings) localStorage.setItem('SORORA_ADMIN_BOOKINGS', JSON.stringify(data.bookings));
      
      initRouter();
      renderFooterDynamicData();
    }
  } catch (err) {
    console.warn('Remote content fetch fallback:', err);
  }
}

function initVisitorTracking() {
  const sessionKey = 'SORORA_SESSION_ACTIVE';
  let total = Number(localStorage.getItem('SORORA_TOTAL_VISITORS') || 1482);
  let today = Number(localStorage.getItem('SORORA_TODAY_VISITORS') || 234);
  const lastDate = localStorage.getItem('SORORA_VISITORS_DATE');
  const currentDate = new Date().toISOString().split('T')[0];

  if (lastDate !== currentDate) {
    today = Math.floor(Math.random() * 40) + 180;
    localStorage.setItem('SORORA_VISITORS_DATE', currentDate);
  }

  if (!sessionStorage.getItem(sessionKey)) {
    sessionStorage.setItem(sessionKey, '1');
    total += 1;
    today += 1;
    localStorage.setItem('SORORA_TOTAL_VISITORS', total);
    localStorage.setItem('SORORA_TODAY_VISITORS', today);
  }

  const tabId = 'tab_' + Math.random().toString(36).substring(2, 9);
  
  function sendHeartbeat() {
    localStorage.setItem('SORORA_PING_' + tabId, Date.now().toString());
  }

  sendHeartbeat();
  setInterval(sendHeartbeat, 3000);

  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('SORORA_PING_' + tabId);
  });
}

function initAdminPortal() {
  // Admin portal initializer placeholder
}

// HEADER CONTROLLER
function initHeader() {
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) siteHeader?.classList.add('scrolled');
    else siteHeader?.classList.remove('scrolled');
  });

  const mobileToggle = document.getElementById('mobileToggle');
  const closeDrawer = document.getElementById('closeDrawer');
  const mobileDrawer = document.getElementById('mobileDrawer');
  mobileToggle?.addEventListener('click', () => mobileDrawer?.classList.add('open'));
  closeDrawer?.addEventListener('click', () => mobileDrawer?.classList.remove('open'));

  // Global delegate for clicking any event card -> open dedicated 22-section landing page
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.experience-card[data-event-id]');
    if (card && !e.target.closest('.trigger-book-now') && !e.target.closest('a') && !e.target.closest('button')) {
      const eventId = card.getAttribute('data-event-id');
      if (eventId) {
        window.location.hash = `#event/${eventId}`;
      }
    }
  });
}

function getLiveEventsData() {
  const stored = localStorage.getItem('SORORA_EVENTS_DATA');
  if (stored) {
    try {
      const data = JSON.parse(stored);
      let list = Array.isArray(data) ? data : Object.values(data);
      list.sort((a, b) => (a.order !== undefined && b.order !== undefined) ? a.order - b.order : 0);
      const sortedObj = {};
      list.forEach((item, idx) => {
        sortedObj[item.id] = item;
      });
      return sortedObj;
    } catch (e) { }
  }
  return EVENTS_DATA;
}

function getLiveHeroConfig() {
  const stored = localStorage.getItem('SORORA_HERO_CONFIG');
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { }
  }
  return {
    title: 'EXPERIENCES THAT CONNECT YOU',
    scriptTitle: 'To yourself & each other.',
    subtitle: 'Meaningful events for women who seek connection, adventure & memories that last.',
    video: '/assets/sorora_hero.mp4',
    poster: '/assets/hero_horse_bg.png',
    btnText: 'Explore Experiences',
    watchBtnText: 'Watch Video'
  };
}

function getLiveFooterConfig() {
  const stored = localStorage.getItem('SORORA_FOOTER_CONFIG');
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { }
  }
  return {
    bioText: 'We create soulful experiences that connect you to yourself, to nature & to beautiful people.',
    socialInsta: 'https://instagram.com/sorora.in',
    socialFB: 'https://facebook.com/sorora.in',
    socialWA: 'https://chat.whatsapp.com',
    socialLinkedIn: 'https://linkedin.com/company/sorora',
    quickLinks: ['Home', 'Experiences', 'About Us', 'Community', 'Gallery', 'Blog', 'Contact'],
    supportLinks: ['FAQs', 'Terms & Conditions', 'Privacy Policy', 'Cancellation Policy']
  };
}

function syncClientDOMFromStorage() {
  // 1. Sync Hero Section
  const hero = getLiveHeroConfig();
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const mainTextNode = heroTitle.childNodes[0];
    if (mainTextNode && hero.title) mainTextNode.nodeValue = hero.title + ' ';
    const scriptElem = heroTitle.querySelector('.hero-title-script');
    if (scriptElem && hero.scriptTitle) scriptElem.textContent = hero.scriptTitle;
  }

  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle && hero.subtitle) heroSubtitle.textContent = hero.subtitle;

  const exploreBtn = document.getElementById('exploreBtn');
  if (exploreBtn && hero.btnText) exploreBtn.innerHTML = `${hero.btnText} &rarr;`;

  // 2. Sync Homepage Upcoming Events Cards Grid
  const homepageUpcomingGrid = document.querySelector('.upcoming-section .cards-grid');
  if (homepageUpcomingGrid) {
    const liveEvents = Object.values(getLiveEventsData());
    homepageUpcomingGrid.innerHTML = liveEvents.slice(0, 4).map(event => `
      <article class="experience-card" data-event-id="${event.id}" style="cursor: pointer;">
        <div class="card-image-wrap">
          <img src="${event.heroImg}" alt="${event.title}" class="card-img">
          <div class="date-badge">
            <span class="date-num">${event.dateShort.split(' ')[0] || '02'}</span>
            <span class="date-month">${event.dateShort.split(' ')[1] || 'AUG'}</span>
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title">${event.title}</h3>
          <div class="card-meta"><span>📍 ${event.shortLocation}</span></div>
          <div class="card-price-seats-row" style="margin-top: 10px;">
            <div class="price-box">From <strong>₹${event.startingPrice}</strong></div>
            <div class="tag-pill">${event.seatsLeft} Seats Left</div>
          </div>
        </div>
      </article>
    `).join('');
  }

  // 3. Sync Footer Links & Bio
  const footer = getLiveFooterConfig();
  const footerBio = document.querySelector('.footer-bio');
  if (footerBio && footer.bioText) footerBio.textContent = footer.bioText;

  const socialBtns = document.querySelectorAll('.social-icons .social-icon-btn');
  if (socialBtns.length >= 4) {
    if (footer.socialInsta) socialBtns[0].href = footer.socialInsta;
    if (footer.socialFB) socialBtns[1].href = footer.socialFB;
    if (footer.socialWA) socialBtns[2].href = footer.socialWA;
    if (footer.socialLinkedIn) socialBtns[3].href = footer.socialLinkedIn;
  }

  // 4. Refresh Book Experience Page if active
  const bookExperienceView = document.getElementById('bookExperienceView');
  if (bookExperienceView && !bookExperienceView.classList.contains('hidden')) {
    updateFilteredGrid();
  }
}

// Real-time broadcast channel & storage listeners
try {
  const channel = new BroadcastChannel('sorora-sync');
  channel.onmessage = () => syncClientDOMFromStorage();
} catch (e) { }

window.addEventListener('storage', syncClientDOMFromStorage);
setInterval(syncClientDOMFromStorage, 1000);

// ROUTER CONTROLLER
function initRouter() {
  const handleRouting = () => {
    const hash = window.location.hash || '#home';

    const homeView = document.getElementById('homeView');
    const bookExperienceView = document.getElementById('bookExperienceView');
    const eventDetailsView = document.getElementById('eventDetailsView');
    const dashboardView = document.getElementById('dashboardView');
    const adminView = document.getElementById('adminView');

    // Hide all views first
    [homeView, bookExperienceView, eventDetailsView, dashboardView, adminView].forEach(v => v?.classList.add('hidden'));

    if (hash === '#book-experience' || hash === '#experiences') {
      renderBookExperiencePage();
      bookExperienceView?.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash.startsWith('#event/')) {
      const eventId = hash.replace('#event/', '');
      const liveEvents = getLiveEventsData();
      const eventData = liveEvents[eventId] || liveEvents['saddle-and-soul'] || Object.values(liveEvents)[0];
      renderEventDetails(eventData);
      eventDetailsView?.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash === '#dashboard') {
      renderDashboard();
      dashboardView?.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash === '#admin') {
      window.location.href = './admin/index.html';
    } else {
      // Default to Home
      homeView?.classList.remove('hidden');
    }
  };

  window.addEventListener('hashchange', handleRouting);
  handleRouting(); // Initial call
}

// ==========================================================================
// RENDER DEDICATED 22-SECTION EVENT LANDING PAGE (#event/:id)
// ==========================================================================
function renderEventDetails(event) {
  currentBookingEvent = event;
  const container = document.getElementById('eventDetailsContainer');
  if (!container) return;

  const p = event.pricing || {};
  const earlyBirdPrice = p.earlyBird ? p.earlyBird.price : event.startingPrice;
  const regularPrice = p.regular ? p.regular.price : Math.round(event.startingPrice * 1.25);
  const vipPrice = p.vip ? p.vip.price : Math.round(event.startingPrice * 1.75);

  const seatsPercentage = Math.round((event.seatsFilled / event.seatsTotal) * 100);

  container.innerHTML = `
    <!-- BREADCRUMB NAV BAR -->
    <div class="event-nav-bar">
      <div class="section-container">
        <a href="#home" class="back-link">&larr; Back to All Experiences</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-current">${event.title}</span>
      </div>
    </div>

    <!-- 1. HERO SECTION -->
    <section class="event-hero">
      ${(event.heroVideo && (event.heroVideo.includes('.mp4') || event.heroVideo.startsWith('data:video'))) ? `
        <video class="event-hero-video" autoplay muted loop playsinline poster="${event.heroImg || '/assets/saddle_and_soul.png'}">
          <source src="${event.heroVideo}" type="video/mp4">
        </video>
      ` : `
        <div class="event-hero-bg-img" style="background-image: url('${event.heroImg || '/assets/saddle_and_soul.png'}');"></div>
      `}
      <div class="event-hero-overlay"></div>
      <div class="section-container event-hero-content">
        <span class="event-tag-pill">✨ ${event.category || event.tag}</span>
        <h1 class="event-hero-title">${event.title}</h1>
        <p class="event-hero-subtitle">${event.subtitle}</p>

        <div class="event-badges-grid">
          <div class="event-badge">📍 <span>${event.shortLocation}</span></div>
          <div class="event-badge">🗓<span>${event.date}</span></div>
          <div class="event-badge">⏰<span>${event.time}</span></div>
          <div class="event-badge badge-highlight">👥<span>Only ${event.seatsLeft} Seats Left</span></div>
          <div class="event-badge">⭐<span>${event.rating} Rating</span></div>
          <div class="event-badge">❤️<span>${event.joinedCount} Women Joined Previously</span></div>
        </div>

        <div class="event-hero-actions">
          <button class="btn btn-primary btn-lg open-booking-trigger" data-event-id="${event.id}">Book Your Seat &rarr;</button>
          
        </div>
      </div>
    </section>

    <!-- 2. EVENT STORY -->
    <section class="event-story-section">
      <div class="section-container">
        <div class="story-grid">
          <div class="story-content">
            <span class="eyebrow-text">THE STORY</span>
            <h2 class="section-title">Step Into Magic</h2>
            <p class="story-paragraph">${event.storyText}</p>
            <div class="story-quote">
              "Sorora events aren’t just gatherings; they are gentle sanctuaries to pause, breathe, and belong."
            </div>
          </div>
          <div class="story-image-card">
            <img src="${event.heroImg}" alt="${event.title}" class="story-img">
          </div>
        </div>
      </div>
    </section>

    <!-- 3. TIMELINE -->
    <section class="event-timeline-section">
      <div class="section-container">
        <div class="text-center section-header">
          <span class="eyebrow-text">THE JOURNEY</span>
          <h2 class="section-title">Event Schedule & Itinerary</h2>
        </div>
        <div class="vertical-timeline">
          ${(event.timeline || []).map((item, idx) => `
            <div class="timeline-item ${idx % 2 === 0 ? 'left' : 'right'}">
              <div class="timeline-dot"></div>
              <div class="timeline-card">
                <span class="timeline-time">${item.time}</span>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-desc">${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 4. WHAT YOU'LL EXPERIENCE -->
    <section class="event-experiences-section">
      <div class="section-container">
        <div class="text-center section-header">
          <span class="eyebrow-text">CURATED MOMENTS</span>
          <h2 class="section-title">What You'll Experience</h2>
        </div>
        <div class="experiences-cards-grid">
          ${(event.experiences || []).map((exp, idx) => `
            <div class="experience-detail-card" data-exp-title="${exp.title}" data-exp-desc="${exp.detail || exp.desc}">
              <div class="exp-icon">${exp.icon}</div>
              <h3 class="exp-card-title">${exp.title}</h3>
              <p class="exp-card-desc">${exp.desc}</p>
              <span class="exp-click-hint">Tap for details &rarr;</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 5. MASONRY GALLERY & LIGHTBOX -->
    <section class="event-gallery-section">
      <div class="section-container">
        <div class="text-center section-header">
          <span class="eyebrow-text">MEMORIES</span>
          <h2 class="section-title">Photo & Video Gallery</h2>
        </div>
        <div class="masonry-gallery-grid">
          <div class="gallery-item" data-img="${event.heroImg}"><img src="${event.heroImg}" alt="Gallery 1"><div class="gallery-zoom-icon">🔍</div></div>
          <div class="gallery-item" data-img="/assets/saddle_and_soul.png"><img src="/assets/saddle_and_soul.png" alt="Gallery 2"><div class="gallery-zoom-icon">🔍</div></div>
          <div class="gallery-item" data-img="/assets/hero_horse_bg.png"><img src="/assets/hero_horse_bg.png" alt="Gallery 3"><div class="gallery-zoom-icon">🔍</div></div>
          <div class="gallery-item" data-img="/assets/morning_yoga.png"><img src="/assets/morning_yoga.png" alt="Gallery 4"><div class="gallery-zoom-icon">🔍</div></div>
          <div class="gallery-item" data-img="/assets/into_the_woods.png"><img src="/assets/into_the_woods.png" alt="Gallery 5"><div class="gallery-zoom-icon">🔍</div></div>
          <div class="gallery-item" data-img="/assets/detective_game.png"><img src="/assets/detective_game.png" alt="Gallery 6"><div class="gallery-zoom-icon">🔍</div></div>
        </div>
      </div>
    </section>

    <!-- 6. MEET YOUR HOSTS -->
    <section class="event-hosts-section">
      <div class="section-container">
        <div class="text-center section-header">
          <span class="eyebrow-text">YOUR GUIDES</span>
          <h2 class="section-title">Meet Your Hosts</h2>
        </div>
        <div class="hosts-grid">
          ${(event.hosts || []).map(host => `
            <div class="host-card">
              <div class="host-img-wrap">
                <img src="${host.img}" alt="${host.name}" class="host-img">
              </div>
              <h3 class="host-name">${host.name}</h3>
              <span class="host-role">${host.role}</span>
              <p class="host-bio">${host.bio}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 7. VENUE & LOGISTICS -->
    <section class="event-venue-section">
      <div class="section-container">
        <div class="venue-grid">
          <div class="venue-info">
            <span class="eyebrow-text">LOCATION</span>
            <h2 class="section-title">${event.venue ? event.venue.name : 'Venue'}</h2>
            <p class="venue-address">📍 ${event.venue ? event.venue.address : event.location}</p>
            <div class="venue-details-list">
              <div>🚇 <strong>Metro Access:</strong> ${event.venue ? event.venue.metro : 'Nearby Metro Access'}</div>
              <div>🅿️ <strong>Parking:</strong> ${event.venue ? event.venue.parking : 'On-site Parking'}</div>
              <div>🌤 <strong>Weather:</strong> ${event.venue ? event.venue.weather : 'Pleasant Weather'}</div>
            </div>
          </div>
          <div class="venue-map-wrap">
            <iframe width="100%" height="280" style="border:0; border-radius: 14px;" src="${event.venue ? event.venue.mapSrc : 'https://maps.google.com/maps?q=Bengaluru&output=embed'}" allowfullscreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. WHAT'S INCLUDED & 9. WHAT TO BRING -->
    <section class="event-included-section">
      <div class="section-container">
        <div class="included-grid">
          <div class="included-box">
            <h3 class="box-title">What's Included ✔</h3>
            <ul class="included-list">
              ${(event.included || []).map(item => `<li><span class="check-icon">✓</span> ${item}</li>`).join('')}
            </ul>
          </div>

          <div class="bring-box">
            <h3 class="box-title">What to Bring 🎒</h3>
            <div class="bring-icons-grid">
              ${(event.whatToBring || []).map(b => `
                <div class="bring-item"><span class="bring-emoji">${b.icon}</span> <span>${b.text}</span></div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. SEAT AVAILABILITY METER & 11. PRICING -->
    <section class="event-pricing-section">
      <div class="section-container">
        <!-- Seat Bar -->
        <div class="seat-bar-card">
          <div class="seat-bar-header">
            <span>Seat Availability</span>
            <span class="seat-count-text">Only ${event.seatsLeft} Seats Left!</span>
          </div>
          <div class="seat-progress-track">
            <div class="seat-progress-fill" style="width: ${seatsPercentage}%;"></div>
          </div>
          <div class="seat-boxes-visual">
            ${Array.from({ length: event.seatsTotal }).map((_, idx) => `
              <span class="seat-box ${idx < event.seatsFilled ? 'filled' : 'available'}">${idx < event.seatsFilled ? '■' : '□'}</span>
            `).join('')}
            <span style="font-size: 0.9rem; margin-left: 10px;">${event.seatsFilled} / ${event.seatsTotal} Seats Filled</span>
          </div>
        </div>

        <div class="text-center section-header">
          <span class="eyebrow-text">PRICING TIERS</span>
          <h2 class="section-title">Choose Your Pass</h2>
        </div>

        <div class="pricing-cards-grid">
          <!-- Early Bird -->
          <div class="pricing-card">
            <span class="badge-pop">SAVE ₹500</span>
            <h3 class="tier-name">Early Bird</h3>
            <div class="tier-price">
              <span class="price-val">₹${earlyBirdPrice}</span>
              <span class="price-orig">₹${earlyBirdPrice + 500}</span>
            </div>
            <span class="tier-status">Limited Seats Available</span>
            <ul class="tier-features">
              <li>Full Event Experience Access</li>
              <li>Refreshments & High Tea</li>
              <li>Reflection Journal Keepsake</li>
            </ul>
            <button class="btn btn-outline open-booking-trigger" data-event-id="${event.id}">Book Early Bird</button>
          </div>

          <!-- Regular -->
          <div class="pricing-card featured">
            <span class="badge-pop">MOST POPULAR</span>
            <h3 class="tier-name">Regular Pass</h3>
            <div class="tier-price">
              <span class="price-val">₹${regularPrice}</span>
            </div>
            <span class="tier-status">Standard Full Access</span>
            <ul class="tier-features">
              <li>Full Event Experience Access</li>
              <li>Artisanal High Tea & Snacks</li>
              <li>Reflection Journal Keepsake</li>
              <li>Community Circle Access</li>
            </ul>
            <button class="btn btn-primary open-booking-trigger" data-event-id="${event.id}">Book Regular Pass</button>
          </div>

          <!-- VIP -->
          <div class="pricing-card">
            <h3 class="tier-name">VIP Pass</h3>
            <div class="tier-price">
              <span class="price-val">₹${vipPrice}</span>
            </div>
            <span class="tier-status">Luxury VIP Package</span>
            <ul class="tier-features">
              <li>Front Row Reserved Seating</li>
              <li>Exclusive Sorora Welcome Gift Kit</li>
              <li>Professional Portrait Photoshoot</li>
              <li>Priority Gate Check-in</li>
            </ul>
            <button class="btn btn-outline open-booking-trigger" data-event-id="${event.id}">Book VIP Pass</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 12. COMMUNITY MEMBERS & 13. TESTIMONIALS -->
    <section class="event-testimonials-section">
      <div class="section-container">
        <div class="text-center section-header">
          <span class="eyebrow-text">WHAT WOMEN SAY</span>
          <h2 class="section-title">Loved by 150+ Women</h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testi-header">
              <div class="testi-avatar">AS</div>
              <div>
                <h4 class="testi-name">Ananya Sharma</h4>
                <span class="testi-handle">@ananya_s</span>
              </div>
            </div>
            <p class="testi-text">"Saddle & Soul was the exact breather I needed from my corporate routine. Grooming the horses and painting in the open air was so therapeutic!"</p>
            <div class="testi-stars">★★★★★</div>
          </div>

          <div class="testimonial-card">
            <div class="testi-header">
              <div class="testi-avatar">MR</div>
              <div>
                <h4 class="testi-name">Meghna Rao</h4>
                <span class="testi-handle">@meghna_r</span>
              </div>
            </div>
            <p class="testi-text">"I came alone, nervous about meeting new people, but within 10 minutes I felt like I was surrounded by old friends. Absolutely magical!"</p>
            <div class="testi-stars">★★★★★</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 14. FAQ ACCORDION -->
    <section class="event-faq-section">
      <div class="section-container">
        <div class="text-center section-header">
          <span class="eyebrow-text">FREQUENTLY ASKED</span>
          <h2 class="section-title">Got Questions?</h2>
        </div>
        <div class="faq-accordion">
          ${(event.faqs || [
      { q: 'What should I wear?', a: 'We recommend comfortable casual attire and flat closed-toe shoes.' },
      { q: 'Can I come alone?', a: 'Yes! Most attendees join solo and build lasting friendships.' }
    ]).map(faq => `
            <div class="faq-item">
              <button class="faq-question">${faq.q} <span class="faq-arrow">▼</span></button>
              <div class="faq-answer"><p>${faq.a}</p></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 15. STICKY BOOKING CARD BAR -->
    <div class="sticky-booking-bar" id="stickyBookingBar">
      <div class="section-container sticky-bar-inner">
        <div>
          <strong class="sticky-title">${event.title}</strong>
          <span class="sticky-price">From ₹${event.startingPrice}</span>
          <span class="sticky-seats-badge">Only ${event.seatsLeft} Left</span>
        </div>
        <button class="btn btn-primary btn-sm open-booking-trigger" data-event-id="${event.id}">Book Now &rarr;</button>
      </div>
    </div>
  `;

  // Bind FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq-question');
    q?.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // Bind Experience Card Popups
  const expCards = document.querySelectorAll('.experience-detail-card');
  expCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-exp-title');
      const desc = card.getAttribute('data-exp-desc');
      alert(`${title}\n\n${desc}`);
    });
  });

  // Bind Gallery Lightbox
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-img');
      const lightboxModal = document.getElementById('lightboxModal');
      const lightboxImg = document.getElementById('lightboxImg');
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightboxModal.classList.add('open');
      }
    });
  });

  document.getElementById('closeLightbox')?.addEventListener('click', () => {
    document.getElementById('lightboxModal')?.classList.remove('open');
  });
}

// ==========================================================================
// DEDICATED BOOK AN EXPERIENCE PAGE (#book-experience)
// ==========================================================================
function getLiveBannerConfig() {
  const stored = localStorage.getItem('SORORA_BANNERS_DATA');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) { }
  }
  return [
    {
      id: 'b1',
      title: 'Book Your Next Experience',
      subtitle: 'Choose an experience that speaks to you and create memories that last a lifetime.',
      badge: 'CURATED EXPERIENCES',
      mediaUrl: '/assets/sorora_hero.mp4',
      mediaType: 'video',
      btnText: 'Explore All Events Below',
      btnLink: '#allEventsSection'
    },
    {
      id: 'b2',
      title: 'Saddle & Soul — Exclusive Soirée',
      subtitle: 'Equine connection, easel painting, and organic high tea at Zippy Equestrian.',
      badge: 'LIMITED 8 SEATS ONLY',
      mediaUrl: '/assets/saddle_and_soul.png',
      mediaType: 'image',
      btnText: 'View Saddle & Soul Details',
      btnLink: '#event/saddle-and-soul'
    },
    {
      id: 'b3',
      title: 'Into The Woods — Bandipur Getaway',
      subtitle: 'A 3-day eco-luxury forest retreat, open jeep safaris, and starry campfires.',
      badge: 'WEEKEND ESCAPE',
      mediaUrl: '/assets/into_the_woods.png',
      mediaType: 'image',
      btnText: 'Explore Bandipur Retreat',
      btnLink: '#event/into-the-woods'
    },
    {
      id: 'b4',
      title: 'Morning Yoga & Botanical Brunch',
      subtitle: 'Gentle Hatha yoga flow, sound bowl meditation, and fresh organic garden brunch.',
      badge: 'WELLNESS & MINDFULNESS',
      mediaUrl: '/assets/morning_yoga.png',
      mediaType: 'image',
      btnText: 'Join Yoga Session',
      btnLink: '#event/morning-yoga'
    }
  ];
}

let autoSliderTimer = null;

function renderBookExperiencePage() {
  const container = document.getElementById('bookExperienceContainer');
  if (!container) return;

  const banners = getLiveBannerConfig();

  container.innerHTML = `
    <!-- MULTI-BANNER AUTO-SLIDING CAROUSEL -->
    <section class="book-page-hero-slider" id="eventsHeroSlider">
      <div class="slider-track" id="sliderTrack">
        ${banners.map((b, idx) => `
          <div class="slider-slide ${idx === 0 ? 'active' : ''}" data-slide-index="${idx}">
            ${b.mediaType === 'video' || (b.mediaUrl && b.mediaUrl.includes('.mp4')) || (b.mediaUrl && b.mediaUrl.startsWith('data:video')) ? `
              <video class="book-hero-bg-video" autoplay muted loop playsinline poster="/assets/hero_horse_bg.png">
                <source src="${b.mediaUrl}" type="video/mp4">
              </video>
            ` : `
              <div class="book-hero-bg-img" style="background-image: url('${b.mediaUrl}');"></div>
            `}
            <div class="book-hero-overlay"></div>
            <div class="section-container book-hero-content text-center">
              <span class="eyebrow-text" style="color: var(--color-primary-terracotta);">✨ ${b.badge || 'CURATED EXPERIENCES'}</span>
              <h1 class="book-hero-title">${b.title}</h1>
              <p class="book-hero-subtitle">${b.subtitle}</p>
              ${b.btnText ? `<a href="${b.btnLink || '#allEventsSection'}" class="btn btn-primary btn-hero-cta">${b.btnText} &rarr;</a>` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Controls -->
      <button class="slider-arrow slider-arrow-prev" id="btnSliderPrev" aria-label="Previous Slide">&lsaquo;</button>
      <button class="slider-arrow slider-arrow-next" id="btnSliderNext" aria-label="Next Slide">&rsaquo;</button>

      <!-- Dots -->
      <div class="slider-dots-container" id="sliderDotsContainer">
        ${banners.map((_, idx) => `
          <button class="slider-dot ${idx === 0 ? 'active' : ''}" data-slide-index="${idx}" aria-label="Slide ${idx + 1}"></button>
        `).join('')}
      </div>
    </section>

    <!-- SEARCH & FILTER BAR -->
    <section class="filter-bar-section" id="allEventsSection">
      <div class="section-container">
        <div class="search-filter-card">
          <!-- Search Row -->
          <div class="filter-row-top">
            <div class="search-input-wrap">
              <span class="search-icon">🔍</span>
              <input type="text" id="searchExperienceInput" class="search-input" placeholder="Search experiences by name, location, or keyword..." value="${currentFilters.search}">
            </div>
            
            <div class="filter-select-group">
              <select id="categoryFilterSelect" class="filter-select">
                <option value="ALL">All Categories</option>
                <option value="Exclusive Soirée">Exclusive Soirées</option>
                <option value="Weekend Getaway">Weekend Getaways</option>
                <option value="Wellness & Mindfulness">Wellness & Mindfulness</option>
                <option value="Immersive Games">Immersive Games</option>
              </select>

              <div class="price-slider-wrap">
                <label>Max Price: <strong id="priceDisplay">₹${currentFilters.maxPrice}</strong></label>
                <input type="range" id="priceRangeSlider" min="500" max="20000" step="500" value="${currentFilters.maxPrice}">
              </div>
            </div>
          </div>

          <!-- Filter Tags Row -->
          <div class="filter-tags-row">
            <span class="filter-label">Quick Filters:</span>
            <button class="tag-chip ${currentFilters.tag === 'ALL' ? 'active' : ''}" data-tag="ALL">All</button>
            <button class="tag-chip ${currentFilters.tag === 'Weekend' ? 'active' : ''}" data-tag="Weekend">Weekend Events</button>
            <button class="tag-chip ${currentFilters.tag === 'Women Only' ? 'active' : ''}" data-tag="Women Only">Women Only</button>
            <button class="tag-chip ${currentFilters.tag === 'Wellness' ? 'active' : ''}" data-tag="Wellness">Wellness</button>
            <button class="tag-chip ${currentFilters.tag === 'Adventure' ? 'active' : ''}" data-tag="Adventure">Adventure</button>
            <button class="tag-chip ${currentFilters.tag === 'Creativity' ? 'active' : ''}" data-tag="Creativity">Creativity</button>
            <button class="tag-chip ${currentFilters.tag === 'Networking' ? 'active' : ''}" data-tag="Networking">Networking</button>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED EXPERIENCES SECTION -->
    <section class="featured-experiences-section">
      <div class="section-container">
        <div class="section-header">
          <span class="eyebrow-text">HIGHLIGHTS</span>
          <h2 class="section-title">Featured Experiences</h2>
        </div>
        <div class="featured-grid" id="featuredGridContainer">
          ${renderFeaturedCardsHTML()}
        </div>
      </div>
    </section>

    <!-- INTERACTIVE MONTHLY CALENDAR VIEW -->
    <section class="calendar-view-section">
      <div class="section-container">
        <div class="section-header text-center">
          <span class="eyebrow-text">EVENT SCHEDULE</span>
          <h2 class="section-title">August 2026 Monthly Calendar</h2>
          <p class="section-sub">Click any date with an active indicator to inspect events happening on that day.</p>
        </div>
        <div class="monthly-calendar-card" id="calendarCard">
          ${renderMonthlyCalendarHTML()}
        </div>
      </div>
    </section>

    <!-- ALL UPCOMING EXPERIENCES GRID -->
    <section class="all-experiences-section" id="allEventsSection">
      <div class="section-container">
        <div class="section-header">
          <span class="eyebrow-text">ALL EVENTS</span>
          <h2 class="section-title">Upcoming Experiences (<span id="eventCountDisplay">0</span>)</h2>
        </div>
        <div class="cards-grid" id="bookExperienceGrid">
          ${renderFilteredCardsHTML()}
        </div>
      </div>
    </section>
  `;

  bindFilterEvents();
  initBannerAutoSlider();
}

function initBannerAutoSlider() {
  const slides = document.querySelectorAll('.slider-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('btnSliderPrev');
  const nextBtn = document.getElementById('btnSliderNext');
  const sliderContainer = document.getElementById('eventsHeroSlider');

  if (slides.length <= 1) return;

  let currentIdx = 0;

  function showSlide(index) {
    if (index >= slides.length) currentIdx = 0;
    else if (index < 0) currentIdx = slides.length - 1;
    else currentIdx = index;

    slides.forEach((s, i) => {
      if (i === currentIdx) s.classList.add('active');
      else s.classList.remove('active');
    });

    dots.forEach((d, i) => {
      if (i === currentIdx) d.classList.add('active');
      else d.classList.remove('active');
    });
  }

  function nextSlide() {
    showSlide(currentIdx + 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoSliderTimer = setInterval(nextSlide, 4500);
  }

  function stopAutoPlay() {
    if (autoSliderTimer) clearInterval(autoSliderTimer);
  }

  prevBtn?.addEventListener('click', () => {
    showSlide(currentIdx - 1);
    startAutoPlay();
  });

  nextBtn?.addEventListener('click', () => {
    showSlide(currentIdx + 1);
    startAutoPlay();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAutoPlay();
    });
  });

  sliderContainer?.addEventListener('mouseenter', stopAutoPlay);
  sliderContainer?.addEventListener('mouseleave', startAutoPlay);

  startAutoPlay();
}

function renderFeaturedCardsHTML() {
  const events = Object.values(getLiveEventsData());
  const featured = events.filter(e => e.featuredBadge);
  const displayList = featured.length > 0 ? featured : events;
  return displayList.map(event => `
    <article class="featured-card">
      <div class="featured-badge-pill">✨ ${event.featuredBadge || 'Featured'}</div>
      <div class="featured-img-wrap">
        <img src="${event.heroImg}" alt="${event.title}">
      </div>
      <div class="featured-body">
        <span class="featured-category">${event.category}</span>
        <h3 class="featured-title">${event.title}</h3>
        <p class="featured-meta">📍 ${event.shortLocation} | 🗓 ${event.dateShort}</p>
        <div class="featured-footer">
          <span class="starting-price">From ₹${event.startingPrice}</span>
          <a href="#event/${event.id}" class="btn btn-outline btn-sm">View Details &rarr;</a>
          <button class="btn btn-primary btn-sm trigger-book-now" data-event-id="${event.id}">Book Now</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderMonthlyCalendarHTML() {
  const daysInMonth = 31; // August 2026
  const startDayOffset = 6; // Saturday starts Aug 1 2026
  const events = Object.values(getLiveEventsData());

  let daysHTML = '';
  for (let i = 0; i < startDayOffset; i++) {
    daysHTML += `<div class="calendar-day empty"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dayStr = d < 10 ? `0${d}` : `${d}`;
    const fullDateIso = `2026-08-${dayStr}`;
    const matchingEvents = events.filter(e => e.dateIso === fullDateIso);
    const hasEvent = matchingEvents.length > 0;

    daysHTML += `
      <div class="calendar-day ${hasEvent ? 'has-events' : ''}" data-date-iso="${fullDateIso}">
        <span class="day-num">${d}</span>
        ${hasEvent ? matchingEvents.map(ev => `
          <div class="calendar-event-pill" data-event-id="${ev.id}">
            <span class="dot"></span> ${ev.title}
          </div>
        `).join('') : ''}
      </div>
    `;
  }

  return `
    <div class="calendar-header-bar">
      <h3 class="calendar-month-title">August 2026</h3>
      <span class="calendar-legend">🔴 Active Events Scheduled</span>
    </div>
    <div class="calendar-days-header">
      <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
    </div>
    <div class="calendar-grid">
      ${daysHTML}
    </div>
  `;
}

function renderFilteredCardsHTML() {
  const events = Object.values(getLiveEventsData());
  const filtered = events.filter(event => {
    // Search filter
    if (currentFilters.search) {
      const q = currentFilters.search.toLowerCase();
      const match = event.title.toLowerCase().includes(q) ||
        event.shortLocation.toLowerCase().includes(q) ||
        event.category.toLowerCase().includes(q);
      if (!match) return false;
    }
    // Category filter
    if (currentFilters.category !== 'ALL' && event.category !== currentFilters.category) {
      return false;
    }
    // Tag filter
    if (currentFilters.tag !== 'ALL' && !event.tags.includes(currentFilters.tag)) {
      return false;
    }
    // Price filter
    if (event.startingPrice > currentFilters.maxPrice) {
      return false;
    }
    // Date filter
    if (currentFilters.dateIso && event.dateIso !== currentFilters.dateIso) {
      return false;
    }
    return true;
  });

  const countDisplay = document.getElementById('eventCountDisplay');
  if (countDisplay) countDisplay.textContent = filtered.length;

  if (filtered.length === 0) {
    return `<div class="no-results-box">
      <h3>No experiences found matching your filters</h3>
      <p>Try clearing search terms or increasing your price filter.</p>
      <button class="btn btn-outline" id="btnResetFilters">Reset Filters</button>
    </div>`;
  }

  return filtered.map(event => `
    <article class="experience-card card-enhanced" data-event-id="${event.id}">
      <div class="card-image-wrap">
        <img src="${event.heroImg}" alt="${event.title}" class="card-img" loading="lazy">
        <div class="date-badge">
          <span class="date-num">${event.dateShort.split(' ')[0]}</span>
          <span class="date-month">${event.dateShort.split(' ')[1]}</span>
        </div>
        ${event.seatsLeft <= 3 ? `<div class="urgent-seats-badge">🔥 Only ${event.seatsLeft} Seats Left</div>` : ''}
      </div>
      <div class="card-body">
        <div class="card-category-strip">${event.category}</div>
        <h3 class="card-title">${event.title}</h3>
        <div class="card-meta">
          <span class="meta-item">📍 ${event.shortLocation}</span>
          <span class="meta-item">⏰ ${event.duration}</span>
        </div>
        <div class="card-price-seats-row">
          <div class="price-box">Starting <strong>₹${event.startingPrice}</strong></div>
          <div class="seats-left-pill">${event.seatsLeft} Seats Left</div>
        </div>
        <div class="card-actions-grid">
          <a href="#event/${event.id}" class="btn btn-outline btn-sm">View Details</a>
          <button class="btn btn-primary btn-sm trigger-book-now" data-event-id="${event.id}">Book Now</button>
        </div>
      </div>
    </article>
  `).join('');
}

function bindFilterEvents() {
  const searchInput = document.getElementById('searchExperienceInput');
  const catSelect = document.getElementById('categoryFilterSelect');
  const priceSlider = document.getElementById('priceRangeSlider');
  const priceDisplay = document.getElementById('priceDisplay');
  const tagChips = document.querySelectorAll('.tag-chip');

  searchInput?.addEventListener('input', (e) => {
    currentFilters.search = e.target.value;
    updateFilteredGrid();
  });

  catSelect?.addEventListener('change', (e) => {
    currentFilters.category = e.target.value;
    updateFilteredGrid();
  });

  priceSlider?.addEventListener('input', (e) => {
    currentFilters.maxPrice = Number(e.target.value);
    if (priceDisplay) priceDisplay.textContent = `₹${currentFilters.maxPrice}`;
    updateFilteredGrid();
  });

  tagChips.forEach(chip => {
    chip.addEventListener('click', () => {
      tagChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilters.tag = chip.getAttribute('data-tag');
      updateFilteredGrid();
    });
  });

  // Calendar Day Clicks
  const calendarDays = document.querySelectorAll('.calendar-day.has-events');
  calendarDays.forEach(day => {
    day.addEventListener('click', () => {
      const dateIso = day.getAttribute('data-date-iso');
      currentFilters.dateIso = currentFilters.dateIso === dateIso ? '' : dateIso;
      updateFilteredGrid();
      showToast(currentFilters.dateIso ? `Filtered events for ${dateIso}` : 'Cleared date filter');
    });
  });

  // Book Now Buttons Delegate
  document.addEventListener('click', (e) => {
    const bookBtn = e.target.closest('.trigger-book-now');
    if (bookBtn) {
      const eventId = bookBtn.getAttribute('data-event-id');
      startBookingFlow(eventId);
    }
  });

  document.getElementById('btnResetFilters')?.addEventListener('click', () => {
    currentFilters = { search: '', category: 'ALL', tag: 'ALL', maxPrice: 15000, dateIso: '' };
    renderBookExperiencePage();
  });
}

function updateFilteredGrid() {
  const grid = document.getElementById('bookExperienceGrid');
  if (grid) grid.innerHTML = renderFilteredCardsHTML();
}

// ==========================================================================
// GUEST & LOGIN AUTH MODAL CONTROLLER
// ==========================================================================
function initAuthModal() {
  const modal = document.getElementById('authModal');
  const closeBtn = document.getElementById('closeAuthModal');
  const btnGuest = document.getElementById('btnAuthGuest');
  const btnSignIn = document.getElementById('btnAuthSignIn');
  const btnCreate = document.getElementById('btnAuthCreate');

  closeBtn?.addEventListener('click', () => modal?.classList.remove('open'));

  btnGuest?.addEventListener('click', () => {
    currentUser = { isGuest: true, name: 'Guest User', email: 'guest@sorora.in' };
    modal?.classList.remove('open');
    open7StepBookingDrawer();
  });

  btnSignIn?.addEventListener('click', () => {
    currentUser = { isGuest: false, name: 'Ananya Sharma', email: 'ananya.sharma@example.com' };
    modal?.classList.remove('open');
    showToast('Signed in successfully as Ananya Sharma!');
    open7StepBookingDrawer();
  });

  btnCreate?.addEventListener('click', () => {
    currentUser = { isGuest: false, name: 'Ananya Sharma', email: 'ananya.sharma@example.com' };
    modal?.classList.remove('open');
    showToast('Account created successfully!');
    open7StepBookingDrawer();
  });
}

function startBookingFlow(eventId) {
  if (eventId && EVENTS_DATA[eventId]) {
    currentBookingEvent = EVENTS_DATA[eventId];
  }
  // Check auth
  if (!currentUser) {
    document.getElementById('authModal')?.classList.add('open');
  } else {
    open7StepBookingDrawer();
  }
}

// ==========================================================================
// 7-STEP BOOKING DRAWER CONTROLLER
// ==========================================================================
function initBookingDrawer() {
  const drawer = document.getElementById('bookingDrawer');
  const closeBtn = document.getElementById('closeBookingDrawer');

  closeBtn?.addEventListener('click', () => drawer?.classList.remove('open'));

  // Step 1 Controls
  const eventSelect = document.getElementById('step1EventSelect');
  const minusGuest = document.getElementById('btnMinusGuest');
  const plusGuest = document.getElementById('btnPlusGuest');
  const guestDisplay = document.getElementById('guestCountSpan');

  minusGuest?.addEventListener('click', () => {
    if (currentBookingData.guests > 1) {
      currentBookingData.guests--;
      if (guestDisplay) guestDisplay.textContent = currentBookingData.guests;
      updateDrawerPricing();
    }
  });

  plusGuest?.addEventListener('click', () => {
    if (currentBookingData.guests < currentBookingEvent.seatsLeft) {
      currentBookingData.guests++;
      if (guestDisplay) guestDisplay.textContent = currentBookingData.guests;
      updateDrawerPricing();
    } else {
      showToast(`Only ${currentBookingEvent.seatsLeft} seats remaining!`);
    }
  });

  // Step Navigations
  document.getElementById('btnStep1Next')?.addEventListener('click', () => switchDrawerStep(2));
  document.getElementById('btnStep2Back')?.addEventListener('click', () => switchDrawerStep(1));
  document.getElementById('btnStep2Next')?.addEventListener('click', () => switchDrawerStep(3));
  document.getElementById('btnStep3Back')?.addEventListener('click', () => switchDrawerStep(2));
  document.getElementById('btnStep3Next')?.addEventListener('click', () => switchDrawerStep(4));
  document.getElementById('btnStep4Back')?.addEventListener('click', () => switchDrawerStep(3));
  document.getElementById('btnStep4Next')?.addEventListener('click', () => switchDrawerStep(5));
  document.getElementById('btnStep5Back')?.addEventListener('click', () => switchDrawerStep(4));
  document.getElementById('btnStep5Next')?.addEventListener('click', () => switchDrawerStep(6));
  document.getElementById('btnStep6Back')?.addEventListener('click', () => switchDrawerStep(5));
  document.getElementById('btnStep6Next')?.addEventListener('click', () => switchDrawerStep(7));
  document.getElementById('btnStep7Back')?.addEventListener('click', () => switchDrawerStep(6));

  // Payment Form Submit (Step 7)
  const paymentForm = document.getElementById('drawerPaymentForm');
  paymentForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    processPaymentAndConfirm();
  });

  // Global event delegation for open-booking-trigger
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-booking-trigger');
    if (trigger) {
      const eventId = trigger.getAttribute('data-event-id');
      startBookingFlow(eventId);
    }
  });
}

function open7StepBookingDrawer() {
  const drawer = document.getElementById('bookingDrawer');
  if (!drawer) return;

  // Sync event select dropdown in Step 1
  const select = document.getElementById('step1EventSelect');
  if (select) {
    select.innerHTML = Object.values(EVENTS_DATA).map(e => `
      <option value="${e.id}" ${e.id === currentBookingEvent.id ? 'selected' : ''}>${e.title} — ₹${e.startingPrice} (${e.dateShort})</option>
    `).join('');

    select.onchange = (ev) => {
      currentBookingEvent = EVENTS_DATA[ev.target.value];
      updateDrawerEventMeta();
    };
  }

  updateDrawerEventMeta();
  switchDrawerStep(1);
  drawer.classList.add('open');
}

function updateDrawerEventMeta() {
  const title = document.getElementById('drawerEventTitle');
  const meta = document.getElementById('drawerEventMeta');
  if (title) title.textContent = currentBookingEvent.title;
  if (meta) meta.textContent = `${currentBookingEvent.dateShort} | ${currentBookingEvent.shortLocation}`;

  // Populate Date selector in Step 2
  const dateSelect = document.getElementById('step2DateSelect');
  if (dateSelect) {
    dateSelect.innerHTML = (currentBookingEvent.datesAvailable || [currentBookingEvent.date]).map(d => `
      <option value="${d}">${d}</option>
    `).join('');
  }

  updateDrawerPricing();
}

function updateDrawerPricing() {
  const tierRadios = document.querySelectorAll('input[name="bookingTier"]');
  let selectedTierKey = 'earlyBird';
  tierRadios.forEach(r => { if (r.checked) selectedTierKey = r.value; });

  const pObj = currentBookingEvent.pricing[selectedTierKey] || currentBookingEvent.pricing['earlyBird'] || { price: currentBookingEvent.startingPrice, title: 'Pass' };
  currentBookingData.ticketType = pObj.title;
  currentBookingData.pricePerTicket = pObj.price;

  const subtotal = currentBookingData.pricePerTicket * currentBookingData.guests;
  const totalDisplay = document.getElementById('drawerTotalDisplay');
  if (totalDisplay) totalDisplay.textContent = `₹${subtotal.toLocaleString()}`;
}

function switchDrawerStep(stepNum) {
  currentBookingStep = stepNum;

  // Update Indicator Pills
  const indicators = document.querySelectorAll('.step-indicator-item');
  indicators.forEach((ind, idx) => {
    if (idx + 1 === stepNum) ind.classList.add('active');
    else ind.classList.remove('active');
  });

  // Toggle Step Panels
  for (let s = 1; s <= 7; s++) {
    const panel = document.getElementById(`stepPanel${s}`);
    if (panel) {
      if (s === stepNum) panel.classList.remove('hidden');
      else panel.classList.add('hidden');
    }
  }

  if (stepNum === 6) {
    renderBookingSummaryStep();
  }
}

function renderBookingSummaryStep() {
  // Capture inputs from Step 5
  currentBookingData.name = document.getElementById('drawerGuestName')?.value || 'Ananya Sharma';
  currentBookingData.email = document.getElementById('drawerGuestEmail')?.value || 'ananya.sharma@example.com';
  currentBookingData.phone = document.getElementById('drawerGuestPhone')?.value || '+91 98765 43210';
  currentBookingData.emergency = document.getElementById('drawerEmergency')?.value || 'Rahul Sharma (+91 98111 22233)';
  currentBookingData.diet = document.getElementById('drawerDiet')?.value || 'Vegetarian';
  currentBookingData.requests = document.getElementById('drawerRequests')?.value || 'None';

  const subtotal = currentBookingData.pricePerTicket * currentBookingData.guests;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const summaryContainer = document.getElementById('summaryTableContainer');
  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <table class="summary-table">
        <tr><td><strong>Event:</strong></td><td>${currentBookingEvent.title}</td></tr>
        <tr><td><strong>Selected Date:</strong></td><td>${currentBookingData.selectedDate}</td></tr>
        <tr><td><strong>Venue:</strong></td><td>${currentBookingEvent.location}</td></tr>
        <tr><td><strong>Guest Name:</strong></td><td>${currentBookingData.name} (${currentBookingData.email})</td></tr>
        <tr><td><strong>Pass Type:</strong></td><td>${currentBookingData.ticketType} x ${currentBookingData.guests}</td></tr>
        <tr><td><strong>Subtotal:</strong></td><td>₹${subtotal.toLocaleString()}</td></tr>
        <tr><td><strong>GST Tax (18%):</strong></td><td>₹${tax.toLocaleString()}</td></tr>
        <tr class="total-row"><td><strong>Total Payable:</strong></td><td><strong>₹${total.toLocaleString()}</strong></td></tr>
      </table>
    `;
  }
}

function processPaymentAndConfirm() {
  const completeBtn = document.getElementById('btnCompletePayment');
  if (completeBtn) completeBtn.innerHTML = '🔒 Processing Payment...';

  setTimeout(() => {
    const bookingId = `SORORA-SS-${Math.floor(10000 + Math.random() * 90000)}`;
    currentBookingData.bookingId = bookingId;

    const payRadio = document.querySelector('input[name="paymentMethod"]:checked') || document.querySelector('input[name="drawerPaymentMethod"]:checked');
    const payLabel = payRadio ? (payRadio.value || payRadio.nextElementSibling?.textContent?.trim()) : 'UPI (Instant GPay)';
    const dateFormatted = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'SHORT', year: 'numeric' }).toUpperCase() + ', ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    // Record in Admin Database
    const newBooking = {
      id: bookingId,
      bookingDate: dateFormatted,
      eventTitle: currentBookingEvent.title,
      selectedDate: currentBookingData.selectedDate || currentBookingEvent.date,
      guestName: currentBookingData.name,
      email: currentBookingData.email,
      phone: currentBookingData.phone,
      emergency: currentBookingData.emergency || 'Provided',
      diet: currentBookingData.diet || 'Standard',
      requests: currentBookingData.requests || 'None',
      tier: currentBookingData.ticketType,
      guests: currentBookingData.guests,
      total: Math.round(currentBookingData.pricePerTicket * currentBookingData.guests * 1.18),
      paymentMethod: payLabel || 'UPI (GPay / PhonePe)',
      status: 'CONFIRMED',
      checkedIn: false
    };

    ADMIN_BOOKINGS.unshift(newBooking);
    localStorage.setItem('SORORA_ADMIN_BOOKINGS', JSON.stringify(ADMIN_BOOKINGS));

    document.getElementById('bookingDrawer')?.classList.remove('open');
    if (completeBtn) completeBtn.innerHTML = 'Complete Booking & Pay &rarr;';

    // Show Success Celebration Modal
    const successModal = document.getElementById('successModal');
    const successTitle = document.getElementById('successEventTitle');
    const successId = document.getElementById('successBookingId');
    if (successTitle) successTitle.textContent = currentBookingEvent.title;
    if (successId) successId.textContent = bookingId;

    successModal?.classList.add('open');

    // Bind Digital Ticket Trigger
    const btnTicket = document.getElementById('btnViewDigitalTicket');
    if (btnTicket) {
      btnTicket.onclick = () => {
        successModal?.classList.remove('open');
        openDigitalTicketModal();
      };
    }
  }, 1200);
}

function openDigitalTicketModal() {
  const ticketModal = document.getElementById('ticketModal');
  if (!ticketModal) return;

  document.getElementById('ticketEventTitle').textContent = currentBookingEvent.title;
  document.getElementById('ticketDate').textContent = currentBookingEvent.date;
  document.getElementById('ticketTime').textContent = currentBookingEvent.time;
  document.getElementById('ticketVenue').textContent = currentBookingEvent.shortLocation;
  document.getElementById('ticketGuest').textContent = currentBookingData.name;
  document.getElementById('ticketTier').textContent = `${currentBookingData.ticketType} (${currentBookingData.guests} Pax)`;
  document.getElementById('ticketBookingId').textContent = currentBookingData.bookingId;

  renderQRCode('ticketCanvas', currentBookingData.bookingId);
  ticketModal.classList.add('open');

  const closeBtn = document.getElementById('closeTicketModal');
  if (closeBtn) closeBtn.onclick = () => ticketModal.classList.remove('open');
}

// CANVAS QR CODE GENERATOR
function renderQRCode(canvasId, text) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 140, 140);
  ctx.fillStyle = '#161A14';

  // Generate 7x7 grid pattern
  for (let r = 0; r < 14; r++) {
    for (let c = 0; c < 14; c++) {
      if ((r + c + text.length) % 2 === 0 || (r < 4 && c < 4) || (r > 9 && c < 4) || (r < 4 && c > 9)) {
        ctx.fillRect(c * 10, r * 10, 8, 8);
      }
    }
  }
}

// ==========================================================================
// MEMBER DASHBOARD CONTROLLER
// ==========================================================================
function renderDashboard() {
  const container = document.getElementById('dashboardBody');
  if (!container) return;

  container.innerHTML = `
    <div class="dash-welcome-card">
      <div class="dash-user-avatar">AS</div>
      <div>
        <h2 class="dash-user-name">Welcome back, Ananya! ✨</h2>
        <span class="dash-membership-badge">SORORA GOLD CIRCLE MEMBER</span>
      </div>
      <div class="dash-points-box">
        <span class="points-val">450 PTS</span>
        <span class="points-label">Reward Balance</span>
      </div>
    </div>

    <div class="dash-tabs-bar">
      <button class="dash-tab active" data-dash-tab="upcoming">Upcoming Bookings (1)</button>
      <button class="dash-tab" data-dash-tab="tickets">Digital Tickets</button>
      <button class="dash-tab" data-dash-tab="past">Past Experiences (3)</button>
      <button class="dash-tab" data-dash-tab="rewards">Rewards & Referrals</button>
    </div>

    <div class="dash-tab-content" id="dashTabContent">
      <div class="dash-booking-card">
        <div class="dash-booking-meta">
          <span class="booking-status-pill">CONFIRMED PASS</span>
          <span class="booking-id-text">Booking ID: ${currentBookingData.bookingId}</span>
        </div>
        <h3 class="dash-booking-title">${currentBookingEvent.title}</h3>
        <p class="dash-booking-details">📍 ${currentBookingEvent.location}<br>🗓 ${currentBookingEvent.date} | ⏰ ${currentBookingEvent.time}</p>
        <div class="dash-booking-actions">
          <button class="btn btn-primary btn-sm" id="btnDashViewTicket">View Digital QR Pass 🎟</button>
          <button class="btn btn-outline btn-sm" onclick="alert('Reschedule request submitted to Sorora Concierge')">Reschedule</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnDashViewTicket')?.addEventListener('click', openDigitalTicketModal);
}

// ==========================================================================
// ADMIN MANAGEMENT PORTAL (#admin)
// ==========================================================================
function renderAdminPortal() {
  const container = document.getElementById('adminBody');
  if (!container) return;

  container.innerHTML = `
    <div class="admin-portal-wrapper">
      <div class="admin-header">
        <h2>Sorora Admin Portal</h2>
        <span class="admin-badge">ADMIN CONTROL CENTER</span>
      </div>

      <div class="admin-tabs">
        <button class="admin-tab active" data-admin-tab="events">Manage Events</button>
        <button class="admin-tab" data-admin-tab="attendees">Attendee Rosters</button>
        <button class="admin-tab" data-admin-tab="scanner">Gate QR Scanner</button>
        <button class="admin-tab" data-admin-tab="reminders">Reminders & Reminders</button>
      </div>

      <!-- TAB 1: MANAGE EVENTS -->
      <div class="admin-panel" id="adminPanelEvents">
        <div class="admin-actions-bar">
          <button class="btn btn-primary btn-sm" id="btnAdminAddEvent">+ Create New Event</button>
        </div>
        
        <table class="admin-table">
          <thead>
            <tr>
              <th>Event Title</th>
              <th>Date</th>
              <th>Price</th>
              <th>Seats (Filled/Total)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${Object.values(EVENTS_DATA).map(e => `
              <tr>
                <td><strong>${e.title}</strong></td>
                <td>${e.dateShort}</td>
                <td>₹${e.startingPrice}</td>
                <td>${e.seatsFilled} / ${e.seatsTotal}</td>
                <td><span class="badge-status ${e.seatsLeft === 0 ? 'soldout' : 'active'}">${e.seatsLeft === 0 ? 'SOLD OUT' : 'ACTIVE'}</span></td>
                <td>
                  <button class="btn-xs btn-outline" onclick="alert('Edit event modal opened for ${e.title}')">Edit</button>
                  <button class="btn-xs btn-outline" onclick="toggleSoldOut('${e.id}')">${e.seatsLeft === 0 ? 'Mark Available' : 'Mark Sold Out'}</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- TAB 2: ATTENDEE ROSTERS -->
      <div class="admin-panel hidden" id="adminPanelAttendees">
        <div class="admin-actions-bar">
          <button class="btn btn-outline btn-sm" id="btnExportCSV">📥 Export Attendees (CSV)</button>
        </div>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Guest Name</th>
              <th>Email / Phone</th>
              <th>Event</th>
              <th>Pass Tier</th>
              <th>Check-in Status</th>
            </tr>
          </thead>
          <tbody>
            ${ADMIN_BOOKINGS.map(b => `
              <tr>
                <td><code>${b.id}</code></td>
                <td><strong>${b.guestName}</strong></td>
                <td>${b.email}<br>${b.phone}</td>
                <td>${b.eventTitle}</td>
                <td>${b.tier} (${b.guests} Pax)</td>
                <td><span class="badge-checkin ${b.checkedIn ? 'checked' : 'pending'}">${b.checkedIn ? '✓ CHECKED IN' : 'PENDING'}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- TAB 3: GATE QR SCANNER SIMULATOR -->
      <div class="admin-panel hidden" id="adminPanelScanner">
        <div class="qr-scanner-box text-center">
          <h3>Gate Entry QR Scanner</h3>
          <p>Scan guest ticket QR code or enter Booking ID manually:</p>
          <div class="scanner-input-row">
            <input type="text" id="scanBookingIdInput" class="form-control" placeholder="Enter Booking ID (e.g. SORORA-SS-89421)">
            <button class="btn btn-primary" id="btnVerifyQR">Verify & Check In</button>
          </div>
          <div id="scannerResult" class="scanner-result"></div>
        </div>
      </div>
    </div>
  `;

  bindAdminEvents();
}

function bindAdminEvents() {
  const tabs = document.querySelectorAll('.admin-tab');
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(tab => tab.classList.remove('active'));
      t.classList.add('active');
      const target = t.getAttribute('data-admin-tab');
      document.getElementById('adminPanelEvents')?.classList.toggle('hidden', target !== 'events');
      document.getElementById('adminPanelAttendees')?.classList.toggle('hidden', target !== 'attendees');
      document.getElementById('adminPanelScanner')?.classList.toggle('hidden', target !== 'scanner');
    });
  });

  // Export CSV Handler
  document.getElementById('btnExportCSV')?.addEventListener('click', () => {
    let csv = 'Booking ID,Guest Name,Email,Phone,Event,Pass Tier,Total,Checked In\n';
    ADMIN_BOOKINGS.forEach(b => {
      csv += `"${b.id}","${b.guestName}","${b.email}","${b.phone}","${b.eventTitle}","${b.tier}",${b.total},${b.checkedIn}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sorora_Attendee_Roster.csv';
    a.click();
    showToast('Attendee roster CSV downloaded successfully!');
  });

  // QR Scanner Simulator
  document.getElementById('btnVerifyQR')?.addEventListener('click', () => {
    const input = document.getElementById('scanBookingIdInput')?.value.trim();
    const resultBox = document.getElementById('scannerResult');
    const booking = ADMIN_BOOKINGS.find(b => b.id.toUpperCase() === input.toUpperCase());

    if (!booking) {
      if (resultBox) resultBox.innerHTML = `<div class="alert alert-danger">❌ Ticket Not Found: ${input}</div>`;
    } else if (booking.checkedIn) {
      if (resultBox) resultBox.innerHTML = `<div class="alert alert-warning">⚠️ Already Checked In: ${booking.guestName} for ${booking.eventTitle}</div>`;
    } else {
      booking.checkedIn = true;
      if (resultBox) resultBox.innerHTML = `<div class="alert alert-success">✅ CHECK-IN SUCCESSFUL! Welcome ${booking.guestName} to ${booking.eventTitle}</div>`;
      showToast(`Checked in ${booking.guestName}!`);
    }
  });
}

window.toggleSoldOut = (eventId) => {
  const ev = EVENTS_DATA[eventId];
  if (ev) {
    if (ev.seatsLeft === 0) {
      ev.seatsLeft = 3;
    } else {
      ev.seatsLeft = 0;
    }
    renderAdminPortal();
    showToast(`Updated seat availability for ${ev.title}`);
  }
};

// TOAST UTILITY
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
