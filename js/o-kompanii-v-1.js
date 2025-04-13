const oKompaniiV1Els = document.querySelectorAll(
  '.o-kompanii-v-1  .swiper'
);

oKompaniiV1Els.forEach((swiperEl) => {
  const swiper = new Swiper(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
