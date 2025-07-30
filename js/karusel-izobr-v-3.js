const karuselIzobrV3SwiperEl = document.querySelector('.karusel-izobr-v-3 .swiper');

if (karuselIzobrV3SwiperEl) {
  const swiper = new Swiper('.karusel-izobr-v-3 .swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 3,
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
}

const karuselIzobrV3Prev = document.querySelector('.karusel-izobr-v-3 .swiper-button-next');
const karuselIzobrV3Next = document.querySelector('.karusel-izobr-v-3 .swiper-button-prev');
const karuselIzobrV3SlideImg = document.querySelector('.karusel-izobr-v-3__slide-figure-image');

function updateKaruselIzobrV3ButtonsPos() {
  if (karuselIzobrV3Prev && karuselIzobrV3Next && karuselIzobrV3SlideImg) {
    const imageHeight = karuselIzobrV3SlideImg.offsetHeight;

    [karuselIzobrV3Prev, karuselIzobrV3Next].forEach((button) => {
      button.style.top = imageHeight / 2 + 'px';
    });
  }
}

updateKaruselIzobrV3ButtonsPos();

window.addEventListener('resize', () => {
  updateKaruselIzobrV3ButtonsPos();
});
