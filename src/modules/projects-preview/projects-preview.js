document.addEventListener('DOMContentLoaded', function () {
  const swiperWrapper = document.querySelector('.projects-preview__swiper-wrapper');
  const slides = document.querySelectorAll('.projects-preview__swiper-slide');
  const slideWidth = slides[0].offsetWidth; 
  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;

  function handleTouchStart(event) {
    if (!isDragging) {
      startX = event.touches[0].clientX;
      isDragging = true;
    }
  }

  function handleTouchMove(event) {
    if (isDragging) {
      const currentX = event.touches[0].clientX;
      const diff = startX - currentX;
      swiperWrapper.style.transition = 'none';
      swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth + diff}px)`;
    }
  }

  function handleTouchEnd() {
    if (isDragging) {
      const threshold = Math.abs(startX - event.changedTouches[0].clientX);
      if (threshold > slideWidth / 2) { 
        if (startX < event.changedTouches[0].clientX) {
          currentIndex = Math.max(0, currentIndex - 1);
        } else {
          currentIndex = Math.min(slides.length - 1, currentIndex + 1);
        }
      }
      swiperWrapper.style.transition = 'transform 0.3s linear';
      swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      isDragging = false;
    }
  }

  swiperWrapper.addEventListener('touchstart', handleTouchStart);
  swiperWrapper.addEventListener('touchmove', handleTouchMove);
  swiperWrapper.addEventListener('touchend', handleTouchEnd);

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    swiperWrapper.style.transition = 'transform 0.3s linear';
    swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  setInterval(showNextSlide, 3000);
});

console.log('Swiper loaded');