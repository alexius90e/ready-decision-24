const modOknoV1Els = document.querySelectorAll('.mod-okno-v-1');

modOknoV1Els.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('okno-spasibo-v-1__close-button');
    if (isLayout || isClose) modal.classList.remove('active');
  });
});

const modOknoV1ButtonEls = document.querySelectorAll('.mod-okno-v-1-button');

modOknoV1ButtonEls.forEach((button) => {
  button.addEventListener('click', (event) => {
    const targetModalId = event.currentTarget.dataset.modalid;

    if (targetModalId) {
      const modal = document.getElementById(targetModalId);
      if (modal) modal.classList.add('active');
    }
  });
});
