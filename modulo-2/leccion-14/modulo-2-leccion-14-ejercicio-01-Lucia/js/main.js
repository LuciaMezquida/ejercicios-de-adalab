"use strict";

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".js-time");
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);
