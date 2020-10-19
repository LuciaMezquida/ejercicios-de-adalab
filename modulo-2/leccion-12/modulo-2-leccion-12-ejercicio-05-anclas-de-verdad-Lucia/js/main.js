"use strict";

const menu = document.querySelector(".menu");
const links = document.querySelectorAll("a"); //array de los elementos 'a'
const positions = ["beginning", "middle", "end"]; //array con los nombres de los id
const paragraphLink = []; //donde voy a almacenar los párrafos hacia los que va cada link
for (let i = 0; i < positions.length; i++) {
  links[i].setAttribute("data-id", positions[i]); //asigno el atributo data-id a cada link
  paragraphLink.push(document.querySelector(`#${positions[i]}`)); //almaceno los parrafos
  console.log(paragraphLink[i].getBoundingClientRect()); //obtengo la posición de los parrafos
}
function scrollLink(event) {
  event.preventDefault();
  if (event.target === links[0]) {
    window.scrollTo({
      top: 1318 - 80, //la posición del párrafo menos el alto del menú
      behavior: "smooth",
    });
  } else if (event.target === links[1]) {
    window.scrollTo({
      top: 2436 - 80,
      behavior: "smooth",
    });
  } else if (event.target === links[2]) {
    window.scrollTo({
      top: 3398 - 80,
      behavior: "smooth",
    });
  }
}
menu.addEventListener("click", scrollLink);
