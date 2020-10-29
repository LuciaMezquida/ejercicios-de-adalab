"use strict";

class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return Math.pow(side, 2);
  }
}

const oneSquare = new Square();
console.log(oneSquare.perimeter(9));
console.log(oneSquare.area(9));
