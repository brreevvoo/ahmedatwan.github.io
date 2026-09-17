/* ---------- Mobile nav ---------- */
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn?.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

/* ---------- Scroll reveal ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ---------- Certificate lightbox ---------- */
const lightbox = document.createElement('div');
lightbox.className = 'cert-lightbox';
lightbox.innerHTML = '<button class="cert-lightbox-close" aria-label="Close">&times;</button><img alt="" />';
document.body.appendChild(lightbox);
const lightboxImg = lightbox.querySelector('img');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('open');
}
function closeLightbox() {
  lightbox.classList.remove('open');
}

document.querySelectorAll('.cert-thumb img').forEach(img => {
  img.addEventListener('click', () => openLightbox(img.src, img.alt));
});
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target.classList.contains('cert-lightbox-close')) {
    closeLightbox();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

/* ---------- Theme (dark default, light optional) ---------- */
const THEME_KEY = 'ahmed-portfolio-theme';
const themeBtn = document.getElementById('themeBtn');

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  applyTheme(saved === 'light' ? 'light' : 'dark');
}

themeBtn?.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  applyTheme(current === 'light' ? 'dark' : 'light');
});

/* ---------- i18n: English / Modern Standard Arabic / Egyptian Arabic ---------- */
const LANG_KEY = 'ahmed-portfolio-lang';

