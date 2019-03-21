'use strict';

(function () {
  var pilatesHeader = document.querySelector('.pilates-header');
  var menuIsOpen = document.querySelector('.menu-is-open');
  var headerNavBurgerMenu = document.querySelector('.header-nav__burger-menu');
  var menuIsOpenCloseMenu = document.querySelector('.menu-is-open__close-menu');

  menuIsOpen.classList.add('menu-is-open--display-none');

  var closeHamburgerMenu = function () {
    pilatesHeader.classList.remove('pilates-header--js-margin-bottom');
    menuIsOpen.classList.add('menu-is-open--display-none');
  }

  var onHamburgerMenuPressEsc = function (evt) {
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
