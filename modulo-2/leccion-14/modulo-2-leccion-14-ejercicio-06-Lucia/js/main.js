"use strict";

const counterPlace = document.querySelector(".counter");
const stop = document.querySelector(".stop");
const cont = document.querySelector(".continue");

let counter = 0;
let temp;
counterPlace.innerHTML = "0";

const incrementAndShowCounter = () => {
  counter++;
  counterPlace.innerHTML = counter;
};
const stopCounter = () => {
  clearInterval(temp);
};
const contCounter = () => {
  temp = setInterval(incrementAndShowCounter, 1000);
  incrementAndShowCounter();
};

temp = setInterval(incrementAndShowCounter, 1000);
stop.addEventListener("click", stopCounter);
cont.addEventListener("click", contCounter);
