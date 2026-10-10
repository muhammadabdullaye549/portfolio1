// ================================
// 1. MOBIL MENYU
// ================================

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const navItems = document.querySelectorAll(".nav-link");

function closeMenu() {
    menuToggle.classList.remove("open");
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menyuni ochish");
}

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Menyuni yopish" : "Menyuni ochish"
    );
});

// Menyu bandini bosganda menyu yopiladi
navItems.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

// Escape tugmasi orqali menyuni yopish
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

// Katta ekranga o'tganda mobil menyuni yopish
window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
        closeMenu();
    }
});


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
    // Eski brauzerlarda animatsiyasiz hamma bo'limni ko'rsatish
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
        if (profileImage.complete && profileImage.naturalWidth === 0) {
            profileImage.style.display = "none";
            profilePlaceholder.style.display = "grid";
        }
    }

    profileImage.addEventListener("error", checkProfileImage);
    checkProfileImage();
}

console.log("Muhammad Portfolio muvaffaqiyatli ishga tushdi! 🚀");