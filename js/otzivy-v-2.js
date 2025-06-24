const otzivyV2SwiperEl = document.querySelector('.otzivy-v-2__slider .swiper');

const otzivyV2Swiper = new Swiper(otzivyV2SwiperEl, {
  spaceBetween: 20,
  slidesPerView: 'auto',
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    1580: {
      spaceBetween: 24,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const otzivyV2More = document.querySelector('.otzivy-v-2__reviews-more');

if (otzivyV2More) {
  otzivyV2More.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('otzivy-v-2__reviews-more-button');

    if (isButton) {
      const hiddenCards = document.querySelectorAll('.otzivy-v-2__review.hidden');
      hiddenCards.forEach((card) => card.classList.remove('hidden'));
      event.currentTarget.style.display = 'none';
    }
  });
}

const otzivyV2ReviewTextEls = document.querySelectorAll('.otzivy-v-2__review-text');

otzivyV2ReviewTextEls.forEach((textEl) => {
  textEl.classList.remove('active');
  textEl.addEventListener('click', (event) => {
    const isActive = event.currentTarget.classList.contains('active');
    const isMore = event.target.classList.contains('otzivy-v-2__review-text-more');

    if (isMore) {
      if (isActive) {
        event.currentTarget.classList.remove('active');
        event.target.textContent = 'Читать весь отзыв';
      } else {
        event.currentTarget.classList.add('active');
        event.target.textContent = 'Скрыть';
      }
    }
  });
});
