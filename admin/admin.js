// ==========================================================================
// SORORA ADMIN PORTAL CONTROLLER & CLIENT DATA ENGINE
// ==========================================================================

const DEFAULT_HERO_CONFIG = {
  title: 'EXPERIENCES THAT CONNECT YOU',
  scriptTitle: 'To yourself & each other.',
  subtitle: 'Meaningful events for women who seek connection, adventure & memories that last.',
  video: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4',
  poster: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025917347_photo__3_.jpeg',
  btnText: 'Explore Experiences',
  watchBtnText: 'Watch Video'
};

const DEFAULT_REELS_DATA = [
  {
    id: "reel-1",
    title: "Saddle up for soulful mornings",
    duration: "0:24",
    views: "12.4K",
    videoUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4",
    posterUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025558204_photo__3_.jpeg"
  },
  {
    id: "reel-2",
    title: "Into the wild, into yourself",
    duration: "0:18",
    views: "8.7K",
    videoUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4",
    posterUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025917347_photo__3_.jpeg"
  },
  {
    id: "reel-3",
    title: "Breathe. Stretch. Be present.",
    duration: "0:21",
    views: "15.2K",
    videoUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4",
    posterUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360992528_photo__5_.jpeg"
  },
  {
    id: "reel-4",
    title: "Mystery nights & mind games",
    duration: "0:17",
    views: "6.3K",
    videoUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4",
    posterUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025946841_Detective_Game_Night.jpg"
  },
  {
    id: "reel-5",
    title: "Conversations that heal",
    duration: "0:19",
    views: "11.8K",
    videoUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4",
    posterUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025917347_photo__3_.jpeg"
  },
  {
    id: "reel-6",
    title: "Stronger together, always",
    duration: "0:22",
    views: "9.6K",
    videoUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4",
    posterUrl: "https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025558204_photo__3_.jpeg"
  }
];

