"use strict";

(function () {
  var leftArrow = document.querySelector('.arrow-left-js');
  var rightArrow = document.querySelector('.arrow-right-js');
  var reviewSwitchInput = document.querySelectorAll('.review__switch-input');
  var sliderIndex = 1;

  var showSlider = function showSlider(n) {
    var i;

    if (n > reviewSwitchInput.length) {
      sliderIndex = 1;
    }

    if (n < 1) {
      sliderIndex = reviewSwitchInput.length;
    }

    reviewSwitchInput[sliderIndex - 1].checked = true;
  };

  var plusSlider = function plusSlider(n) {
    showSlider(sliderIndex += n);
  };

  leftArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(-1);
  });
  rightArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(1);
  });
})();

(function () {
  var URL_SAVE = 'https://echo.htmlacademy.ru';
  var SUCCESS_STATUS_CODE = 200;

  var getRequestPreparation = function getRequestPreparation(onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_STATUS_CODE) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    return xhr;
  };

  var save = function save(data, onLoad, onError) {
    var xhr = getRequestPreparation(onLoad, onError);
    xhr.addEventListener('error', function () {
      onError('Ошибка ' + xhr.status + ' ' + xhr.statusText);
    });
    xhr.open('POST', URL_SAVE);
    xhr.send(data);
  };

  window.backend = {
    save: save
  };
})();

(function () {
  var pilatesHeader = document.querySelector('.pilates-header');
  var menuIsOpen = document.querySelector('.menu-is-open');
  var headerNavBurgerMenu = document.querySelector('.header-nav__burger-menu');
  var menuIsOpenCloseMenu = document.querySelector('.menu-is-open__close-menu');
  menuIsOpen.classList.add('menu-is-open--display-none');

  var closeHamburgerMenu = function closeHamburgerMenu() {
    pilatesHeader.classList.remove('pilates-header--js-margin-bottom');
    menuIsOpen.classList.add('menu-is-open--display-none');
  };

  var onHamburgerMenuPressEsc = function onHamburgerMenuPressEsc(evt) {
    if (evt.keyCode === window.constants.keyCode.ESC) {
      closeHamburgerMenu();
    }
  };

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

(function () {
  window.constants = {
    keyCode: {
      ESC: 27,
      ENTER: 13
    }
  };
})();

(function () {
  var makeAnAppointment = document.querySelector('.make-an-appointment');
  var makeAnAppointmentClosePopup = document.querySelector('.make-an-appointment__close-popup');
  var scheduleAndCostSignUp = document.querySelectorAll('.schedule-and-cost__sign-up');
  var telJs = document.querySelector('.tel-js');
  var eMailJs = document.querySelector('.email-js');
  var nameJs = document.querySelector('.name-js');
  var makeAnAppointmentForm = document.querySelector('.make-an-appointment__form');
  var forScsUpload = 1;
  var classActiveArray = ['review__switch-link--active', 'reviews__review-section--active'];

  var closeAppointmentPopup = function closeAppointmentPopup(success) {
    if (success) {
      makeAnAppointmentForm.reset();
      makeAnAppointment.classList.add('make-an-appointment--js-display-none');
    } else {
      makeAnAppointment.classList.add('make-an-appointment--js-display-none');
    }
  };

  var onAppointmentPopupPressEsc = function onAppointmentPopupPressEsc(evt) {
    var activeElement = document.activeElement;

    if (evt.keyCode === window.constants.keyCode.ESC && activeElement !== telJs && activeElement !== eMailJs && activeElement !== nameJs) {
      closeAppointmentPopup();
    }
  };

  var addSignUpClickHandler = function addSignUpClickHandler(link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      makeAnAppointment.classList.remove('make-an-appointment--js-display-none');
      document.addEventListener('keydown', onAppointmentPopupPressEsc);
      getPopupCentered(makeAnAppointment);
    });
  };

  for (var i = 0; i < scheduleAndCostSignUp.length; i++) {
    addSignUpClickHandler(scheduleAndCostSignUp[i]);
  }

  ;
  makeAnAppointmentClosePopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    makeAnAppointment.classList.add('make-an-appointment--js-display-none');
    document.removeEventListener('keydown', onAppointmentPopupPressEsc);
  });

  var getPopupCentered = function getPopupCentered(elem) {
    elem.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
      inline: 'center'
    });
  };

  makeAnAppointmentForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(makeAnAppointmentForm), successSaveFormHandler, errorSaveFormHandler);
    evt.preventDefault();
  });

  var successSaveFormHandler = function successSaveFormHandler() {
    closeAppointmentPopup(forScsUpload);
  };

  var errorSaveFormHandler = function errorSaveFormHandler() {
    closeAppointmentPopup();
  };
})();