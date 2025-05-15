const etapyV1CardsElems = document.querySelectorAll('.etapy-v-1__cards');

etapyV1CardsElems.forEach((cardsElem) => {
  const baseClassName = '.etapy-v-1__cards';
  const swiperElem = cardsElem.querySelector(`${baseClassName} .swiper`);
  const swiperNext = cardsElem.querySelector(`${baseClassName}-controls-next`);
  const swiperPrev = cardsElem.querySelector(`${baseClassName}-controls-prev`);

  if (swiperElem) {
    const mainSwiper = new Swiper(swiperElem, {
      spaceBetween: 15,
      slidesPerView: 1,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        1020: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1580: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: swiperNext,
        prevEl: swiperPrev,
      },
    });
  }
});

const etapyV1Modal = document.querySelector('.etapy-v-1__modal');
const etapyV1ModalForm = document.querySelector('.etapy-v-1__modal-form');
const etapyV1DiscussButtons = document.querySelectorAll('.etapy-v-1__card-discuss-button');

if (etapyV1Modal && etapyV1ModalForm) {
  etapyV1DiscussButtons.forEach((button) => {
    button.addEventListener('click', () => {
      etapyV1Modal.classList.add('active');
    });
  });

  etapyV1Modal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('etapy-v-1__modal-close-button');
    if (isLayout || isClose) etapyV1Modal.classList.remove('active');
  });

  etapyV1ModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    etapyV1Modal.classList.remove('active');
  });
}
