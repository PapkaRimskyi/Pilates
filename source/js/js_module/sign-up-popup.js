'use strict';

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

  var closeAppointmentPopup = function (success) {
    if (success) {
      makeAnAppointmentForm.reset();
      makeAnAppointment.classList.add('make-an-appointment--js-display-none');
    } else {
      makeAnAppointment.classList.add('make-an-appointment--js-display-none');
    }
  }

  var onAppointmentPopupPressEsc = function (evt) {
    var activeElement = document.activeElement;
    if (evt.keyCode === window.constants.keyCode.ESC && activeElement !== telJs && activeElement !== eMailJs && activeElement !== nameJs) {
      closeAppointmentPopup();
    }
  }

  var addSignUpClickHandler = function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      makeAnAppointment.classList.remove('make-an-appointment--js-display-none');
      document.addEventListener('keydown', onAppointmentPopupPressEsc);
      getPopupCentered(makeAnAppointment);
    });
  };

  for (var i = 0; i < scheduleAndCostSignUp.length; i++) {
    addSignUpClickHandler(scheduleAndCostSignUp[i]);
  };

  makeAnAppointmentClosePopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    makeAnAppointment.classList.add('make-an-appointment--js-display-none');
    document.removeEventListener('keydown', onAppointmentPopupPressEsc);
  });

  var getPopupCentered = function (elem) {
    elem.scrollIntoView({block: 'center', behavior: 'smooth', inline: 'center'});
  }

  makeAnAppointmentForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(makeAnAppointmentForm), successSaveFormHandler, errorSaveFormHandler);
    evt.preventDefault();
  });

  var successSaveFormHandler = function () {
    closeAppointmentPopup(forScsUpload);
  }

  var errorSaveFormHandler = function () {
    closeAppointmentPopup();
  }
})();
