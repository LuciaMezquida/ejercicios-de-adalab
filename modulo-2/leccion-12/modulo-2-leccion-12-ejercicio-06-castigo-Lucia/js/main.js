"use strict";
const container = document.querySelector("body");
const colors = ["white", "blue", "red", "green", "yellow", "pink"];
for (let i = 0; i < 100; i++) {
  let paragraph = document.createElement("p"); //creo un párrafo
  let text = document.createTextNode("He aprendido bien cómo funcionan los bucles"); //creo texto
  let select = document.createElement("select"); //creo un select
  for (let j = 0; j < colors.length; j++) {
    let option = document.createElement("option"); //creo un option para cada color
    option.setAttribute("value", colors[j]);
    let color = document.createTextNode(colors[j]); //creo un texto para cada option
    option.appendChild(color); //añado los textos a option
    select.appendChild(option); //añado los option al select
  }
  paragraph.appendChild(text); //añado el texto al párrafo
  container.appendChild(paragraph); //añado el párrafo al body
  container.appendChild(select); //añado los select al body, despues de cada párrafo
}

const allSelects = document.querySelectorAll("select");
const allParagraphs
function changeColor(event) {
  if (event.target.value === "white") {
  }
}

allSelects[0].addEventListener("change", changeColor);

// for (let item of allSelects) {
//   item.addEventListener("change", changeColor);
// }
