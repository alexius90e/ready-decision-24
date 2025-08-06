const vidzhetModokV1El = document.querySelector('.vidzhet-modok-v-1');
const vidzhetModokV1Delay = 10000;

if (vidzhetModokV1El) {
  setTimeout(() => {
    vidzhetModokV1El.classList.add('active');
  }, vidzhetModokV1Delay);

  vidzhetModokV1El.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('vidzhet-modok-v-1__close');

    if (isLayout || isClose) {
      vidzhetModokV1El.classList.remove('active');
    }
  });
}
