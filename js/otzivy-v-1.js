const otzivyV1SwiperEl = document.querySelector('.otzivy-v-1__slider .swiper');

const otzivyV1Swiper = new Swiper(otzivyV1SwiperEl, {
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

const otzivyV1More = document.querySelector('.otzivy-v-1__reviews-more');

if (otzivyV1More) {
  otzivyV1More.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('otzivy-v-1__reviews-more-button');

    if (isButton) {
      const hiddenCards = document.querySelectorAll('.otzivy-v-1__review.hidden');
      hiddenCards.forEach((card) => card.classList.remove('hidden'));
      event.currentTarget.style.display = 'none';
    }
  });
}

const otzivyV1ReviewTextEls = document.querySelectorAll('.otzivy-v-1__review-text');

otzivyV1ReviewTextEls.forEach((textEl) => {
  textEl.classList.remove('active');
  textEl.addEventListener('click', (event) => {
    const isActive = event.currentTarget.classList.contains('active');
    const isMore = event.target.classList.contains('otzivy-v-1__review-text-more');

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
