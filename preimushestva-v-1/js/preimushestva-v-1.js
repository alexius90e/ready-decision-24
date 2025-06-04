const preimushestvaV1SwiperEl = document.querySelector('.preimushestva-v-1__slider .swiper')

if (preimushestvaV1SwiperEl) {
  const preimushestvaV1Swiper = new Swiper(preimushestvaV1SwiperEl, {
  spaceBetween: 15,
      slidesPerView: 1,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15
    },
    599: {
      slidesPerView: 2.25,
      spaceBetween: 30
    },
    899: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },
    1228: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
})
}
