
// ================================
// 1. MOBIL MENYU
// ================================

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const navItems = document.querySelectorAll(".nav-link");

function closeMenu() {
    if (!menuToggle || !navLinks) return;

    menuToggle.classList.remove("open");
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menyuni ochish");
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Menyuni yopish" : "Menyuni ochish"
        );
    });

    navItems.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) closeMenu();
    });
}


// ================================
// 2. SCROLL ANIMATSIYALARI
// ================================

const revealElements = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}


// ================================
// 3. FAOL NAVIGATSIYA
// ================================

const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.id;

                    navItems.forEach((link) => {
                        const isActive =
                            link.getAttribute("href") === `#${currentId}`;

                        link.classList.toggle("active", isActive);
                    });
                }
            });
        },
        {
            rootMargin: "-25% 0px -60% 0px",
            threshold: 0
        }
    );

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });
}


// ================================
// 4. FOOTER YILI
// ================================

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================================
// 5. PROFIL RASMINI TEKSHIRISH
// ================================

const profileImage = document.querySelector(".profile-image");
const profilePlaceholder = document.querySelector(".profile-placeholder");

if (profileImage && profilePlaceholder) {
    function checkProfileImage() {
        if (profileImage.naturalWidth > 0) {
            profileImage.style.display = "block";
            profilePlaceholder.style.display = "none";
        } else {
            profileImage.style.display = "none";
            profilePlaceholder.style.display = "grid";
        }
    }

    profileImage.addEventListener("load", checkProfileImage);
    profileImage.addEventListener("error", checkProfileImage);

    if (profileImage.complete) {
        checkProfileImage();
    }
}

console.log("Muhammad Portfolio muvaffaqiyatli ishga tushdi! 🚀");

