/* ============================================================
   ROYAL LUXURY PORTFOLIO — app.js
   اللغة، الوضع الليلي/النهاري، النافذة التفصيلية، الخلفية 3D
   ============================================================ */
'use strict';

/* ---------- بيانات المشاريع (مكان واحد لإدارة المواقع) ---------- */
const PROJECTS = [
    {
        id: 1,
        liveUrl: 'https://shomoukh2.pages.dev',
        image: 'work-1.jpg',
        titleAr: 'شموخ الخليج المثالي — الإمداد بالوقود',
        titleEn: 'Shomoukh Al-Khaleej — Fuel Supply',
        catAr: 'مواقع الشركات • الخدمات اللوجستية',
        catEn: 'Corporate Sites • Logistics',
        descAr: 'موقع مؤسسي لشركة خدمات لوجستية وإمداد بالديزل ومشتقات النفط في السعودية، مع تغطية لمناطق الخدمة ونموذج طلب عرض سعر متكامل عبر واتساب.',
        descEn: 'A corporate site for a Saudi logistics and diesel supply company, featuring service coverage zones and a complete quote request form integrated with WhatsApp.',
        goalAr: 'عرض خدمات الإمداد بوضوح احترافي، وتسهيل التواصل الفوري مع فرق المناطق لطلب عروض الأسعار.',
        goalEn: 'Present supply services with professional clarity and enable instant contact with regional teams for quotes.',
        highlightsAr: [
            'تصنيف واضح للخدمات والقطاعات ومناطق التغطية',
            'نموذج طلب عرض سعر يُجهّز رسالة واتساب جاهزة',
            'معرض صور من النشاط الميداني',
            'تصميم متجاوب لجميع الأجهزة'
        ],
        highlightsEn: [
            'Clear categorization of services, sectors, and coverage areas',
            'Quote form that prepares a ready WhatsApp message',
            'Gallery of field operations',
            'Fully responsive design'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp Integration']
    },
    {
        id: 2,
        liveUrl: 'https://alalmalzhry.pages.dev',
        image: 'work-2.jpg',
        titleAr: 'العالم السحري — AR + AI للأطفال',
        titleEn: 'The Magical World — AR + AI for Kids',
        catAr: 'المشاريع الإبداعية • تجارب تفاعلية',
        catEn: 'Creative Projects • Interactive Experiences',
        descAr: 'تجربة تعليمية تحوّل رسومات الأطفال إلى مجسمات ثلاثية الأبعاد تنبض بالحياة، بتقنيات الواقع المعزز والذكاء الاصطناعي، مع معرض بطاقات ولوحة تلوين تفاعلية.',
        descEn: 'An educational experience that turns children\'s drawings into living 3D models using Augmented Reality and AI, with a card gallery and an interactive coloring studio.',
        goalAr: 'جعل التعلم ممتعًا: تحويل رسمة ورقية إلى مجسم متحرك يتحدث، وتحفيز الإبداع عند الأطفال.',
        goalEn: 'Make learning joyful: transform a paper drawing into a talking animated 3D model and spark children\'s creativity.',
        highlightsAr: [
            'واقع معزز يعرض المجسم فوق الورقة مباشرة',
            'ذكاء اصطناعي يلوّن الرسومات تلقائيًا',
            'مجسمات ثلاثية الأبعاد بصوت وحركة',
            'بطاقات وحروف وأرقام ونظام نقاط وأوسمة'
        ],
        highlightsEn: [
            'AR overlays the 3D model directly on paper',
            'AI automatically colors the drawings',
            '3D models with voice and animation',
            'Cards, letters, numbers, points, and badges'
        ],
        tech: ['Augmented Reality', 'AI', 'Web Audio', 'Web Speech', 'Canvas', 'Camera API']
    },
    {
        id: 3,
        liveUrl: 'https://shumukhbuilding.pages.dev',
        image: 'work-3.jpg',
        titleAr: 'شموخ الخليج المثالي — توريد مواد البناء',
        titleEn: 'Shomoukh Al-Khaleej — Building Materials',
        catAr: 'المواقع التعريفية • الخدمات اللوجستية',
        catEn: 'Landing & Catalog Sites • Logistics',
        descAr: 'موقع تعريفي وتجاري لتوريد مواد البناء بالجملة: عرض منتجات بفلترة ذكية، معرض صور شامل، وأسئلة شائعة، مع نموذج طلب عرض سعر يُرسل مباشرة عبر واتساب.',
        descEn: 'A commercial site for wholesale building materials: product listings with smart filtering, a full image gallery, FAQs, and a quote form sent directly via WhatsApp.',
        goalAr: 'عرض الأصناف والمواصفات بوضوح، وتسهيل طلبات الجملة لشركات المقاولات والمشاريع.',
        goalEn: 'Present products and specifications clearly and streamline wholesale requests for contractors and projects.',
        highlightsAr: [
            'كتالوج منتجات بتصنيفات وفلترة بحث',
            'معرض صور قابل للتكبير',
            'أسئلة شائعة (FAQ) تفاعلية',
            'نموذج عرض سعر متكامل مع إرفاق ملفات'
        ],
        highlightsEn: [
            'Product catalog with categories and search filtering',
            'Zoomable image gallery',
            'Interactive FAQ section',
            'Complete quote form with file attachments'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript', 'File Attachments', 'WhatsApp Integration']
    },
    {
        id: 4,
        liveUrl: 'https://hoosptlmakh.lcfh277940.workers.dev/',
        image: 'work-4.jpg',
        titleAr: 'شيخة للضيافة والفخامة — مكة المكرمة',
        titleEn: 'Sheikha Hospitality & Luxury — Makkah',
        catAr: 'الضيافة الفندقية • مكة المكرمة',
        catEn: 'Hospitality • Makkah',
        descAr: 'موقع ضيافة فندقية قرب المسجد الحرام، يعرّف بالأجنحة والإطلالات ويوفر تجربة حجز تجريبية.',
        descEn: 'A hospitality website near the Grand Mosque, showcasing suites and views with a demo booking experience.',
        goalAr: 'تقديم تجربة رقمية هادئة تساعد الزوار على استكشاف الأجنحة ومعلومات الإقامة.',
        goalEn: 'Create a calm digital experience for exploring suites and stay information.',
        highlightsAr: [
            'عرض الأجنحة والإطلالات على مكة',
            'تجربة حجز تجريبية ومعلومات واضحة عن الإقامة',
            'توضيح أن الأسعار والتقييمات المعروضة تجريبية'
        ],
        highlightsEn: [
            'Showcase of suites and views of Makkah',
            'Demo booking experience and clear stay information',
            'Clear notice that displayed prices and ratings are illustrative'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    },
    {
        id: 5,
        liveUrl: 'https://2mycv2.pages.dev/',
        image: 'work-5.jpg',
        titleAr: 'هديل عبدالقوي — السيرة الذاتية الرقمية',
        titleEn: 'Hadeel Abdulqawi — Digital CV',
        catAr: 'السيرة الذاتية • الذكاء الاصطناعي',
        catEn: 'Digital CV • Artificial Intelligence',
        descAr: 'هوية رقمية وسيرة ذاتية تفاعلية تعرض نبذة هديل، مسارها الأكاديمي، مهاراتها ومشاريعها.',
        descEn: 'An interactive digital identity and CV presenting Hadeel’s profile, academic path, skills, and projects.',
        goalAr: 'جمع المعلومات الشخصية والأكاديمية والمشاريع في تجربة رقمية واضحة ومميزة.',
        goalEn: 'Bring profile, academic information, and projects together in a clear digital experience.',
        highlightsAr: [
            'تعريف شخصي ومسار أكاديمي',
            'عرض المهارات ومعرض المشاريع',
            'هوية رقمية متناسقة وروابط تواصل مباشرة'
        ],
        highlightsEn: [
            'Personal profile and academic path',
            'Skills and project showcase',
            'Cohesive digital identity and direct contact links'
        ],
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    }
];

/* ---------- الترجمات ---------- */
const I18N = {
    ar: {
        title: 'أعمالي الرقمية | واجهات تلفت الأنظار وتجارب تترك أثرًا',
        metaDescription: 'أصمم وأبرمج واجهات رقمية بروح فاخرة: هوية بصرية أنيقة، خطوط عربية مضبوطة، ألوان تجمع بين الذهب والعمق، وأداء سريع بلا أطر ثقيلة.',
        loaderText: 'معرض الأعمال',
        brandName: 'معرض الأعمال',
        navHome: 'الرئيسية',
        navWorks: 'أعمال مختارة',
        navDetails: 'تفاصيل المشاريع',
        navAbout: 'من أنا',
        navSkills: 'المهارات',
        navProcess: 'طريقة العمل',
        navContact: 'تواصل',
        themeToggle: 'تبديل الوضع الليلي والنهاري',
        langToggle: 'تبديل اللغة بين العربية والإنجليزية',
        heroBadge: 'تصميم إبداعي • فاخر • متميز',
        heroTitle: 'أعمالي الرقمية',
        heroTitleAccent: 'واجهات تلفت الأنظار... وتجارب تترك أثرًا',
        heroSubtitle: 'معرض أعمال يجمع بين الإبداع البصري، والتصميم العصري، وتطوير المواقع الإلكترونية.',
        heroQuote: 'أصمم وأبرمج واجهات رقمية بروح فاخرة: هوية بصرية أنيقة، خطوط عربية مضبوطة، ألوان تجمع بين الذهب والعمق، وأداء سريع بلا أطر ثقيلة — من أول سطر كود حتى الاستضافة على الويب.',
        heroCtaPrimary: 'استعرض الأعمال المختارة',
        heroCtaSecondary: 'تواصل معي',
        scrollText: 'مرر للأسفل',
        scrollAria: 'مرر للأسفل',
        worksKicker: 'معرض المواقع',
        worksTitle: 'أعمال مختارة',
        worksTitleAlt: '| Selected Works',
        worksDesc: 'المواقع التي صممتها وطورتها فعليًا — لكل مشروع رابط مباشر لزيارته الحيّة.',
        p1Title: 'شموخ الخليج المثالي — الإمداد بالوقود',
        p1Cat: 'مواقع الشركات • الخدمات اللوجستية',
        p1Desc: 'موقع مؤسسي لشركة خدمات لوجستية وإمداد بالديزل ومشتقات النفط في السعودية، مع تغطية لمناطق الخدمة ونموذج طلب عرض سعر متكامل عبر واتساب.',
        p2Title: 'العالم السحري — AR + AI للأطفال',
        p2Cat: 'المشاريع الإبداعية • تجارب تفاعلية',
        p2Desc: 'تجربة تعليمية تحوّل رسومات الأطفال إلى مجسمات ثلاثية الأبعاد تنبض بالحياة، بتقنيات الواقع المعزز والذكاء الاصطناعي، مع معرض بطاقات ولوحة تلوين تفاعلية.',
        p3Title: 'شموخ الخليج المثالي — توريد مواد البناء',
        p3Cat: 'المواقع التعريفية • الخدمات اللوجستية',
        p3Desc: 'موقع تعريفي وتجاري لتوريد مواد البناء بالجملة: عرض منتجات بفلترة ذكية، معرض صور شامل، وأسئلة شائعة، مع نموذج طلب عرض سعر يُرسل مباشرة عبر واتساب.',
        p4Title: 'شيخة للضيافة والفخامة — مكة المكرمة',
        p4Cat: 'الضيافة الفندقية • مكة المكرمة',
        p4Desc: 'موقع ضيافة فندقية قرب المسجد الحرام، يعرّف بالأجنحة والإطلالات ويوفر تجربة حجز تجريبية.',
        p5Title: 'هديل عبدالقوي — السيرة الذاتية الرقمية',
        p5Cat: 'السيرة الذاتية • الذكاء الاصطناعي',
        p5Desc: 'هوية رقمية وسيرة ذاتية تفاعلية تعرض نبذة هديل، مسارها الأكاديمي، مهاراتها ومشاريعها.',
        techResponsive: 'تصميم متجاوب',
        techCatalog: 'كتالوج منتجات',
        visitSite: 'زيارة الموقع',
        projectDetails: 'تفاصيل المشروع',
        modalGoal: 'الهدف من المشروع',
        modalHighlights: 'أبرز عناصر التصميم',
        modalTech: 'التقنيات المستخدمة',
        aboutKicker: 'نبذة',
        aboutTitle: 'من أنا',
        aboutTitleAlt: '| About',
        aboutText: 'أهتم بتصميم وتطوير المواقع الإلكترونية وحل المشكلات الرقمية. بحكم دراستي في الذكاء الاصطناعي، أبني واجهات تجمع بين جمال التفاصيل ووضوح الاستخدام، وأستمتع بتحويل الأفكار المعقدة إلى تجارب بسيطة وعملية يمكن للجميع استخدامها.',
        aboutRole: 'طالبة بكالوريوس الذكاء الاصطناعي • مبدعة في تصاميم الويب',
        aboutEdu: 'طالبة بكالوريوس الذكاء الاصطناعي',
        aboutSkill1: 'تصميم وتطوير المواقع الإلكترونية',
        aboutSkill2: 'حل المشكلات وتقديم حلول عملية',
        aboutSkill3: 'مبدعة في تصاميم الويب',
        value1Title: 'الإبداع البصري',
        value1Desc: 'هوية بصرية متماسكة ولمسات فاخرة',
        value2Title: 'تجربة المستخدم',
        value2Desc: 'سهولة استخدام ووضوح في كل تفصيلة',
        value3Title: 'تطوير نظيف',
        value3Desc: 'كود خفيف وسريع وقابل للتطوير',
        skillsKicker: 'الأدوات',
        skillsTitle: 'المهارات والأدوات',
        skillsTitleAlt: '| Skills',
        skillsDesc: 'تقنيات أؤكد استخدامها في مشاريعي — تُضاف وتُعدّل بسهولة من قائمة المهارات.',
        skillResponsive: 'تصميم متجاوب',
        skillBilingual: 'واجهات ثنائية اللغة',
        skillPerformance: 'تحسين الأداء',
        processKicker: 'المنهجية',
        processTitle: 'طريقة العمل',
        processTitleAlt: '| My Process',
        step1Title: 'فهم الفكرة', step1Desc: 'استماع دقيق لأهداف المشروع وجمهوره',
        step2Title: 'التخطيط', step2Desc: 'هيكلة المحتوى وخارطة الصفحات',
        step3Title: 'التصميم', step3Desc: 'هوية بصرية فاخرة وواجهات أنيقة',
        step4Title: 'التطوير', step4Desc: 'كود نظيف وتفاعلات سلسة',
        step5Title: 'الاختبار', step5Desc: 'تجربة على الأجهزة وإصلاح الملاحظات',
        step6Title: 'الإطلاق', step6Desc: 'نشر الموقع ومتابعة الأداء',
        contactKicker: 'تواصل',
        contactTitle: 'هل لديك فكرة تستحق أن ترى النور؟',
        contactDesc: 'أخبرني بفكرتك وسأعود إليك لمناقشة التصميم والتطوير.',
        contactWhatsApp: 'تواصل عبر واتساب',
        contactWhatsApp2: 'رقم الإدارة',
        contactEmail: 'البريد الإلكتروني',
        contactNote: 'البريد الإلكتروني: lcf277940@gmail.com',
        footerText: 'معرض أعمال يجمع بين الفخامة الملكية، والأناقة الراقية، والإبداع المتميز.',
        footerRights: '© 2026 — جميع الحقوق محفوظة',
        tickerLabel: 'المهارات والأدوات',
        ticker1: 'HTML5',
        ticker2: 'CSS3',
        ticker3: 'JavaScript',
        ticker4: 'Three.js / WebGL',
        ticker5: 'D3.js',
        ticker6: 'تصميم متجاوب',
        ticker7: 'Accessibility',
        ticker8: 'واجهات ثنائية اللغة',
        ticker9: 'تحسين الأداء',
        ticker10: 'WhatsApp API'
    },
    en: {
        title: 'My Digital Work | Interfaces That Turn Heads, Experiences That Leave a Mark',
        metaDescription: 'I design and build digital interfaces with a luxurious spirit: elegant identity, refined Arabic typography, gold-and-depth colors, and fast performance without heavy frameworks.',
        loaderText: 'PORTFOLIO',
        brandName: 'Portfolio',
        navHome: 'Home',
        navWorks: 'Selected Works',
        navDetails: 'Project Details',
        navAbout: 'About',
        navSkills: 'Skills',
        navProcess: 'Process',
        navContact: 'Contact',
        themeToggle: 'Toggle light & dark mode',
        langToggle: 'Switch language between Arabic and English',
        heroBadge: 'Creative Design • Luxury • Distinctive',
        heroTitle: 'My Digital Work',
        heroTitleAccent: 'Interfaces that turn heads... experiences that leave a mark',
        heroSubtitle: 'A curated portfolio of web design, creative development, and distinctive digital experiences.',
        heroQuote: 'I design and build digital interfaces with a luxurious spirit: an elegant visual identity, precise Arabic typography, colors that blend gold and depth, and fast performance without heavy frameworks — from the first line of code to web hosting.',
        heroCtaPrimary: 'View Selected Works',
        heroCtaSecondary: 'Get In Touch',
        scrollText: 'SCROLL',
        scrollAria: 'Scroll down',
        worksKicker: 'Portfolio',
        worksTitle: 'Selected Works',
        worksTitleAlt: '| أعمال مختارة',
        worksDesc: 'Websites I have actually designed and developed — every project links to its live site.',
        p1Title: 'Shomoukh Al-Khaleej — Fuel Supply',
        p1Cat: 'Corporate Sites • Logistics',
        p1Desc: 'A corporate site for a Saudi logistics and diesel supply company, featuring service coverage zones and a complete quote request form integrated with WhatsApp.',
        p2Title: 'The Magical World — AR + AI for Kids',
        p2Cat: 'Creative Projects • Interactive Experiences',
        p2Desc: 'An educational experience that turns children\'s drawings into living 3D models using Augmented Reality and AI, with a card gallery and an interactive coloring studio.',
        p3Title: 'Shomoukh Al-Khaleej — Building Materials',
        p3Cat: 'Landing & Catalog Sites • Logistics',
        p3Desc: 'A commercial site for wholesale building materials: product listings with smart filtering, a full image gallery, FAQs, and a quote form sent directly via WhatsApp.',
        p4Title: 'Sheikha Hospitality & Luxury — Makkah',
        p4Cat: 'Hospitality • Makkah',
        p4Desc: 'A hospitality website near the Grand Mosque, showcasing suites and views with a demo booking experience.',
        p5Title: 'Hadeel Abdulqawi — Digital CV',
        p5Cat: 'Digital CV • Artificial Intelligence',
        p5Desc: 'An interactive digital identity and CV presenting Hadeel’s profile, academic path, skills, and projects.',
        techResponsive: 'Responsive',
        techCatalog: 'Product Catalog',
        visitSite: 'Visit Site',
        projectDetails: 'Project Details',
        modalGoal: 'Project Goal',
        modalHighlights: 'Design Highlights',
        modalTech: 'Technologies Used',
        aboutKicker: 'Profile',
        aboutTitle: 'About Me',
        aboutTitleAlt: '| من أنا',
        aboutText: 'I care about designing and developing websites and solving digital problems. Through my studies in Artificial Intelligence, I build interfaces that balance beautiful detail with clear usability, and I enjoy turning complex ideas into simple, practical experiences anyone can use.',
        aboutRole: 'BSc Artificial Intelligence Student • Creative Web Designer',
        aboutEdu: 'BSc student in Artificial Intelligence',
        aboutSkill1: 'Web design & development',
        aboutSkill2: 'Problem solving & practical solutions',
        aboutSkill3: 'Creative in web design',
        value1Title: 'Visual Creativity',
        value1Desc: 'Cohesive identity with luxurious touches',
        value2Title: 'User Experience',
        value2Desc: 'Ease of use and clarity in every detail',
        value3Title: 'Clean Development',
        value3Desc: 'Lightweight, fast, scalable code',
        skillsKicker: 'Toolkit',
        skillsTitle: 'Skills & Tools',
        skillsTitleAlt: '| المهارات',
        skillsDesc: 'Technologies I confidently use in my projects — easy to extend or edit in one place.',
        skillResponsive: 'Responsive Design',
        skillBilingual: 'Bilingual Interfaces',
        skillPerformance: 'Performance Optimization',
        processKicker: 'Methodology',
        processTitle: 'My Process',
        processTitleAlt: '| طريقة العمل',
        step1Title: 'Discover', step1Desc: 'Listening closely to goals and audience',
        step2Title: 'Plan', step2Desc: 'Structuring content and page maps',
        step3Title: 'Design', step3Desc: 'Luxurious identity and elegant UI',
        step4Title: 'Develop', step4Desc: 'Clean code and smooth interactions',
        step5Title: 'Test', step5Desc: 'Device testing and refinements',
        step6Title: 'Launch', step6Desc: 'Deploy and monitor performance',
        contactKicker: 'Contact',
        contactTitle: 'Have an Idea Worth Bringing to Life?',
        contactDesc: 'Tell me about your idea and I will get back to discuss design and development.',
        contactWhatsApp: 'Contact via WhatsApp',
        contactWhatsApp2: 'Office line',
        contactEmail: 'Email',
        contactNote: 'Email: lcf277940@gmail.com',
        footerText: 'A portfolio that blends royal luxury, refined elegance, and creative excellence.',
        footerRights: '© 2026 — All rights reserved',
        tickerLabel: 'Skills & Tools',
        ticker1: 'HTML5',
        ticker2: 'CSS3',
        ticker3: 'JavaScript',
        ticker4: 'Three.js / WebGL',
        ticker5: 'D3.js',
        ticker6: 'Responsive Design',
        ticker7: 'Accessibility',
        ticker8: 'Bilingual Interfaces',
        ticker9: 'Performance Optimization',
        ticker10: 'WhatsApp API'
    }
};

/* ---------- التطبيق ---------- */
class RoyalPortfolio {
    constructor() {
        this.lang = localStorage.getItem('portfolio-lang') || 'ar';
        this.theme = localStorage.getItem('portfolio-theme') || 'dark';
        this.lastFocused = null;
        this.rafId = null;
        this.init();
    }

    init() {
        this.applyTheme(this.theme, false);
        this.applyLang(this.lang, false);
        this.bindHeader();
        this.bindLangToggle();
        this.bindThemeToggle();
        this.bindModal();
        this.bindScrollTop();
        this.bindReveal();
        this.bindTilt();
        this.bindLightbox();
        this.bindLoader();
        // الخلفية: شعار شفاف (حروف) — 3D معطل
        // window.addEventListener('DOMContentLoaded', () => this.initBackground());
        // if (document.readyState === 'complete') this.initBackground();
    }

    /* ----- اللغة ----- */
    applyLang(lang, persist = true) {
        this.lang = lang;
        const html = document.documentElement;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        if (persist) localStorage.setItem('portfolio-lang', lang);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.dataset.i18n;
            const value = I18N[lang][key];
            if (value == null) return;
            if (el.tagName === 'TITLE' || el.tagName === 'META') {
                el.setAttribute('content', value);
                if (el.tagName === 'TITLE') document.title = value;
            } else {
                el.textContent = value;
            }
        });
        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.dataset.i18nAria;
            if (I18N[lang][key]) el.setAttribute('aria-label', I18N[lang][key]);
        });

        // إعادة رسم النافذة التفصيلية المفتوحة باللغة الجديدة
        if (!document.getElementById('project-modal').hidden) {
            const active = document.querySelector('.modal-panel[data-project-id]');
            if (active) this.fillModal(Number(active.dataset.projectId));
        }
    }

    bindLangToggle() {
        const btn = document.getElementById('lang-toggle');
        if (!btn) return;
        btn.addEventListener('click', () => {
            this.applyLang(this.lang === 'ar' ? 'en' : 'ar');
        });
    }

    /* ----- الوضع الليلي / النهاري ----- */
    applyTheme(theme, persist = true) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        if (persist) localStorage.setItem('portfolio-theme', theme);
    }

    bindThemeToggle() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;
        btn.addEventListener('click', () => {
            this.applyTheme(this.theme === 'dark' ? 'light' : 'dark');
        });
    }

    /* ----- الترويسة والقائمة ----- */
    bindHeader() {
        const header = document.querySelector('.header');
        const toggle = document.getElementById('nav-toggle');
        const menu = document.getElementById('nav-menu');

        const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        const closeMenu = () => {
            menu.classList.remove('active');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        };

        toggle.addEventListener('click', () => {
            const open = menu.classList.toggle('active');
            toggle.classList.toggle('active', open);
            toggle.setAttribute('aria-expanded', String(open));
        });

        menu.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', closeMenu));

        document.addEventListener('click', (e) => {
            if (menu.classList.contains('active') && !menu.contains(e.target) && !toggle.contains(e.target)) {
                closeMenu();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('active')) closeMenu();
        });
    }

    /* ----- نافذة تفاصيل المشروع ----- */
    bindModal() {
        this.modal = document.getElementById('project-modal');

        document.querySelectorAll('[data-open-project]').forEach((btn) => {
            btn.addEventListener('click', () => {
                this.lastFocused = btn;
                this.openModal(Number(btn.dataset.openProject));
            });
        });

        this.modal.querySelectorAll('[data-close-modal]').forEach((el) => {
            el.addEventListener('click', () => this.closeModal());
        });

        document.addEventListener('keydown', (e) => {
            if (this.modal.hidden) return;
            if (e.key === 'Escape') this.closeModal();
            if (e.key === 'Tab') this.trapFocus(e);
        });
    }

    openModal(id) {
        this.fillModal(id);
        this.modal.hidden = false;
        document.body.style.overflow = 'hidden';
        this.modal.querySelector('.modal-close').focus();
    }

    closeModal() {
        this.modal.hidden = true;
        document.body.style.overflow = '';
        if (this.lastFocused) this.lastFocused.focus();
    }

    trapFocus(e) {
        const focusables = this.modal.querySelectorAll('button, a[href]');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }

    fillModal(id) {
        const p = PROJECTS.find((item) => item.id === id);
        if (!p) return;
        const isAr = this.lang === 'ar';
        const panel = this.modal.querySelector('.modal-panel');
        panel.dataset.projectId = String(p.id);

        const img = document.getElementById('modal-image');
        img.src = p.image;
        img.alt = (isAr ? p.titleAr : p.titleEn);

        document.getElementById('modal-category').textContent = isAr ? p.catAr : p.catEn;
        document.getElementById('modal-title').textContent = isAr ? p.titleAr : p.titleEn;
        document.getElementById('modal-desc').textContent = isAr ? p.descAr : p.descEn;
        document.getElementById('modal-goal').textContent = isAr ? p.goalAr : p.goalEn;

        const highlights = document.getElementById('modal-highlights');
        highlights.innerHTML = '';
        (isAr ? p.highlightsAr : p.highlightsEn).forEach((text) => {
            const li = document.createElement('li');
            li.textContent = text;
            highlights.appendChild(li);
        });

        const techWrap = document.getElementById('modal-tech');
        techWrap.innerHTML = '';
        p.tech.forEach((t) => {
            const span = document.createElement('span');
            span.className = 'tech-tag';
            span.textContent = t;
            techWrap.appendChild(span);
        });

        const link = document.getElementById('modal-link');
        link.href = p.liveUrl;
    }

    /* ----- زر العودة للأعلى ----- */
    bindScrollTop() {
        const btn = document.getElementById('scroll-top');
        if (!btn) return;
        window.addEventListener('scroll', () => {
            btn.classList.toggle('visible', window.scrollY > 600);
        }, { passive: true });
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* ----- ظهور العناصر عند التمرير ----- */
    bindReveal() {
        const els = document.querySelectorAll(
            '.section-header, .portfolio-card, .glass-card, .process-step, .skill-item'
        );
        if (!('IntersectionObserver' in window)) {
            els.forEach((el) => el.classList.add('reveal'));
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
        els.forEach((el) => {
            el.classList.add('reveal-element');
            io.observe(el);
        });
    }

    /* ----- تأثير 3D Tilt عند التمرير ---------- */
    bindTilt() {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const coarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;
        if (reduced || coarse) return;

        const selectors = '.portfolio-card, .skill-item, .process-step, .about-card';
        const cards = document.querySelectorAll(selectors);
        cards.forEach((card) => {
            card.addEventListener('pointerenter', () => card.classList.add('is-tilting'));
            card.addEventListener('pointermove', (e) => {
                const rect = card.getBoundingClientRect();
                const px = (e.clientX - rect.left) / rect.width;
                const py = (e.clientY - rect.top) / rect.height;
                const max = 9;
                const tiltY = (px - 0.5) * max * 2;
                const tiltX = -(py - 0.5) * max * 2;
                card.style.setProperty('--tilt-x', tiltX.toFixed(2) + 'deg');
                card.style.setProperty('--tilt-y', tiltY.toFixed(2) + 'deg');
                card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
                card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
                if (!card.classList.contains('is-tilting')) card.classList.add('is-tilting');
            });
            card.addEventListener('pointerleave', () => {
                card.classList.remove('is-tilting');
                card.style.removeProperty('--tilt-x');
                card.style.removeProperty('--tilt-y');
                card.style.removeProperty('--mx');
                card.style.removeProperty('--my');
            });
        });
    }

    /* ----- Lightbox لتكبير الصور ----- */
    bindLightbox() {
        const lb = document.getElementById('image-lightbox');
        if (!lb) return;
        const img = document.getElementById('lightbox-image');

        const open = (src) => {
            if (!src) return;
            img.src = src;
            lb.hidden = false;
            document.body.style.overflow = 'hidden';
        };
        const close = () => {
            lb.hidden = true;
            document.body.style.overflow = '';
            img.removeAttribute('src');
        };

        document.querySelectorAll('[data-lightbox]').forEach((el) => {
            el.addEventListener('click', () => open(el.dataset.lightbox));
        });

        const logoIcon = document.querySelector('.nav-logo .logo-icon');
        if (logoIcon) {
            logoIcon.style.cursor = 'pointer';
            logoIcon.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                open('hadeel1.png');
            });
        }

        lb.querySelectorAll('[data-close-lightbox]').forEach((el) => {
            el.addEventListener('click', close);
        });

        document.addEventListener('keydown', (e) => {
            if (lb.hidden) return;
            if (e.key === 'Escape') close();
        });
    }

    /* ----- شاشة التحميل ----- */
    bindLoader() {
        const loader = document.getElementById('loader');
        if (!loader) return;
        const hide = () => loader.classList.add('hidden');
        if (document.readyState === 'complete') {
            setTimeout(hide, 700);
        } else {
            window.addEventListener('load', () => setTimeout(hide, 700));
        }
        setTimeout(hide, 4000);
    }

    /* ----- الخلفية ثلاثية الأبعاد (Three.js) — Floating Code Symbols 3D ----- */
    initBackground() {
        const canvas = document.getElementById('three-canvas');
        if (!canvas || typeof THREE === 'undefined') return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.innerWidth < 768;

        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
        } catch (err) {
            console.warn('WebGL غير متاح — الخلفية ثلاثية الأبعاد معطلة.', err);
            canvas.style.display = 'none';
            return;
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x03061a, 0.01);
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 260);
        camera.position.set(0, 0, 52);

        const root = new THREE.Group();
        scene.add(root);

        /* إضاءة */
        const ambient = new THREE.AmbientLight(0xffffff, 0.45);
        scene.add(ambient);
        const dir = new THREE.DirectionalLight(0x60a5fa, 0.9);
        dir.position.set(20, 25, 30);
        scene.add(dir);
        const pl1 = new THREE.PointLight(0x22d3ee, 1.2, 90);
        pl1.position.set(-22, 10, 18);
        scene.add(pl1);
        const pl2 = new THREE.PointLight(0xa78bfa, 1.1, 90);
        pl2.position.set(24, -8, 16);
        scene.add(pl2);

        /* رموز برمجية */
        const symbols = ['{ }', '</>', '( )', '[ ]', ';', '=>', '!=', '&&', '||', '01', '#', '/* */', 'fn', 'const', 'let', '=>', '{ }', '</>'];

        const makeTexture = (text, color) => {
            const size = 256;
            const c = document.createElement('canvas');
            c.width = c.height = size;
            const ctx = c.getContext('2d');
            ctx.clearRect(0, 0, size, size);
            ctx.font = 'bold 96px "Courier New", monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 18;
            ctx.fillText(text, size / 2, size / 2);
            const tex = new THREE.CanvasTexture(c);
            return tex;
        };

        const colors = ['#22d3ee', '#a78bfa', '#60a5fa', '#34d399', '#f1f5f9', '#f472b6'];

        /* إنشاء planes للرموز */
        const symbolCount = isMobile ? 18 : 36;
        const symbolsMeshes = [];
        for (let i = 0; i < symbolCount; i++) {
            const text = symbols[Math.floor(Math.random() * symbols.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const tex = makeTexture(text, color);
            const size = 1.6 + Math.random() * 2.6; // medium to large
            const geo = new THREE.PlaneGeometry(size, size * 0.6);
            const mat = new THREE.MeshBasicMaterial({
                map: tex,
                transparent: true,
                opacity: 0.85,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            const mesh = new THREE.Mesh(geo, mat);
            const angle = (i / symbolCount) * Math.PI * 2;
            const radius = 14 + Math.random() * 20;
            const y = (Math.random() - 0.5) * 26;
            mesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius - 8);
            mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
            mesh.userData = {
                angle,
                radius,
                y,
                speed: 0.02 + Math.random() * 0.03,
                rotSpeedX: (Math.random() - 0.5) * 0.02,
                rotSpeedY: (Math.random() - 0.5) * 0.02,
                rotSpeedZ: (Math.random() - 0.5) * 0.015,
                phase: Math.random() * Math.PI * 2
            };
            root.add(mesh);
            symbolsMeshes.push(mesh);
        }

        /* particles (binary rain) */
        const pCount = isMobile ? 120 : 260;
        const pPos = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount; i++) {
            pPos[i * 3] = (Math.random() - 0.5) * 110;
            pPos[i * 3 + 1] = (Math.random() - 0.5) * 70;
            pPos[i * 3 + 2] = (Math.random() - 0.5) * 90;
        }
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        const particles = new THREE.Points(
            pGeo,
            new THREE.PointsMaterial({ color: 0x22d3ee, size: isMobile ? 0.06 : 0.08, transparent: true, opacity: 0.55, sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false })
        );
        root.add(particles);

        /* glows */
        const makeGlowTexture = (rgba) => {
            const size = 256;
            const c = document.createElement('canvas');
            c.width = c.height = size;
            const ctx = c.getContext('2d');
            const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            g.addColorStop(0, rgba);
            g.addColorStop(0.5, rgba.replace(/[\d.]+\)$/, '0.1)'));
            g.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, size, size);
            return new THREE.CanvasTexture(c);
        };
        const glowDefs = isMobile
            ? [
                { color: 'rgba(34,211,238,0.4)', x: -14, y: 10, z: -22, scale: 56 },
                { color: 'rgba(167,139,250,0.35)', x: 16, y: 6, z: -28, scale: 50 },
                { color: 'rgba(96,165,250,0.3)', x: 0, y: 14, z: -34, scale: 58 }
            ]
            : [
                { color: 'rgba(34,211,238,0.42)', x: -20, y: 12, z: -20, scale: 64 },
                { color: 'rgba(167,139,250,0.38)', x: 18, y: 8, z: -26, scale: 60 },
                { color: 'rgba(96,165,250,0.34)', x: 0, y: 18, z: -32, scale: 68 },
                { color: 'rgba(52,211,153,0.3)', x: -8, y: -8, z: -28, scale: 54 },
                { color: 'rgba(241,245,249,0.22)', x: 24, y: 4, z: -34, scale: 62 }
            ];
        const glows = glowDefs.map((g) => {
            const mat = new THREE.SpriteMaterial({ map: makeGlowTexture(g.color), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
            const sprite = new THREE.Sprite(mat);
            sprite.position.set(g.x, g.y, g.z);
            sprite.scale.set(g.scale, g.scale, 1);
            root.add(sprite);
            return { sprite, baseX: g.x, baseY: g.y, scale: g.scale, phase: Math.random() * Math.PI * 2 };
        });

        let targetX = 0, targetY = 0, curX = 0, curY = 0;
        window.addEventListener('pointermove', (e) => {
            targetX = (e.clientX / window.innerWidth - 0.5) * 2;
            targetY = (e.clientY / window.innerHeight - 0.5) * 2;
        }, { passive: true });

        let running = true;
        document.addEventListener('visibilitychange', () => {
            running = !document.hidden;
            if (running) this.loop();
        });

        const clock = new THREE.Clock();
        this.loop = () => {
            if (!running) return;
            this.rafId = requestAnimationFrame(this.loop);
            const t = clock.getElapsedTime();

            curX += (targetX - curX) * 0.03;
            curY += (targetY - curY) * 0.03;

            if (!reduceMotion) {
                symbolsMeshes.forEach((m, idx) => {
                    const ud = m.userData;
                    ud.angle += ud.speed * 0.016;
                    m.position.x = Math.cos(ud.angle) * ud.radius;
                    m.position.z = Math.sin(ud.angle) * ud.radius - 8;
                    m.position.y = ud.y + Math.sin(t * 0.5 + ud.phase) * 1.6;
                    m.rotation.x += ud.rotSpeedX;
                    m.rotation.y += ud.rotSpeedY;
                    m.rotation.z += ud.rotSpeedZ;
                });

                particles.rotation.y = t * 0.012 + curX * 0.03;
                particles.rotation.x = Math.sin(t * 0.08) * 0.04;

                glows.forEach((g, i) => {
                    const sc = g.scale + Math.sin(t * 0.5 + g.phase) * 6;
                    g.sprite.scale.set(sc, sc, 1);
                    g.sprite.position.y = g.baseY + Math.sin(t * 0.35 + g.phase) * 3;
                    g.sprite.position.x = g.baseX + Math.sin(t * 0.2 + i) * 2;
                });

                pl1.position.x = -22 + Math.sin(t * 0.3) * 5;
                pl2.position.x = 24 + Math.cos(t * 0.35) * 5;

                root.rotation.y = curX * 0.16;
                root.rotation.x = curY * 0.1;
            }
            renderer.render(scene, camera);
        };
        this.loop();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new RoyalPortfolio());
