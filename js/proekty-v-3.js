const proektyV3Modal = document.querySelector('.proekty-v-3__modal');
const proektyV3ModalForm = document.querySelector('.proekty-v-3__modal-form');
const proektyV3ContactButtons = document.querySelectorAll(
  '.proekty-v-3__card-content-contact-button'
);

if (proektyV3Modal && proektyV3ModalForm) {
  proektyV3ContactButtons.forEach((button) => {
    button.addEventListener('click', () => {
      proektyV3Modal.classList.add('active');
    });
  });

  proektyV3Modal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('proekty-v-3__modal-close-button');
    if (isLayout || isClose) proektyV3Modal.classList.remove('active');
  });

  proektyV3ModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    proektyV3Modal.classList.remove('active');
  });
}

const proektyV3More = document.querySelector('.proekty-v-3__more');

if (proektyV3More) {
  proektyV3More.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('proekty-v-3__more-button');

    if (isButton) {
      const hiddenCards = document.querySelectorAll('.proekty-v-3__card.hidden');
      hiddenCards.forEach((card) => card.classList.remove('hidden'));
      event.currentTarget.style.display = 'none';
    }
  });
}