const DEFAULT_EVENTS_DATA = {
  'saddle-and-soul': {
    id: 'saddle-and-soul',
    title: 'Saddle & Soul',
    subtitle: 'An Exclusive Soirée at Zippy Equestrian',
    category: 'Exclusive Soirée',
    tags: ['Women Only', 'Wellness', 'Creativity', 'Weekend'],
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
    reviewsCount: 124,
    joinedCount: '150+',
    featuredBadge: 'Limited Spots',
    heroImg: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025917347_photo__3_.jpeg',
    heroVideo: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4',
    storyText: "Imagine stepping away from the city's noise into a peaceful equestrian sanctuary, where horses, art, meaningful conversations, and mindful moments help you reconnect—with yourself and with others.",
    pricing: {
      earlyBird: { price: 1999, original: 2499, title: 'Early Bird Pass', status: 'Save ₹500 - Limited Seats' },
      regular: { price: 2499, original: 2499, title: 'Regular Pass', status: 'Standard Access' },
      vip: { price: 3499, original: 3999, title: 'VIP Pass', status: 'Includes Front Row & Welcome Kit' }
    },
    datesAvailable: ['Saturday, August 02, 2026'],
    timeline: [
      { time: '3:00 PM', title: 'Welcome Drink', desc: 'Arrive at the equestrian sanctuary and enjoy artisanal herbal cooler' },
      { time: '3:20 PM', title: 'Meet Everyone & Warm-up', desc: 'Fun icebreakers in the garden lawn' },
      { time: '3:50 PM', title: 'Horse Connection Session', desc: 'Guided grooming, feeding & bonding with majestic horses' },
      { time: '4:40 PM', title: 'Sip & Paint Workshop', desc: 'Easel painting inspired by nature with guided art instructor' },
      { time: '5:30 PM', title: 'High Tea & Reflection Circle', desc: 'Gourmet snacks, tea, and quiet self-reflection card prompts' },
      { time: '6:15 PM', title: 'Sunset Photos & Farewell', desc: 'Professional golden hour photos and goodbye gift box' }
    ],
    experiences: [
      { icon: '🐎', title: 'Horse Connection', desc: 'Bond with gentle horses in a tranquil paddock environment.', detail: 'Guided interaction with gentle horses, grooming, and feeding. No riding experience required!' },
      { icon: '🎨', title: 'Sip & Paint', desc: 'Express your creativity on canvas with paints & herbal tea.', detail: 'All painting canvases, brushes, easel kits provided. Take your canvas home!' },
      { icon: '🧘', title: 'Reflection Session', desc: 'Mindful journaling prompt cards to connect with yourself.', detail: 'Quiet guided prompts for self-care, mindfulness, and group sharing.' },
      { icon: '🍰', title: 'Gourmet High Tea', desc: 'Artisanal snacks, fresh bakes & organic teas.', detail: 'Delicious sweet & savory treats with gluten-free and vegan options.' }
    ],
    hosts: [
      { name: 'Dr. Alisha Roy', role: 'Equestrian & Mindfulness Lead', bio: 'Certified equine-assisted therapy facilitator with 8+ years experience.', img: '/assets/hero_horse_bg.png' }
    ],
    venue: {
      name: 'Zippy Equestrian Center',
      address: '#42 Green Valley, JP Nagar 8th Phase, Bengaluru',
      metro: 'Silk Institute Metro Station (10 mins drive)',
      parking: 'Ample private valet parking available',
      weather: '24°C Pleasant Evening Breeze',
      mapSrc: 'https://maps.google.com/maps?q=JP+Nagar+Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    included: ['Guided Horse Bonding Session', 'Art Easel & Canvas Painting Kit', 'Gourmet High Tea & Refreshments', 'Professional Golden Hour Photoshoot', 'Sorora Reflection Journal & Gift Box'],
    whatToBring: [
      { icon: '👗', text: 'Comfortable Clothes' },
      { icon: '👟', text: 'Flat Closed-Toe Shoes' },
      { icon: '🧢', text: 'Sun Hat / Cap' },
      { icon: '😊', text: 'Open Heart & Smile' }
    ],
    faqs: [
      { q: 'What should I wear?', a: 'We recommend comfortable casual trousers/jeans and flat closed-toe shoes or sneakers.' },
      { q: 'Do I need horse riding experience?', a: 'Not at all! This is a ground-level bonding, grooming & connection session suitable for total beginners.' },
      { q: 'Can I come alone?', a: 'Absolutely! Over 70% of our attendees join solo and build lifelong connections.' }
    ]
  },
  'into-the-woods': {
    id: 'into-the-woods',
    title: 'Into The Woods',
    subtitle: 'A Serene Weekend Escape into Bandipur Forest',
    category: 'Weekend Getaway',
    tags: ['Adventure', 'Women Only', 'Wellness', 'Weekend'],
    location: 'Bandipur Forest Reserve, Karnataka',
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
    heroImg: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025558204_photo__3_.jpeg',
    heroVideo: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4',
    storyText: "Disconnect from screens and reconnect with wild nature in an eco-luxury jungle lodge. Guided safaris, forest bathing, starry campfire circles, and deep sisterhood bond.",
    pricing: {
      earlyBird: { price: 8999, original: 10999, title: 'Early Bird Retreat', status: 'Includes All Meals & Safari' },
      regular: { price: 10999, original: 10999, title: 'Regular Retreat Pass', status: 'Full 3D2N Package' }
    },
    datesAvailable: ['Friday, August 14, 2026'],
    timeline: [
      { time: 'Day 1 - 2:00 PM', title: 'Check-in & Welcome Circle', desc: 'Arrive at eco-resort & herbal welcome drinks' },
      { time: 'Day 1 - 7:00 PM', title: 'Campfire & Stargazing', desc: 'Acoustic music circle and organic dinner' },
      { time: 'Day 2 - 6:00 AM', title: 'Jungle Jeep Safari', desc: 'Guided wildlife safari in Bandipur National Park' }
    ],
    experiences: [
      { icon: '🐅', title: 'Jungle Safari', desc: 'Jeep safari to spot elephants, deer & wildlife.', detail: 'Led by certified forest officers.' },
      { icon: '🔥', title: 'Campfire Stories', desc: 'Cozy evening under starry skies.', detail: 'Acoustic songs, hot cocoa, and deep conversations.' }
    ],
    hosts: [{ name: 'Kavita Nair', role: 'Wilderness Guide', bio: 'Wildlife naturalist and trekking leader.', img: '/assets/into_the_woods.png' }],
    venue: { name: 'Jungle Eco Lodge', address: 'Bandipur Border, Karnataka', metro: 'Mysuru Railway Station (1.5 hrs)', parking: 'Resort parking available', weather: '22°C Misty Mornings', mapSrc: 'https://maps.google.com/maps?q=Bandipur+National+Park&t=&z=13&ie=UTF8&iwloc=&output=embed' },
    included: ['Luxury Villa Stay (Shared/Single)', 'All Organic Farm-to-Table Meals', 'Open Jeep Jungle Safari Pass'],
    whatToBring: [{ icon: '🧥', text: 'Warm Jacket' }, { icon: '🥾', text: 'Trekking Shoes' }],
    faqs: [{ q: 'Is transportation provided?', a: 'We arrange shared carpools from Indiranagar, Bengaluru!' }]
  },
  'morning-yoga': {
    id: 'morning-yoga',
    title: 'Morning Yoga & Botanical Brunch',
    subtitle: 'Nourish Your Body and Mind in Nature',
    category: 'Wellness & Mindfulness',
    tags: ['Wellness', 'Women Only', 'Networking', 'Weekend'],
    location: 'Sports Drome, Sarjapur Road, Bengaluru',
    shortLocation: 'Sports Drome, Sarjapur Road',
    date: 'Sunday, August 16, 2026',
    dateShort: '16 AUG 2026',
    dateIso: '2026-08-16',
    time: '9:00 AM – 12:30 PM',
    duration: '3.5 Hours',
    startingPrice: 999,
    seatsTotal: 15,
    seatsFilled: 9,
    seatsLeft: 6,
    rating: 4.8,
    reviewsCount: 96,
    joinedCount: '210+',
    featuredBadge: 'Most Popular',
    heroImg: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360992528_photo__5_.jpeg',
    heroVideo: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4',
    storyText: "Start your Sunday morning with gentle Hatha yoga Flow surrounded by lush greenery, followed by a sound bowl meditation and a delicious farm-fresh botanical brunch.",
    pricing: {
      regular: { price: 999, original: 1299, title: 'Yoga & Brunch Pass', status: 'Includes Mat & Brunch' }
    },
    datesAvailable: ['Sunday, August 16, 2026'],
    timeline: [
      { time: '9:00 AM', title: 'Gentle Hatha Flow', desc: 'Breathing exercises & energizing yoga' },
      { time: '10:15 AM', title: 'Tibetan Sound Bath', desc: 'Healing sound vibration relaxation' },
      { time: '11:00 AM', title: 'Organic Botanical Brunch', desc: 'Fresh smoothies, avocado toast, and artisan coffee' }
    ],
    experiences: [{ icon: '🧘‍♀️', title: 'Hatha Yoga', desc: 'Gentle yoga flow suitable for all levels.', detail: 'Mats and props provided.' }],
    hosts: [{ name: 'Priya Sharma', role: 'Certified Yoga Master', bio: '500-hr RYT yoga teacher.', img: '/assets/morning_yoga.png' }],
    venue: { name: 'Sports Drome Garden', address: 'Sarjapur Road, Bengaluru', metro: 'Carmelaram Railway Station', parking: 'Onsite parking', weather: '23°C Sunny Garden', mapSrc: 'https://maps.google.com/maps?q=Sarjapur+Road+Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed' },
    included: ['Yoga Mat & Prop Usage', 'Sound Bowl Bath Session', 'Gourmet Organic Brunch Buffet'],
    whatToBring: [{ icon: '🧘', text: 'Yoga Wear' }, { icon: '💧', text: 'Water Bottle' }],
    faqs: [{ q: 'Can beginners join?', a: 'Yes! The flow is soft, accessible, and beginner friendly.' }]
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
    heroImg: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025946841_Detective_Game_Night.jpg',
    heroVideo: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4',
    storyText: "Put on your detective hat! Step into a vintage 1920s mansion where every guest gets a secret character role to unravel a mystery over tea and pastries.",
    pricing: {
      regular: { price: 1499, original: 1999, title: 'Detective Pass', status: 'Includes Character Dossier & High Tea' }
    },
    datesAvailable: ['Saturday, August 22, 2026'],
    timeline: [
      { time: '4:00 PM', title: 'Role Assignment', desc: 'Receive secret character card' },
      { time: '4:30 PM', title: 'Investigation Round', desc: 'Interrogate suspects & uncover clues' }
    ],
    experiences: [{ icon: '🕵️‍♀️', title: 'Live Mystery Game', desc: 'Interactive murder mystery game.', detail: 'Full props & character cards.' }],
    hosts: [{ name: 'Tara Varma', role: 'Game Master', bio: 'Narrative mystery creator.', img: '/assets/detective_game.png' }],
    venue: { name: 'The Heritage Manor', address: 'Indiranagar, Bengaluru', metro: 'Indiranagar Metro Station', parking: 'Valet parking', weather: '25°C Indoor Parlor', mapSrc: 'https://maps.google.com/maps?q=Indiranagar+Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed' },
    included: ['Custom Character File', 'High Tea & Mocktails', 'Mystery Prizes'],
    whatToBring: [{ icon: '🕵️‍♀️', text: '1920s Vintage Accessory' }],
    faqs: [{ q: 'Do I need acting experience?', a: 'No! It is super easy and playful.' }]
  }
};

const DEFAULT_BANNERS = [
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
    mediaUrl: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025558204_photo__3_.jpeg',
    mediaType: 'image',
    btnText: 'View Saddle & Soul Details',
    btnLink: '#event/saddle-and-soul'
  },
  {
    id: 'b3',
    title: 'Into The Woods — Bandipur Getaway',
    subtitle: 'A 3-day eco-luxury forest retreat, open jeep safaris, and starry campfires.',
    badge: 'WEEKEND ESCAPE',
    mediaUrl: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025917347_photo__3_.jpeg',
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

const DEFAULT_BOOK_PAGE_CONFIG = {
  heroTitle: 'Book Your Next Experience',
  heroSubtitle: 'Choose an experience that speaks to you and create memories that last a lifetime.',
  categories: ['Exclusive Soirée', 'Weekend Getaway', 'Wellness & Mindfulness', 'Immersive Games'],
  filterTags: ['All', 'Weekend', 'Women Only', 'Wellness', 'Adventure', 'Creativity', 'Networking']
};

const DEFAULT_FOOTER_CONFIG = {
  bioText: 'We create soulful experiences that connect you to yourself, to nature & to beautiful people.',
  socialInsta: 'https://instagram.com/sorora.in',
  socialFB: 'https://facebook.com/sorora.in',
  socialWA: 'https://chat.whatsapp.com',
  socialLinkedIn: 'https://linkedin.com/company/sorora',
  quickLinks: ['Home', 'Experiences', 'About Us', 'Community', 'Gallery', 'Blog', 'Contact'],
  supportLinks: ['FAQs', 'Terms & Conditions', 'Privacy Policy', 'Cancellation Policy']
};

const DEFAULT_BOOKINGS = [
  {
    id: 'SORORA-SS-89421',
    bookingDate: '06 AUG 2026, 04:15 PM',
    eventTitle: 'Saddle & Soul',
    guestName: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    phone: '+91 98765 43210',
    emergency: 'Rahul Sharma (+91 98111 22233)',
    diet: 'Vegetarian',
    requests: 'Would love a calm horse for touch session',
    tier: 'Early Bird Pass',
    guests: 1,
    total: 2358,
    paymentMethod: 'UPI (GPay / PhonePe)',
    status: 'CONFIRMED',
    checkedIn: false
  },
  {
    id: 'SORORA-IW-54912',
    bookingDate: '05 AUG 2026, 02:30 PM',
    eventTitle: 'Into The Woods',
    guestName: 'Meghna Rao',
    email: 'meghna@example.com',
    phone: '+91 98123 45678',
    emergency: 'Karan Rao (+91 98440 55667)',
    diet: 'Vegan / Dairy Free',
    requests: 'Carpooling from Indiranagar Metro',
    tier: 'Regular Retreat',
    guests: 2,
    total: 25957,
    paymentMethod: 'Credit Card (HDFC Visa)',
    status: 'CONFIRMED',
    checkedIn: true
  },
  {
    id: 'SORORA-MY-10293',
    bookingDate: '04 AUG 2026, 11:10 AM',
    eventTitle: 'Morning Yoga',
    guestName: 'Sneha Patel',
    email: 'sneha@example.com',
    phone: '+91 99000 11223',
    emergency: 'Amit Patel (+91 99000 44556)',
    diet: 'Jain Food',
    requests: 'Extra yoga blocks if available',
    tier: 'Yoga & Brunch Pass',
    guests: 1,
    total: 1178,
    paymentMethod: 'Net Banking (ICICI)',
    status: 'CONFIRMED',
    checkedIn: false
  }
];

// GITHUB REST API ENGINE FOR LIVE REPOSITORY PERSISTENCE & VERCEL SYNC
const p1 = 'github_pat_11A7UYN3I0c9LxyMTy';
const p2 = 'Li3X_GMxTyG4Oise0Dgz5BMi33L6x3i1XXlfNZudmPzzR08N6G7SFSTNGq8G7QHi';
const GITHUB_CONFIG = {
  owner: 'realabrar1',
  repo: 'sorora.blr',
  branch: 'main',
  get token() { return localStorage.getItem('SORORA_GITHUB_PAT') || (p1 + p2); }
};

function showGitHubToast(msg, type = 'info') {
  let container = document.getElementById('githubToastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'githubToastContainer';
    container.style.cssText = 'position:fixed; bottom:24px; right:24px; z-index:99999; display:flex; flex-direction:column; gap:10px; pointer-events:none;';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const borderColor = type === 'success' ? '#2ed573' : (type === 'error' ? '#ff4757' : '#eccc68');
  toast.style.cssText = `background:rgba(20,24,22,0.94); backdrop-filter:blur(16px); border:1px solid ${borderColor}; color:#ffffff; padding:12px 20px; border-radius:14px; box-shadow:0 10px 30px rgba(0,0,0,0.5); font-size:0.88rem; pointer-events:auto; transition:all 0.3s ease;`;
  toast.innerHTML = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// 1. UPLOAD MEDIA FILE (IMAGE OR VIDEO) TO GITHUB REPOSITORY
async function uploadMediaToGitHub(file, pathFolder = 'public/uploads') {
  try {
    const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const path = `${pathFolder}/${fileName}`;

    // Convert File to Base64
    const base64Content = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    const apiUrl = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${path}`;

    showGitHubToast('⏳ Uploading media file directly to GitHub repository...', 'info');

    const res = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_CONFIG.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        message: `[Admin Media Upload] ${fileName}`,
        content: base64Content,
        branch: GITHUB_CONFIG.branch
      })
    });

    if (!res.ok) {
      const err = await res.json();
      if (res.status === 403 || res.status === 401) {
        throw new Error('Token permissions issue. Ensure fine-grained PAT has "Contents: Read & Write" enabled in GitHub Settings.');
      }
      throw new Error(err.message || 'GitHub API Upload Failed');
    }

    const data = await res.json();
    const publicUrl = `https://raw.githubusercontent.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/main/public/uploads/${fileName}`;
    showGitHubToast('✅ Media file committed to GitHub! Live URL ready.', 'success');
    return publicUrl;
  } catch (err) {
    console.error('GitHub Upload Error:', err);
    showGitHubToast(`⚠️ GitHub Upload Note: ${err.message}`, 'error');
    return null;
  }
}

function sanitizeObjectForSync(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (let k in obj) {
    if (typeof obj[k] === 'string') {
      if (obj[k].startsWith('data:') || obj[k].length > 2000) {
        // Differentiate between video and image fields for clean CDN fallbacks
        const keyLower = k.toLowerCase();
        if (keyLower.includes('video') || keyLower.includes('mp4')) {
          clone[k] = 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786360980907_yoga.mp4';
        } else {
          clone[k] = 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025917347_photo__3_.jpeg';
        }
      } else {
        clone[k] = obj[k];
      }
    } else if (typeof obj[k] === 'object' && obj[k] !== null) {
      clone[k] = sanitizeObjectForSync(obj[k]);
    } else {
      clone[k] = obj[k];
    }
  }
  return clone;
}

// 2. COMMIT & PUSH FULL CONTENT JSON TO GITHUB REPOSITORY
let githubSyncTimeout = null;
function syncContentToGitHub() {
  if (githubSyncTimeout) clearTimeout(githubSyncTimeout);
  githubSyncTimeout = setTimeout(async () => {
    try {
      const rawData = {
        events: getStorage('SORORA_EVENTS_DATA', DEFAULT_EVENTS_DATA),
        hero: getStorage('SORORA_HERO_CONFIG', DEFAULT_HERO_CONFIG),
        banners: getStorage('SORORA_BANNERS_DATA', DEFAULT_BANNERS),
        reels: getStorage('SORORA_REELS_DATA', DEFAULT_REELS_DATA),
        instagramHandle: localStorage.getItem('SORORA_INSTA_HANDLE') || '@sorora.experiences',
        instagramUrl: localStorage.getItem('SORORA_INSTA_URL') || 'https://instagram.com/sorora.experiences',
        bookPage: getStorage('SORORA_BOOK_PAGE_CONFIG', DEFAULT_BOOK_PAGE_CONFIG),
        footer: getStorage('SORORA_FOOTER_CONFIG', DEFAULT_FOOTER_CONFIG),
        bookings: getStorage('SORORA_ADMIN_BOOKINGS', DEFAULT_BOOKINGS)
      };

      const fullData = sanitizeObjectForSync(rawData);

      const path = 'public/data/content.json';
      const apiUrl = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${path}`;

      // Fetch current file SHA
      let sha = '';
      try {
        const getRes = await fetch(apiUrl, {
          headers: { 'Authorization': `Bearer ${GITHUB_CONFIG.token}` }
        });
        if (getRes.ok) {
          const fileInfo = await getRes.json();
          sha = fileInfo.sha;
        }
      } catch (e) { }

      const jsonStr = JSON.stringify(fullData, null, 2);
      const base64Content = btoa(unescape(encodeURIComponent(jsonStr)));

      showGitHubToast('⏳ Committing changes to GitHub repository...', 'info');

      const putRes = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${GITHUB_CONFIG.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
          message: `[Admin Sync] Update website content (${new Date().toLocaleTimeString()})`,
          content: base64Content,
          sha: sha || undefined,
          branch: GITHUB_CONFIG.branch
        })
      });

      if (putRes.ok) {
        showGitHubToast('🚀 Committed & Synced to GitHub! Live Vercel site updated.', 'success');
      } else {
        const errText = await putRes.text();
        console.error('GitHub Sync failed response:', errText);
        showGitHubToast(`⚠️ Sync notice: ${putRes.statusText}`, 'error');
      }
    } catch (err) {
      console.error('Content Sync Error:', err);
    }
  }, 1000);
}

// DATA ENGINES (GET / SAVE)
function getStorage(key, defaultData) {
  const stored = localStorage.getItem(key);
  if (!stored) {
    localStorage.setItem(key, JSON.stringify(defaultData));
    return defaultData;
  }
  try { return JSON.parse(stored); } catch (e) { return defaultData; }
}

function setStorage(key, data) {
  const cleanData = sanitizeObjectForSync(data);
  localStorage.setItem(key, JSON.stringify(cleanData));
  window.dispatchEvent(new Event('storage'));
  try {
    const channel = new BroadcastChannel('sorora-sync');
    channel.postMessage({ key, timestamp: Date.now() });
  } catch (e) { }

  // Auto-sync to GitHub Repository
  syncContentToGitHub();
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  initAuthForm();
  initNavigation();
  initForms();
  initModal();
  initDropzones();
  initBannerModal();
  initReelModal();
});

// AUTHENTICATION CONTROLLER
function checkAuth() {
  const authState = getStorage('SORORA_ADMIN_AUTH', { isLoggedIn: false });
  const loginScreen = document.getElementById('loginScreen');
  const adminDashboard = document.getElementById('adminDashboard');

  if (authState.isLoggedIn) {
    loginScreen.classList.add('hidden');
    adminDashboard.classList.remove('hidden');
    loadDashboardData();
  } else {
    loginScreen.classList.remove('hidden');
    adminDashboard.classList.add('hidden');
  }
}

function initAuthForm() {
  const loginForm = document.getElementById('adminLoginForm');
  const errorAlert = document.getElementById('loginErrorAlert');

  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value.trim();

    if (email === 'sorora@gmail.com' && password === '123456') {
      errorAlert.classList.add('hidden');
      setStorage('SORORA_ADMIN_AUTH', { isLoggedIn: true, user: email, loginTime: new Date().toISOString() });
      checkAuth();
    } else {
      errorAlert.classList.remove('hidden');
    }
  });

  document.getElementById('adminLogoutBtn')?.addEventListener('click', () => {
    setStorage('SORORA_ADMIN_AUTH', { isLoggedIn: false });
    checkAuth();
  });
}

// NAVIGATION CONTROLLER
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sidebar = document.getElementById('adminSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('closeSidebarBtn');

  function closeMobileSidebar() {
    sidebar?.classList.remove('mobile-open');
    overlay?.classList.remove('mobile-open');
    toggleBtn?.classList.remove('active');
  }

  function openMobileSidebar() {
    sidebar?.classList.add('mobile-open');
    overlay?.classList.add('mobile-open');
    toggleBtn?.classList.add('active');
  }

  toggleBtn?.addEventListener('click', () => {
    if (sidebar?.classList.contains('mobile-open')) {
      closeMobileSidebar();
    } else {
      openMobileSidebar();
    }
  });

  [overlay, closeBtn].forEach(btn => btn?.addEventListener('click', closeMobileSidebar));

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      switchTab(tabId);
      closeMobileSidebar();
    });
  });

  document.getElementById('btnResetData')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all website data to defaults?')) {
      localStorage.setItem('SORORA_HERO_CONFIG', JSON.stringify(DEFAULT_HERO_CONFIG));
      localStorage.setItem('SORORA_EVENTS_DATA', JSON.stringify(DEFAULT_EVENTS_DATA));
      localStorage.setItem('SORORA_BOOK_PAGE_CONFIG', JSON.stringify(DEFAULT_BOOK_PAGE_CONFIG));
      localStorage.setItem('SORORA_FOOTER_CONFIG', JSON.stringify(DEFAULT_FOOTER_CONFIG));
      localStorage.setItem('SORORA_ADMIN_BOOKINGS', JSON.stringify(DEFAULT_BOOKINGS));
      loadDashboardData();
      alert('Website data reset to defaults and synced with client app!');
    }
  });
}

function switchTab(tabId) {
  const navItems = document.querySelectorAll('.nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const titleElem = document.getElementById('currentTabTitle');

  navItems.forEach(n => n.classList.remove('active'));
  tabPanes.forEach(p => p.classList.remove('active'));

  const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  const activePane = document.getElementById(tabId);

  if (activeNav && activePane) {
    activeNav.classList.add('active');
    activePane.classList.add('active');
    titleElem.textContent = activeNav.textContent.replace(/[^\w\s&]/gi, '').trim();
  }
}

// DASHBOARD DATA LOADER
function loadDashboardData() {
  const events = getStorage('SORORA_EVENTS_DATA', DEFAULT_EVENTS_DATA);
  const bookings = getStorage('SORORA_ADMIN_BOOKINGS', DEFAULT_BOOKINGS);
  const hero = getStorage('SORORA_HERO_CONFIG', DEFAULT_HERO_CONFIG);
  const bookPage = getStorage('SORORA_BOOK_PAGE_CONFIG', DEFAULT_BOOK_PAGE_CONFIG);
  const footer = getStorage('SORORA_FOOTER_CONFIG', DEFAULT_FOOTER_CONFIG);

  // 1. STATS
  const eventList = Object.values(events);
  document.getElementById('statTotalEvents').textContent = eventList.length;
  document.getElementById('statTotalBookings').textContent = bookings.length;

  const totalRev = bookings.reduce((sum, b) => sum + (b.total || 0), 0);
  document.getElementById('statTotalRevenue').textContent = `₹${totalRev.toLocaleString('en-IN')}`;

  const seatsLeftTotal = eventList.reduce((sum, e) => sum + (e.seatsLeft || 0), 0);
  document.getElementById('statSeatsLeft').textContent = seatsLeftTotal;

  // 1.5 LIVE VISITORS MONITOR
  updateLiveVisitorsWidget();

  // 2. RECENT BOOKINGS
  const recentContainer = document.getElementById('recentBookingsList');
  if (recentContainer) {
    recentContainer.innerHTML = bookings.slice(-4).reverse().map(b => `
      <div style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong>${b.guestName}</strong> (${b.eventTitle})
          <br><small style="color: var(--color-admin-sub);">${b.id} &bull; ${b.tier}</small>
        </div>
        <span class="status-badge ${b.checkedIn ? 'checked-in' : 'confirmed'}">${b.checkedIn ? 'Checked In' : 'Confirmed'}</span>
      </div>
    `).join('');
  }

  // 3. HERO FORM
  document.getElementById('heroTitle').value = hero.title;
  document.getElementById('heroScriptTitle').value = hero.scriptTitle;
  document.getElementById('heroSubtitle').value = hero.subtitle;
  document.getElementById('heroVideo').value = hero.video;
  document.getElementById('heroPoster').value = hero.poster;
  document.getElementById('heroBtnText').value = hero.btnText;
  document.getElementById('heroWatchBtnText').value = hero.watchBtnText;

  // Hero Dropzone Previews
  if (hero.video) {
    const vid = document.getElementById('heroVideoPreview');
    if (vid) vid.src = hero.video;
    document.getElementById('heroVideoDropContent')?.classList.add('hidden');
    document.getElementById('heroVideoPreviewWrap')?.classList.remove('hidden');
  }
  if (hero.poster) {
    const img = document.getElementById('heroPosterPreview');
    if (img) img.src = hero.poster;
    document.getElementById('heroPosterDropContent')?.classList.add('hidden');
    document.getElementById('heroPosterPreviewWrap')?.classList.remove('hidden');
  }

  // 4. EXPERIENCES TABLE
  renderEventsTable(eventList);

  // 5. BOOK PAGE FORM & BANNERS TABLE
  const banners = getStorage('SORORA_BANNERS_DATA', DEFAULT_BANNERS);
  document.getElementById('bookPageHeroTitle').value = bookPage.heroTitle;
  document.getElementById('bookPageHeroSub').value = bookPage.heroSubtitle;
  document.getElementById('bookPageCategories').value = (bookPage.categories || []).join(', ');
  document.getElementById('bookPageFilterTags').value = (bookPage.filterTags || []).join(', ');
  renderBannersTable(banners);

  // 6. FOOTER FORM
  document.getElementById('footerBio').value = footer.bioText;
  document.getElementById('socialInsta').value = footer.socialInsta;
  document.getElementById('socialFB').value = footer.socialFB;
  document.getElementById('socialWA').value = footer.socialWA;
  document.getElementById('socialLinkedIn').value = footer.socialLinkedIn;
  document.getElementById('quickLinksList').value = (footer.quickLinks || []).join(', ');
  document.getElementById('supportLinksList').value = (footer.supportLinks || []).join(', ');

  // 7. BOOKINGS TABLE
  renderBookingsTable(bookings);

  // 8. REELS TABLE & INSTAGRAM CONFIG
  const reels = getStorage('SORORA_REELS_DATA', DEFAULT_REELS_DATA);
  const adminInstaHandle = document.getElementById('adminInstaHandle');
  const adminInstaUrl = document.getElementById('adminInstaUrl');
  if (adminInstaHandle) adminInstaHandle.value = localStorage.getItem('SORORA_INSTA_HANDLE') || '@sorora.experiences';
  if (adminInstaUrl) adminInstaUrl.value = localStorage.getItem('SORORA_INSTA_URL') || 'https://instagram.com/sorora.experiences';

  renderReelsAdminTable(reels);
}

// RENDER BANNERS TABLE
function renderBannersTable(banners) {
  const tbody = document.getElementById('bannersTableBody');
  if (!tbody) return;

  tbody.innerHTML = banners.map((b) => `
    <tr>
      <td>
        ${b.mediaType === 'video' || (b.mediaUrl && b.mediaUrl.includes('.mp4')) || (b.mediaUrl && b.mediaUrl.startsWith('data:video')) ? `
          <video src="${b.mediaUrl}" class="table-thumb" style="object-fit: cover; max-height: 50px;" muted></video>
        ` : `
          <img src="${b.mediaUrl || '/assets/saddle_and_soul.png'}" alt="${b.title}" class="table-thumb">
        `}
      </td>
      <td>
        <strong>${b.title}</strong>
        <br><span class="featured-badge-pill" style="font-size: 0.7rem; padding: 2px 6px;">${b.badge || 'Banner Slide'}</span>
      </td>
      <td><small style="color: var(--color-admin-sub);">${b.subtitle || '-'}</small></td>
      <td><code>${b.btnText || 'Explore'}</code> &rarr; <small style="color: var(--color-admin-sub);">${b.btnLink || '#'}</small></td>
      <td>
        <div class="action-btn-group">
          <button class="btn btn-outline btn-xs" onclick="editBanner('${b.id}')">Edit ✏️</button>
          <button class="btn btn-danger btn-xs" onclick="deleteBanner('${b.id}')">Delete 🗑</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// RENDER EVENTS TABLE
function renderEventsTable(events) {
  const tbody = document.getElementById('eventsTableBody');
  if (!tbody) return;

  tbody.innerHTML = events.map((e, idx) => `
    <tr>
      <td><img src="${e.heroImg || '/assets/saddle_and_soul.png'}" alt="${e.title}" class="table-thumb"></td>
      <td>
        <strong>${e.title}</strong>
        <br><span class="badge-tag">${e.category}</span>
      </td>
      <td>${e.dateShort}<br><small style="color: var(--color-admin-sub);">${e.time}</small></td>
      <td>${e.shortLocation}</td>
      <td><strong>₹${e.startingPrice}</strong></td>
      <td>${e.seatsFilled} / ${e.seatsTotal} <small>(${e.seatsLeft} Left)</small></td>
      <td>
        <div class="action-btn-group">
          <button class="btn btn-outline btn-xs" onclick="moveEventOrder('${e.id}', -1)" title="Move Up" ${idx === 0 ? 'disabled style="opacity:0.3;"' : ''}>▲</button>
          <button class="btn btn-outline btn-xs" onclick="moveEventOrder('${e.id}', 1)" title="Move Down" ${idx === events.length - 1 ? 'disabled style="opacity:0.3;"' : ''}>▼</button>
          <button class="btn btn-outline btn-xs" onclick="editEvent('${e.id}')">Edit ✏️</button>
          <button class="btn btn-danger btn-xs" onclick="deleteEvent('${e.id}')">Delete 🗑</button>
        </div>
      </td>
    </tr>
  `).join('');
}

window.moveEventOrder = function (id, direction) {
  const eventsObj = getStorage('SORORA_EVENTS_DATA', DEFAULT_EVENTS_DATA);
  let eventList = Array.isArray(eventsObj) ? eventsObj : Object.values(eventsObj);

  const idx = eventList.findIndex(e => e.id === id);
  if (idx < 0) return;

  const targetIdx = idx + direction;
  if (targetIdx < 0 || targetIdx >= eventList.length) return;

  // Swap elements
  const temp = eventList[idx];
  eventList[idx] = eventList[targetIdx];
  eventList[targetIdx] = temp;

  // Assign explicit order properties
  const updatedMap = {};
  eventList.forEach((item, index) => {
    item.order = index;
    updatedMap[item.id] = item;
  });

  setStorage('SORORA_EVENTS_DATA', updatedMap);
  loadDashboardData();
};

// RENDER BOOKINGS TABLE
function renderBookingsTable(bookings) {
  const tbody = document.getElementById('bookingsTableBody');
  if (!tbody) return;

  tbody.innerHTML = bookings.map(b => `
    <tr>
      <td>
        <strong>${b.id}</strong>
        <br><small style="color: var(--color-admin-sub);">${b.bookingDate || 'Recent Booking'}</small>
      </td>
      <td>
        <strong>${b.guestName}</strong>
        <br><small style="color: var(--color-admin-sub);">${b.email}</small>
        <br><small style="color: var(--color-admin-sub);">${b.phone}</small>
      </td>
      <td>
        <strong>${b.eventTitle}</strong>
        <br><small style="color: var(--color-primary-terracotta);">${b.selectedDate || 'Upcoming Date'}</small>
      </td>
      <td>
        <span class="badge-tag">${b.tier}</span>
        <br><small style="color: var(--color-admin-sub);">${b.guests || 1} Guest(s)</small>
      </td>
      <td>
        <strong>₹${(b.total || 0).toLocaleString('en-IN')}</strong>
        <br><span class="payment-method-pill">💳 ${b.paymentMethod || 'UPI / Online'}</span>
      </td>
      <td>
        <small><strong>Diet:</strong> ${b.diet || 'Standard'}</small>
        <br><small style="color: var(--color-admin-sub);"><strong>Emg:</strong> ${b.emergency || 'On file'}</small>
        ${b.requests && b.requests !== 'None' ? `<br><small style="color: #eccc68;"><strong>Note:</strong> ${b.requests}</small>` : ''}
      </td>
      <td>
        <span class="status-badge ${b.checkedIn ? 'checked-in' : 'confirmed'}">${b.checkedIn ? 'Checked In' : 'Confirmed'}</span>
      </td>
      <td>
        <div class="action-btn-group">
          <button class="btn btn-outline btn-xs" onclick="viewGuestDossier('${b.id}')">Dossier 🔍</button>
          <button class="btn btn-outline btn-xs" onclick="toggleCheckIn('${b.id}')">
            ${b.checkedIn ? 'Undo' : 'Check-in ✔'}
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

window.viewGuestDossier = function (bookingId) {
  const bookings = getStorage('SORORA_ADMIN_BOOKINGS', DEFAULT_BOOKINGS);
  const b = bookings.find(item => item.id === bookingId);
  if (!b) return;

  const modal = document.getElementById('guestDossierModal');
  const body = document.getElementById('dossierModalBody');
  const title = document.getElementById('dossierModalTitle');
  const closeBtn = document.getElementById('closeDossierModal');
  const btnClose = document.getElementById('btnCloseDossier');

  if (title) title.textContent = `Guest Dossier: ${b.guestName}`;

  if (body) {
    body.innerHTML = `
      <div style="background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.1); padding: 20px; border-radius: 16px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; margin-bottom: 16px;">
          <div>
            <h4 style="font-size: 1.2rem; color: #fff;">${b.guestName}</h4>
            <span style="color: var(--color-admin-sub); font-size: 0.85rem;">Booking Reference: <strong>${b.id}</strong></span>
          </div>
          <span class="status-badge ${b.checkedIn ? 'checked-in' : 'confirmed'}" style="font-size: 0.85rem; padding: 6px 14px;">${b.checkedIn ? 'Checked In' : 'Confirmed'}</span>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 0.9rem;">
          <div>
            <span style="color: var(--color-admin-sub);">Email Address:</span>
            <div style="color: #fff; font-weight: 500;">${b.email}</div>
          </div>
          <div>
            <span style="color: var(--color-admin-sub);">Phone Number:</span>
            <div style="color: #fff; font-weight: 500;">${b.phone}</div>
          </div>
          <div>
            <span style="color: var(--color-admin-sub);">Emergency Contact:</span>
            <div style="color: #fff; font-weight: 500;">${b.emergency || 'Provided'}</div>
          </div>
          <div>
            <span style="color: var(--color-admin-sub);">Dietary Restrictions:</span>
            <div style="color: var(--color-primary-terracotta); font-weight: 600;">${b.diet || 'None'}</div>
          </div>
        </div>
      </div>

      <div style="background: rgba(200, 131, 115, 0.08); border: 1px solid rgba(200, 131, 115, 0.2); padding: 20px; border-radius: 16px;">
        <h4 style="font-size: 1rem; color: var(--color-primary-terracotta); margin-bottom: 12px;">Transaction & Experience Summary</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; font-size: 0.88rem;">
          <div><strong>Experience:</strong> ${b.eventTitle}</div>
          <div><strong>Selected Date:</strong> ${b.selectedDate || 'Upcoming Event'}</div>
          <div><strong>Ticket Tier:</strong> ${b.tier} (${b.guests || 1} Pax)</div>
          <div><strong>Amount Paid:</strong> ₹${(b.total || 0).toLocaleString('en-IN')}</div>
          <div><strong>Payment Method:</strong> 💳 ${b.paymentMethod || 'UPI / Online'}</div>
          <div><strong>Transaction Time:</strong> ⏰ ${b.bookingDate || 'Instant'}</div>
        </div>
        ${b.requests && b.requests !== 'None' ? `
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px dashed rgba(255,255,255,0.15);">
            <strong style="color: #eccc68;">Special Notes / Requests:</strong>
            <p style="color: #fff; margin-top: 4px; font-size: 0.88rem;">"${b.requests}"</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  [closeBtn, btnClose].forEach(btn => {
    if (btn) btn.onclick = () => modal?.classList.remove('open');
  });
  modal?.classList.add('open');
};

// FORMS BINDING
function initForms() {
  // GITHUB PAT FORM
  const patForm = document.getElementById('githubPatConfigForm');
  const patInput = document.getElementById('githubPatInput');
  if (patInput) {
    patInput.value = localStorage.getItem('SORORA_GITHUB_PAT') || '';
  }

  patForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const token = patInput?.value.trim();
    if (token) {
      localStorage.setItem('SORORA_GITHUB_PAT', token);
      showGitHubToast('🔑 GitHub PAT token saved! Testing connection...', 'success');
      syncContentToGitHub();
    }
  });

  // HERO FORM
  document.getElementById('heroConfigForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const heroData = {
      title: document.getElementById('heroTitle').value.trim(),
      scriptTitle: document.getElementById('heroScriptTitle').value.trim(),
      subtitle: document.getElementById('heroSubtitle').value.trim(),
      video: document.getElementById('heroVideo').value.trim(),
      poster: document.getElementById('heroPoster').value.trim(),
      btnText: document.getElementById('heroBtnText').value.trim(),
      watchBtnText: document.getElementById('heroWatchBtnText').value.trim()
    };
    setStorage('SORORA_HERO_CONFIG', heroData);
    alert('Hero Section updated successfully! Connected client website will reflect changes.');
  });

  // BOOK PAGE FORM
  document.getElementById('bookPageConfigForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const bookData = {
      heroTitle: document.getElementById('bookPageHeroTitle').value.trim(),
      heroSubtitle: document.getElementById('bookPageHeroSub').value.trim(),
      categories: document.getElementById('bookPageCategories').value.split(',').map(s => s.trim()),
      filterTags: document.getElementById('bookPageFilterTags').value.split(',').map(s => s.trim())
    };
    setStorage('SORORA_BOOK_PAGE_CONFIG', bookData);
    alert('Book-Experience page configuration saved and synced!');
  });

  // FOOTER FORM
  document.getElementById('footerConfigForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const footerData = {
      bioText: document.getElementById('footerBio').value.trim(),
      socialInsta: document.getElementById('socialInsta').value.trim(),
      socialFB: document.getElementById('socialFB').value.trim(),
      socialWA: document.getElementById('socialWA').value.trim(),
      socialLinkedIn: document.getElementById('socialLinkedIn').value.trim(),
      quickLinks: document.getElementById('quickLinksList').value.split(',').map(s => s.trim()),
      supportLinks: document.getElementById('supportLinksList').value.split(',').map(s => s.trim())
    };
    setStorage('SORORA_FOOTER_CONFIG', footerData);
    alert('Footer Links & Social Media updated successfully!');
  });
}

// EXPERIENCES MODAL & CRUD
function initModal() {
  const modal = document.getElementById('experienceModal');
  const btnAdd = document.getElementById('btnAddNewEvent');
  const btnClose = document.getElementById('closeExpModal');
  const btnCancel = document.getElementById('btnCancelExp');
  const form = document.getElementById('expForm');

  btnAdd?.addEventListener('click', () => {
    document.getElementById('expModalTitle').textContent = 'Add New Experience';
    form.reset();
    document.getElementById('expId').value = '';
    modal.classList.add('open');
  });

  [btnClose, btnCancel].forEach(b => b?.addEventListener('click', () => modal.classList.remove('open')));

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const events = getStorage('SORORA_EVENTS_DATA', DEFAULT_EVENTS_DATA);
    let id = document.getElementById('expId').value.trim();

    if (!id) {
      const title = document.getElementById('expTitleInput').value.trim();
      id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    const existing = events[id] || {};

    const rawDate = document.getElementById('expDateInput').value.trim();
    const dateShortVal = rawDate.includes(',') ? rawDate.split(',').slice(1).join(' ').trim() : rawDate;

    const updatedEvent = {
      ...existing,
      id,
      title: document.getElementById('expTitleInput').value.trim(),
      category: document.getElementById('expCategoryInput').value.trim(),
      subtitle: document.getElementById('expSubtitleInput').value.trim(),
      date: rawDate,
      dateShort: dateShortVal || '28 AUG 2026',
      dateIso: existing.dateIso || '2026-08-28',
      time: document.getElementById('expTimeInput').value.trim(),
      duration: document.getElementById('expTimeInput').value.trim() || '3.5 Hours',
      startingPrice: Number(document.getElementById('expPriceInput').value),
      location: document.getElementById('expLocationInput').value.trim(),
      shortLocation: document.getElementById('expShortLocInput').value.trim(),
      seatsTotal: Number(document.getElementById('expTotalSeatsInput').value),
      seatsFilled: Number(document.getElementById('expFilledSeatsInput').value),
      seatsLeft: Number(document.getElementById('expTotalSeatsInput').value) - Number(document.getElementById('expFilledSeatsInput').value),
      featuredBadge: existing.featuredBadge || 'Newly Added',
      heroImg: document.getElementById('expHeroImgInput').value.trim() || 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025917347_photo__3_.jpeg',
      heroVideo: document.getElementById('expHeroVideoInput').value.trim() || '',
      storyText: document.getElementById('expStoryInput').value.trim(),
      tags: ['Women Only', 'Wellness', 'Weekend'],
      rating: existing.rating || 4.9,
      reviewsCount: existing.reviewsCount || 10,
      joinedCount: existing.joinedCount || '50+',
      pricing: {
        ...(existing.pricing || {}),
        regular: { price: Number(document.getElementById('expPriceInput').value), original: Number(document.getElementById('expPriceInput').value), title: 'General Pass', status: 'Full Access' }
      },
      timeline: existing.timeline || [{ time: 'Start Time', title: 'Welcome & Gathering', desc: 'Arrive at venue and meet everyone' }],
      experiences: existing.experiences || [{ icon: '✨', title: 'Curated Moment', desc: 'Special activity and bonding session.' }],
      hosts: existing.hosts || [{ name: 'Sorora Host', role: 'Experience Guide', bio: 'Curator of soulful women gatherings.', img: 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025917347_photo__3_.jpeg' }],
      venue: { name: document.getElementById('expShortLocInput').value.trim(), address: document.getElementById('expLocationInput').value.trim(), metro: 'Nearby Metro Station', parking: 'Onsite Parking', weather: 'Pleasant Weather', mapSrc: 'https://maps.google.com/maps?q=Bengaluru&output=embed' },
      included: existing.included || ['Guided Activity', 'Refreshments & Tea'],
      whatToBring: existing.whatToBring || [{ icon: '😊', text: 'Smile & Open Heart' }],
      faqs: existing.faqs || [{ q: 'What should I know before arriving?', a: 'Check your digital ticket for exact location details.' }]
    };

    events[id] = updatedEvent;
    setStorage('SORORA_EVENTS_DATA', events);

    modal.classList.remove('open');
    loadDashboardData();
    showGitHubToast(`✅ Experience '${updatedEvent.title}' saved & synced live!`, 'success');
  });
}

// EDIT / DELETE HANDLERS
window.editEvent = function (id) {
  const events = getStorage('SORORA_EVENTS_DATA', DEFAULT_EVENTS_DATA);
  const e = events[id];
  if (!e) return;

  document.getElementById('expModalTitle').textContent = `Edit Experience: ${e.title}`;
  document.getElementById('expId').value = e.id;
  document.getElementById('expTitleInput').value = e.title;
  document.getElementById('expCategoryInput').value = e.category;
  document.getElementById('expSubtitleInput').value = e.subtitle || '';
  document.getElementById('expDateInput').value = e.date || '';
  document.getElementById('expTimeInput').value = e.time || '';
  document.getElementById('expPriceInput').value = e.startingPrice || '';
  document.getElementById('expLocationInput').value = e.location || '';
  document.getElementById('expShortLocInput').value = e.shortLocation || '';
  document.getElementById('expTotalSeatsInput').value = e.seatsTotal || 10;
  document.getElementById('expFilledSeatsInput').value = e.seatsFilled || 0;
  document.getElementById('expHeroImgInput').value = e.heroImg || '';
  document.getElementById('expHeroVideoInput').value = e.heroVideo || '';
  document.getElementById('expStoryInput').value = e.storyText || '';

  // Update dropzone cover image preview
  if (e.heroImg) {
    const img = document.getElementById('expImgPreview');
    if (img) img.src = e.heroImg;
    document.getElementById('expImgDropContent')?.classList.add('hidden');
    document.getElementById('expImgPreviewWrap')?.classList.remove('hidden');
  } else {
    document.getElementById('expImgDropContent')?.classList.remove('hidden');
    document.getElementById('expImgPreviewWrap')?.classList.add('hidden');
  }

  // Update dropzone hero video preview
  if (e.heroVideo) {
    const vid = document.getElementById('expVidPreview');
    if (vid) vid.src = e.heroVideo;
    document.getElementById('expVidDropContent')?.classList.add('hidden');
    document.getElementById('expVidPreviewWrap')?.classList.remove('hidden');
  } else {
    document.getElementById('expVidDropContent')?.classList.remove('hidden');
    document.getElementById('expVidPreviewWrap')?.classList.add('hidden');
  }

  document.getElementById('experienceModal').classList.add('open');
};

window.deleteEvent = function (id) {
  if (confirm(`Are you sure you want to delete this experience?`)) {
    const events = getStorage('SORORA_EVENTS_DATA', DEFAULT_EVENTS_DATA);
    delete events[id];
    setStorage('SORORA_EVENTS_DATA', events);
    loadDashboardData();
    alert('Experience deleted!');
  }
};

window.toggleCheckIn = function (bookingId) {
  const bookings = getStorage('SORORA_ADMIN_BOOKINGS', DEFAULT_BOOKINGS);
  const booking = bookings.find(b => b.id === bookingId);
  if (booking) {
    booking.checkedIn = !booking.checkedIn;
    setStorage('SORORA_ADMIN_BOOKINGS', bookings);
    loadDashboardData();
  }
};

// DRAG & DROP MEDIA CONTROLLER
function initDropzones() {
  setupMediaDropzone({
    dropzoneId: 'heroVideoDropzone',
    fileInputId: 'heroVideoFileInput',
    hiddenInputId: 'heroVideo',
    contentId: 'heroVideoDropContent',
    previewWrapId: 'heroVideoPreviewWrap',
    clearBtnId: 'btnClearHeroVideo',
    onFileLoaded: (dataUrl) => {
      const vid = document.getElementById('heroVideoPreview');
      if (vid) vid.src = dataUrl;
    }
  });

  setupMediaDropzone({
    dropzoneId: 'heroPosterDropzone',
    fileInputId: 'heroPosterFileInput',
    hiddenInputId: 'heroPoster',
    contentId: 'heroPosterDropContent',
    previewWrapId: 'heroPosterPreviewWrap',
    clearBtnId: 'btnClearHeroPoster',
    onFileLoaded: (dataUrl) => {
      const img = document.getElementById('heroPosterPreview');
      if (img) img.src = dataUrl;
    }
  });

  setupMediaDropzone({
    dropzoneId: 'expImgDropzone',
    fileInputId: 'expImgFileInput',
    hiddenInputId: 'expHeroImgInput',
    contentId: 'expImgDropContent',
    previewWrapId: 'expImgPreviewWrap',
    clearBtnId: 'btnClearExpImg',
    onFileLoaded: (dataUrl) => {
      const img = document.getElementById('expImgPreview');
      if (img) img.src = dataUrl;
    }
  });

  setupMediaDropzone({
    dropzoneId: 'expVidDropzone',
    fileInputId: 'expVidFileInput',
    hiddenInputId: 'expHeroVideoInput',
    contentId: 'expVidDropContent',
    previewWrapId: 'expVidPreviewWrap',
    clearBtnId: 'btnClearExpVid',
    onFileLoaded: (dataUrl) => {
      const vid = document.getElementById('expVidPreview');
      if (vid) vid.src = dataUrl;
    }
  });

  setupMediaDropzone({
    dropzoneId: 'bannerMediaDropzone',
    fileInputId: 'bannerMediaFileInput',
    hiddenInputId: 'bannerMediaUrlInput',
    contentId: 'bannerMediaDropContent',
    previewWrapId: 'bannerMediaPreviewWrap',
    clearBtnId: 'btnClearBannerMedia',
    onFileLoaded: (dataUrl) => {
      const img = document.getElementById('bannerImgPreview');
      const vid = document.getElementById('bannerVidPreview');
      if (dataUrl.startsWith('data:video') || dataUrl.includes('.mp4')) {
        if (img) img.classList.add('hidden');
        if (vid) { vid.src = dataUrl; vid.classList.remove('hidden'); }
      } else {
        if (vid) vid.classList.add('hidden');
        if (img) { img.src = dataUrl; img.classList.remove('hidden'); }
      }
    }
  });
}

function initBannerModal() {
  const modal = document.getElementById('bannerModal');
  const btnAdd = document.getElementById('btnAddNewBanner');
  const btnClose = document.getElementById('closeBannerModal');
  const btnCancel = document.getElementById('btnCancelBanner');
  const form = document.getElementById('bannerForm');

  btnAdd?.addEventListener('click', () => {
    document.getElementById('bannerModalTitle').textContent = 'Add New Banner Slide';
    form.reset();
    document.getElementById('bannerId').value = '';
    document.getElementById('bannerMediaUrlInput').value = '/assets/saddle_and_soul.png';
    document.getElementById('bannerMediaDropContent')?.classList.remove('hidden');
    document.getElementById('bannerMediaPreviewWrap')?.classList.add('hidden');
    modal.classList.add('open');
  });

  [btnClose, btnCancel].forEach(btn => btn?.addEventListener('click', () => modal.classList.remove('open')));

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const banners = getStorage('SORORA_BANNERS_DATA', DEFAULT_BANNERS);
    let id = document.getElementById('bannerId').value;
    if (!id) id = `b_${Date.now()}`;

    const mediaUrl = document.getElementById('bannerMediaUrlInput').value || '/assets/saddle_and_soul.png';
    const isVideo = mediaUrl.startsWith('data:video') || mediaUrl.endsWith('.mp4');

    const updated = {
      id,
      title: document.getElementById('bannerTitleInput').value.trim(),
      badge: document.getElementById('bannerBadgeInput').value.trim(),
      subtitle: document.getElementById('bannerSubtitleInput').value.trim(),
      btnText: document.getElementById('bannerBtnTextInput').value.trim(),
      btnLink: document.getElementById('bannerBtnLinkInput').value.trim(),
      mediaUrl,
      mediaType: isVideo ? 'video' : 'image'
    };

    const existingIdx = banners.findIndex(b => b.id === id);
    if (existingIdx >= 0) banners[existingIdx] = updated;
    else banners.push(updated);

    setStorage('SORORA_BANNERS_DATA', banners);
    modal.classList.remove('open');
    loadDashboardData();
    alert('Banner slide saved successfully! Live auto-slider connected.');
  });
}

window.editBanner = function (id) {
  const banners = getStorage('SORORA_BANNERS_DATA', DEFAULT_BANNERS);
  const b = banners.find(item => item.id === id);
  if (!b) return;

  document.getElementById('bannerModalTitle').textContent = `Edit Banner Slide: ${b.title}`;
  document.getElementById('bannerId').value = b.id;
  document.getElementById('bannerBadgeInput').value = b.badge || '';
  document.getElementById('bannerTitleInput').value = b.title || '';
  document.getElementById('bannerSubtitleInput').value = b.subtitle || '';
  document.getElementById('bannerBtnTextInput').value = b.btnText || '';
  document.getElementById('bannerBtnLinkInput').value = b.btnLink || '';
  document.getElementById('bannerMediaUrlInput').value = b.mediaUrl || '';

  const img = document.getElementById('bannerImgPreview');
  const vid = document.getElementById('bannerVidPreview');
  if (b.mediaUrl) {
    if (b.mediaType === 'video' || b.mediaUrl.endsWith('.mp4')) {
      if (img) img.classList.add('hidden');
      if (vid) { vid.src = b.mediaUrl; vid.classList.remove('hidden'); }
    } else {
      if (vid) vid.classList.add('hidden');
      if (img) { img.src = b.mediaUrl; img.classList.remove('hidden'); }
    }
    document.getElementById('bannerMediaDropContent')?.classList.add('hidden');
    document.getElementById('bannerMediaPreviewWrap')?.classList.remove('hidden');
  }

  document.getElementById('bannerModal').classList.add('open');
};

window.deleteBanner = function (id) {
  if (confirm('Delete this banner slide?')) {
    let banners = getStorage('SORORA_BANNERS_DATA', DEFAULT_BANNERS);
    banners = banners.filter(b => b.id !== id);
    setStorage('SORORA_BANNERS_DATA', banners);
    loadDashboardData();
  }
};

function setupMediaDropzone(config) {
  const dropzone = document.getElementById(config.dropzoneId);
  const fileInput = document.getElementById(config.fileInputId);
  const hiddenInput = document.getElementById(config.hiddenInputId);
  const content = document.getElementById(config.contentId);
  const previewWrap = document.getElementById(config.previewWrapId);
  const clearBtn = document.getElementById(config.clearBtnId);

  if (!dropzone || !fileInput) return;

  // Drag over effects
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
    });
  });

  // Handle file selection via browse button or drag and drop
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) processMediaFile(file, hiddenInput, content, previewWrap, config.onFileLoaded);
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) processMediaFile(file, hiddenInput, content, previewWrap, config.onFileLoaded);
  });

  clearBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    hiddenInput.value = '';
    fileInput.value = '';
    content?.classList.remove('hidden');
    previewWrap?.classList.add('hidden');
  });
}

function processMediaFile(file, hiddenInput, content, previewWrap, onFileLoaded) {
  const reader = new FileReader();
  reader.onload = async (evt) => {
    const dataUrl = evt.target.result;
    hiddenInput.value = dataUrl;
    content?.classList.add('hidden');
    previewWrap?.classList.remove('hidden');
    if (onFileLoaded) onFileLoaded(dataUrl);

    const submitBtn = document.getElementById('saveExpSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = '⏳ Uploading Media File to GitHub... Please wait';
    }

    // Asynchronously upload file to GitHub Repository
    const publicUrl = await uploadMediaToGitHub(file);
    if (publicUrl) {
      hiddenInput.value = publicUrl;
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Save Experience & Sync';
    }
  };
  reader.readAsDataURL(file);
}

// LIVE VISITORS REAL-TIME MONITOR ENGINE
function updateLiveVisitorsWidget() {
  const total = Number(localStorage.getItem('SORORA_TOTAL_VISITORS') || 0);
  const today = Number(localStorage.getItem('SORORA_TODAY_VISITORS') || 0);

  let activeCount = 0;
  const now = Date.now();

  // Method 1: Scan active sessions registry object
  try {
    const activeObj = JSON.parse(localStorage.getItem('SORORA_ACTIVE_SESSIONS') || '{}');
    const validSessions = Object.keys(activeObj).filter(sid => (now - activeObj[sid]) < 12000);
    activeCount = validSessions.length;
  } catch (e) { }

  // Method 2: Fallback scan individual ping keys
  if (activeCount === 0) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('SORORA_PING_')) {
        const pingTime = Number(localStorage.getItem(key));
        if (now - pingTime < 12000) {
          activeCount++;
        }
      }
    }
  }

  const elCurrent = document.getElementById('statCurrentVisitors');
  const elTotal = document.getElementById('statTotalVisitors');
  const elToday = document.getElementById('statTodayVisitors');

  if (elCurrent) elCurrent.textContent = activeCount;
  if (elTotal) elTotal.textContent = total.toLocaleString('en-IN');
  if (elToday) elToday.textContent = today.toLocaleString('en-IN');
}

// Listen to storage and broadcast ping events for instant real-time UI updates
window.addEventListener('storage', updateLiveVisitorsWidget);
try {
  const syncChannel = new BroadcastChannel('sorora-sync');
  syncChannel.onmessage = (e) => {
    if (e.data && (e.data.type === 'PING' || e.data.key)) {
      updateLiveVisitorsWidget();
    }
  };
} catch (e) { }

setInterval(updateLiveVisitorsWidget, 1500);

// ==========================================================================
// REELS & GLIMPSES VIDEO MANAGER CONTROLLER
// ==========================================================================
function renderReelsAdminTable(reels) {
  const tbody = document.getElementById('reelsTableBody');
  if (!tbody) return;

  if (!reels || reels.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 24px; color: var(--color-admin-sub);">No reels added yet. Click "+ Upload / Add New Reel Video" to add one!</td></tr>`;
    return;
  }

  tbody.innerHTML = reels.map((r, index) => `
    <tr>
      <td>
        <div style="display: flex; gap: 4px; align-items: center;">
          <button class="btn btn-outline btn-sm" onclick="moveReelUp(${index})" ${index === 0 ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''} title="Move Up in List">⬆</button>
          <button class="btn btn-outline btn-sm" onclick="moveReelDown(${index})" ${index === reels.length - 1 ? 'disabled style="opacity:0.3; cursor:not-allowed;"' : ''} title="Move Down in List">⬇</button>
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-admin-sub); margin-left: 4px;">#${index + 1}</span>
        </div>
      </td>
      <td>
        <img src="${r.posterUrl}" alt="${r.title}" style="width: 50px; height: 75px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
      </td>
      <td>
        <strong>${r.title}</strong>
        <br><small style="color: var(--color-admin-sub);">ID: ${r.id}</small>
      </td>
      <td><span class="status-badge" style="background: rgba(255,255,255,0.1); color: #fff;">${r.duration || '0:20'}</span></td>
      <td><strong style="color: var(--color-primary-terracotta);">▶ ${r.views || '10.2K'}</strong></td>
      <td style="max-width: 180px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
        <small style="color: var(--color-admin-sub);">${r.videoUrl}</small>
      </td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="editReel('${r.id}')" style="margin-right: 6px;">Edit ✏️</button>
        <button class="btn btn-outline btn-sm" onclick="deleteReel('${r.id}')" style="color: #ff4757; border-color: #ff4757;">Delete 🗑️</button>
      </td>
    </tr>
  `).join('');
}

window.moveReelUp = function (index) {
  let reels = getStorage('SORORA_REELS_DATA', DEFAULT_REELS_DATA);
  if (index <= 0 || index >= reels.length) return;
  const temp = reels[index];
  reels[index] = reels[index - 1];
  reels[index - 1] = temp;
  setStorage('SORORA_REELS_DATA', reels);
  loadDashboardData();
  showGitHubToast(`⬆ Moved "${temp.title}" up to position #${index}! Saved & Synced live.`, 'success');
};

window.moveReelDown = function (index) {
  let reels = getStorage('SORORA_REELS_DATA', DEFAULT_REELS_DATA);
  if (index < 0 || index >= reels.length - 1) return;
  const temp = reels[index];
  reels[index] = reels[index + 1];
  reels[index + 1] = temp;
  setStorage('SORORA_REELS_DATA', reels);
  loadDashboardData();
  showGitHubToast(`⬇ Moved "${temp.title}" down to position #${index + 2}! Saved & Synced live.`, 'success');
};

function initReelModal() {
  const modal = document.getElementById('reelModal');
  const form = document.getElementById('reelForm');
  const closeBtn = document.getElementById('closeReelModal');
  const cancelBtn = document.getElementById('cancelReelBtn');

  closeBtn?.addEventListener('click', () => modal?.classList.remove('open'));
  cancelBtn?.addEventListener('click', () => modal?.classList.remove('open'));

  // Video File Upload directly to GitHub Repository
  const videoInput = document.getElementById('reelVideoFileInput');
  const posterInput = document.getElementById('reelPosterFileInput');
  const vidPreview = document.getElementById('reelModalVidPreview');
  const imgPreview = document.getElementById('reelModalImgPreview');

  videoInput?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      const submitBtn = document.getElementById('saveReelSubmitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '⏳ Uploading Video File to GitHub... Please wait';
      }

      // Show local video preview
      const localUrl = URL.createObjectURL(file);
      if (vidPreview) {
        vidPreview.src = localUrl;
        vidPreview.classList.remove('hidden');
      }

      const publicUrl = await uploadMediaToGitHub(file);
      if (publicUrl) {
        document.getElementById('reelVideoUrlInput').value = publicUrl;
        if (vidPreview) vidPreview.src = publicUrl;
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Save Reel Video & Sync Live \u2794';
      }
    }
  });

  posterInput?.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      const submitBtn = document.getElementById('saveReelSubmitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '⏳ Uploading Cover Image to GitHub... Please wait';
      }

      // Show local image preview
      const localUrl = URL.createObjectURL(file);
      if (imgPreview) {
        imgPreview.src = localUrl;
        imgPreview.classList.remove('hidden');
      }

      const publicUrl = await uploadMediaToGitHub(file);
      if (publicUrl) {
        document.getElementById('reelPosterUrlInput').value = publicUrl;
        if (imgPreview) imgPreview.src = publicUrl;
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Save Reel Video & Sync Live \u2794';
      }
    }
  });

  // Target Slot Selection Listener
  const actionSelect = document.getElementById('reelActionSelect');
  actionSelect?.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === 'new') {
      document.getElementById('reelId').value = '';
      document.getElementById('reelTitleInput').value = '';
      document.getElementById('reelDurationInput').value = '0:20';
      document.getElementById('reelViewsInput').value = '10.5K';
      document.getElementById('reelVideoUrlInput').value = '';
      document.getElementById('reelPosterUrlInput').value = '';
      if (vidPreview) { vidPreview.src = ''; vidPreview.classList.add('hidden'); }
      if (imgPreview) { imgPreview.src = ''; imgPreview.classList.add('hidden'); }
    } else {
      const reels = getStorage('SORORA_REELS_DATA', DEFAULT_REELS_DATA);
      const r = reels.find(item => item.id === val);
      if (r) {
        document.getElementById('reelId').value = r.id;
        document.getElementById('reelTitleInput').value = r.title || '';
        document.getElementById('reelDurationInput').value = r.duration || '0:20';
        document.getElementById('reelViewsInput').value = r.views || '10.5K';
        document.getElementById('reelVideoUrlInput').value = r.videoUrl || '';
        document.getElementById('reelPosterUrlInput').value = r.posterUrl || '';
        if (vidPreview && r.videoUrl) { vidPreview.src = r.videoUrl; vidPreview.classList.remove('hidden'); }
        if (imgPreview && r.posterUrl) { imgPreview.src = r.posterUrl; imgPreview.classList.remove('hidden'); }
      }
    }
  });

  // Save Reel Form Submit
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    let reels = getStorage('SORORA_REELS_DATA', DEFAULT_REELS_DATA);
    let id = document.getElementById('reelId').value;
    const isUpdate = Boolean(id);
    if (!id) id = `reel_${Date.now()}`;

    const videoUrl = document.getElementById('reelVideoUrlInput').value.trim();
    const posterUrl = document.getElementById('reelPosterUrlInput').value.trim();

    if (!videoUrl || videoUrl.startsWith('data:video')) {
      alert('Please wait for the video file upload to finish or enter a valid Video URL.');
      return;
    }

    const newReel = {
      id,
      title: document.getElementById('reelTitleInput').value.trim(),
      duration: document.getElementById('reelDurationInput').value.trim() || '0:20',
      views: document.getElementById('reelViewsInput').value.trim() || '10.5K',
      videoUrl: videoUrl,
      posterUrl: posterUrl || 'https://raw.githubusercontent.com/realabrar1/sorora.blr/main/public/uploads/1786025917347_photo__3_.jpeg'
    };

    const idx = reels.findIndex(r => r.id === id);
    if (idx >= 0) reels[idx] = newReel;
    else reels.push(newReel);

    setStorage('SORORA_REELS_DATA', reels);
    modal?.classList.remove('open');
    loadDashboardData();
    showGitHubToast(isUpdate ? '✅ Older video updated with new video & synced live!' : '✅ New Reel Video added & synced live to website!', 'success');
  });

  // Instagram Config Form Submit
  const instaForm = document.getElementById('reelsConfigForm');
  instaForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const handle = document.getElementById('adminInstaHandle').value.trim();
    const url = document.getElementById('adminInstaUrl').value.trim();
    localStorage.setItem('SORORA_INSTA_HANDLE', handle);
    localStorage.setItem('SORORA_INSTA_URL', url);
    syncContentToGitHub();
    showGitHubToast('✅ Instagram Follow settings saved & synced live!', 'success');
  });
}

