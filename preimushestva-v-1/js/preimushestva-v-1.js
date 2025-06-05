const preimushestvaV1SwiperEl = document.querySelector('.preimushestva-v-1__slider .swiper');

if (preimushestvaV1SwiperEl) {
  const preimushestvaV1Swiper = new Swiper(preimushestvaV1SwiperEl, {
    spaceBetween: 24,
    slidesPerView: 4,
    allowTouchMove: false,
    breakpoints: {
      480: {
        slidesPerView: 1.2,
        spaceBetween: 15,
        allowTouchMove: true,
      },
      599: {
        slidesPerView: 2.25,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      899: {
        slidesPerView: 2.8,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      1228: {
        slidesPerView: 4,
        spaceBetween: 24,
        allowTouchMove: false,
      },
    },
  });
}
