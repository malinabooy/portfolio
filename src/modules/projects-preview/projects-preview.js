import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  const swiperElement = document.querySelector('.projects-preview .projects-preview__swiper');

  if (swiperElement) {
    new Swiper(swiperElement, {
      modules: [Autoplay],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
      }
    });
  }
});

console.log('Swiper loaded');