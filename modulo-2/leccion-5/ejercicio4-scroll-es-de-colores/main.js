"use strict";

const text = document.querySelector(".container");

window.addEventListener("scroll", function () {
  let scrollPixel = window.scrollY;
  if (scrollPixel < 250) {
    text.classList.add("blue");
    text.classList.remove("yellow");
  } else {
    text.classList.add("yellow");
    text.classList.remove("blue");
  }
});
