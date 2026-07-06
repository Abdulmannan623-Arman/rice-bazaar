// ==========================
// Hero Slider Elements
// ==========================

const heroTrack = document.querySelector(".hero__track");
const heroSlides = document.querySelectorAll(".hero__slide");

let currentSlide = 0;

// ==========================
// Hero Slider Functions
// ==========================

function showSlide(index) {
    heroTrack.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= heroSlides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

// ==========================
// Hero Slider Auto Play
// ==========================

setInterval(nextSlide, 3000);