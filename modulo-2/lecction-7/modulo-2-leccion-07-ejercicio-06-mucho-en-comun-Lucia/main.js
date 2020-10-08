"use strict";

const input = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const button = document.querySelector(".button");
const message = document.querySelector(".message");
let arrayBooksFilms = [];

button.addEventListener("click", function () {
  const inputValue = input.value;
  const inputValue2 = input2.value;
  arrayBooksFilms[0] = inputValue;
  arrayBooksFilms[1] = inputValue2;
  for (let i of arrayBooksFilms) {
    message.innerHTML += `A mí también me encantó ${i}. `;
  }
});
