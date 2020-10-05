"use strict";

function parImpar(number) {
  if (number % 2 === 0) {
    return `${number} es par`;
  } else {
    return `${number} es impar`;
  }
}

console.log(parImpar(33));
console.log(parImpar(22));
