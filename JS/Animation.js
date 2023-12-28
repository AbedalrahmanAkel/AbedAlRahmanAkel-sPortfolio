`use strict`;
//---------------reveal---------------
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    console.log(elementTop);
    console.log(windowHeight);
    console.log(elementVisible);
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
//---------------Slide-left---------------
function slideLeft() {
  var slideLefts = document.querySelectorAll(".slideLeft");

  for (var i = 0; i < slideLefts.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = slideLefts[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      slideLefts[i].classList.add("active");
    } else {
      slideLefts[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", slideLeft);
//---------------Slide-Right---------------
function slideRight() {
  var slideRights = document.querySelectorAll(".slideRight");

  for (var i = 0; i < slideRights.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = slideRights[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      slideRights[i].classList.add("active");
    } else {
      slideRights[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", slideRight);
