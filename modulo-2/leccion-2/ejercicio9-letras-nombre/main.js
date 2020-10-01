"use strict";

const partner = "Emma Cebada Visuara";
const numberOfCharacters = partner.length;

const container = document.querySelector(".container");
container.innerHTML = `<p>El nombre de mi compañera es ${partner}, y está compuesto por ${numberOfCharacters} caracteres</p>`;
