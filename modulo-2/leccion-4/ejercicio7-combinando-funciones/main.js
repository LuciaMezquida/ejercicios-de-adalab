"use strict";

function parImpar(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function getEl(elem) {
  return document.querySelector(elem);
}

let number = getEl(".text");
number = parseInt(number.innerHTML);
console.log("Este número es par: " + parImpar(number));
