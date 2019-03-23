'use strict';

(function () {
  var leftArrow = document.querySelector('.arrow-left-js');
  var rightArrow = document.querySelector('.arrow-right-js');
  var reviewSwitchInput = document.querySelectorAll('.review__switch-input');

  var sliderIndex =  1;

  var showSlider = function (n) {
    var i;
    if (n > reviewSwitchInput.length) {
      sliderIndex = 1;
    }
    if (n < 1) {
      sliderIndex = reviewSwitchInput.length;
    }
    reviewSwitchInput[sliderIndex - 1].checked = true;
  }

  var plusSlider = function (n) {
    showSlider(sliderIndex += n);
  }

  leftArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(-1);
  });

  rightArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    plusSlider(1);
  });
})();
