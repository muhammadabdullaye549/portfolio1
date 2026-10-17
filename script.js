/**
 * MUHAMMAD ABDULLAYEV — PORTFOLIO SCRIPT
 * Multilingual (UZ, RU, EN), Theme Management (Dark/Light),
 * Smooth Interactivity, Project Filtering, Modal, Form Validation, and Toasts.
 */

document.addEventListener("DOMContentLoaded", () => {
    // =========================================================================
    // 1. I18N / TRANSLATIONS (UZ, RU, EN)
    // =========================================================================

    const translations = {
        uz: {
            page_title: "Muhammad Abdullayev | Portfolio",
            page_desc: "Muhammad Abdullayev — kelajakdagi veb-dasturchi (Web Developer). Zamonaviy veb-saytlar, interfeyslar va Telegram botlar yaratish bilan shug'ullanaman.",
            nav_home: "Bosh sahifa",
            nav_about: "Men haqimda",
            nav_skills: "Ko‘nikmalar",
            nav_projects: "Loyihalar",
            nav_contact: "Aloqa",
            hero_status: "Dasturlashni o‘rganyapman",
            hero_greeting: "SALOM, MEN MUHAMMAD 👋",
            hero_title: 'Men kelajakdagi<br><span class="gradient-text">Web Developer</span>man.',
            hero_desc: "Men zamonaviy saytlar va foydali dasturlar yaratishni o‘rganyapman. Maqsadim — kuchli dasturchi bo‘lish va o‘z g‘oyalarimni haqiqiy loyihalarga aylantirish.",
            hero_btn_projects: "Loyihalarimni ko‘rish ↗",
            hero_btn_contact: "Men bilan bog‘lanish",
            hero_btn_cv: "Rezyumeni ko‘rish (CV) ↓",
            hero_follow: "Meni kuzating:",
            float_top_title: "Creative Developer",
            float_top_desc: "Yangi g‘oyalar va kod",
            float_bottom_title: "HTML · CSS · JS",
            float_bottom_desc: "Har kuni yangi bilim",
            about_eyebrow: "MEN HAQIMDA",
            about_title: 'Har kuni yangi bilim,<br><span class="gradient-text">yangi imkoniyat.</span>',
            about_desc: "Men dasturlashga qiziquvchi va maqsad sari intiluvchi yosh dasturchiman. Hozir zamonaviy veb-dasturlash (Frontend & Backend asoslari)ni chuqur o‘rganib, o‘z portfolio saytim va shaxsiy loyihalarim ustida amaliyot o‘tamoqdaman.",
            about_card1_title: "Mening maqsadim",
            about_card1_desc: "Yuqori darajadagi kuchli dasturchi bo‘lish, foydalanuvchilar muammolarini hal qiluvchi haqiqiy loyihalar yaratish va xalqaro tajriba to‘plash.",
            about_card2_title: "Qiziqishlarim",
            about_card2_desc: "Zamonaviy va qulay veb-saytlar, interaktiv foydalanuvchi interfeyslari (UI/UX), sun'iy intellekt va avtomatlashtirish texnologiyalari.",
            about_card3_title: "Rivojlanish yo‘li",
            about_card3_desc: "Nazariy bilimlarni har kuni amaliy kod orqali mustahkamlash, Open Source loyihalarda ishtirok etish va yangi texnologiyalarni tez o‘zlashtirish.",
            stat_topics: "O‘rganilgan mavzular",
            stat_projects: "Tayyorlangan loyihalar",
            stat_passion: "O‘rganishga ishtiyoq",
            stat_learning: "Uzluksiz izlanish",
            skills_eyebrow: "MENING KO‘NIKMALARIM",
            skills_title: 'Men o‘rganayotgan<br><span class="gradient-text">texnologiyalar.</span>',
            skills_desc: "Quyidagi texnologiyalar bo‘yicha nazariy va amaliy bilimlarni chuqurlashtirib, zamonaviy andozalar asosida toza kod yozishni o‘rganmoqdaman.",
            skill_html_desc: "Semantik tuzilish, toza markup va SEO asoslari.",
            skill_css_desc: "Zamonaviy dizayn, Flexbox, Grid, animatsiyalar va responsivlik.",
            skill_js_desc: "DOM manipulyatsiyasi, ES6+, API so‘rovlari va interaktivlik.",
            skill_react_desc: "Komponentlar arxitekturasi, Props, State va Hooks asoslari.",
            skill_python_desc: "Dasturlash mantiqi, ma'lumotlar tuzilmasi va skriptlar.",
            skill_bot_desc: "Telegram Bot API, Aiogram va avtomatlashtirilgan xizmatlar.",
            skill_git_desc: "Versiyalarni boshqarish, branchlar va commitlar bilan ishlash.",
            skill_github_desc: "Kodni saqlash, loyihalarni boshqarish va GitHub Pages.",
            projects_eyebrow: "MENING ISHLARIM",
            projects_title: 'Tanlangan <span class="gradient-text">loyihalar.</span>',
            projects_desc: "Bu yerda o‘rganish jarayonida yaratgan va doimiy rivojlantirib borayotgan loyihalarim bilan tanishishingiz mumkin.",
            filter_all: "Barchasi",
            filter_web: "Frontend / Web",
            filter_js: "JavaScript",
            filter_bot: "Python & Bot",
            badge_live: "Jonli sayt",
            badge_interactive: "Interaktiv",
            badge_api: "API Integratsiya",
            badge_bot: "Python Bot",
            btn_view_details: "Batafsil ko‘rish ↗",
            proj1_title: "Portfolio Website",
            proj1_desc: "Zamonaviy interfeys, 3 xil til (UZ, RU, EN), qorong‘i va yorug‘ rejim hamda to‘liq responsiv dizaynga ega shaxsiy veb-sayt.",
            proj2_title: "To-do Task Master",
            proj2_desc: "Kundalik vazifalarni rejalashtirish, filtrlash, holatini o‘zgartirish va ma'lumotlarni saqlash imkoniyatiga ega qulay vazifalar ilovasi.",
            proj3_title: "Weather Forecast App",
            proj3_desc: "Haqiqiy ob-havo API (OpenWeather) orqali shaharlar bo‘yicha harorat, namlik va shamol tezligini real vaqtda ko‘rsatuvchi ilova.",
            proj4_title: "Telegram Assistant Bot",
            proj4_desc: "Foydalanuvchilarga avtomatlashtirilgan tarzda tezkor ma'lumot yetkazuvchi, tugmali interfeysga ega ko‘p funksiyali Telegram bot.",
            contact_eyebrow: "ALOQA",
            contact_title: 'Birgalikda ajoyib<br><span class="gradient-text">narsa yaratamiz!</span>',
            contact_desc: "Sizda qiziqarli g‘oya, taklif yoki savollar bormi? Men bilan bog‘laning yoki xabar qoldiring, albatta javob beraman!",
            hint_copy: "Nusxalash",
            location_text: "Toshkent, O‘zbekiston",
            response_time: "Javob vaqti: tezkor",
            form_label_name: "Ismingiz:",
            form_label_email: "Email yoki Telegram:",
            form_label_message: "Xabaringiz:",
            form_btn_send: "Xabarni yuborish ✉",
            btn_github_profile: "GitHub profilim ↗",
            btn_telegram_write: "Telegram orqali yozish ✈",
            contact_status_note: "Yangi bilimlar va hamkorlik uchun doim ochiqman",
            footer_rights: "Barcha huquqlar himoyalangan.",
            footer_back_top: "Yuqoriga qaytish",
            toast_copied: "Email manzili nusxalandi! 📋",
            toast_sent: "Xabaringiz muvaffaqiyatli qabul qilindi! Tez orada bog‘lanaman. 🚀",
            err_name: "Iltimos, ismingizni kiriting",
            err_email: "Iltimos, email yoki Telegram username kiriting",
            err_message: "Iltimos, xabaringizni yozing"
        },

        ru: {
            page_title: "Мухаммад Абдуллаев | Портфолио",
            page_desc: "Мухаммад Абдуллаев — начинающий веб-разработчик. Создание современных веб-сайтов, интерфейсов и Telegram ботов.",
            nav_home: "Главная",
            nav_about: "Обо мне",
            nav_skills: "Навыки",
            nav_projects: "Проекты",
            nav_contact: "Контакты",
            hero_status: "Изучаю программирование",
            hero_greeting: "ПРИВЕТ, Я МУХАММАД 👋",
            hero_title: 'Я будущий<br><span class="gradient-text">Web Developer</span>.',
            hero_desc: "Я изучаю создание современных сайтов и полезных приложений. Моя цель — стать сильным разработчиком и воплощать идеи в реальные цифровые продукты.",
            hero_btn_projects: "Мои проекты ↗",
            hero_btn_contact: "Связаться со мной",
            hero_btn_cv: "Посмотреть резюме (CV) ↓",
            hero_follow: "Следите за мной:",
            float_top_title: "Creative Developer",
            float_top_desc: "Новые идеи и код",
            float_bottom_title: "HTML · CSS · JS",
            float_bottom_desc: "Каждый день новые знания",
            about_eyebrow: "ОБО МНЕ",
            about_title: 'Каждый день новые знания,<br><span class="gradient-text">новые возможности.</span>',
            about_desc: "Я увлечённый и целеустремлённый начинающий веб-разработчик. Сейчас активно углубляюсь в современные технологии Frontend & Backend, развивая своё портфолио и практические навыки.",
            about_card1_title: "Моя цель",
            about_card1_desc: "Стать высококлассным разработчиком, создавать полезные проекты для решения реальных задач пользователей и получить международный опыт.",
            about_card2_title: "Мои интересы",
            about_card2_desc: "Современные адаптивные сайты, интерактивные интерфейсы (UI/UX), технологии искусственного интеллекта и автоматизация процессов.",
            about_card3_title: "Путь развития",
            about_card3_desc: "Ежедневная практика кода, участие в Open Source проектах, быстрое освоение новых библиотек и стандартов написания чистого кода.",
            stat_topics: "Изученных тем",
            stat_projects: "Готовых проектов",
            stat_passion: "Мотивация к учебе",
            stat_learning: "Постоянный рост",
            skills_eyebrow: "МОИ НАВЫКИ",
            skills_title: 'Технологии, которые я<br><span class="gradient-text">активно изучаю.</span>',
            skills_desc: "Углубляю теоретические и практические знания по следующим направлениям, следуя лучшим мировым стандартам написания кода.",
            skill_html_desc: "Семантическая верстка, чистый код и основы поисковой оптимизации (SEO).",
            skill_css_desc: "Современный CSS, Flexbox, Grid, анимации и полная адаптивность под любые экраны.",
            skill_js_desc: "Манипуляции с DOM, стандарт ES6+, асинхронные запросы (Fetch API) и логика.",
            skill_react_desc: "Компонентная архитектура, работа с Props, State и React Hooks.",
            skill_python_desc: "Основы алгоритмов, структуры данных, ООП и написание скриптов автоматизации.",
            skill_bot_desc: "Telegram Bot API, библиотека Aiogram и разработка интерактивных ботов.",
            skill_git_desc: "Система контроля версий, управление ветками, слияния и коммиты.",
            skill_github_desc: "Удаленные репозитории, работа в команде и деплой на GitHub Pages.",
            projects_eyebrow: "МОИ РАБОТЫ",
            projects_title: 'Избранные <span class="gradient-text">проекты.</span>',
            projects_desc: "Здесь представлены проекты, созданные в процессе обучения и постоянно совершенствуемые.",
            filter_all: "Все",
            filter_web: "Frontend / Web",
            filter_js: "JavaScript",
            filter_bot: "Python & Bot",
            badge_live: "Живой сайт",
            badge_interactive: "Интерактив",
            badge_api: "API Интеграция",
            badge_bot: "Python Бот",
            btn_view_details: "Подробнее ↗",
            proj1_title: "Portfolio Website",
            proj1_desc: "Персональный сайт-портфолио с поддержкой 3 языков (UZ, RU, EN), темной/светлой темы и плавной анимацией.",
            proj2_title: "To-do Task Master",
            proj2_desc: "Удобное веб-приложение для управления ежедневными задачами с фильтрацией, сохранением данных в LocalStorage.",
            proj3_title: "Weather Forecast App",
            proj3_desc: "Приложение для прогноза погоды с реальной интеграцией API, поиском городов и отображением метеоданных.",
            proj4_title: "Telegram Assistant Bot",
            proj4_desc: "Многофункциональный Telegram бот для автоматизации ответов с кнопочным интерфейсом на Python (Aiogram).",
            contact_eyebrow: "КОНТАКТЫ",
            contact_title: 'Давайте создадим<br><span class="gradient-text">что-то крутое!</span>',
            contact_desc: "У вас есть интересная идея, предложение или вопрос? Напишите мне, и я с удовольствием отвечу!",
            hint_copy: "Копировать",
            location_text: "Ташкент, Узбекистан",
            response_time: "Время ответа: быстро",
            form_label_name: "Ваше имя:",
            form_label_email: "Email или Telegram:",
            form_label_message: "Ваше сообщение:",
            form_btn_send: "Отправить сообщение ✉",
            btn_github_profile: "Мой GitHub ↗",
            btn_telegram_write: "Написать в Telegram ✈",
            contact_status_note: "Всегда открыт для новых знаний и сотрудничества",
            footer_rights: "Все права защищены.",
            footer_back_top: "Наверх",
            toast_copied: "Email скопирован в буфер! 📋",
            toast_sent: "Ваше сообщение успешно отправлено! Скоро свяжусь с вами. 🚀",
            err_name: "Пожалуйста, введите ваше имя",
            err_email: "Пожалуйста, укажите email или Telegram",
            err_message: "Пожалуйста, напишите сообщение"
        },

        en: {
            page_title: "Muhammad Abdullayev | Portfolio",
            page_desc: "Muhammad Abdullayev — Aspiring Web Developer. Crafting modern websites, responsive user interfaces, and automated Telegram bots.",
            nav_home: "Home",
            nav_about: "About me",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_status: "Learning programming",
            hero_greeting: "HELLO, I'M MUHAMMAD 👋",
            hero_title: 'I am a future<br><span class="gradient-text">Web Developer</span>.',
            hero_desc: "I am learning to build modern websites and useful applications. My goal is to become a top-tier developer and turn ambitious ideas into impactful digital solutions.",
            hero_btn_projects: "View my projects ↗",
            hero_btn_contact: "Contact me",
            hero_btn_cv: "View Resume (CV) ↓",
            hero_follow: "Follow me:",
            float_top_title: "Creative Developer",
            float_top_desc: "Fresh ideas & clean code",
            float_bottom_title: "HTML · CSS · JS",
            float_bottom_desc: "Daily growth & practice",
            about_eyebrow: "ABOUT ME",
            about_title: 'New knowledge every day,<br><span class="gradient-text">new opportunities.</span>',
            about_desc: "I am an enthusiastic and motivated aspiring developer. Currently focusing on modern web technologies (Frontend & Backend fundamentals), refining my portfolio and developing real-world projects.",
            about_card1_title: "My Mission",
            about_card1_desc: "To become a high-level software engineer, building real-world products that solve problems and making an impact internationally.",
            about_card2_title: "My Interests",
            about_card2_desc: "Modern responsive web applications, interactive UI/UX designs, artificial intelligence integration, and workflow automation.",
            about_card3_title: "Growth Path",
            about_card3_desc: "Continuous hands-on coding, contributing to open-source software, and mastering new modern development standards rapidly.",
            stat_topics: "Topics Mastered",
            stat_projects: "Projects Built",
            stat_passion: "Learning Passion",
            stat_learning: "Continuous Growth",
            skills_eyebrow: "MY SKILLS",
            skills_title: 'Technologies I am<br><span class="gradient-text">mastering.</span>',
            skills_desc: "Deepening theoretical and practical knowledge in the following technologies to write clean, maintainable, and standard-compliant code.",
            skill_html_desc: "Semantic structure, clean markup standards, and SEO fundamentals.",
            skill_css_desc: "Modern styling, Flexbox, Grid, fluid animations, and responsiveness.",
            skill_js_desc: "DOM manipulation, modern ES6+ features, Async/Fetch API, and logic.",
            skill_react_desc: "Component architecture, Props, State management, and React Hooks.",
            skill_python_desc: "Programming algorithms, data structures, OOP, and automation scripts.",
            skill_bot_desc: "Telegram Bot API, Aiogram framework, and automated conversational services.",
            skill_git_desc: "Distributed version control, branch management, merge strategies, and commits.",
            skill_github_desc: "Cloud repositories, collaboration workflows, and GitHub Pages deployment.",
            projects_eyebrow: "MY WORK",
            projects_title: 'Featured <span class="gradient-text">projects.</span>',
            projects_desc: "Explore selected projects I built during my journey, demonstrating practical technical proficiency and modern design.",
            filter_all: "All",
            filter_web: "Frontend / Web",
            filter_js: "JavaScript",
            filter_bot: "Python & Bot",
            badge_live: "Live Site",
            badge_interactive: "Interactive",
            badge_api: "API Integrated",
            badge_bot: "Python Bot",
            btn_view_details: "View details ↗",
            proj1_title: "Portfolio Website",
            proj1_desc: "A personal portfolio website featuring trilingual support (UZ, RU, EN), dark/light theme switching, and full responsiveness.",
            proj2_title: "To-do Task Master",
            proj2_desc: "Productivity task planner with task filtering, status toggling, and persistent storage via browser LocalStorage.",
            proj3_title: "Weather Forecast App",
            proj3_desc: "Real-time weather forecast web app integrating OpenWeather API with live temperature, humidity, and location search.",
            proj4_title: "Telegram Assistant Bot",
            proj4_desc: "Multi-functional automated Telegram bot featuring inline menus, instant replies, and asynchronous Python handlers.",
            contact_eyebrow: "CONTACT",
            contact_title: 'Let’s build something<br><span class="gradient-text">amazing together!</span>',
            contact_desc: "Have an exciting idea, question, or opportunity? Get in touch or leave a message, and I will get back to you promptly!",
            hint_copy: "Copy",
            location_text: "Tashkent, Uzbekistan",
            response_time: "Response time: fast",
            form_label_name: "Your Name:",
            form_label_email: "Email or Telegram:",
            form_label_message: "Your Message:",
            form_btn_send: "Send Message ✉",
            btn_github_profile: "My GitHub ↗",
            btn_telegram_write: "Message on Telegram ✈",
            contact_status_note: "Always open for new knowledge and collaboration",
            footer_rights: "All rights reserved.",
            footer_back_top: "Back to top",
            toast_copied: "Email address copied to clipboard! 📋",
            toast_sent: "Your message has been received! I will contact you soon. 🚀",
            err_name: "Please enter your name",
            err_email: "Please enter your email or Telegram username",
            err_message: "Please write a message"
        }
    };

    // Project Details for Modal
    const projectDetails = {
        portfolio: {
            category: "01 / WEB DEVELOPMENT",
            title: {
                uz: "Portfolio Website — Shaxsiy veb-sayt",
                ru: "Portfolio Website — Персональный сайт",
                en: "Portfolio Website — Personal Showcase"
            },
            desc: {
                uz: "Ushbu loyiha mening shaxsiy tashrif qog‘ozim bo‘lib, zamonaviy veb-texnologiyalar, animatsiyalar, 3 tildagi to‘liq mahalliylashtirish va qorong‘i/yorug‘ rejim imkoniyatlarini o‘zida jamlagan.",
                ru: "Этот проект — моя цифровая визитная карточка, демонстрирующая навыки верстки, интерактивности, полную локализацию на 3 языка и поддержку тем оформления.",
                en: "This project serves as my digital business card, showcasing modern web standards, interactive micro-animations, full 3-language localization, and theme toggling."
            },
            features: {
                uz: [
                    "3 xil tildagi (UZ, RU, EN) to‘liq dinamik tarjima",
                    "Qorong‘i (Dark) va Yorug‘ (Light) rejimni almashtirish",
                    "To‘liq responsiv — har qanday o‘lchamdagi ekranlarga moslashuvchan",
                    "Semantik HTML5, CSS custom properties va toza JavaScript"
                ],
                ru: [
                    "Динамическая смена 3 языков (UZ, RU, EN)",
                    "Переключение тем оформления (Тёмная / Светлая)",
                    "Полная адаптивность под мобильные телефоны и десктопы",
                    "Семантический HTML5, CSS переменные и чистый JavaScript"
                ],
                en: [
                    "Dynamic 3-language switcher (UZ, RU, EN)",
                    "Dark and Light theme toggle with persistence",
                    "Fully responsive across all screen sizes and devices",
                    "Semantic HTML5, CSS custom properties, and vanilla JavaScript"
                ]
            },
            tags: ["HTML5", "CSS3", "JavaScript", "i18n", "Responsive", "Glassmorphism"],
            demoUrl: "#home",
            githubUrl: "https://github.com/muhammadabdullaye549/portfolio1"
        },
        todo: {
            category: "02 / JAVASCRIPT",
            title: {
                uz: "To-do Task Master — Vazifalar boshqaruvi",
                ru: "To-do Task Master — Менеджер задач",
                en: "To-do Task Master — Task Management App"
            },
            desc: {
                uz: "Kundalik maqsadlar va ishlarni rejalashtirish uchun yaratilgan qulay interaktiv ilova. Foydalanuvchi vazifalarni kiritishi, belgilashi va filtrlashi mumkin.",
                ru: "Интерактивное веб-приложение для планирования ежедневных задач. Поддерживает создание, редактирование, фильтрацию и сохранение задач.",
                en: "An interactive productivity application to manage daily tasks. Users can create, toggle completion, filter tasks, and store data persistently."
            },
            features: {
                uz: [
                    "Vazifalarni qo‘shish, tahrirlash va o‘chirish",
                    "Bajarilgan vazifalarni belgilash (Done / Pending)",
                    "Barchasi / Bajarilgan / Faol vazifalar bo‘yicha filtr",
                    "Brauzer yopilganda ham ma'lumotlarni LocalStorage'da saqlash"
                ],
                ru: [
                    "Добавление, редактирование и удаление задач",
                    "Отметка выполнения задач (Выполнено / В процессе)",
                    "Фильтрация по статусам: Все, Завершенные, Активные",
                    "Сохранение данных в браузере через LocalStorage"
                ],
                en: [
                    "Add, edit, and delete task items",
                    "Mark tasks as completed with visual feedback",
                    "Filter by status: All, Completed, Pending",
                    "Persistent storage in browser via LocalStorage"
                ]
            },
            tags: ["JavaScript", "LocalStorage", "DOM API", "CSS3", "Productivity"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/muhammadabdullaye549"
        },
        weather: {
            category: "03 / API INTEGRATION",
            title: {
                uz: "Weather Forecast App — Ob-havo ma'lumotlari",
                ru: "Weather Forecast App — Прогноз погоды",
                en: "Weather Forecast App — Real-time Weather"
            },
            desc: {
                uz: "Dunyoning istalgan shahrini qidirish va real vaqt rejimida harorat, namlik, shamol tezligi kabi meteorologik ma'lumotlarni taqdim etuvchi zamonaviy ilova.",
                ru: "Современное погодное приложение, позволяющее искать города по всему миру и отображающее точную температуру, влажность и скорость ветра в реальном времени.",
                en: "A real-time weather application connecting to external meteorological APIs to fetch live temperature, wind speed, humidity, and weather conditions."
            },
            features: {
                uz: [
                    "OpenWeatherMap REST API orqali real vaqtdagi ma'lumotlar",
                    "Shahar nomi bo‘yicha tezkor qidiruv",
                    "Harorat (°C), shamol tezligi va namlik darajasi",
                    "Xatoliklarni (404 / tarmoq uzilishi) toza qayta ishlash"
                ],
                ru: [
                    "Интеграция с OpenWeatherMap REST API в реальном времени",
                    "Быстрый поиск по названию города",
                    "Отображение температуры, ветра и влажности",
                    "Корректная обработка ошибок сети и ненайденных городов"
                ],
                en: [
                    "Live data via OpenWeatherMap REST API",
                    "Instant city name search bar",
                    "Temperature, wind speed, and humidity indicators",
                    "Graceful error handling for missing cities and network status"
                ]
            },
            tags: ["JavaScript", "Fetch API", "Async/Await", "REST API", "CSS Grid"],
            demoUrl: "#contact",
            githubUrl: "https://github.com/muhammadabdullaye549"
        },
        telegram: {
            category: "04 / PYTHON & BOT",
            title: {
                uz: "Telegram Assistant Bot — Avtomatlashtirilgan bot",
                ru: "Telegram Assistant Bot — Автоматизированный бот",
                en: "Telegram Assistant Bot — Automated Service"
            },
            desc: {
                uz: "Python tilida Aiogram kutubxonasi asosida yaratilgan avtomatlashtirilgan Telegram bot. Foydalanuvchilarga qulay tugmali menyu va tezkor xizmatlarni taqdim etadi.",
                ru: "Автоматизированный Telegram бот на языке Python с использованием библиотеки Aiogram. Предоставляет пользователям удобное кнопочное меню и мгновенный доступ к информации.",
                en: "An asynchronous Telegram bot developed in Python using Aiogram. Features interactive inline keyboards, automated replies, and robust command handlers."
            },
            features: {
                uz: [
                    "Inline va Reply klaviaturalar bilan interaktiv boshqaruv",
                    "Asinxron so‘rovlar qayta ishlash (Asyncio / Aiogram)",
                    "Foydalanuvchi buyruqlarini tekshirish va loglash",
                    "Foydali xizmatlar bilan avtomatlashtirilgan integratsiya"
                ],
                ru: [
                    "Удобная навигация с Inline и Reply кнопками",
                    "Асинхронная обработка запросов через Aiogram / Asyncio",
                    "Логирование и валидация команд пользователей",
                    "Возможность интеграции с внешними API и базами данных"
                ],
                en: [
                    "Interactive navigation with Inline and Reply keyboards",
                    "Asynchronous execution powered by Python Aiogram",
                    "Command validation and activity logging",
                    "Extensible architecture for database and API connections"
                ]
            },
            tags: ["Python", "Telegram Bot API", "Aiogram", "Asyncio", "Automation"],
            demoUrl: "https://t.me/muhammad_abdullayev",
            githubUrl: "https://github.com/muhammadabdullaye549"
        }
    };

    let currentLang = "uz";

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;

        const t = translations[lang];

        // 1. Update elements with data-i18n
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });

        // 2. Update page title & description
        document.title = t.page_title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", t.page_desc);

        // 3. Update placeholders
        const nameInput = document.querySelector("#formName");
        const emailInput = document.querySelector("#formEmail");
        const messageInput = document.querySelector("#formMessage");

        if (nameInput) {
            nameInput.placeholder = lang === "uz" ? "Masalan: Azizbek" : lang === "ru" ? "Например: Азизбек" : "e.g. Alex";
        }
        if (emailInput) {
            emailInput.placeholder = lang === "uz" ? "Email yoki @username" : lang === "ru" ? "Email или @username" : "Email or @username";
        }
        if (messageInput) {
            messageInput.placeholder = lang === "uz" ? "Loyihangiz yoki taklifingiz haqida yozing..." : lang === "ru" ? "Напишите о вашем проекте или вопросе..." : "Write about your project or inquiry...";
        }

        // 4. Update html lang attribute
        document.documentElement.lang = lang;

        // 5. Update language buttons active state
        document.querySelectorAll(".lang-btn").forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-pressed", String(isActive));
        });

        // 6. Save preference
        try {
            localStorage.setItem("portfolio-language", lang);
        } catch (e) {}
    }

    // Attach Language Switcher events
    document.querySelectorAll(".lang-btn").forEach(button => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });
    });

    // Initialize Language
    let savedLang = "uz";
    try {
        savedLang = localStorage.getItem("portfolio-language") || "uz";
    } catch (e) {}
    setLanguage(savedLang);


    // =========================================================================
    // 2. THEME SYSTEM (DARK / LIGHT)
    // =========================================================================

    const themeToggle = document.querySelector("#themeToggle");
    const themeIcon = themeToggle ? themeToggle.querySelector(".theme-icon") : null;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    function applyTheme(theme) {
        const activeTheme = theme === "light" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", activeTheme);

        if (themeIcon) {
            themeIcon.textContent = activeTheme === "dark" ? "☀️" : "🌙";
        }

        if (metaThemeColor) {
            metaThemeColor.setAttribute("content", activeTheme === "dark" ? "#090d16" : "#f8fafc");
        }

        try {
            localStorage.setItem("portfolio-theme", activeTheme);
        } catch (e) {}
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
            applyTheme(currentTheme === "dark" ? "light" : "dark");
        });
    }

    let savedTheme = "dark";
    try {
        savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    } catch (e) {}
    applyTheme(savedTheme);


    // =========================================================================
    // 3. MOBILE MENU & BACKDROP
    // =========================================================================

    const menuToggle = document.querySelector("#menuToggle");
    const navMenuWrapper = document.querySelector("#navMenuWrapper");
    const menuBackdrop = document.querySelector("#menuBackdrop");
    const navLinks = document.querySelectorAll(".nav-link");

    function openMobileMenu() {
        if (!menuToggle || !navMenuWrapper) return;
        menuToggle.classList.add("open");
        navMenuWrapper.classList.add("open");
        if (menuBackdrop) menuBackdrop.classList.add("open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Menyuni yopish");
        document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
        if (!menuToggle || !navMenuWrapper) return;
        menuToggle.classList.remove("open");
        navMenuWrapper.classList.remove("open");
        if (menuBackdrop) menuBackdrop.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Menyuni ochish");
        document.body.style.overflow = "";
    }

    if (menuToggle && navMenuWrapper) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navMenuWrapper.classList.contains("open");
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        if (menuBackdrop) {
            menuBackdrop.addEventListener("click", closeMobileMenu);
        }

        navLinks.forEach(link => {
            link.addEventListener("click", closeMobileMenu);
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeMobileMenu();
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) closeMobileMenu();
        });
    }


    // =========================================================================
    // 4. ACTIVE NAVIGATION SCROLLSPY
    // =========================================================================

    const sections = document.querySelectorAll("main section[id]");
    if ("IntersectionObserver" in window) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(link => {
                        const href = link.getAttribute("href");
                        link.classList.toggle("active", href === `#${id}`);
                    });
                }
            });
        }, {
            rootMargin: "-25% 0px -60% 0px",
            threshold: 0
        });

        sections.forEach(sec => navObserver.observe(sec));
    }


    // =========================================================================
    // 5. SCROLL REVEAL ANIMATIONS
    // =========================================================================

    const revealElements = document.querySelectorAll(".reveal");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if ("IntersectionObserver" in window && !prefersReducedMotion) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -40px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add("visible"));
    }


    // =========================================================================
    // 6. PROJECTS FILTERING
    // =========================================================================

    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filterValue === "all" || category === filterValue) {
                    card.style.display = "flex";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 20);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 200);
                }
            });
        });
    });


    // =========================================================================
    // 7. PROJECT DETAILS MODAL
    // =========================================================================

    const projectModal = document.querySelector("#projectModal");
    const modalBody = document.querySelector("#modalBody");
    const modalCloseBtn = document.querySelector("#modalCloseBtn");
    const openModalBtns = document.querySelectorAll(".open-modal-btn");

    function openProjectModal(projectId) {
        const project = projectDetails[projectId];
        if (!project || !modalBody || !projectModal) return;

        const lang = currentLang;
        const title = project.title[lang] || project.title.uz;
        const desc = project.desc[lang] || project.desc.uz;
        const features = project.features[lang] || project.features.uz;

        modalBody.innerHTML = `
            <p class="modal-category">${project.category}</p>
            <h2 class="modal-title">${title}</h2>
            <p class="modal-desc">${desc}</p>
            <h4 class="modal-features-title">${lang === "uz" ? "Asosiy imkoniyatlar:" : lang === "ru" ? "Ключевые возможности:" : "Key Features:"}</h4>
            <ul class="modal-features-list">
                ${features.map(f => `<li>${f}</li>`).join("")}
            </ul>
            <div class="modal-tags">
                ${project.tags.map(t => `<span>${t}</span>`).join("")}
            </div>
            <div class="modal-actions">
                <a href="${project.demoUrl}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    ${lang === "uz" ? "Jonli ko‘rish / Bog‘lanish ↗" : lang === "ru" ? "Открыть / Связаться ↗" : "Live Demo / Contact ↗"}
                </a>
                <a href="${project.githubUrl}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    GitHub Repo ↗
                </a>
            </div>
        `;

        projectModal.classList.add("open");
        projectModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove("open");
        projectModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    openModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const projectId = btn.getAttribute("data-project");
            openProjectModal(projectId);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeProjectModal);
    }

    if (projectModal) {
        projectModal.addEventListener("click", (e) => {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && projectModal && projectModal.classList.contains("open")) {
            closeProjectModal();
        }
    });


    // =========================================================================
    // 8. TOAST NOTIFICATION UTILITY
    // =========================================================================

    const toastContainer = document.querySelector("#toastContainer");

    function showToast(message) {
        if (!toastContainer) return;
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(-10px)";
            toast.style.transition = "all 0.3s ease";
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }


    // =========================================================================
    // 9. COPY EMAIL TO CLIPBOARD
    // =========================================================================

    const copyEmailBadge = document.querySelector("#copyEmailBadge");
    if (copyEmailBadge) {
        copyEmailBadge.addEventListener("click", () => {
            const emailText = "muhammad.dev@example.com";
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(emailText).then(() => {
                    showToast(translations[currentLang].toast_copied);
                }).catch(() => {
                    window.location.href = `mailto:${emailText}`;
                });
            } else {
                window.location.href = `mailto:${emailText}`;
            }
        });
    }


    // =========================================================================
    // 10. CONTACT FORM VALIDATION & SUBMISSION
    // =========================================================================

    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nameInput = document.querySelector("#formName");
            const emailInput = document.querySelector("#formEmail");
            const messageInput = document.querySelector("#formMessage");

            const nameError = document.querySelector("#nameError");
            const emailError = document.querySelector("#emailError");
            const messageError = document.querySelector("#messageError");

            let isValid = true;
            const t = translations[currentLang];

            // Validate Name
            if (!nameInput.value.trim()) {
                nameError.textContent = t.err_name;
                isValid = false;
            } else {
                nameError.textContent = "";
            }

            // Validate Email
            if (!emailInput.value.trim()) {
                emailError.textContent = t.err_email;
                isValid = false;
            } else {
                emailError.textContent = "";
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                messageError.textContent = t.err_message;
                isValid = false;
            } else {
                messageError.textContent = "";
            }

            if (!isValid) return;

            // Simulate form submission
            const submitBtn = document.querySelector("#submitBtn");
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.style.opacity = "0.7";
            }

            setTimeout(() => {
                showToast(t.toast_sent);
                contactForm.reset();
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = "1";
                }
            }, 600);
        });
    }


    // =========================================================================
    // 11. FLOATING BACK TO TOP BUTTON & FOOTER YEAR
    // =========================================================================

    const floatingBackTop = document.querySelector("#floatingBackTop");
    window.addEventListener("scroll", () => {
        if (floatingBackTop) {
            floatingBackTop.classList.toggle("visible", window.scrollY > 350);
        }
    });

    if (floatingBackTop) {
        floatingBackTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const yearSpan = document.querySelector("#year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    // =========================================================================
    // 12. PROFILE IMAGE ROBUST FALLBACK
    // =========================================================================

    const profileImg = document.querySelector(".profile-image");
    const profilePlaceholder = document.querySelector(".profile-placeholder");

    if (profileImg && profilePlaceholder) {
        function checkImage() {
            if (profileImg.naturalWidth > 0) {
                profileImg.style.display = "block";
                profilePlaceholder.style.display = "none";
            } else {
                profileImg.style.display = "none";
                profilePlaceholder.style.display = "flex";
            }
        }

        profileImg.addEventListener("load", checkImage);
        profileImg.addEventListener("error", checkImage);
        if (profileImg.complete) checkImage();
    }

    console.log("Muhammad Abdullayev Portfolio muvaffaqiyatli yuklandi! 🚀");
});
