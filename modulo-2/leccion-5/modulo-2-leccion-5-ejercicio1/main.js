"use strict";

const text = document.querySelector(".text");
const button = document.querySelector(".button");

function sayHello() {
  return (text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!");
}

button.addEventListener("click", sayHello);
