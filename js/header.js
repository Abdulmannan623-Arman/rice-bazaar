// ==========================
// Mobile Menu Elements
// ==========================

const menuButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".mobile-menu__close");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

// ==========================
// Mobile Menu Functions
// ==========================

function toggleMobileMenu(isOpen) {
    mobileMenu.classList.toggle("mobile-menu--open", isOpen);
    overlay.classList.toggle("overlay--show", isOpen);
}

function openMobileMenu() {
    toggleMobileMenu(true);
}

function closeMobileMenu() {
    toggleMobileMenu(false);
}

// ==========================
// Event Listeners
// ==========================

menuButton.addEventListener("click", openMobileMenu);

closeButton.addEventListener("click", closeMobileMenu);

overlay.addEventListener("click", closeMobileMenu);