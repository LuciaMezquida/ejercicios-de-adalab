"use strict";

const text = document.querySelector(".container");

function changeColor() {
  let scrollPixel = window.scrollY;
  if (scrollPixel < 250) {
    text.classList.add("blue");
    text.classList.remove("yellow");
  } else {
    text.classList.add("yellow");
    text.classList.remove("blue");
  }
}

window.addEventListener("scroll", changeColor);
