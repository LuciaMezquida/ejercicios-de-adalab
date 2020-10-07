"use strict";

const text = document.querySelector(".text");
function sayHello() {
  const newText = document.createElement("p");
  newText.innerHTML = "lorem ipsum";
  text.appendChild(newText);
}

text.addEventListener("mouseover", sayHello);
