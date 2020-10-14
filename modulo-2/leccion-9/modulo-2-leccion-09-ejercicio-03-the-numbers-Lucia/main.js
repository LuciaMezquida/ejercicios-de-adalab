'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber(){
  const pairNumbers = [];
  const threeMultiple = [];
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      pairNumbers.push(lostNumbers[i])
    }
  }
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 3 === 0) {
      threeMultiple.push(lostNumbers[i])
    }
  }

  return pairNumbers.concat(threeMultiple);
}

console.log(bestLostNumber())