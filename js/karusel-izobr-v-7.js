const karuselIzobrV7TopSwiperEl = document.querySelector('.karusel-izobr-v-7__gallery-top .swiper');
const karuselIzobrV7BottomSwiperEl = document.querySelector(
  '.karusel-izobr-v-7__gallery-bottom .swiper'
);

if (karuselIzobrV7TopSwiperEl && karuselIzobrV7BottomSwiperEl) {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 2.4,
        spaceBetween: 16,
      },
      577: {
        slidesPerView: 3.3,
        spaceBetween: 16,
      },
      769: {
        slidesPerView: 4.4,
        spaceBetween: 20,
      },
      1020: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  };

  const swiperTop = new Swiper(karuselIzobrV7TopSwiperEl, swiperOptions);
  const swiperBottom = new Swiper(karuselIzobrV7BottomSwiperEl, swiperOptions);

  const syncSliders = (index) => {
    swiperTop.slideToLoop(index);
    swiperBottom.slideToLoop(index);
  };

  swiperTop.on('slideChange', () => syncSliders(swiperTop.realIndex));
  swiperBottom.on('slideChange', () => syncSliders(swiperBottom.realIndex));
}
