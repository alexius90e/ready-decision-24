const headerBurger = document.querySelector('.header-v-1__nav-menu-item-burger');
const headerMenu = document.querySelector('.header-v-1__menu');

if (headerBurger && headerMenu) {
  headerBurger.addEventListener('click', (event) => {
    const isActive = event.currentTarget.classList.contains('active');

    if (isActive) {
      event.currentTarget.classList.remove('active');
      headerMenu.classList.remove('active');
    } else {
      event.currentTarget.classList.add('active');
      headerMenu.classList.add('active');
    }
  });
}

const headerLists = document.querySelectorAll('.header-v-1__menu-list');

headerLists.forEach((list) => {
  list.addEventListener('click', (event) => {
    const isListActive = event.currentTarget.classList.contains('active');
    const isMoreBtn = event.target.classList.contains('header-v-1__menu-list-more-button');

    if (isMoreBtn) {
      event.target.innerText = isListActive ? 'Еще...' : 'Скрыть';

      if (isListActive) {
        event.currentTarget.classList.remove('active');
      } else {
        event.currentTarget.classList.add('active');
      }
    }
  });
});

const headerMobileNavItems = document.querySelectorAll('.header-v-1__menu-mobile-nav-item');
const headerMenuContent = document.querySelector('.header-v-1__menu-content');

headerMobileNavItems.forEach((mobileNavItem) => {
  mobileNavItem.addEventListener('click', (event) => {
    const isTitle = event.target.classList.contains('header-v-1__menu-mobile-nav-item-title');
    const isMoreBtn = event.target.classList.contains(
      'header-v-1__menu-mobile-nav-item-more-button'
    );
    const isBackBtn = event.target.classList.contains(
      'header-v-1__menu-mobile-nav-item-back-button'
    );

    if (isMoreBtn || isTitle) {
      event.currentTarget.classList.add('active');
      if (headerMenuContent) headerMenuContent.scrollTop = 0;
    }
    if (isBackBtn) event.currentTarget.classList.remove('active');
  });
});

////

const headerModal = document.querySelector('.header-v-1__modal');
const headerModalForm = document.querySelector('.header-v-1__modal-form');
const headerCallbackButtons = document.querySelectorAll('.header-v-1__contacts-callback-button');
const headerCallbackMobButtons = document.querySelectorAll(
  '.header-v-1__menu-mobile-contacts-callback-button'
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
    const isClose = event.target.classList.contains('header-v-1__modal-close-button');
    if (isLayout || isClose) headerModal.classList.remove('active');
  });

  headerModalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    headerModal.classList.remove('active');
  });
}
