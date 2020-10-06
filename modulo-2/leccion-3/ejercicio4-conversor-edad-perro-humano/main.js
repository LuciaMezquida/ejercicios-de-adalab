"use strict";
//selecciono el campo del input

function getDogYear(age) {
  if (age === 1) {
    return "Su perro tiene 15 años";
  } else if (age === 2) {
    return "Su perro tiene 24 años";
  } else {
    return "Su perro tiene " + age * 5 + " años";
  }
}
const newAge = document.querySelector(".dogYear");
console.log(newAge);
let age = newAge.value;
console.log(age);
age = parseInt(age);
console.log(age);

const text = document.querySelector(".text");
text.innerHTML = getDogYear(age);
