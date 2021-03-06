const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const bodyOfDocument=document.querySelector('body')

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    //close
    header.classList.remove("open");
    bodyOfDocument.classList.remove("noscroll");
    fadeElements.forEach(function (element) {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
    });
  } else {
    //open
    bodyOfDocument.classList.add("noscroll");
    header.classList.add("open");
    fadeElements.forEach(function (element) {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});
