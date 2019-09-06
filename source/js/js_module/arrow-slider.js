(function () {
  let leftArrow = document.querySelector('.arrow-left-js');
  let rightArrow = document.querySelector('.arrow-right-js');
  let reviewSwitchInput = document.querySelectorAll('.review__switch-input');

  let sliderIndex =  1;

  let showSlider = function (n) {
    let i;
    if (n > reviewSwitchInput.length) {
      sliderIndex = 1;
    }
    if (n < 1) {
      sliderIndex = reviewSwitchInput.length;
    }
    reviewSwitchInput[sliderIndex - 1].checked = true;
  }

  let plusSlider = function (n) {
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
