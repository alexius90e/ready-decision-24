const proektyV4CardSliders = document.querySelectorAll('.proekty-v-4__card-sliders');

proektyV4CardSliders.forEach((slidersElem) => {
  const baseClassName = '.proekty-v-4__card-sliders';
  const mainSliderElem = slidersElem.querySelector(`${baseClassName}-main .swiper`);
  const thumbsSliderElem = slidersElem.querySelector(`${baseClassName}-thumbs .swiper`);
  const mainSliderNext = slidersElem.querySelector(`${baseClassName}-main-controls-next`);
  const mainSliderPrev = slidersElem.querySelector(`${baseClassName}-main-controls-prev`);

  if (mainSliderElem && thumbsSliderElem) {
    const thumbsSwiper = new Swiper(thumbsSliderElem, {
      spaceBetween: 0,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      allowTouchMove: false,
    });
    const mainSwiper = new Swiper(mainSliderElem, {
      spaceBetween: 20,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: mainSliderNext,
        prevEl: mainSliderPrev,
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
  }
});

const proektyV4Modal = document.querySelector('.proekty-v-4__modal');
const proektyV4ModalForm = document.querySelector('.proekty-v-4__modal-form');
const proektyV4ContactButtons = document.querySelectorAll(
  '.proekty-v-4__card-content-controls-contact'
);

if (proektyV4Modal && proektyV4ModalForm) {
  proektyV4ContactButtons.forEach((button) => {
    button.addEventListener('click', () => {
      proektyV4Modal.classList.add('active');
    });
  });

  proektyV4Modal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('proekty-v-4__modal-close-button');
    if (isLayout || isClose) proektyV4Modal.classList.remove('active');
  });

  proektyV4ModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    proektyV4Modal.classList.remove('active');
  });
}

const proektyV4More = document.querySelector('.proekty-v-4__more');

if (proektyV4More) {
  proektyV4More.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('proekty-v-4__more-button');

    if (isButton) {
      const hiddenCards = document.querySelectorAll('.proekty-v-4__card.hidden');
      hiddenCards.forEach((card) => card.classList.remove('hidden'));
      event.currentTarget.style.display = 'none';
    }
  });
}
