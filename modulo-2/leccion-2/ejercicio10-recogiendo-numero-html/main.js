"use strict";

const age = document.querySelector(".age");
const hours = document.querySelector(".hours");

console.log(age.innerHTML);
const trueAge = parseInt(age.innerHTML);
console.log(trueAge);

const days = trueAge * 365;
const calculatedHours = days * 24;

hours.innerHTML = calculatedHours;
