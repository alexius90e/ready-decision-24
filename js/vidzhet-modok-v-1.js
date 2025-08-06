const vidzhetModokV1El = document.querySelector('.vidzhet-modok-v-1');
const vidzhetModokV1Delay = 10000;
const tenMinutesInMs = 1 * 60 * 1000;

function showVidzhetModokV1() {
  if (vidzhetModokV1El) {
    vidzhetModokV1El.classList.add('active');
  }
}

if (vidzhetModokV1El) {
  const lastShowTime = localStorage.getItem('vidzhetModokV1ShowTime');

  if (lastShowTime === null) {
    setTimeout(() => showVidzhetModokV1(), vidzhetModokV1Delay);
    console.log(vidzhetModokV1Delay);
  } else if (new Date().getTime() - Number(lastShowTime) >= tenMinutesInMs) {
    setTimeout(() => showVidzhetModokV1(), vidzhetModokV1Delay);
    console.log(vidzhetModokV1Delay);
  } else {
    setTimeout(() => showVidzhetModokV1(), new Date().getTime() - Number(lastShowTime));
    console.log(new Date().getTime() - Number(lastShowTime));
  }

  vidzhetModokV1El.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('vidzhet-modok-v-1__close');

    if (isLayout || isClose) {
      vidzhetModokV1El.classList.remove('active');
      localStorage.setItem('vidzhetModokV1ShowTime', new Date().getTime());
    }
  });
}
