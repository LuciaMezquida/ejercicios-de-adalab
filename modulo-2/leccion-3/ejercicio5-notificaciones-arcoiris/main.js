"use strict";
const title = document.querySelector(".aviso");
const text = document.querySelector(".text");
const container = document.querySelector(".container");

if (container.classList.contains("warning")) {
  title.innerHTML = "AVISO";
  text.innerHTML = "Tenga cuidado";
} else if (container.classList.contains("error")) {
  title.innerHTML = "ERROR";
  text.innerHTML = "Ha surgido un error";
} else if (container.classList.contains("success")) {
  title.innerHTML = "CORRECTO";
  text.innerHTML = "Los datos son correctos";
}
