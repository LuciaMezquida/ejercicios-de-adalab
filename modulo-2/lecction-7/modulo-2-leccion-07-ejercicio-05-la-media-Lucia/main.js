"use strict";

const numbers = [2, 8, 11, 4, 9, 5];
const moreNumbers = [22, 56, 8, 12, 9, 31];
let acc = 0;

function average(arr) {
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i];
  }
  return "La media es igual a: " + acc / arr.length;
}

console.log(average(numbers));
console.log(average(moreNumbers));
