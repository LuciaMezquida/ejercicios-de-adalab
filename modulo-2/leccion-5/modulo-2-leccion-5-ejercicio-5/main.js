"use strict";
const container = document.querySelector("body");

function changeColor(event) {
  if (event.key === "r") {
    container.classList.add("red");
    container.classList.remove("violet");
  } else if (event.key === "m") {
    container.classList.add("violet");
    container.classList.remove("red");
  }
}

document.addEventListener("keydown", changeColor);