const translations = {
  en: {
    "meta.title": "Ahmed Atwan | Portfolio",
    "meta.description": "Ahmed Atwan — AI Specialist, Arabic Language Reviewer, Creative Technologist, and Multimedia Creator.",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.certifications": "Certifications",
    "nav.licenses": "Licenses",
    "nav.contact": "Contact",
    "hero.eyebrow": "Personal Website • Portfolio • Contact",
    "hero.title.before": "Building",
    "hero.title.highlight": "AI-powered",
    "hero.title.after": "work with a creative edge.",
    "hero.lead": "I’m Ahmed Atwan, an AI specialist, Arabic language reviewer, and multimedia creator based in Cairo. I combine evaluation quality, language sense, and creative production to build useful digital work.",
    "hero.ctaPrimary": "Let’s Work Together",
    "hero.ctaSecondary": "Download CV",
    "hero.stat1.title": "AI & Arabic",
    "hero.stat1.desc": "Training, reviewing, evaluation",
    "hero.stat2.title": "Creative Media",
    "hero.stat2.desc": "Audio, video, content creation",
    "hero.stat3.title": "Custom Systems",
    "hero.stat3.desc": "Smart software for real work",
    "hero.floating1": "Arabic Language Specialist",
    "hero.floating2": "AI Reviewer • Creative Technologist",
    "about.tag": "About",
    "about.heading": "Professional profile",
    "about.p1": "I work across AI quality, Arabic language evaluation, audio production, and digital media. My background in Drama & Theatre Criticism gives me a creative perspective that helps me write, review, and build with more attention to tone, clarity, and audience impact.",
    "about.p2": "I’m especially interested in projects where technology meets language, content, and user experience.",
    "about.location.label": "Location",
    "about.location.value": "Cairo, Egypt",
    "about.focus.label": "Focus",
    "about.focus.value": "AI training, Arabic review, multimedia",
    "about.education.label": "Education",
    "about.education.value": "Ain Shams University — Drama & Theatre Criticism",
    "about.languages.label": "Languages",
    "about.languages.value": "Arabic, English",
    "about.military.label": "Military Status",
    "about.military.value": "Exempted (certificate available)",
    "experience.tag": "Experience",
    "experience.heading": "Selected roles",
    "experience.outlier.date": "April 2025 – Present",
    "experience.outlier.desc": "Since joining Outlier in April 2025, I've worked across multiple AI training, evaluation, and data-annotation projects, taking on progressively higher levels of responsibility. I started with Arabic voice-based data and conversational annotation, advancing through several reviewer and quality-control levels — from reviewing user-side contributions, to reviewing assistant-side outputs, up to a senior level responsible for reviewing complete tasks and transcripts. I then moved into AI response evaluation against structured quality criteria, followed by several multilingual and voice-related AI data projects across Arabic and English. Most recently, I've been working on computer-vision data annotation — capturing images of objects and applying structured spatial annotations, including virtual bounding regions and their dimensions, to help AI models better understand object size and spatial relationships.",
    "experience.outlier.li1": "AI training & data annotation",
    "experience.outlier.li2": "AI response evaluation",
    "experience.outlier.li3": "Quality assurance & multi-level review",
    "experience.outlier.li4": "Speech & voice data annotation",
    "experience.outlier.li5": "Computer vision & spatial/bounding-region annotation",
    "experience.outlier.progression": "Career path: AI Data Contributor → Reviewer → Advanced Reviewer → Senior/Full-Task Reviewer → AI Evaluation & Multimodal Data Specialist",
    "experience.babel.title": "Babel Audio — Arabic Voice Data Specialist",
    "experience.babel.date": "2025 – Present",
    "experience.babel.desc": "Alongside my AI data work, I've contributed to multiple voice-focused projects at Babel Audio, specializing in Egyptian Arabic (Masri) voice data and audio annotation. I've worked across four different voice-related assignments, each focused on a different type of conversational or audio data — recording and contributing to Egyptian Arabic speech for advice-oriented scenarios, emotional expression, general conversational speech, and background-noise annotation. My current work focuses on identifying and tagging background noises within audio recordings, helping create structured audio data that improves AI systems' understanding of real-world acoustic environments.",
    "experience.babel.li1": "Egyptian Arabic (Masri) voice data",
    "experience.babel.li2": "Voice acting & speech recording",
    "experience.babel.li3": "Conversational & emotional speech data",
    "experience.babel.li4": "Advice-oriented & general conversational speech",
    "experience.babel.li5": "Background noise identification & tagging",
    "experience.babel.li6": "Audio annotation & quality control",
    "experience.vodafone.date": "2024",
    "experience.vodafone.desc": "Started in customer service and advanced to technical support through strong problem-solving and communication skills, later reaching Task Manager level — reviewing agents' work in technical support for home internet and home wireless services. Won the WOW Call Award for Best Call of the Month across all of Vodafone Egypt in May 2024.",
    "experience.hadath.title": "Al-Hadath Al-Youm — Video Editor",
    "experience.hadath.date": "Project-based",
    "experience.hadath.desc": "Worked as a video editor with Al-Hadath Al-Youm channel at the Egyptian Media Production City, editing video content and supporting production teams to improve storytelling and overall quality.",
    "projects.tag": "Projects",
    "projects.heading": "Featured work",
    "projects.p1.badge": "Featured",
    "projects.p1.title": "Silver Shop Management System",
    "projects.p1.desc": "A custom business system for organizing and managing a silver shop, including inventory flow, sales, purchases, pricing, and operational structure. Built as a real-world software project with AI-assisted development.",
    "projects.p1.li1": "Inventory organization",
    "projects.p1.li2": "Sales and purchase workflow",
    "projects.p1.li3": "Financial tracking structure",
    "projects.p1.li4": "Practical retail-focused design",
    "projects.p2.badge": "AI",
    "projects.p2.title": "Arabic AI Training & Evaluation",
    "projects.p2.desc": "Evaluated model responses, reviewed task quality, and improved Arabic-language outputs for tone, relevance, correctness, and cultural fit.",
    "projects.p2.li1": "Response comparison",
    "projects.p2.li2": "Prompt quality review",
    "projects.p2.li3": "Arabic localization quality",
    "projects.p2.li4": "Reviewer-level feedback",
    "projects.p3.badge": "Media",
    "projects.p3.title": "Audio & Video Production",
    "projects.p3.desc": "Long-term hands-on work in sound editing, audio enhancement, video editing, and YouTube content creation.",
    "projects.p3.li3": "Content workflow and editing",
    "projects.p3.li4": "Creative storytelling support",
    "skills.tag": "Skills",
    "skills.heading": "What I work with",
    "skills.chip1": "AI Response Evaluation",
    "skills.chip2": "Arabic Language Review",
    "skills.chip3": "Prompt Quality Analysis",
    "skills.chip4": "Audio Editing",
    "skills.chip5": "Sound Enhancement",
    "skills.chip6": "Content Production",
    "skills.chip7": "Technical Support",
    "certs.tag": "Certifications",
    "certs.heading": "Certificates & credentials",
    "certs.issuer": "IBM",
    "certs.via": "via Coursera",
    "certs.verify": "Verify certificate",
    "contact.tag": "Contact",
    "contact.heading": "Let’s build something useful.",
    "contact.desc": "Open to freelance work, AI-related roles, review tasks, media production, and custom software projects.",
    "contact.linkedin": "LinkedIn Profile",
    "licenses.tag": "Credentials",
    "licenses.heading": "Professional licensing",
    "licenses.card1.title": "Professional Practice License",
    "licenses.card1.issuer": "Ministry of Manpower — Egypt",
    "licenses.card2.title": "Skill Level Assessment Certificate",
    "licenses.card2.issuer": "Ministry of Manpower — Egypt",
    "licenses.jobtitle.label": "Job Title",
    "licenses.jobtitle.value": "IT E-Services Business Observer",
    "licenses.classification.label": "Classification",
    "licenses.classification.value": "Skilled Worker",
    "footer.rights": "© 2026 Ahmed Atwan. All rights reserved.",
    "footer.builtWith": "Designed and built end-to-end by Ahmed Atwan using AI.",
    "footer.backToTop": "Back to top"
  },
  ar: {
    "meta.title": "أحمد عطوان | الموقع الشخصي",
    "meta.description": "أحمد عطوان — أخصائي ذكاء اصطناعي، ومراجع لغوي للغة العربية، وتقني مبدع، وصانع محتوى متعدد الوسائط.",
    "nav.about": "نبذة",
    "nav.experience": "الخبرة",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.certifications": "الشهادات",
    "nav.licenses": "التراخيص",
    "nav.contact": "تواصل",
    "hero.eyebrow": "الموقع الشخصي • السيرة الذاتية • التواصل",
    "hero.title.before": "أبني",
    "hero.title.highlight": "أعمالاً مدعومة بالذكاء الاصطناعي",
    "hero.title.after": "بلمسة إبداعية.",
    "hero.lead": "أنا أحمد عطوان، أخصائي ذكاء اصطناعي، ومراجع لغوي للغة العربية، وصانع محتوى متعدد الوسائط، أعمل من القاهرة. أجمع بين جودة التقييم، والحس اللغوي، والإنتاج الإبداعي لبناء أعمال رقمية مفيدة.",
    "hero.ctaPrimary": "لنعمل معاً",
    "hero.ctaSecondary": "تحميل السيرة الذاتية",
    "hero.stat1.title": "الذكاء الاصطناعي والعربية",
    "hero.stat1.desc": "تدريب، مراجعة، تقييم",
    "hero.stat2.title": "الوسائط الإبداعية",
    "hero.stat2.desc": "صوت، فيديو، صناعة محتوى",
    "hero.stat3.title": "أنظمة مخصصة",
    "hero.stat3.desc": "برمجيات ذكية لأعمال حقيقية",
    "hero.floating1": "أخصائي اللغة العربية",
    "hero.floating2": "مراجع ذكاء اصطناعي • تقني مبدع",
    "about.tag": "نبذة",
    "about.heading": "الملف المهني",
    "about.p1": "أعمل في مجالات جودة الذكاء الاصطناعي، وتقييم اللغة العربية، والإنتاج الصوتي، والوسائط الرقمية. خلفيتي في نقد الدراما والمسرح تمنحني منظوراً إبداعياً يساعدني على الكتابة والمراجعة والبناء بعناية أكبر بالنبرة والوضوح وتأثير الجمهور.",
    "about.p2": "أنا مهتم بشكل خاص بالمشاريع التي تلتقي فيها التقنية باللغة والمحتوى وتجربة المستخدم.",
    "about.location.label": "الموقع",
    "about.location.value": "القاهرة، مصر",
    "about.focus.label": "التخصص",
    "about.focus.value": "تدريب الذكاء الاصطناعي، مراجعة عربية، وسائط متعددة",
    "about.education.label": "التعليم",
    "about.education.value": "جامعة عين شمس — نقد الدراما والمسرح",
    "about.languages.label": "اللغات",
    "about.languages.value": "العربية، الإنجليزية",
    "about.military.label": "الموقف من التجنيد",
    "about.military.value": "إعفاء نهائي (شهادة الإعفاء متوفرة)",
    "experience.tag": "الخبرة",
    "experience.heading": "أبرز الأدوار الوظيفية",
    "experience.outlier.date": "أبريل 2025 – حتى الآن",
    "experience.outlier.desc": "منذ انضمامي إلى Outlier في أبريل 2025، عملت على عدة مشاريع في تدريب وتقييم الذكاء الاصطناعي وتوسيم البيانات، مع تحمّل مسؤوليات أكبر تدريجياً. بدأت بالعمل على بيانات صوتية عربية وتوسيم المحادثات، وتدرّجت عبر عدة مستويات من المراجعة وضبط الجودة؛ بدءاً من مراجعة مساهمات المستخدم، مروراً بمراجعة مخرجات المساعد، ووصولاً إلى مستوى مراجعة كبيرة مسؤولة عن المهام والنصوص الكاملة. بعد ذلك انتقلت إلى تقييم استجابات الذكاء الاصطناعي وفق معايير جودة محددة، ثم عملت على عدة مشاريع بيانات صوتية ومتعددة اللغات بالعربية والإنجليزية. ومؤخراً، أعمل على توسيم بيانات الرؤية الحاسوبية، حيث ألتقط صوراً لعناصر مختلفة وأطبّق توسيمات مكانية دقيقة — تشمل تحديد مناطق إحاطة افتراضية وأبعادها — لمساعدة نماذج الذكاء الاصطناعي على فهم حجم الأجسام وعلاقاتها المكانية بشكل أفضل.",
    "experience.outlier.li1": "تدريب الذكاء الاصطناعي وتوسيم البيانات",
    "experience.outlier.li2": "تقييم استجابات الذكاء الاصطناعي",
    "experience.outlier.li3": "ضبط الجودة والمراجعة متعددة المستويات",
    "experience.outlier.li4": "توسيم بيانات الصوت والمحادثات",
    "experience.outlier.li5": "توسيم بيانات الرؤية الحاسوبية والتوسيم المكاني",
    "experience.outlier.progression": "المسار الوظيفي: مساهم بيانات ذكاء اصطناعي ← مراجع ← مراجع متقدم ← مراجع كبير/مسؤول عن المهام الكاملة ← أخصائي تقييم ذكاء اصطناعي وبيانات متعددة الوسائط",
    "experience.babel.title": "Babel Audio — أخصائي بيانات صوتية باللهجة المصرية",
    "experience.babel.date": "2025 – حتى الآن",
    "experience.babel.desc": "إلى جانب عملي في بيانات الذكاء الاصطناعي، ساهمت في عدة مشاريع صوتية لدى Babel Audio، متخصصاً في بيانات الصوت باللهجة المصرية وتوسيم البيانات الصوتية. عملت على أربع مهام صوتية مختلفة، تركّز كل منها على نوع مختلف من البيانات الصوتية أو الحوارية — من تسجيل كلام باللهجة المصرية في سيناريوهات النصيحة، والتعبير العاطفي، والحديث العام، وصولاً إلى توسيم الضوضاء الخلفية. يتركز عملي الحالي على تحديد ووسم الضوضاء الخلفية داخل التسجيلات الصوتية، للمساعدة في إنشاء بيانات صوتية منظمة تُستخدم لتحسين فهم أنظمة الذكاء الاصطناعي للبيئات الصوتية الواقعية.",
    "experience.babel.li1": "بيانات صوتية باللهجة المصرية",
    "experience.babel.li2": "التمثيل الصوتي وتسجيل الكلام",
    "experience.babel.li3": "بيانات حوارية وعاطفية",
    "experience.babel.li4": "كلام نصائحي وحديث عام",
    "experience.babel.li5": "تحديد ووسم الضوضاء الخلفية",
    "experience.babel.li6": "توسيم الصوت وضبط الجودة",
    "experience.vodafone.date": "2024",
    "experience.vodafone.desc": "بدأت في خدمة العملاء ثم تطورت إلى الدعم الفني بفضل مهارات قوية في حل المشكلات والتواصل، ووصلت لاحقاً إلى مستوى Task Manager — حيث أراجع أداء موظفي الدعم الفني الخاص بخدمات الإنترنت المنزلي والهوم واير لس. حصلت على جائزة WOW Call لأفضل مكالمة في الشهر على مستوى فودافون مصر بالكامل في مايو 2024.",
    "experience.hadath.title": "الحدث اليوم — مونتير فيديو",
    "experience.hadath.date": "عمل مشاريعي",
    "experience.hadath.desc": "عملت مونتير فيديو مع قناة الحدث اليوم في مدينة الإنتاج الإعلامي، حيث قمت بمونتاج محتوى الفيديو ودعم فرق الإنتاج لتحسين السرد وجودة العمل.",
    "projects.tag": "المشاريع",
    "projects.heading": "أعمال مميزة",
    "projects.p1.badge": "مميز",
    "projects.p1.title": "نظام إدارة محل مجوهرات فضة",
    "projects.p1.desc": "نظام أعمال مخصص لتنظيم وإدارة محل فضة، يشمل حركة المخزون والمبيعات والمشتريات والتسعير والهيكل التشغيلي. تم بناؤه كمشروع برمجي واقعي بمساعدة الذكاء الاصطناعي في التطوير.",
    "projects.p1.li1": "تنظيم المخزون",
    "projects.p1.li2": "سير عمليات البيع والشراء",
    "projects.p1.li3": "هيكل تتبع مالي",
    "projects.p1.li4": "تصميم عملي يركز على البيع بالتجزئة",
    "projects.p2.badge": "ذكاء اصطناعي",
    "projects.p2.title": "تدريب وتقييم الذكاء الاصطناعي بالعربية",
    "projects.p2.desc": "قمت بتقييم استجابات النماذج، ومراجعة جودة المهام، وتحسين المخرجات باللغة العربية من حيث النبرة والملاءمة والصحة والتوافق الثقافي.",
    "projects.p2.li1": "مقارنة الاستجابات",
    "projects.p2.li2": "مراجعة جودة الأوامر",
    "projects.p2.li3": "جودة التعريب",
    "projects.p2.li4": "ملاحظات على مستوى المراجع",
    "projects.p3.badge": "وسائط",
    "projects.p3.title": "إنتاج الصوت والفيديو",
    "projects.p3.desc": "خبرة طويلة وعملية في مونتاج الصوت وتحسينه، ومونتاج الفيديو، وصناعة محتوى يوتيوب.",
    "projects.p3.li3": "سير عمل المحتوى والمونتاج",
    "projects.p3.li4": "دعم السرد الإبداعي",
    "skills.tag": "المهارات",
    "skills.heading": "أدوات ومهارات أعمل بها",
    "skills.chip1": "تقييم استجابات الذكاء الاصطناعي",
    "skills.chip2": "مراجعة اللغة العربية",
    "skills.chip3": "تحليل جودة الأوامر",
    "skills.chip4": "مونتاج الصوت",
    "skills.chip5": "تحسين الصوت",
    "skills.chip6": "إنتاج المحتوى",
    "skills.chip7": "الدعم الفني",
    "certs.tag": "الشهادات",
    "certs.heading": "الشهادات والاعتمادات",
    "certs.issuer": "IBM",
    "certs.via": "عبر Coursera",
    "certs.verify": "التحقق من الشهادة",
    "contact.tag": "تواصل",
    "contact.heading": "لنبنِ شيئاً مفيداً.",
    "contact.desc": "منفتح على العمل الحر، والوظائف المتعلقة بالذكاء الاصطناعي، ومهام المراجعة، وإنتاج الوسائط، والمشاريع البرمجية المخصصة.",
    "contact.linkedin": "الملف الشخصي على لينكدإن",
    "licenses.tag": "الاعتماد المهني",
    "licenses.heading": "التراخيص والاعتمادات المهنية",
    "licenses.card1.title": "كارنيه مزاولة المهنة",
    "licenses.card1.issuer": "وزارة العمل — جمهورية مصر العربية",
    "licenses.card2.title": "شهادة قياس مستوى المهارة",
    "licenses.card2.issuer": "وزارة العمل — جمهورية مصر العربية",
    "licenses.jobtitle.label": "المسمى الوظيفي",
    "licenses.jobtitle.value": "ملاحظ أعمال الخدمات الإلكترونية لتكنولوجيا المعلومات",
    "licenses.classification.label": "التصنيف",
    "licenses.classification.value": "عامل ماهر",
    "footer.rights": "© 2026 أحمد عطوان. جميع الحقوق محفوظة.",
    "footer.builtWith": "تصميم وبناء الموقع بالكامل بواسطة أحمد عطوان باستخدام الذكاء الاصطناعي.",
    "footer.backToTop": "العودة إلى الأعلى"
  },
  "ar-eg": {
    "meta.title": "أحمد عطوان | الموقع الشخصي",
    "meta.description": "أحمد عطوان — متخصص ذكاء اصطناعي، ومراجع لغوي للعربي، وتكنولوجي مبدع، وبيعمل محتوى ميديا.",
    "nav.about": "نبذة عني",
    "nav.experience": "خبراتي",
    "nav.projects": "المشاريع بتاعتي",
    "nav.skills": "المهارات",
    "nav.certifications": "الشهادات",
    "nav.licenses": "الرخص",
    "nav.contact": "كلمني",
    "hero.eyebrow": "الموقع الشخصي • السيرة الذاتية • التواصل",
    "hero.title.before": "ببني",
    "hero.title.highlight": "شغل مدعوم بالذكاء الاصطناعي",
    "hero.title.after": "بلمسة إبداعية.",
    "hero.lead": "أنا أحمد عطوان، متخصص ذكاء اصطناعي ومراجع لغوي للعربي، وبعمل محتوى ميديا، ومقيم في القاهرة. بجمع بين جودة المراجعة والحس اللغوي والإنتاج الإبداعي عشان أطلع شغل رقمي مفيد.",
    "hero.ctaPrimary": "يلا نشتغل مع بعض",
    "hero.ctaSecondary": "نزّل الـ CV",
    "hero.stat1.title": "الذكاء الاصطناعي والعربي",
    "hero.stat1.desc": "تدريب ومراجعة وتقييم",
    "hero.stat2.title": "الميديا والإبداع",
    "hero.stat2.desc": "صوت وفيديو وصناعة محتوى",
    "hero.stat3.title": "سيستمز مخصوصة",
    "hero.stat3.desc": "برامج ذكية لشغل حقيقي",
    "hero.floating1": "متخصص لغة عربي",
    "hero.floating2": "مراجع ذكاء اصطناعي • تكنولوجي مبدع",
    "about.tag": "نبذة عني",
    "about.heading": "بروفايلي المهني",
    "about.p1": "بشتغل في جودة الذكاء الاصطناعي، وتقييم اللغة العربية، والإنتاج الصوتي، والميديا الرقمية. خلفيتي في نقد الدراما والمسرح بتدّيني نظرة إبداعية بتساعدني إني أكتب وأراجع وأبني شغل بانتباه أكتر للنبرة والوضوح وتأثيره على اللي هيشوفه.",
    "about.p2": "بحب جداً المشاريع اللي فيها التكنولوجيا بتقابل اللغة والمحتوى وتجربة المستخدم.",
    "about.location.label": "المكان",
    "about.location.value": "القاهرة، مصر",
    "about.focus.label": "الشغل بتاعي",
    "about.focus.value": "تدريب الذكاء الاصطناعي، مراجعة عربي، ميديا",
    "about.education.label": "التعليم",
    "about.education.value": "جامعة عين شمس — دراما ونقد مسرحي",
    "about.languages.label": "اللغات",
    "about.languages.value": "عربي، إنجليزي",
    "about.military.label": "الموقف من التجنيد",
    "about.military.value": "إعفاء نهائي (معايا شهادة الإعفاء)",
    "experience.tag": "خبراتي",
    "experience.heading": "شغلانات مهمة اشتغلتها",
    "experience.outlier.date": "أبريل 2025 – لحد دلوقتي",
    "experience.outlier.desc": "من أبريل 2025، أنا شغال على مشاريع كتير في تدريب وتقييم الذكاء الاصطناعي وتوسيم البيانات، ومسؤولياتي بتكبر بالتدريج. بدأت بشغل بيانات صوت عربي وتوسيم محادثات، وطلعت خطوة خطوة في مستويات مراجعة وضبط جودة مختلفة — من مراجعة كلام اليوزر، لمراجعة ردود الأسيستنت، لحد ما وصلت لمستوى مراجعة كبيرة مسؤولة عن المهام والترانسكريبت بالكامل. بعدين اتحولت لتقييم ردود الذكاء الاصطناعي على أساس معايير جودة واضحة، وبعد كده اشتغلت في كذا مشروع بيانات صوت ولغات متعددة بالعربي والإنجليزي. وآخر حاجة، بقيت بشتغل في توسيم بيانات الرؤية الحاسوبية، بلتقط صور لحاجات مختلفة وباعمل توسيم مكاني دقيق — يعني تحديد مناطق إحاطة افتراضية وأبعادها — عشان أساعد الموديلات تفهم حجم الحاجات وعلاقتها المكانية أحسن.",
    "experience.outlier.li1": "تدريب الذكاء الاصطناعي وتوسيم البيانات",
    "experience.outlier.li2": "تقييم ردود الذكاء الاصطناعي",
    "experience.outlier.li3": "ضبط الجودة ومراجعة متعددة المستويات",
    "experience.outlier.li4": "توسيم بيانات الصوت والمحادثات",
    "experience.outlier.li5": "توسيم بيانات الرؤية الحاسوبية والتوسيم المكاني",
    "experience.outlier.progression": "المسار: مساهم بيانات ← مراجع ← مراجع متقدم ← مراجع كبير للمهام الكاملة ← أخصائي تقييم ذكاء اصطناعي وبيانات متعددة الوسائط",
    "experience.babel.title": "Babel Audio — متخصص بيانات صوت مصري",
    "experience.babel.date": "2025 – لحد دلوقتي",
    "experience.babel.desc": "جنب شغلي في بيانات الذكاء الاصطناعي، أنا شغال في كذا مشروع صوت مع Babel Audio، متخصص في بيانات الصوت باللهجة المصرية وتوسيم الصوت. اشتغلت في أربع مهام صوت مختلفة، كل واحدة فيها نوع مختلف من الكلام أو البيانات الصوتية — سجّلت كلام مصري في مواقف نصايح، وتعبير عن مشاعر، وكلام عادي، ولحد توسيم الضوضاء اللي في الخلفية. دلوقتي شغلي الأساسي إني أحدد وأوسم الضوضاء اللي في خلفية التسجيلات، عشان نعمل بيانات صوت منظمة تساعد الذكاء الاصطناعي يفهم البيئة الصوتية الحقيقية أحسن.",
    "experience.babel.li1": "بيانات صوت باللهجة المصرية",
    "experience.babel.li2": "تمثيل صوتي وتسجيل كلام",
    "experience.babel.li3": "بيانات كلام حواري وعاطفي",
    "experience.babel.li4": "كلام نصايح وكلام عادي",
    "experience.babel.li5": "تحديد وتوسيم الضوضاء في الخلفية",
    "experience.babel.li6": "توسيم الصوت وضبط الجودة",
    "experience.vodafone.date": "2024",
    "experience.vodafone.desc": "بدأت في خدمة العملاء وبعدين اتطورت للدعم الفني بفضل مهارات حل المشاكل والتواصل بتاعتي، ووصلت بعدين لمستوى Task Manager — بكون براجع شغل الإيجينتس في الدعم الفني بتاع الإنترنت المنزلي والهوم واير لس. وكسبت جايزة WOW Call لأحسن مكالمة في الشهر على مستوى فودافون مصر كلها في مايو 2024.",
    "experience.hadath.title": "الحدث اليوم — مونتير فيديو",
    "experience.hadath.date": "شغل بروجيكتس",
    "experience.hadath.desc": "اشتغلت مونتير فيديو مع قناة الحدث اليوم في مدينة الإنتاج الإعلامي، بعمل مونتاج لمحتوى الفيديو وبدعم فريق الإنتاج عشان الشغل يطلع أحسن.",
    "projects.tag": "المشاريع بتاعتي",
    "projects.heading": "شغل مميز",
    "projects.p1.badge": "مميز",
    "projects.p1.title": "برنامج إدارة محل فضة",
    "projects.p1.desc": "برنامج مخصوص لتنظيم وإدارة محل فضة، وبيغطي حركة المخزون والبيع والشراء والتسعير وتنظيم الشغل. اتعمل كمشروع حقيقي بمساعدة الذكاء الاصطناعي في التطوير.",
    "projects.p1.li1": "تنظيم المخزون",
    "projects.p1.li2": "خطوات البيع والشراء",
    "projects.p1.li3": "متابعة الحسابات المالية",
    "projects.p1.li4": "تصميم عملي مركّز على البيع",
    "projects.p2.badge": "ذكاء اصطناعي",
    "projects.p2.title": "تدريب وتقييم الذكاء الاصطناعي بالعربي",
    "projects.p2.desc": "قيّمت ردود الموديلات، وراجعت جودة المهام، وحسّنت المخرجات بالعربي من ناحية النبرة والملاءمة والصحة والتوافق الثقافي.",
    "projects.p2.li1": "مقارنة الردود",
    "projects.p2.li2": "مراجعة جودة البرومبت",
    "projects.p2.li3": "جودة الترجمة والتعريب",
    "projects.p2.li4": "فيدباك بمستوى المراجع",
    "projects.p3.badge": "ميديا",
    "projects.p3.title": "إنتاج صوت وفيديو",
    "projects.p3.desc": "خبرة طويلة وعملية في مونتاج الصوت وتحسينه، ومونتاج الفيديو، وعمل محتوى يوتيوب.",
    "projects.p3.li3": "خطوات شغل المحتوى والمونتاج",
    "projects.p3.li4": "دعم الحكي الإبداعي",
    "skills.tag": "المهارات",
    "skills.heading": "أنا بشتغل بإيه",
    "skills.chip1": "تقييم ردود الذكاء الاصطناعي",
    "skills.chip2": "مراجعة اللغة العربي",
    "skills.chip3": "تحليل جودة البرومبت",
    "skills.chip4": "مونتاج صوت",
    "skills.chip5": "تحسين الصوت",
    "skills.chip6": "عمل محتوى",
    "skills.chip7": "الدعم الفني",
    "certs.tag": "الشهادات",
    "certs.heading": "الشهادات بتاعتي",
    "certs.issuer": "IBM",
    "certs.via": "عبر Coursera",
    "certs.verify": "تأكد من الشهادة",
    "contact.tag": "كلمني",
    "contact.heading": "يلا نعمل حاجة مفيدة.",
    "contact.desc": "متاح للفريلانس، والشغل المتعلق بالذكاء الاصطناعي، ومهام المراجعة، وإنتاج الميديا، والمشاريع البرمجية المخصوصة.",
    "contact.linkedin": "الملف الشخصي على لينكدإن",
    "licenses.tag": "الاعتماد المهني",
    "licenses.heading": "الرخص والاعتمادات المهنية بتاعتي",
    "licenses.card1.title": "كارنيه مزاولة المهنة",
    "licenses.card1.issuer": "وزارة العمل — مصر",
    "licenses.card2.title": "شهادة قياس مستوى المهارة",
    "licenses.card2.issuer": "وزارة العمل — مصر",
    "licenses.jobtitle.label": "المسمى الوظيفي",
    "licenses.jobtitle.value": "ملاحظ أعمال الخدمات الإلكترونية لتكنولوجيا المعلومات",
    "licenses.classification.label": "التصنيف",
    "licenses.classification.value": "عامل ماهر",
    "footer.rights": "© 2026 أحمد عطوان. كل الحقوق محفوظة.",
    "footer.builtWith": "أحمد عطوان هو اللي صمم وبنى الموقع كامل باستخدام الذكاء الاصطناعي.",
    "footer.backToTop": "ارجع لفوق"
  }
};

const RTL_LANGS = new Set(['ar', 'ar-eg']);

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value == null) return;

    if (el.hasAttribute('data-i18n-attr')) {
      const attr = el.getAttribute('data-i18n-attr');
      el.setAttribute(attr, value);
    } else {
      el.textContent = value;
    }
  });

  const isRtl = RTL_LANGS.has(lang);
  document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang === 'ar-eg' ? 'ar' : lang);
  document.body.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });

  localStorage.setItem(LANG_KEY, lang);
}

function initLanguage() {
  const saved = localStorage.getItem(LANG_KEY);
  applyLanguage(saved && translations[saved] ? saved : 'en');
}

document.querySelectorAll('[data-lang-btn]').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang-btn')));
});

/* ---------- Init ---------- */
initTheme();
initLanguage();
