`use strict`;
//---------------reveal---------------
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 200;
    console.log(elementTop); //TEST
    console.log(windowHeight); //TEST
    console.log(elementVisible); //TEST
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
  let slideLefts = document.querySelectorAll(".slideLeft");

  for (let i = 0; i < slideLefts.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideLefts[i].getBoundingClientRect().top;
    let elementVisible = 150;

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
  let slideRights = document.querySelectorAll(".slideRight");

  for (let i = 0; i < slideRights.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = slideRights[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      slideRights[i].classList.add("active");
    } else {
      slideRights[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", slideRight);
// -------------------- navbar Mobile View -----------------
function navbarMobileView() {
  let navbarLinksContainer = document.querySelector(".navbar__linksContainer");
  navbarLinksContainer.classList.toggle("navbar--mobileView");
}