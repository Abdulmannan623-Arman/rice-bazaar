// ==========================
// Mobile Menu Elements
// ==========================

const menuButton = document.querySelector(".header__menu-button");
const closeButton = document.querySelector(".mobile-menu__close");
const mobileMenu = document.querySelector(".mobile-menu");

// ==========================
// Mobile Menu Functions
// ==========================

function openMobileMenu() {
    mobileMenu.classList.add("mobile-menu--open");
}

function closeMobileMenu() {
    mobileMenu.classList.remove("mobile-menu--open");
}

// ==========================
// Event Listeners
// ==========================

menuButton.addEventListener("click", openMobileMenu);

closeButton.addEventListener("click", closeMobileMenu);