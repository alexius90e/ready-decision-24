const karuselIzobrV6SwiperEl = document.querySelector('.karusel-izobr-v-6 .swiper');
const karuselIzobrV6PrevBtn = document.querySelector('.karusel-izobr-v-6__controls-prev');
const karuselIzobrV6NextBtn = document.querySelector('.karusel-izobr-v-6__controls-next');

if (karuselIzobrV6SwiperEl) {
  const swiper = new Swiper(karuselIzobrV6SwiperEl, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: 1.25,
      },
      769: {
        spaceBetween: 20,
        slidesPerView: 2.25,
      },
      1020: {
        spaceBetween: 20,
        slidesPerView: 'auto',
      },
      1580: {
        spaceBetween: 24,
        slidesPerView: 'auto',
      },
    },
    navigation: {
      prevEl: karuselIzobrV6PrevBtn,
      nextEl: karuselIzobrV6NextBtn,
    },
  });
}
