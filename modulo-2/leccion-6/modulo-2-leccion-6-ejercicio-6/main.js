"use strict";

const pearsBasket = {
  min: 1,
  max: 15,
  current: 4,
  initial: 6,
  add: function (apples) {
    this.current = this.current + apples;
    if (this.current < this.max) {
      return this.current;
    } else if (this.current >= this.max) {
      this.current = this.current - apples;
      return "No puedes añadir " + apples + " peras";
    }
  },
  remove: function (apples) {
    this.current = this.current - apples;
    if (this.current > this.min) {
      return this.current;
    } else if (this.current <= this.min) {
      this.current = this.current + apples;
      return "No puedes quitar " + apples + " peras";
    }
  },
  restart: function () {
    this.current = this.initial;
    return this.current;
  },
};

console.log(pearsBasket.current);
console.log(pearsBasket.add(5));
console.log(pearsBasket.remove(1));
console.log(pearsBasket.current);
console.log(pearsBasket.remove(9));
console.log(pearsBasket.current);
console.log(pearsBasket.restart());
console.log(pearsBasket.current);
console.log(pearsBasket.add(5));
console.log(pearsBasket.add(5));
console.log(pearsBasket.current);
console.log(pearsBasket.restart());
