"use strict";
let counter = 0;

const incrementAndShowCounter = () => {
  if (counter < 12) {
    counter++;
    const time = document.querySelector(".js-counter");
    time.innerHTML = counter;
  }
};

setInterval(incrementAndShowCounter, 1000);
