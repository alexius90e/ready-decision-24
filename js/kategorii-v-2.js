const kategoriiV1More = document.querySelector('.kategorii-v-2__more');

if (kategoriiV1More) {
  kategoriiV1More.addEventListener('click', (event) => {
    const isMoreButton = event.target.classList.contains('kategorii-v-2__more-button');

    if (isMoreButton) {
      const hiddenCards = document.querySelectorAll('.kategorii-v-2__card.hidden');

      event.currentTarget.classList.add('hidden');
      hiddenCards.forEach((card) => card.classList.remove('hidden'));
    }
  });
}

/// modal

const kategoriiV1Modal = document.querySelector('.kategorii-v-2__modal');
const kategoriiV1ModalForm = document.querySelector('.kategorii-v-2__modal-form');
const kategoriiV1CountButtons = document.querySelectorAll('.kategorii-v-2__card-controls-count');
const kategoriiV1CalculateButtons = document.querySelectorAll(
  '.kategorii-v-2__card-controls-calculate'
);
const kategoriiV1ContactButtons = [...kategoriiV1CountButtons, ...kategoriiV1CalculateButtons];

if (kategoriiV1Modal && kategoriiV1ModalForm) {
  kategoriiV1ContactButtons.forEach((button) => {
    button.addEventListener('click', () => {
      kategoriiV1Modal.classList.add('active');
    });
  });

  kategoriiV1Modal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('kategorii-v-2__modal-close-button');
    if (isLayout || isClose) kategoriiV1Modal.classList.remove('active');
  });

  kategoriiV1ModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    kategoriiV1Modal.classList.remove('active');
  });
}

/// kategorii-v-2__card-figure-image

const kategoriiV2Images = document.querySelectorAll('.kategorii-v-2__card-figure-image');

kategoriiV2Images.forEach((image) => {
  image.addEventListener('pointerenter', (event) => {
    event.currentTarget.style.transform = 'scale(1.08)';
  });

  image.addEventListener('pointerleave', (event) => {
    event.currentTarget.style.transform = null;
  });
});
