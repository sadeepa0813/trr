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
  
  // කාලසටහන සැකසුම් - සියලුම බැච් සඳහා
  timetableSettings: {
    enabled: true,
    showFor2026: true,
    showFor2027: true, // 2027 සඳහා දැන් ඇත
    showForOL: true, // O/L සඳහා දැන් ඇත
    message: "කාලසටහන තවම නිකුත් කර නොමැත",
    
    // ප්‍රාක්ටිකල් විෂයන්
    practicalSubjects: {
      'chemistry': { date: '2026-07-15', time: '8:30 AM', duration: '3 hours' },
      'physics': { date: '2026-07-16', time: '8:30 AM', duration: '3 hours' },
      'biology': { date: '2026-07-17', time: '8:30 AM', duration: '3 hours' },
      'ict': { date: '2026-07-18', time: '8:30 AM', duration: '2 hours' },
      'agriculture': { date: '2026-07-19', time: '8:30 AM', duration: '3 hours' }
    },
    
    // න්‍යායික විෂයන්ගේ දින - සියලුම බැච් සඳහා
    theoryDates: {
      '2026': [
        { date: '2026-08-01', subjects: ['Sinhala', 'Tamil'], time: '9:00 AM' },
        { date: '2026-08-02', subjects: ['English'], time: '9:00 AM' },
        { date: '2026-08-03', subjects: ['Mathematics'], time: '9:00 AM' },
        { date: '2026-08-05', subjects: ['Chemistry', 'Business Studies'], time: '9:00 AM' },
        { date: '2026-08-06', subjects: ['Physics', 'Economics'], time: '9:00 AM' },
        { date: '2026-08-07', subjects: ['Biology', 'Accounting'], time: '9:00 AM' },
        { date: '2026-08-08', subjects: ['ICT', 'Geography'], time: '9:00 AM' },
        { date: '2026-08-09', subjects: ['History', 'Buddhism'], time: '9:00 AM' }
      ],
      '2027': [
        { date: '2027-08-01', subjects: ['Sinhala', 'Tamil'], time: '9:00 AM' },
        { date: '2027-08-02', subjects: ['English'], time: '9:00 AM' },
        { date: '2027-08-03', subjects: ['Mathematics'], time: '9:00 AM' },
        { date: '2027-08-05', subjects: ['Chemistry', 'Business Studies'], time: '9:00 AM' },
        { date: '2027-08-06', subjects: ['Physics', 'Economics'], time: '9:00 AM' },
        { date: '2027-08-07', subjects: ['Biology', 'Accounting'], time: '9:00 AM' },
        { date: '2027-08-08', subjects: ['ICT', 'Geography'], time: '9:00 AM' },
        { date: '2027-08-09', subjects: ['History', 'Buddhism'], time: '9:00 AM' }
      ],
      'ol': [
        { date: '2026-12-01', subjects: ['Sinhala', 'Tamil'], time: '9:00 AM' },
        { date: '2026-12-02', subjects: ['English'], time: '9:00 AM' },
        { date: '2026-12-03', subjects: ['Mathematics'], time: '9:00 AM' },
        { date: '2026-12-05', subjects: ['Science'], time: '9:00 AM' },
        { date: '2026-12-06', subjects: ['History', 'Geography'], time: '9:00 AM' },
        { date: '2026-12-07', subjects: ['Buddhism', 'Catholic'], time: '9:00 AM' },
        { date: '2026-12-08', subjects: ['ICT', 'Commerce'], time: '9:00 AM' }
      ]
    }
  },
  
  // WhatsApp බොට් සැකසුම්
  whatsappBots: {
    bot1: {
      number: '94705179349',
      name: 'A/L Countdown Bot',
      message: 'Hi 👋\nA/L Exam Countdown Bot වලට සාදරයෙන් පිළිගනිමු!\n🎯 A/L Exam countdown updates\n⏰ Daily countdown updates\n💡 Motivational quotes\n📊 Study progress tracking\n🏆 Achievement system\n📚 Support for 2026, 2027 batches'
    },
    bot2: {
      number: '94768164223', 
      name: 'Complaint Bot',
      message: '📝 Subject/Time Complaint Report 📝\n🎯 A/L 2026 Exam Timetable Complaint\n\nකරුණාකර ඔබේ complaint එක එවන්න:\n❗ Missing Subject\n⏰ Wrong Time\n📅 Wrong Date\n🔄 Other Issues'
    },
    bot3: {
      number: '94705179349',
      name: 'Support Bot',
      message: '🆘 Help & Support\n\nඔබට අවශ්‍ය උදව් ලබා ගැනීමට මෙම අංකයට සම්බන්ධ වන්න. අපගේ සහාය කණ්ඩායම ඔබට උදව් කිරීමට සුදානම්!'
    }
  },
  
  // Update Notifications (Notifications අයින් කර ඇත)
  updateNotifications: {
    enabled: true, // Notifications අක්‍රීය කර ඇත
    currentVersion: '2.2.0',
    lastUpdate: '2024-01-20',
    newFeatures: [
      '✅ සියලුම බැච් සඳහා කාලසටහන (2026, 2027, O/L)',
      '✅ ප්‍රාක්ටිකල් විෂයන්ගේ කාලසටහන',
      '✅ WhatsApp බොට් 3ක් සමග සම්පූර්ණ සහාය',
      '✅ කාලසටහන copy to clipboard feature',
      '✅ Real-time countdown updates',
      '✅ විෂය තේරීමේ පද්ධතිය'
    ],
    message: '🆕 නව යාවත්කාලීන කිරීම්! සියලුම බැච් සඳහා කාලසටහන සහ ප්‍රාක්ටිකල් විෂයන් එකතු කර ඇත.'
  }
};

// Export for use in HTML
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