const translations = {
    uz: {
      nav: ["Bosh sahifa", "Men haqimda", "Ko‘nikmalar", "Loyihalar", "Aloqa"],
      status: "Dasturlashni o‘rganyapman",
      greeting: "SALOM, MEN MUHAMMAD 👋",
      heroTitle: 'Men kelajakdagi<br><span class="gradient-text">Web Developer</span>man.',
      heroDesc: "Men zamonaviy saytlar va foydali dasturlar yaratishni o‘rganyapman. Maqsadim — kuchli dasturchi bo‘lish va o‘z g‘oyalarimni haqiqiy loyihalarga aylantirish.",
      projectsBtn: "Loyihalarimni ko‘rish ↗",
      contactBtn: "Men bilan bog‘lanish",
      about: "MEN HAQIMDA",
      aboutTitle: 'Har kuni yangi bilim,<br><span class="gradient-text">yangi imkoniyat.</span>',
      aboutDesc: "Men dasturlashga qiziquvchi yosh o‘rganuvchiman. Hozir veb-dasturlashni o‘rganyapman va o‘z portfolio saytimni yanada yaxshilab boryapman.",
      skills: "MENING KO‘NIKMALARIM",
      skillsTitle: 'Men o‘rganayotgan<br><span class="gradient-text">texnologiyalar.</span>',
      skillsDesc: "Quyidagi texnologiyalar bilan tanishyapman va ularni loyihalarimda ishlatishni o‘rganyapman.",
      projects: "MENING ISHLARIM",
      projectsTitle: 'Tanlangan <span class="gradient-text">loyihalar.</span>',
      projectsDesc: "Bu yerda loyihalarim va kelajakda yaratmoqchi bo‘lgan dasturlarimni ko‘rsataman.",
      contact: "ALOQA",
      contactTitle: 'Birgalikda ajoyib<br><span class="gradient-text">narsa yaratamiz!</span>',
      contactDesc: "Men bilan bog‘laning yoki loyihalarimni GitHub orqali kuzatib boring."
    },
  
    ru: {
      nav: ["Главная", "Обо мне", "Навыки", "Проекты", "Контакты"],
      status: "Изучаю программирование",
      greeting: "ПРИВЕТ, Я МУХАММАД 👋",
      heroTitle: 'Я будущий<br><span class="gradient-text">веб-разработчик</span>.',
      heroDesc: "Я изучаю создание современных сайтов и полезных программ. Моя цель — стать сильным разработчиком и превращать свои идеи в реальные проекты.",
      projectsBtn: "Мои проекты ↗",
      contactBtn: "Связаться со мной",
      about: "ОБО МНЕ",
      aboutTitle: 'Каждый день новые знания,<br><span class="gradient-text">новые возможности.</span>',
      aboutDesc: "Я начинающий программист. Сейчас изучаю веб-разработку и продолжаю улучшать своё портфолио.",
      skills: "МОИ НАВЫКИ",
      skillsTitle: 'Технологии, которые я<br><span class="gradient-text">изучаю.</span>',
      skillsDesc: "Я знакомлюсь с этими технологиями и учусь применять их в своих проектах.",
      projects: "МОИ РАБОТЫ",
      projectsTitle: 'Избранные <span class="gradient-text">проекты.</span>',
      projectsDesc: "Здесь представлены мои проекты и программы, которые я планирую создавать.",
      contact: "КОНТАКТЫ",
      contactTitle: 'Давайте создадим<br><span class="gradient-text">что-то крутое!</span>',
      contactDesc: "Свяжитесь со мной или следите за моими проектами на GitHub."
    },
  
    en: {
      nav: ["Home", "About me", "Skills", "Projects", "Contact"],
      status: "Learning programming",
      greeting: "HELLO, I'M MUHAMMAD 👋",
      heroTitle: 'I am a future<br><span class="gradient-text">Web Developer</span>.',
      heroDesc: "I am learning to build modern websites and useful applications. My goal is to become a skilled developer and turn my ideas into real projects.",
      projectsBtn: "View my projects ↗",
      contactBtn: "Contact me",
      about: "ABOUT ME",
      aboutTitle: 'New knowledge every day,<br><span class="gradient-text">new opportunities.</span>',
      aboutDesc: "I am an aspiring programmer. I am currently learning web development and improving my personal portfolio.",
      skills: "MY SKILLS",
      skillsTitle: 'Technologies I am<br><span class="gradient-text">learning.</span>',
      skillsDesc: "I am exploring these technologies and learning how to use them in my projects.",
      projects: "MY WORK",
      projectsTitle: 'Featured <span class="gradient-text">projects.</span>',
      projectsDesc: "Here you can explore my projects and applications I plan to create.",
      contact: "CONTACT",
      contactTitle: "Let's build something<br><span class=\"gradient-text\">amazing together!</span>",
      contactDesc: "Contact me or follow my projects on GitHub."
    }
  };
  
  function setLanguage(lang) {
      const t = translations[lang];
      if (!t) return;
  
      const navItems = document.querySelectorAll(".nav-link");
      navItems.forEach((item, index) => {
          if (t.nav[index]) item.textContent = t.nav[index];
      });
  
      const setText = (selector, value) => {
          const element = document.querySelector(selector);
          if (element && value) element.innerHTML = value;
      };
  
      setText(".status", '<span class="status-dot"></span>' + t.status);
      setText(".hero-text .eyebrow", t.greeting);
      setText(".hero h1", t.heroTitle);
      setText(".hero-description", t.heroDesc);
      setText(".hero-buttons .btn-primary", t.projectsBtn);
      setText(".hero-buttons .btn-outline", t.contactBtn);
  
      setText("#about .eyebrow", t.about);
      setText("#about h2", t.aboutTitle);
      setText("#about .section-description", t.aboutDesc);
  
      setText("#skills .eyebrow", t.skills);
      setText("#skills h2", t.skillsTitle);
      setText("#skills .section-description", t.skillsDesc);
  
      setText("#projects .eyebrow", t.projects);
      setText("#projects h2", t.projectsTitle);
      setText("#projects .section-description", t.projectsDesc);
  
      setText("#contact .eyebrow", t.contact);
      setText("#contact h2", t.contactTitle);
      setText("#contact .contact-description", t.contactDesc);
  
      document.documentElement.lang = lang;
  
      document.querySelectorAll(".lang-btn").forEach(button => {
          const active = button.dataset.lang === lang;
          button.classList.toggle("active", active);
          button.setAttribute("aria-pressed", String(active));
      });
  
      try {
          localStorage.setItem("portfolio-language", lang);
      } catch (error) {
          // Tilni saqlash imkoni bo‘lmasa ham almashtirish ishlaydi.
      }
  }
  
  document.querySelectorAll(".lang-btn").forEach(button => {
      button.addEventListener("click", () => {
          setLanguage(button.dataset.lang);
      });
  });
  
  let savedLanguage = "uz";
  
  try {
      savedLanguage = localStorage.getItem("portfolio-language") || "uz";
  } catch (error) {
      savedLanguage = "uz";
  }
  
  setLanguage(savedLanguage);

/* ==================================
   BLUE THEME: LIGHT / DARK
================================== */

const themeToggle = document.querySelector("#themeToggle");

function applyTheme(theme) {
    // Faqat dark yoki light qiymatiga ruxsat beramiz
    const selectedTheme = theme === "light" ? "light" : "dark";

    document.documentElement.dataset.theme = selectedTheme;

    if (themeToggle) {
        themeToggle.textContent =
            selectedTheme === "dark" ? "☀️" : "🌙";

        themeToggle.setAttribute(
            "aria-label",
            selectedTheme === "dark"
                ? "Ochiq ko‘k rejimga o‘tish"
                : "To‘q ko‘k rejimga o‘tish"
        );
    }

    try {
        localStorage.setItem("portfolio-theme", selectedTheme);
    } catch (error) {
        // Brauzerda saqlash o‘chirilgan bo‘lsa ham ishlaydi.
    }
}

// Oldin tanlangan rangni tiklash
let savedTheme = "dark";

try {
    savedTheme =
        localStorage.getItem("portfolio-theme") || "dark";
} catch (error) {
    savedTheme = "dark";
}

applyTheme(savedTheme);

// Tugma bosilganda rangni almashtirish
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme =
            document.documentElement.dataset.theme || "dark";

        const newTheme =
            currentTheme === "dark" ? "light" : "dark";

        applyTheme(newTheme);
    });
}
