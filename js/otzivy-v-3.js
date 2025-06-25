

const otzivyV3More = document.querySelector('.otzivy-v-3__reviews-more');

if (otzivyV3More) {
  otzivyV3More.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('otzivy-v-3__reviews-more-button');

    if (isButton) {
      const hiddenCards = document.querySelectorAll('.otzivy-v-3__review.hidden');
      hiddenCards.forEach((card) => card.classList.remove('hidden'));
      event.currentTarget.style.display = 'none';
    }
  });
}

const otzivyV3ReviewTextEls = document.querySelectorAll('.otzivy-v-3__review-text');

otzivyV3ReviewTextEls.forEach((textEl) => {
  textEl.classList.remove('active');
  textEl.addEventListener('click', (event) => {
    const isActive = event.currentTarget.classList.contains('active');
    const isMore = event.target.classList.contains('otzivy-v-3__review-text-more');

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


const proektyV4More = document.querySelector('.otzivy-v-3__more');

if (proektyV4More) {
  proektyV4More.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('otzivy-v-3__more-button');

    if (isButton) {
      const hiddenStats = document.querySelectorAll('.otzivy-v-3__stats.hidden');
      const hiddenReviews = document.querySelectorAll('.otzivy-v-3__review.hidden');
      hiddenStats.forEach((card) => card.classList.remove('hidden'));
      hiddenReviews.forEach((card) => card.classList.remove('hidden'));
      event.currentTarget.style.display = 'none';
    }
  });
}