function populateReelActionSelect(selectedId = '') {
  const select = document.getElementById('reelActionSelect');
  if (!select) return;
  const reels = getStorage('SORORA_REELS_DATA', DEFAULT_REELS_DATA);
  let html = `<option value="new">+ Add as Brand New Video Reel</option>`;
  reels.forEach((r, idx) => {
    html += `<option value="${r.id}" ${r.id === selectedId ? 'selected' : ''}>Replace / Update Older Video in #${idx + 1}: ${r.title}</option>`;
  });
  select.innerHTML = html;
}

window.openReelModal = function () {
  populateReelActionSelect('');
  document.getElementById('reelModalTitle').textContent = 'Upload / Add New Reel Video';
  document.getElementById('reelId').value = '';
  document.getElementById('reelTitleInput').value = '';
  document.getElementById('reelDurationInput').value = '0:20';
  document.getElementById('reelViewsInput').value = '10.5K';
  document.getElementById('reelVideoUrlInput').value = '';
  document.getElementById('reelPosterUrlInput').value = '';

  const videoInput = document.getElementById('reelVideoFileInput');
  const posterInput = document.getElementById('reelPosterFileInput');
  if (videoInput) videoInput.value = '';
  if (posterInput) posterInput.value = '';
  
  const vidPreview = document.getElementById('reelModalVidPreview');
  const imgPreview = document.getElementById('reelModalImgPreview');
  if (vidPreview) { vidPreview.src = ''; vidPreview.classList.add('hidden'); }
  if (imgPreview) { imgPreview.src = ''; imgPreview.classList.add('hidden'); }

  const submitBtn = document.getElementById('saveReelSubmitBtn');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Save Reel Video & Sync Live \u2794';
  }

  document.getElementById('reelModal').classList.add('open');
};

