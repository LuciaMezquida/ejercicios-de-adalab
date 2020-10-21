"use strict";

const removeMsg = () => {
  const window = document.querySelector(".window");
  window.innerHTML = "Su sesión ha expirado";
  window.classList.add("windowRed");
};

setTimeout(removeMsg, 15000);
