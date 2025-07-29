const swiper = new Swiper('.karusel-izobr-v-3 .swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1020: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1580: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
