const vidzhetSvV1 = document.querySelector('.vidzhet-sv-v-1');
const vidzhetSvV1Toggler = document.querySelector('.vidzhet-sv-v-1__toggler');

if (vidzhetSvV1Toggler && vidzhetSvV1) {
  vidzhetSvV1Toggler.addEventListener('click', () => {
    vidzhetSvV1.classList.toggle('active');
  });
}


const vidzhetSvV1Modal = document.querySelector('.vidzhet-sv-v-1__modal');
const vidzhetSvV1ModalForm = document.querySelector('.vidzhet-sv-v-1__modal-form');
const vidzhetSvV1CallbackButtons = document.querySelectorAll('.vidzhet-sv-v-1__sidebar-callback');

if (vidzhetSvV1Modal && vidzhetSvV1ModalForm) {
  vidzhetSvV1CallbackButtons.forEach((button) => {
    button.addEventListener('click', () => {
      vidzhetSvV1Modal.classList.add('active');
    });
  });

  vidzhetSvV1Modal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('vidzhet-sv-v-1__modal-close-button');
    if (isLayout || isClose) vidzhetSvV1Modal.classList.remove('active');
  });

  vidzhetSvV1ModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    vidzhetSvV1Modal.classList.remove('active');
  });
}