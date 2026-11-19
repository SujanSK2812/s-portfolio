const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navOverlay = document.querySelector(".nav-overlay");
const menuIcon = menuBtn ? menuBtn.querySelector("i") : null;

function toggleMenu() {
    const isActive = navLinks.classList.toggle("active");
    if (navOverlay) navOverlay.classList.toggle("active", isActive);
    if (menuIcon) {
        if (isActive) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    }
    document.body.style.overflow = isActive ? "hidden" : "";
}

function closeMenu() {
    navLinks.classList.remove("active");
    if (navOverlay) navOverlay.classList.remove("active");
    if (menuIcon) {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
    document.body.style.overflow = "";
}

if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
}

if (navOverlay) {
    navOverlay.addEventListener("click", closeMenu);
}

const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach(item => {
    item.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
        closeMenu();
    }
});
