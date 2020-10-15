'use strict';

function christmasTree(floors) {
  let acc = ''
  for (let i = 1; i <= floors; i++) {
    acc += '▲'
    console.log(acc) 
  }
}
christmasTree(8)