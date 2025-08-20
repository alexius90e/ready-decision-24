const vidzhetModokV1El = document.querySelector('.vidzhet-modok-v-1');
const vidzhetModokV1Delay = 30000;
const tenMinutesInMs = 10 * 60 * 1000;

function showVidzhetModokV1() {
  if (vidzhetModokV1El) {
    vidzhetModokV1El.classList.add('active');
  }
}

function updateVidgetTimer() {
  const lastShowTimeStr = localStorage.getItem('vidzhetModokV1ShowTime');
  const lastShowTime = new Date(lastShowTimeStr).getTime();
  const delta = new Date().getTime() - lastShowTime;

  console.log(delta);

  if (lastShowTime === 0 || delta >= tenMinutesInMs) {
    setTimeout(() => showVidzhetModokV1(), vidzhetModokV1Delay);
    console.log('lastShowTime === 0 || delta >= tenMinutesInMs');
  } else {
    setTimeout(() => showVidzhetModokV1(), tenMinutesInMs - delta);
    console.log('delta < tenMinutesInMs');
  }
}

if (vidzhetModokV1El) {
  updateVidgetTimer();

  vidzhetModokV1El.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('vidzhet-modok-v-1__close');

    if (isLayout || isClose) {
      vidzhetModokV1El.classList.remove('active');
      localStorage.setItem('vidzhetModokV1ShowTime', new Date().toISOString());
      updateVidgetTimer();
    }
  });
}
