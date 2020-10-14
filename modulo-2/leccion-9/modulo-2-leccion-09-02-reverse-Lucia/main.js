'use strict';

function get100Numbers () {
  let arrayHundred = []
  for (let i = 1; i <= 100; i++) {
    arrayHundred.push(i);
    console.log(arrayHundred);//loguear cada iteración
  }
  return arrayHundred
}

function getReversed100Numbers() {
  let arrayReverse = get100Numbers()
  arrayReverse = arrayReverse.reverse();
  console.log(arrayReverse)
}
getReversed100Numbers()