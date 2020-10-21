"use strict";
let counter = 0;
const time = document.querySelector(".js-message");

const incrementAndShowCounter = () => {
  counter++;

  if (counter === 1) {
    time.innerHTML = `Escrito hace ${counter} segundo`;
  }
  if (counter > 1 && counter < 60) {
    time.innerHTML = `Escrito hace ${counter} segundos`;
  } else if (counter >= 60) time.innerHTML = `Escrito hace 1 min`;
};

setInterval(incrementAndShowCounter, 1000);
