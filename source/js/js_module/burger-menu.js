(function () {
  const pilatesHeader = document.querySelector('.pilates-header');
  const menuIsOpen = document.querySelector('.menu-is-open');
  const headerNavBurgerMenu = document.querySelector('.header-nav__burger-menu');
  const menuIsOpenCloseMenu = document.querySelector('.menu-is-open__close-menu');

  menuIsOpen.classList.add('menu-is-open--display-none');

  let closeHamburgerMenu = function () {
    pilatesHeader.classList.remove('pilates-header--js-margin-bottom');
    menuIsOpen.classList.add('menu-is-open--display-none');
  }

  let onHamburgerMenuPressEsc = function (evt) {
    if (evt.keyCode === window.constants.keyCode.ESC) {
      closeHamburgerMenu();
    }
  }

  headerNavBurgerMenu.addEventListener('click', function (evt) {
    evt.preventDefault();
    pilatesHeader.classList.add('pilates-header--js-margin-bottom');
    menuIsOpen.classList.remove('menu-is-open--display-none');
    document.addEventListener('keydown', onHamburgerMenuPressEsc);
  });

  menuIsOpenCloseMenu.addEventListener('click', function (evt) {
    evt.preventDefault();
    pilatesHeader.classList.remove('pilates-header--js-margin-bottom');
    menuIsOpen.classList.add('menu-is-open--display-none');
    document.removeEventListener('keydown', onHamburgerMenuPressEsc);
  });
})();
