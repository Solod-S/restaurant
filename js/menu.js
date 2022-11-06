(() => {
  const menuOpenBtnRef = document.querySelector('[data-menu-button-open]');
  const menuCloseBtnRef = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  // const bodyOverscroll = document.querySelector('body');

  menuOpenBtnRef.addEventListener('click', () => {
    const expanded = menuOpenBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuOpenBtnRef.classList.toggle('--is-open');
    menuOpenBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('--is-open');
    // bodyOverscroll.classList.toggle('no-scroll');
  });
  menuCloseBtnRef.addEventListener('click', () => {
    menuOpenBtnRef.classList.toggle('--is-open');
    const expanded = menuOpenBtnRef.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuRef.classList.toggle('--is-open');
  });
})();
