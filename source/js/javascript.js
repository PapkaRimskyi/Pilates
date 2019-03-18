'use strict';

var pilatesHeader = document.querySelector(".pilates-header");
var anchorsJsClass = document.querySelector(".anchors--js-class");
var menuIsOpen = document.querySelector(".menu-is-open");
var headerNav = document.querySelector(".header-nav");
var studioPresentation = document.querySelector(".studio-presentation");
var headerNavBurgerMenu = document.querySelector(".header-nav__burger-menu");
var menuIsOpenCloseMenu = document.querySelector(".menu-is-open__close-menu");
var makeAnAppointmentClosePopup = document.querySelector(".make-an-appointment__close-popup");
var makeAnAppointment = document.querySelector(".make-an-appointment");
var scheduleAndCostSignUp = document.querySelectorAll(".schedule-and-cost__sign-up");
var reviewSwitchLink = document.querySelectorAll(".review__switch-link");
var reviewsReviewSection = document.querySelectorAll(".reviews__review-section");

var classActiveArray = ["review__switch-link--active", "reviews__review-section--active"];

headerNav.classList.remove("display-none");
studioPresentation.classList.remove("display-none");
menuIsOpen.classList.add("menu-is-open--display-none");

headerNavBurgerMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  headerNav.classList.add("display-none");
  studioPresentation.classList.add("display-none");
  anchorsJsClass.classList.add("anchors--js-display");
  pilatesHeader.classList.add("pilates-header--js-margin-bottom");
  menuIsOpen.classList.remove("menu-is-open--display-none");
});

menuIsOpenCloseMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  headerNav.classList.remove("display-none");
  studioPresentation.classList.remove("display-none");
  anchorsJsClass.classList.remove("anchors--js-display");
  pilatesHeader.classList.remove("pilates-header--js-margin-bottom");
  menuIsOpen.classList.add("menu-is-open--display-none");
});

makeAnAppointmentClosePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  makeAnAppointment.classList.add("make-an-appointment--js-display-none");
});

var addSignUpClickHandler = function (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    makeAnAppointment.classList.remove("make-an-appointment--js-display-none");
  });
};

for (var i = 0; i < scheduleAndCostSignUp.length; i++) {
  addSignUpClickHandler(scheduleAndCostSignUp[i]);
};

var removeClassActive = function (selector, classActive) {
  for (var i = 0; i < selector.length; i++) {
    selector[i].classList.remove(classActive);
  }
};

var addReviewLinkClickHandler = function (link, container) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    removeClassActive(reviewSwitchLink, classActiveArray[0]);
    link.classList.add(classActiveArray[0]);
    removeClassActive(reviewsReviewSection, classActiveArray[1]);
    container.classList.add(classActiveArray[1]);
  })
};

for (var i = 0; i < reviewSwitchLink.length; i++) {
  addReviewLinkClickHandler(reviewSwitchLink[i], reviewsReviewSection[i]);
}
