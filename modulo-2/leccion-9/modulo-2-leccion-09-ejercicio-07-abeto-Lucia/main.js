'use strict';

function christmasTree() {
  let triangle = '▲'
  let spaces = ' '
  console.log('    ★')
  for (let numTriangles = 1, numSpaces = 4; numTriangles <= 9; numTriangles+=2, numSpaces--) {
    let moreSpaces = spaces.repeat(numSpaces)
    let moreTriangles = triangle.repeat(numTriangles)
    console.log(moreSpaces + moreTriangles) 
  }
  console.log('    |')
}
christmasTree()

