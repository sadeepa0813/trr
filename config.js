// A/L & O/L Exam Countdown Configuration
// ======================================
// මෙම config file එකෙන් වෙබ් අඩවියේ සියලු සැකසුම් කළමනාකරණය කරන්න

const CONFIG = {
  // විභාග දින සැකසුම්
  examDates: {
    '2026': new Date('2026-08-10T00:00:00'),
    '2027': new Date('2027-08-10T00:00:00'),
    'ol': new Date('2026-12-07T00:00:00')
  },
  
  // අධ්‍යයන ආරම්භක දින
  studyStartDates: {
    '2026': new Date('2025-01-01'),
    '2027': new Date('2026-01-01'),
    'ol': new Date('2024-01-01')
  },
  
  // විෂය අනුව වර්ණ
  subjectColors: {
    'combined-math': '#7c3aed',
    'higher-math': '#8b5cf6',
    'chemistry': '#10b981',
    'physics': '#ef4444',
    'biology': '#f59e0b',
    'ict': '#06b6d4',
    'business': '#84cc16',
    'economics': '#f97316',
    'accounting': '#ec4899',
    'sinhala': '#14b8a6',
    'geography': '#a855f7',
    'history': '#eab308',
    'buddhism': '#22c55e',
    'agri-science': '#84cc16',
    'engineering': '#6366f1',
    'bio-sys': '#06b6d4',
    'sci-tech': '#f43f5e',
    'gen-english': '#3b82f6',
    'cgt': '#8b5cf6',
    'maths': '#7c3aed'
  },
  
  // WhatsApp අංක
  whatsappNumbers: {
    bot: '94705179349',
    complaint: '94768164223',
    support: '94705179349'
  },
  
  // API Keys
  web3formsKey: 'fd9a9424-521d-4b92-951d-bd41f19f7898',
  
  // කාලසටහන සැකසුම්
  timetableSettings: {
    enabled: true, // කාලසටහන සක්‍රීය කරන්න
    showFor2026: true,
    showFor2027: true, // 2027 සඳහා තවම නැත
    showForOL: false, // O/L සඳහා තවම නැත  false
    message: "කාලසටහන තවම නිකුත් කර නොමැත"
  },
  
  // WhatsApp බොට් සැකසුම්
  whatsappBots: {
    bot1: {
      number: '94705179349',
      name: 'A/L Countdown Bot',
      message: 'Hi 👋\nA/L Exam Countdown Bot වලට සාදරයෙන් පිළිගනිමු!'
    },
    bot2: {
      number: '94768164223', 
      name: 'Complaint Bot',
      message: '📝 Subject/Time Complaint Report'
    },
    bot3: {
      number: '94705179349',
      name: 'Support Bot',
      message: '🆘 Help & Support'
    }
  }
};

// Export for use in HTML
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
