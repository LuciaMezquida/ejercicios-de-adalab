"use strict";
class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return Math.pow(this.side, 2);
  }
}

const oneSquare = new Square(1);
const threeSquare = new Square(3);
const sevenSquare = new Square(7);

console.log(oneSquare.perimeter());
console.log(oneSquare.area());

console.log(threeSquare.perimeter());
console.log(threeSquare.area());

console.log(sevenSquare.perimeter());
console.log(sevenSquare.area());
