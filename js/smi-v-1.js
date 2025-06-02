  const smiV1SwiperEl = document.querySelector('.smi-v-1__slider .swiper')
  const smiV1PrevEl = document.querySelector('.smi-v-1__slider .swiper')
  const smiV1NextEl = document.querySelector('.smi-v-1__slider .swiper')



const smiV1Swiper = new Swiper(smiV1SwiperEl, {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1020: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1580: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
