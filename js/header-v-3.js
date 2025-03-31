const headerModal = document.querySelector('.header-v-3__modal');
const headerModalForm = document.querySelector('.header-v-3__modal-form');
const headerCallbackButtons = document.querySelectorAll('.header-v-3__contacts-callback-button');
const headerCallbackMobButtons = document.querySelectorAll(
  '.header-v-3__menu-mobile-contacts-callback-button'
);
const headerContactButtons = [...headerCallbackButtons, ...headerCallbackMobButtons];

if (headerModal && headerModalForm) {
  headerContactButtons.forEach((button) => {
    button.addEventListener('click', () => {
      headerModal.classList.add('active');
    });
  });

  headerModal.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isClose = event.target.classList.contains('header-v-3__modal-close-button');
    if (isLayout || isClose) headerModal.classList.remove('active');
  });

  headerModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    headerModal.classList.remove('active');
  });
}
