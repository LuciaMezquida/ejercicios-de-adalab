"use strict";
const container = document.querySelector("body");
const colors = ["white", "blue", "red", "green", "yellow", "pink"];
for (let i = 0; i < 100; i++) {
  let paragraph = document.createElement("p"); //creo un párrafo
  let text = document.createTextNode("He aprendido bien cómo funcionan los bucles"); //creo texto
  let select = document.createElement("select"); //creo un select
  select.setAttribute("id", i); //añado id a cada elemento select
  for (let j = 0; j < colors.length; j++) {
    let option = document.createElement("option"); //creo un option para cada color
    option.setAttribute("value", colors[j]); //añado value a cada option
    let color = document.createTextNode(colors[j]); //creo un texto para cada option
    option.appendChild(color); //añado los textos a option
    select.appendChild(option); //añado los option al select
  }
  paragraph.appendChild(text); //añado el texto al párrafo
  container.appendChild(paragraph); //añado el párrafo al body
  container.appendChild(select); //añado los select al body, despues de cada párrafo
}

const allSelects = document.querySelectorAll("select"); //array de elementos select
const allParagraphs = document.querySelectorAll("p"); //array de párrafos
function changeColor(event) {
  for (let i = 0; i < allParagraphs.length; i++) {
    if (parseInt(event.currentTarget.id) === i) {
      if (event.target.value === "white") {
        allParagraphs[i].style.color = "white";
      } else if (event.target.value === "blue") {
        allParagraphs[i].style.color = "blue";
      } else if (event.target.value === "red") {
        allParagraphs[i].style.color = "red";
      } else if (event.target.value === "green") {
        allParagraphs[i].style.color = "green";
      } else if (event.target.value === "yellow") {
        allParagraphs[i].style.color = "yellow";
      } else if (event.target.value === "pink") {
        allParagraphs[i].style.color = "pink";
      }
    }
  }
}

for (let item of allSelects) {
  //añado un evento a cada select
  item.addEventListener("change", changeColor);
}
