document.addEventListener('DOMContentLoaded', function () {
  const swiperWrapper = document.querySelector('.projects-preview__swiper-wrapper');
  const slides = document.querySelectorAll('.projects-preview__swiper-slide');
  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;
  let intervalId = null;


  function calculateSlideWidth() {
    const wrap = swiperWrapper;
    const slide = slides[0];
    const wrapStyles = window.getComputedStyle(wrap);
    const wrapMargin = parseFloat(wrapStyles.gap);
    const slideWidth = slide.offsetWidth + wrapMargin;
    return slideWidth;
  }


  let slideWidth = calculateSlideWidth();

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
      startSlider();
    }
  }

  function startSlider() {
    if (intervalId === null) {
      intervalId = setInterval(showNextSlide, 3000);
    }
  }

  function stopSlider() {
    clearInterval(intervalId);
    intervalId = null;
  }

  swiperWrapper.addEventListener('touchstart', handleTouchStart);
  swiperWrapper.addEventListener('touchmove', handleTouchMove);
  swiperWrapper.addEventListener('touchend', handleTouchEnd);

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    swiperWrapper.style.transition = 'transform 0.3s linear';
    swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  startSlider();


  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  swiperWrapper.appendChild(firstClone);
  swiperWrapper.insertBefore(lastClone, slides[0]);

  currentIndex++;
  swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

console.log('Swiper loaded');