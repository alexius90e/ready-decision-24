const kvizQuestionGallerySwiperEls = document.querySelectorAll(
  '.kviz-v-1__question-gallery > .swiper'
);

kvizQuestionGallerySwiperEls.forEach((swiperEl) => {
  const swiper = new Swiper(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1020: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1580: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});


const kvizMain = document.querySelector('.kviz-v-1__main');
const kvizResults = document.querySelector('.kviz-v-1__results');
const kvizControls = document.querySelector('.kviz-v-1__controls');
const kvizQuestionEls = document.querySelectorAll('.kviz-v-1__question');
let activeQuestionId = 0;

function updateQuestions() {
  const kvizProgressStep = document.querySelector('.kviz-v-1__progress-step');
  const kvizProgressIndicator = document.querySelector('.kviz-v-1__progress-bar-indicator');

  if (kvizProgressStep) {
    kvizProgressStep.textContent = `${activeQuestionId + 1} из ${kvizQuestionEls.length}`;
  }

  if (kvizProgressIndicator) {
    const progress = (activeQuestionId + 1) / kvizQuestionEls.length * 100
    kvizProgressIndicator.style.width = `${progress}%`;
  }

  kvizQuestionEls.forEach((questionEl, index) => {
    if (activeQuestionId === index) {
      questionEl.classList.add('active');
    } else {
      questionEl.classList.remove('active');
    }
  });
}

updateQuestions();

if (kvizControls) {
  kvizControls.addEventListener('click', (event) => {
    const isBackBtn = event.target.classList.contains('kviz-v-1__controls-back');
    const isNextBtn = event.target.classList.contains('kviz-v-1__controls-next');

    if (isBackBtn) {
      if (activeQuestionId - 1 < 0) {
        activeQuestionId = 0;
      } else {
        activeQuestionId--;
      }
    }

    if (isNextBtn) {
      if (activeQuestionId + 1 >= kvizQuestionEls.length) {
        activeQuestionId = kvizQuestionEls.length - 1;
        if (kvizMain) kvizMain.classList.remove('active');
        if (kvizResults) kvizResults.classList.add('active');
      } else {
        activeQuestionId++;
      }
    }

    updateQuestions();
  });
}
