const translations = {
    en: {
        //Header Section
        navHome: 'Home',
        navServices: 'Services',
        navFeatures: 'Features',
        navPricing: 'Pricing',
        navDocs: 'Documentation',
        loginBtn: 'Login',

        // Footer Section
        footerDescription: 'Revolutionizing healthcare with artificial intelligence. Your trusted partner for medical guidance, diagnosis, and wellness management.',
        footerProductHeading: 'Product',
        footerLinkFeatures: 'Features',
        footerLinkPricing: 'Pricing',
        footerLinkAPI: 'API',
        footerCompanyHeading: 'Company',
        footerLinkAbout: 'About Us',
        footerLinkCareers: 'Careers',
        footerLinkBlog: 'Blog',
        footerLegalHeading: 'Legal',
        footerLinkPrivacy: 'Privacy',
        footerLinkTerms: 'Terms',
        footerLinkSecurity: 'Security',
        footerCopyright: '© 2024 HealthAlly. All rights reserved.',

        //Index Page
        badgeText: 'HIPAA Compliant AI Engine',
        heroTitle: 'Meet AI Health, your assistant for injuries concerns, instant care.',
        heroDesc: 'Your personal AI medical assistant available 24/7. Get instant health advice, analyze symptoms with ML diagnosis, and find nearby doctors.',
        startBtn: 'Get Diagnosed Now ↗',
        learnBtn: 'Demo',
        chatText: "Hi! I'm your AI Health Assistant. How can I help you today?",
        featuresTitle: 'Intelligent Healthcare Solutions',
        featuresDesc: 'Experience the future of medical assistance with our AI-powered platform designed for accuracy and ease.',
        chatAiTitle: 'Chat with AI Doctor',
        chatAiDesc: 'Experience human-like medical conversations. Our NLP engine understands slang, context, and vague symptoms to provide accurate triage advice instantly.',
        chatAiList1: 'Instant natural language understanding',
        chatAiList2: 'Asks intelligent follow-up questions to clarify',
        chatAiList3: 'Suggests immediate, safe home remedies',
        mlModelTitle: 'ML Diagnosis Model',
        mlModelDesc: 'Powered by a Random Forest algorithm trained on 40,000+ clinical datasets. We analyze over 132 different symptoms and vitals to predict disease probability accurately.',
        mlModelList1: 'High-precision prediction accuracy vs validated test sets',
        mlModelList2: 'Cross-references rare conditions often missed',
        mlModelList3: 'Personalizes analysis based on age, gender, and history',
        reportTitle: 'Smart Report Generation',
        reportDesc: 'Comprehensive health reports generated instantly. Track your medical history, analyze trends, and share detailed PDF reports with healthcare providers.',
        reportList1: 'Visualizes health trends over time with graphs',
        reportList2: 'One-click secure sharing with specialists',
        reportList3: 'Exportable in PDF and encrypted formats',
        findDoctorTitle: 'Find Doctors Nearby',
        findDoctorDesc: 'Locate specialized doctors and healthcare facilities in your area. View ratings, availability, and book appointments directly through the platform.',
        findDoctorList1: 'Real-time availability and instant booking',
        findDoctorList2: 'Verified patient reviews and ratings',
        findDoctorList3: 'Filter by specialty, insurance, and distance',
        footerAbout: 'AI Health',
        footerDesc: 'Revolutionizing healthcare with artificial intelligence. Your trusted partner for medical guidance, diagnosis, and wellness management.',
        footerProductTitle: 'Product',
        footerFeatures: 'Features',
        footerPricing: 'Pricing',
        footerAPI: 'API',
        footerIntegrations: 'Integrations',
        footerCompanyTitle: 'Company',
        footerAboutUs: 'About Us',
        footerCareers: 'Careers',
        footerBlog: 'Blog',
        footerContact: 'Contact',
        footerLegalTitle: 'Legal',
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms of Service',
        footerSecurity: 'Security',
        footerCompliance: 'Compliance',



        // Pricing Page
        pricingHeroTitle: 'Simple, Transparent Pricing',
        pricingHeroSubtitle: 'Flexible options for individuals and families. Start for free, upgrade when you need more.',
        pricingFreeName: 'Free Tier',
        pricingPopularBadge: 'POPULAR',
        pricingFreePrice: '$0',
        pricingFreeMonth: '/ month',
        pricingF1: '<b>500</b> AI Chat Queries / mo',
        pricingF2: 'Access to standard <b>ML Diagnosis</b>',
        pricingF3: 'Find Doctors Nearby',
        pricingF4: 'Export to <b>PDF Summary</b>',
        pricingF5: 'Standard Community Support',
        pricingBtnFree: 'Start for Free',
        pricingProName: 'Pro Tier',
        pricingProPrice: '$29',
        pricingProMonth: '/ month',
        pricingP1: '<b>Unlimited</b> Queries',
        pricingP2: '<b>Priority</b> Processing Queue',
        pricingP3: 'Advanced <b>Lab Report Analysis</b>',
        pricingP4: 'Family Account Management',
        pricingP5: '24/7 Dedicated Support',
        pricingBtnPro: 'Coming Soon',
        pricingProFooter: 'This plan will be available soon. Stay tuned!',



        // Services Section
        servicesHeroTitle: 'Our Unified Services',
        servicesHeroDesc: 'Explore the cutting-edge AI technologies we use to bring hospital-grade diagnostics and assistance directly to your device.',
        servicesChatbotTitle: 'AI Health Chatbot',
        servicesChatbotDesc: "Our NLP engine isn't just a basic script. It utilizes Large Language Models specifically fine-tuned on medical textbooks and triage protocols.",
        servicesChatbotF1Title: 'Natural Language',
        servicesChatbotF1Desc: "Talk as if you're with a human.",
        servicesChatbotF2Title: 'Private & Secure',
        servicesChatbotF2Desc: 'End-to-end encrypted chats.',
        servicesChatbotF3Title: 'Instant Triage',
        servicesChatbotF3Desc: 'Immediate care recommendations.',
        servicesChatUiHeader: 'Dr. AI Assistant',
        servicesChatUiMsg1: 'Hello! I noticed your heart rate is slightly elevated. How are you feeling?',
        servicesChatUiMsg2: 'I feel a bit dizzy and tired.',
        servicesChatUiMsg3: 'I see. Are you experiencing any shortness of breath?',
        servicesMlTitle: 'ML Diagnosis Engine',
        servicesMlDesc: 'Powered by a Random Forest algorithm trained on over 40,000 anonymized clinical datasets.',
        servicesMlF1Title: 'High Accuracy',
        servicesMlF1Desc: 'Validated against real cases.',
        servicesMlF2Title: 'Multi-Symptom',
        servicesMlF2Desc: 'Correlates complex data points.',
        servicesMlF3Title: 'Fast Processing',
        servicesMlF3Desc: 'Results in milliseconds.',
        servicesReportsTitle: 'Intelligent Reports',
        servicesReportsDesc: 'Stop carrying folders of paper. Our system generates comprehensive digital reports that track your health trends.',
        servicesReportsF1Title: 'PDF Export',
        servicesReportsF1Desc: 'Universal format sharing.',
        servicesReportsF2Title: 'Trend Analytics',
        servicesReportsF2Desc: 'Visualize progress over time.',
        servicesReportsF3Title: 'Doctor Share',
        servicesReportsF3Desc: 'Secure link generation.',
        servicesDoctorsTitle: 'Find Doctors Nearby',
        servicesDoctorsDesc: 'Urgent care needed? Our geolocation features map specialized doctors and clinics around you instantly.',
        servicesDoctorsF1Title: 'Geolocation',
        servicesDoctorsF1Desc: 'Precise mapping & routing.',
        servicesDoctorsF2Title: 'Verified Reviews',
        servicesDoctorsF2Desc: 'Trust-based selection.',
        servicesDoctorsF3Title: 'Instant Booking',
        servicesDoctorsF3Desc: 'Syncs with doctor calendars.',
        servicesCtaTitle: 'Ready to prioritize your health?',
        servicesCtaDesc: 'Join thousands of users who trust AI Health for their daily medical guidance.',
        servicesCtaBtn: 'Get Started Now ↗'
    },
    hi: {
        //Header Section
        navHome: 'होम',
        navServices: 'सेवाएं',
        navFeatures: 'विशेषताएं',
        navPricing: 'मूल्य निर्धारण',
        navDocs: 'दस्तावेज़ीकरण',
        loginBtn: 'लॉगिन',

        // Footer Section
        footerDescription: 'आर्टिफिशियल इंटेलिजेंस के साथ स्वास्थ्य सेवा में क्रांति। चिकित्सा मार्गदर्शन, निदान और कल्याण प्रबंधन के लिए आपका भरोसेमंद साथी।',
        footerProductHeading: 'उत्पाद',
        footerLinkFeatures: 'विशेषताएं',
        footerLinkPricing: 'कीमतें',
        footerLinkAPI: 'एपीआई',
        footerCompanyHeading: 'कंपनी',
        footerLinkAbout: 'हमारे बारे में',
        footerLinkCareers: 'करियर',
        footerLinkBlog: 'ब्लॉग',
        footerLegalHeading: 'कानूनी',
        footerLinkPrivacy: 'गोपनीयता',
        footerLinkTerms: 'शर्तें',
        footerLinkSecurity: 'सुरक्षा',
        footerCopyright: '© 2024 हेल्थ-एली। सर्वाधिकार सुरक्षित।',
        


        //Index Page
        badgeText: 'HIPAA अनुपालन AI इंजन',
        heroTitle: 'AI स्वास्थ्य से मिलें, चोटों और चिंताओं के लिए आपका सहायक।',
        heroDesc: 'आपका व्यक्तिगत AI चिकित्सा सहायक 24/7 उपलब्ध। तुरंत स्वास्थ्य सलाह प्राप्त करें, ML निदान के साथ लक्षणों का विश्लेषण करें, और नजदीकी डॉक्टर खोजें।',
        startBtn: 'अभी जांच शुरू करें ↗',
        learnBtn: 'डेमो',
        chatText: 'नमस्ते! मैं आपका AI स्वास्थ्य सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?',
        featuresTitle: 'बुद्धिमान स्वास्थ्य समाधान',
        featuresDesc: 'सटीक, तत्काल चिकित्सा सहायता के लिए उन्नत AI और मशीन लर्निंग द्वारा संचालित',
        footerAbout: 'AI स्वास्थ्य',
        footerDesc: 'कृत्रिम बुद्धिमत्ता के साथ स्वास्थ्य सेवा में क्रांति। चिकित्सा मार्गदर्शन, निदान, और कल्याण प्रबंधन के लिए आपका विश्वसनीय साझेदार।',
        footerProductTitle: 'उत्पाद',
        footerFeatures: 'विशेषताएं',
        footerPricing: 'मूल्य निर्धारण',
        footerAPI: 'API',
        footerIntegrations: 'एकीकरण',
        footerCompanyTitle: 'कंपनी',
        footerAboutUs: 'हमारे बारे में',
        footerCareers: 'करियर',
        footerBlog: 'ब्लॉग',
        footerContact: 'संपर्क',
        footerLegalTitle: 'कानूनी',
        footerPrivacy: 'गोपनीयता नीति',
        footerTerms: 'सेवा की शर्तें',
        footerSecurity: 'सुरक्षा',
        footerCompliance: 'अनुपालन', 
        chatAiTitle: 'AI डॉक्टर के साथ चैट करें',
        chatAiDesc: 'मानव जैसी चिकित्सा बातचीत का अनुभव करें। हमारा NLP इंजन सटीक ट्राइएज सलाह देने के लिए बोलचाल की भाषा और अस्पष्ट लक्षणों को समझता है।',
        chatAiList1: 'त्वरित प्राकृतिक भाषा समझ',
        chatAiList2: 'स्पष्टीकरण के लिए बुद्धिमान अनुवर्ती प्रश्न पूछता है',
        chatAiList3: 'तत्काल, सुरक्षित घरेलू उपचार का सुझाव देता है',
        mlModelTitle: 'ML निदान मॉडल',
        mlModelDesc: '40,000+ नैदानिक डेटासेट पर प्रशिक्षित रैंडम फॉरेस्ट एल्गोरिदम द्वारा संचालित। हम बीमारी की संभावना का सटीक अनुमान लगाने के लिए 132 से अधिक विभिन्न लक्षणों का विश्लेषण करते हैं।',
        mlModelList1: 'मान्य परीक्षण सेटों के मुकाबले उच्च-सटीक भविष्यवाणी',
        mlModelList2: 'अक्सर छूट जाने वाली दुर्लभ स्थितियों का क्रॉस-संदर्भ देता है',
        mlModelList3: 'आयु, लिंग और इतिहास के आधार पर विश्लेषण को व्यक्तिगत बनाता है',
        reportTitle: 'स्मार्ट रिपोर्ट जनरेशन',
        reportDesc: 'व्यापक स्वास्थ्य रिपोर्ट तुरंत तैयार की जाती हैं। अपने चिकित्सा इतिहास को ट्रैक करें, रुझानों का विश्लेषण करें और डॉक्टरों के साथ विस्तृत PDF रिपोर्ट साझा करें।',
        reportList1: 'ग्राफ के साथ समय के साथ स्वास्थ्य रुझानों को दिखाता है',
        reportList2: 'विशेषज्ञों के साथ एक-क्लिक सुरक्षित साझाकरण',
        reportList3: 'PDF और एन्क्रिप्टेड प्रारूपों में निर्यात योग्य',
        findDoctorTitle: 'आस-पास के डॉक्टर खोजें',
        findDoctorDesc: 'अपने क्षेत्र में विशेषज्ञ डॉक्टरों और स्वास्थ्य सुविधाओं का पता लगाएं। रेटिंग, उपलब्धता देखें और सीधे प्लेटफॉर्म के माध्यम से अपॉइंटमेंट बुक करें।',
        findDoctorList1: 'वास्तविक समय उपलब्धता और त्वरित बुकिंग',
        findDoctorList2: 'सत्यापित रोगी समीक्षाएं और रेटिंग',
        findDoctorList3: 'विशेषज्ञता, बीमा और दूरी के आधार पर फ़िल्टर करें',


        
        // Pricing Page
        pricingHeroTitle: 'सरल और स्पष्ट कीमतें',
        pricingHeroSubtitle: 'व्यक्तियों और परिवारों के लिए लचीले विकल्प। मुफ्त में शुरू करें, ज़रूरत पड़ने पर अपग्रेड करें।',
        pricingFreeName: 'फ्री टियर',
        pricingPopularBadge: 'लोकप्रिय',
        pricingFreePrice: '$0',
        pricingFreeMonth: '/ महीना',
        pricingF1: '<b>500</b> AI चैट प्रश्न / माह',
        pricingF2: 'स्टैंडर्ड <b>ML निदान</b> तक पहुंच',
        pricingF3: 'आस-पास के डॉक्टर खोजें',
        pricingF4: '<b>PDF सारांश</b> निर्यात करें',
        pricingF5: 'स्टैंडर्ड कम्युनिटी सपोर्ट',
        pricingBtnFree: 'मुफ्त में शुरू करें',
        pricingProName: 'प्रो टियर',
        pricingProPrice: '$29',
        pricingProMonth: '/ महीना',
        pricingP1: '<b>असीमित</b> प्रश्न',
        pricingP2: '<b>प्राथमिकता</b> प्रोसेसिंग लाइन',
        pricingP3: 'उन्नत <b>लैब रिपोर्ट विश्लेषण</b>',
        pricingP4: 'परिवार खाता प्रबंधन',
        pricingP5: '24/7 समर्पित सहायता',
        pricingBtnPro: 'जल्द आ रहा है',
        pricingProFooter: 'यह योजना जल्द ही उपलब्ध होगी। बने रहें!',



        // Services Section
        servicesHeroTitle: 'हमारी एकीकृत सेवाएँ',
        servicesHeroDesc: 'अत्याधुनिक एआई तकनीकों का अन्वेषण करें जिनका उपयोग हम आपके डिवाइस पर सीधे अस्पताल-श्रेणी के निदान लाने के लिए करते हैं।',
        servicesChatbotTitle: 'एआई हेल्थ चैटबॉट',
        servicesChatbotDesc: 'हमारा एनएलपी इंजन केवल एक साधारण स्क्रिप्ट नहीं है। यह चिकित्सा पाठ्यपुस्तकों पर फाइन-ट्यून किए गए मॉडल का उपयोग करता है।',
        servicesChatbotF1Title: 'प्राकृतिक भाषा',
        servicesChatbotF1Desc: 'ऐसे बात करें जैसे आप किसी इंसान के साथ हों।',
        servicesChatbotF2Title: 'निजी और सुरक्षित',
        servicesChatbotF2Desc: 'एंड-टू-एंड एन्क्रिप्टेड चैट।',
        servicesChatbotF3Title: 'तत्काल ट्राइएज',
        servicesChatbotF3Desc: 'तत्काल देखभाल की सिफारिशें।',
        servicesChatUiHeader: 'डॉ. एआई असिस्टेंट',
        servicesChatUiMsg1: 'नमस्ते! मैंने देखा कि आपकी हृदय गति थोड़ी बढ़ी हुई है। आप कैसा महसूस कर रहे हैं?',
        servicesChatUiMsg2: 'मुझे थोड़ा चक्कर और थकान महसूस हो रही है।',
        servicesChatUiMsg3: 'मैं समझता हूँ। क्या आपको सांस लेने में कोई तकलीफ हो रही है?',
        servicesMlTitle: 'एमएल निदान इंजन',
        servicesMlDesc: '40,000 से अधिक अज्ञात नैदानिक डेटासेट पर प्रशिक्षित रैंडम फॉरेस्ट एल्गोरिदम द्वारा संचालित।',
        servicesMlF1Title: 'उच्च सटीकता',
        servicesMlF1Desc: 'वास्तविक मामलों के खिलाफ मान्य।',
        servicesMlF2Title: 'बहु-लक्षण',
        servicesMlF2Desc: 'जटिल डेटा बिंदुओं को जोड़ता है।',
        servicesMlF3Title: 'तेज़ प्रोसेसिंग',
        servicesMlF3Desc: 'मिलीसेकंड में परिणाम।',
        servicesReportsTitle: 'बुद्धिमान रिपोर्ट',
        servicesReportsDesc: 'कागज के फोल्डर ले जाना बंद करें। हमारा सिस्टम डिजिटल रिपोर्ट तैयार करता है जो आपके स्वास्थ्य को ट्रैक करती है।',
        servicesReportsF1Title: 'पीडीएफ निर्यात',
        servicesReportsF1Desc: 'यूनिवर्सल फॉर्मेट शेयरिंग।',
        servicesReportsF2Title: 'ट्रेंड एनालिटिक्स',
        servicesReportsF2Desc: 'समय के साथ प्रगति देखें।',
        servicesReportsF3Title: 'डॉक्टर शेयर',
        servicesReportsF3Desc: 'सुरक्षित लिंक निर्माण।',
        servicesDoctorsTitle: 'आस-पास के डॉक्टर खोजें',
        servicesDoctorsDesc: 'तत्काल देखभाल की आवश्यकता है? हमारी जियोलोकेशन सुविधाएँ तुरंत आपके आस-पास के क्लीनिकों को दिखाती हैं।',
        servicesDoctorsF1Title: 'जियोलोकेशन',
        servicesDoctorsF1Desc: 'सटीक मैपिंग और रूटिंग।',
        servicesDoctorsF2Title: 'सत्यापित समीक्षाएँ',
        servicesDoctorsF2Desc: 'विश्वास-आधारित चयन।',
        servicesDoctorsF3Title: 'तत्काल बुकिंग',
        servicesDoctorsF3Desc: 'डॉक्टर कैलेंडर के साथ सिंक।',
        servicesCtaTitle: 'अपने स्वास्थ्य को प्राथमिकता देने के लिए तैयार हैं?',
        servicesCtaDesc: 'उन हजारों उपयोगकर्ताओं में शामिल हों जो एआई हेल्थ पर भरोसा करते हैं। आज ही शुरू करें।',
        servicesCtaBtn: 'अभी शुरू करें ↗'
    }
};

