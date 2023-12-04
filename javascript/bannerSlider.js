const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const bannerSlider = document.querySelector('.banner-slider');
const bannerCards = document.querySelectorAll('.banner-card');
const totalSlides = bannerCards.length;
let slideIndex = 0;

function slideBanner(direction) {
    const slideWidth = document.querySelector('.banner-card').offsetWidth;

    if (direction === 'next') {
        slideIndex = (slideIndex + 1) % totalSlides;
    } else {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    }

    bannerSlider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

    bannerCards.forEach((card, index) => {
        if (index === slideIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

prevBtn.addEventListener('click', () => slideBanner('prev'));
nextBtn.addEventListener('click', () => slideBanner('next'));

bannerCards[0].classList.add('active');