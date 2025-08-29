const karuselIzobrV8TopSwiperEl = document.querySelector('.karusel-izobr-v-8__gallery-top .swiper');
const karuselIzobrV8BottomSwiperEl = document.querySelector(
  '.karusel-izobr-v-8__gallery-bottom .swiper'
);

if (karuselIzobrV8TopSwiperEl && karuselIzobrV8BottomSwiperEl) {
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
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1020: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };

  const swiperTop = new Swiper(karuselIzobrV8TopSwiperEl, swiperOptions);
  const swiperBottom = new Swiper(karuselIzobrV8BottomSwiperEl, swiperOptions);

  const syncSliders = (index) => {
    swiperTop.slideToLoop(index);
    swiperBottom.slideToLoop(index);
  };

  swiperTop.on('slideChange', () => syncSliders(swiperTop.realIndex));
  swiperBottom.on('slideChange', () => syncSliders(swiperBottom.realIndex));
}
