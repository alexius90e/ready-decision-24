const proektyV1CardSliders = document.querySelectorAll('.proekty-v-1__card-sliders');

proektyV1CardSliders.forEach((slidersElem) => {
  const baseClassName = '.proekty-v-1__card-sliders';
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

const proektyV1Modal = document.querySelector('.proekty-v-1__modal');
const proektyV1ModalForm = document.querySelector('.proekty-v-1__modal-form');
const proektyV1ContactButtons = document.querySelectorAll(
  '.proekty-v-1__card-content-contact-button'
);

if (proektyV1Modal && proektyV1ModalForm) {
  proektyV1ContactButtons.forEach((button) => {
    button.addEventListener('click', () => {
      proektyV1Modal.classList.add('active');
    });
  });

  proektyV1Modal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('proekty-v-1__modal-close-button');
    if (isLayout || isClose) proektyV1Modal.classList.remove('active');
  });

  proektyV1ModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    proektyV1Modal.classList.remove('active');
  });
}

const proektyV1More = document.querySelector('.proekty-v-1__more');

if (proektyV1More) {
  proektyV1More.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('proekty-v-1__more-button');

    if (isButton) {
      const hiddenCards = document.querySelectorAll('.proekty-v-1__card.hidden');
      hiddenCards.forEach((card) => card.classList.remove('hidden'));
      event.currentTarget.style.display = 'none';
    }
  });
}
