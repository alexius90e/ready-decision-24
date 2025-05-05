const footerV2NavMobileBlockEls = document.querySelectorAll('.footer-v-2__top-nav-mobile-block');

footerV2NavMobileBlockEls.forEach((block) => {
  block.addEventListener('click', (event) => {
    const isToggler = event.target.classList.contains('footer-v-2__top-nav-mobile-block-title');

    if (isToggler) event.currentTarget.classList.toggle('active');
  });
});
