const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slideshow img');
const prevButton = document.getElementById('prevButton');
const showButton = document.getElementById('showButton');
const stopButton = document.getElementById('stopButton');
const nextButton = document.getElementById('nextButton');

let slideIndex = 1;
let slideshowInterval;

showSlide(slideIndex);

function startSlideshow() {
    slideshowInterval = setInterval(nextSlide, 2000);
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function showSlide(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    } else {
        slideIndex = n;
    }

    const currentSlide = document.querySelector('.slideshow img.active');
    if (currentSlide) {
        currentSlide.classList.remove('active');
        currentSlide.classList.add('previous');

        const previousSlide = document.querySelector('.slideshow img.previous');
        if (previousSlide) {
            previousSlide.classList.remove('previous');
        }
    }

    const nextSlide = slides[slideIndex - 1];
    if (nextSlide) {
        nextSlide.classList.add('active');
    }
}

prevButton.addEventListener('click', prevSlide);
showButton.addEventListener('click', startSlideshow);
stopButton.addEventListener('click', stopSlideshow);
nextButton.addEventListener('click', nextSlide);
