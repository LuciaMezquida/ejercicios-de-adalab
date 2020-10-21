"use strict";
const btn = document.querySelector(".js-btn");
const removeMsg = () => {
  btn.innerHTML = "¿Te has dormido?";
};

let timer = setTimeout(removeMsg, 10000);

let counter = 0;
const restartCounter = () => {
  btn.innerHTML = "";
  timer = setTimeout(removeMsg, 10000);
};

btn.addEventListener("click", restartCounter);
