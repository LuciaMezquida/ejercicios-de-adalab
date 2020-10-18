"use strict";
const message = document.querySelector(".js-message");
const name = document.querySelector(".js-name");

name.addEventListener("keyup", function () {
  message.innerHTML = name.value;
  localStorage.setItem("name", name.value);
});

function recovery() {
  const nameUser = localStorage.getItem("name");
  name.value = nameUser;
  message.innerHTML = nameUser;
}
recovery();
