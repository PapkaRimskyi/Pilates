(function () {
  const makeAnAppointment = document.querySelector('.make-an-appointment');
  const makeAnAppointmentClosePopup = document.querySelector('.make-an-appointment__close-popup');
  const scheduleAndCostSignUp = document.querySelectorAll('.schedule-and-cost__sign-up');
  const telJs = document.querySelector('.tel-js');
  const eMailJs = document.querySelector('.email-js');
  const nameJs = document.querySelector('.name-js');
  const makeAnAppointmentForm = document.querySelector('.make-an-appointment__form');
  const forScsUpload = 1;

  const classActiveArray = ['review__switch-link--active', 'reviews__review-section--active'];

  let closeAppointmentPopup = function (success) {
    if (success) {
      makeAnAppointmentForm.reset();
      makeAnAppointment.classList.add('make-an-appointment--js-display-none');
    } else {
      makeAnAppointment.classList.add('make-an-appointment--js-display-none');
    }
  }

  let onAppointmentPopupPressEsc = function (evt) {
    let activeElement = document.activeElement;
    if (evt.keyCode === window.constants.keyCode.ESC && activeElement !== telJs && activeElement !== eMailJs && activeElement !== nameJs) {
      closeAppointmentPopup();
    }
  }

  let addSignUpClickHandler = function (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      makeAnAppointment.classList.remove('make-an-appointment--js-display-none');
      document.addEventListener('keydown', onAppointmentPopupPressEsc);
      getPopupCentered(makeAnAppointment);
    });
  };

  for (let i = 0; i < scheduleAndCostSignUp.length; i++) {
    addSignUpClickHandler(scheduleAndCostSignUp[i]);
  };

  makeAnAppointmentClosePopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    makeAnAppointment.classList.add('make-an-appointment--js-display-none');
    document.removeEventListener('keydown', onAppointmentPopupPressEsc);
  });

  let getPopupCentered = function (elem) {
    elem.scrollIntoView({block: 'center', behavior: 'smooth', inline: 'center'});
  }

  makeAnAppointmentForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(makeAnAppointmentForm), successSaveFormHandler, errorSaveFormHandler);
    evt.preventDefault();
  });

  let successSaveFormHandler = function () {
    closeAppointmentPopup(forScsUpload);
  }

  let errorSaveFormHandler = function () {
    closeAppointmentPopup();
  }
})();
