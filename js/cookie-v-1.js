const cookieV1 = document.querySelector('.cookie-v-1');

if (cookieV1) {
  if (localStorage.getItem('cookie_v_1') === 'hidden') {
    cookieV1.classList.add('hidden');
  } else {
    cookieV1.classList.remove('hidden');
  }

  cookieV1.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('cookie-v-1__button');
    if (isButton) {
      event.currentTarget.classList.add('hidden');
      localStorage.setItem('cookie_v_1', 'hidden');
    }
  });
}
