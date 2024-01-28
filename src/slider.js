const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".single-slide");

let index = 0;
let width = slides[index].clientWidth;
let slideChangeInterval;

const changeSlide = () => {
    if (index < slides.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateSlider();
}

const updateSlider = () => {

    // Add/remove active class from slides as needed
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add("active-slide");
        } else {
            slide.classList.remove("active-slide");
        }
    });
}

const startSlideInterval = () => {
    slideChangeInterval = setInterval(changeSlide, 5000);
}

const stopSlideInterval = () => {
    clearInterval(slideChangeInterval);
}

next.addEventListener("click", () => {
    stopSlideInterval();
    if (index < slides.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateSlider();
    startSlideInterval();
});

prev.addEventListener("click", () => {
    stopSlideInterval();
    if (index > 0) {
        index--;
    } else {
        index = slides.length - 1;
    }
    updateSlider();
    startSlideInterval();
});

// Start the automatic slide change interval
startSlideInterval();
