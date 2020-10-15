'use strict';

function christmasTree(floors) {
  let acc = ''
  console.log('★')
  for (let i = 1; i <= floors; i++) {
    acc += '▲'
    console.log(acc) 
  }
  console.log('|')
}
christmasTree(5)