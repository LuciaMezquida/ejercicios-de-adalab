"use strict";
//selecciono el campo del input

const newAge = document.querySelector(".dogYear");

function getDogYear() {
  let age = newAge.value;
  age = parseInt(age);
  const text = document.querySelector(".text");
  text.innerHTML;
  if (age === 1) {
    text.innerHTML = "Su perro tiene 15 años";
  } else if (age === 2) {
    text.innerHTML = "Su perro tiene 24 años";
  } else {
    text.innerHTML = "Su perro tiene " + age * 5 + " años";
  }
}

newAge.addEventListener("change", getDogYear);
