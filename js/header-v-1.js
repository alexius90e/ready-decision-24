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

headerMobileNavItems.forEach((mobileNavItem) => {
  mobileNavItem.addEventListener('click', (event) => {
    const isMoreBtn = event.target.classList.contains(
      'header-v-1__menu-mobile-nav-item-more-button'
    );
    const isBackBtn = event.target.classList.contains(
      'header-v-1__menu-mobile-nav-item-back-button'
    );

    if (isMoreBtn) event.currentTarget.classList.add('active');
    if (isBackBtn) event.currentTarget.classList.remove('active');
  });
});
