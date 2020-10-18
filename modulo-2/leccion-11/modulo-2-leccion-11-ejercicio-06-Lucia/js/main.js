"use strict";
const message = document.querySelector(".js-message");
const name = document.querySelector(".js-name");
const lastName = document.querySelector(".js-lastName");

document.addEventListener("keyup", function () {
  message.innerHTML = name.value + " " + lastName.value;
  let nameStore = {
    name: name.value,
    lastName: lastName.value,
  };
  localStorage.setItem("userName", JSON.stringify(nameStore));
});

function recovery() {
  const recoveryName = JSON.parse(localStorage.getItem("userName"));
  console.log(recoveryName);
  const nameUser = recoveryName.name;
  const lastNameUser = recoveryName.lastName;
  name.value = nameUser;
  lastName.value = lastNameUser;
  message.innerHTML = nameUser + " " + lastNameUser;
}
recovery();
