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

const kvizV1 = document.getElementById('kvizV1');
const kvizV1Content = document.getElementById('kvizV1Content');
const kvizMain = document.querySelector('.kviz-v-1__main');
const kvizResults = document.querySelector('.kviz-v-1__results');
const kvizControls = document.querySelector('.kviz-v-1__controls');
const kvizQuestionEls = document.querySelectorAll('.kviz-v-1__question');
const kvizDelay = 500;
let activeQuestionId = 0;

function updateQuestions() {
  const kvizProgressStep = document.querySelector('.kviz-v-1__progress-step');
  const kvizProgressIndicator = document.querySelector('.kviz-v-1__progress-bar-indicator');

  if (kvizProgressStep) {
    kvizProgressStep.textContent = `${activeQuestionId + 1} из ${kvizQuestionEls.length}`;
  }

  if (kvizProgressIndicator) {
    const progress = ((activeQuestionId + 1) / kvizQuestionEls.length) * 100;
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

function prevStep() {
  if (activeQuestionId - 1 < 0) {
    activeQuestionId = 0;
  } else {
    activeQuestionId--;
  }

  setTimeout(() => {
    updateQuestions();
  }, kvizDelay);

  setTimeout(() => {
    if (kvizV1Content) {
      kvizV1Content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, kvizDelay);
}

function nextStep() {
  if (activeQuestionId + 1 >= kvizQuestionEls.length) {
    activeQuestionId = kvizQuestionEls.length - 1;

    setTimeout(() => {
      if (kvizMain) kvizMain.classList.remove('active');
      if (kvizResults) kvizResults.classList.add('active');
    }, kvizDelay);

    setTimeout(() => {
      if (kvizV1) {
        kvizV1.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, kvizDelay);
  } else {
    activeQuestionId++;
    setTimeout(() => {
      if (kvizV1Content) {
        kvizV1Content.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, kvizDelay);
  }

  setTimeout(() => {
    updateQuestions();
  }, kvizDelay);
}

updateQuestions();

if (kvizControls) {
  kvizControls.addEventListener('click', (event) => {
    const isBackBtn = event.target.classList.contains('kviz-v-1__controls-back');
    const isNextBtn = event.target.classList.contains('kviz-v-1__controls-next');

    if (isBackBtn) prevStep();
    if (isNextBtn) nextStep();
  });
}

const kvizQuestionRadioEls = document.querySelectorAll('.kviz-v-1__question_radio');

kvizQuestionRadioEls.forEach((radioEl) => {
  const radioInputs = radioEl.querySelectorAll('.kviz-v-1__question-gallery-item-input');
  const customInput = radioEl.querySelector('.kviz-v-1__question-custom-input');

  if (customInput) {
    customInput.addEventListener('input', (event) => {
      if (event.target.value !== '') {
        radioInputs.forEach((radioInput) => (radioInput.checked = false));
      }
    });
  }

  radioInputs.forEach((radioInput) => {
    radioInput.addEventListener('input', () => {
      if (customInput) customInput.value = '';
      nextStep();
    });
  });
});

const kvizQuestionRadioTextEls = document.querySelectorAll('.kviz-v-1__question_radiotext');

kvizQuestionRadioTextEls.forEach((radioEl) => {
  const radioInputs = radioEl.querySelectorAll('.kviz-v-1__question-list-radio-input');
  const customInput = radioEl.querySelector('.kviz-v-1__question-list-text-input');

  if (customInput) {
    customInput.addEventListener('input', (event) => {
      if (event.target.value !== '') {
        radioInputs.forEach((radioInput) => (radioInput.checked = false));
      }
    });
  }

  radioInputs.forEach((radioInput) => {
    radioInput.addEventListener('input', () => {
      if (customInput) customInput.value = '';
      nextStep();
    });
  });
});
