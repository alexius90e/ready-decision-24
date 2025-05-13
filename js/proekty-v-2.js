const proektyV2CardSliders = document.querySelectorAll('.proekty-v-2__card-sliders');

proektyV2CardSliders.forEach((slidersElem) => {
  const baseClassName = '.proekty-v-2__card-sliders';
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

const proektyV2Modal = document.querySelector('.proekty-v-2__modal');
const proektyV2ModalForm = document.querySelector('.proekty-v-2__modal-form');
const proektyV2ContactButtons = document.querySelectorAll(
  '.proekty-v-2__card-content-contact-button'
);

if (proektyV2Modal && proektyV2ModalForm) {
  proektyV2ContactButtons.forEach((button) => {
    button.addEventListener('click', () => {
      proektyV2Modal.classList.add('active');
    });
  });

  proektyV2Modal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('proekty-v-2__modal-close-button');
    if (isLayout || isClose) proektyV2Modal.classList.remove('active');
  });

  proektyV2ModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    proektyV2Modal.classList.remove('active');
  });
}

const proektyV2More = document.querySelector('.proekty-v-2__more');

if (proektyV2More) {
  proektyV2More.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('proekty-v-2__more-button');

    if (isButton) {
      const hiddenCards = document.querySelectorAll('.proekty-v-2__card.hidden');
      hiddenCards.forEach((card) => card.classList.remove('hidden'));
      event.currentTarget.style.display = 'none';
    }
  });
}
