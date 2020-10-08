"use strict";

const page = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    page.classList.toggle("red");
  });
}
