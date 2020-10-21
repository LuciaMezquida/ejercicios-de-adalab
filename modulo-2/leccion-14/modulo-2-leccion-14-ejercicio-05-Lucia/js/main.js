"use strict";
let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".js-counter");
  time.innerHTML = counter;
  if (counter === 12) {
    clearInterval(temp);
  }
};

let temp = setInterval(incrementAndShowCounter, 1000);
