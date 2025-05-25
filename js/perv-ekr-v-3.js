const pervEkrV3SwiperEl = document.querySelector('.perv-ekr-v-3__slider .swiper');

const pervEkrV3Swiper = new Swiper(pervEkrV3SwiperEl, {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

const pervEkrV3Modal = document.querySelector('.perv-ekr-v-3__modal');
const pervEkrV3ModalForm = document.querySelector('.perv-ekr-v-3__modal-form');
const pervEkrV3ContactButtons = document.querySelectorAll(
  '.perv-ekr-v-3__card-content-contact-button'
);

if (pervEkrV3Modal && pervEkrV3ModalForm) {
  pervEkrV3ContactButtons.forEach((button) => {
    button.addEventListener('click', () => {
      pervEkrV3Modal.classList.add('active');
    });
  });

  pervEkrV3Modal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('perv-ekr-v-3__modal-close-button');
    if (isLayout || isClose) pervEkrV3Modal.classList.remove('active');
  });

  pervEkrV3ModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    pervEkrV3Modal.classList.remove('active');
  });
}

const pervEkrV3More = document.querySelector('.perv-ekr-v-3__more');

if (pervEkrV3More) {
  pervEkrV3More.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('perv-ekr-v-3__more-button');

    if (isButton) {
      const hiddenCards = document.querySelectorAll('.perv-ekr-v-3__card.hidden');
      hiddenCards.forEach((card) => card.classList.remove('hidden'));
      event.currentTarget.style.display = 'none';
    }
  });
}
