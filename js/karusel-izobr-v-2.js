const karuselIzobrV2Swiper = new Swiper('.karusel-izobr-v-2 .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1020: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1580: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
