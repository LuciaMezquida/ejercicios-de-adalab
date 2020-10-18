"use strict";

const container = document.querySelector("body");
function changeTheme(event) {
  if (event.currentTarget.id === "dark") {
    container.classList.add("dark");
    container.classList.remove("light");
  } else {
    container.classList.remove("dark");
    container.classList.add("light");
  }
  localStorage.setItem("theme", event.currentTarget.id);

  console.log(event.currentTarget.id);
}

//función para recuperar el tema seleccionado al recargar la página
function keepTheme() {
  if (localStorage.getItem("theme") === "dark") {
    container.classList.add("dark");
    container.classList.remove("light");
  } else if (localStorage.getItem("theme") === "light") {
    container.classList.remove("dark");
    container.classList.add("light");
  }
}
keepTheme();

const select = document.querySelectorAll(".js-select");
for (let item of select) {
  item.addEventListener("click", changeTheme);
}
