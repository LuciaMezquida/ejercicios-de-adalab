"use strict";

const button = document.querySelector(".button");

function sayHello() {
  const name = document.querySelector(".name").value;
  console.log(`Hola ${name}`);
}

button.addEventListener("click", sayHello);