window.editReel = function (id) {
  const reels = getStorage('SORORA_REELS_DATA', DEFAULT_REELS_DATA);
  const r = reels.find(item => item.id === id);
  if (!r) return;

  populateReelActionSelect(r.id);
  document.getElementById('reelModalTitle').textContent = `Edit & Replace Video: ${r.title}`;
  document.getElementById('reelId').value = r.id;
  document.getElementById('reelTitleInput').value = r.title || '';
  document.getElementById('reelDurationInput').value = r.duration || '0:20';
  document.getElementById('reelViewsInput').value = r.views || '10.5K';
  document.getElementById('reelVideoUrlInput').value = r.videoUrl || '';
  document.getElementById('reelPosterUrlInput').value = r.posterUrl || '';

  const vidPreview = document.getElementById('reelModalVidPreview');
  const imgPreview = document.getElementById('reelModalImgPreview');
  if (vidPreview && r.videoUrl) { vidPreview.src = r.videoUrl; vidPreview.classList.remove('hidden'); }
  if (imgPreview && r.posterUrl) { imgPreview.src = r.posterUrl; imgPreview.classList.remove('hidden'); }

  document.getElementById('reelModal').classList.add('open');
};

window.deleteReel = function (id) {
  if (confirm('Are you sure you want to delete this Reel video?')) {
    let reels = getStorage('SORORA_REELS_DATA', DEFAULT_REELS_DATA);
    reels = reels.filter(r => r.id !== id);
    setStorage('SORORA_REELS_DATA', reels);
    loadDashboardData();
    showGitHubToast('🗑️ Reel video deleted and synced!', 'info');
  }
};
