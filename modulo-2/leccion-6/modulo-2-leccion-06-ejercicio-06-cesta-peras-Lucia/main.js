"use strict";

const pearsBasket = {
  min: 1,
  max: 15,
  current: 4,
  initial: 6,
  add: function () {
    const newPearsNumber = this.current + 1;
    if (newPearsNumber <= this.max) {
      this.current = newPearsNumber;
      return this.current;
    }
    return "No puedes añadir más peras";
  },
  remove: function () {
    const newPearsNumber = this.current - 1;
    if (newPearsNumber >= this.min) {
      this.current = newPearsNumber;
      return this.current;
    }
    return "No puedes quitar más peras";
  },
  restart: function () {
    this.current = this.initial;
    return this.current;
  },
};

console.log(pearsBasket.current);
console.log(pearsBasket.add());
console.log(pearsBasket.remove());
console.log(pearsBasket.current);
console.log(pearsBasket.remove());
console.log(pearsBasket.remove());
console.log(pearsBasket.remove());
console.log(pearsBasket.remove());
