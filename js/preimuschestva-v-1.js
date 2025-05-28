const preimuschestvaV1Modal = document.querySelector('.preimuschestva-v-1__modal');
const preimuschestvaV1ModalForm = document.querySelector('.preimuschestva-v-1__modal-form');
const preimuschestvaV1ContactButtons = document.querySelectorAll(
  '.preimuschestva-v-1__card-callback-button'
);

if (preimuschestvaV1Modal && preimuschestvaV1ModalForm) {
  preimuschestvaV1ContactButtons.forEach((button) => {
    button.addEventListener('click', () => {
      preimuschestvaV1Modal.classList.add('active');
    });
  });

  preimuschestvaV1Modal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('preimuschestva-v-1__modal-close-button');
    if (isLayout || isClose) preimuschestvaV1Modal.classList.remove('active');
  });

  preimuschestvaV1ModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    preimuschestvaV1Modal.classList.remove('active');
  });
}
