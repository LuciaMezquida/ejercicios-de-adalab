"use strict";

const numbers = [2, 8, 11, 4, 9, 5];
let acc = 0;

function average(arr) {
  for (let i = 0; i < arr.length; i++) {
    acc += numbers[i];
  }
  return "La media es igual a: " + acc / arr.length;
}

console.log(average(numbers));
