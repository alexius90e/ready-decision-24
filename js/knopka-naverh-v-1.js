window.addEventListener('scroll', () => {
  const button = document.querySelector('.knopka-naverh-v-1__button');
  const borderHeight = 360;
  const scrollY = window.scrollY;

  if (button) {
    if (scrollY >= borderHeight) {
      button.classList.remove('hidden');
    } else {
      button.classList.add('hidden');
    }
  }
});