// Language translations
let currentLanguage = localStorage.getItem('language') || 'en';

// Language Toggle
function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    dropdown.classList.toggle('active');
}

function changeLang(lang) {
    currentLanguage = lang;
    const langDisplay = document.getElementById('currentLang');
    if (langDisplay) langDisplay.textContent = lang.toUpperCase();
    
    updateContent(lang);
    localStorage.setItem('language', lang);
    
    // Close dropdown safely
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('active');
}

function updateContent(lang) {
    const trans = translations[lang];
    if (!trans) return;

    Object.keys(trans).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            // Check for buttons/inputs or standard tags
            if (element.tagName === 'INPUT') {
                element.value = trans[key];
            } else if (element.tagName === 'BUTTON') {
                element.innerHTML = trans[key]; // innerHTML allows bolding in buttons
            } else {
                element.innerHTML = trans[key]; // innerHTML allows bolding in text
            }
        }
    });
}

// Single initialization point
document.addEventListener('DOMContentLoaded', () => {
    updateContent(currentLanguage);
    const langDisplay = document.getElementById('currentLang');
    if (langDisplay) langDisplay.textContent = currentLanguage.toUpperCase();
});

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const langSelector = document.querySelector('.lang-selector');
    const dropdown = document.getElementById('langDropdown');
    if (langSelector && !langSelector.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? '' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update the icon
    updateThemeIcon(newTheme);
}

// Helper function to swap icon classes
function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    if (!themeIcon) return;

    if (theme === 'dark') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Load saved theme and set correct icon on startup
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
});

 // Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//mobile menu toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.getElementById('mobileMenu');

mobileBtn.addEventListener('click', () => {
    // Toggle the 'active' class on the menu
    mobileMenu.classList.toggle('active');
    
    // Optional: Change the icon from ☰ to ✖
    if (mobileMenu.classList.contains('active')) {
        mobileBtn.textContent = '✕'; // Change to X
    } else {
        mobileBtn.textContent = '☰'; // Change back to 3 lines
    }

});
