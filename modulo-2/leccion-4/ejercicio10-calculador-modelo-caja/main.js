"use strict";

function box(border_box, width, padding, border_size) {
  if (border_box) {
    return `El ancho del contenido es: ${width} y el ancho total de la caja es: ${width}`;
  } else {
    return `El ancho del contenido es: ${width} y el ancho total de la caja es: ${
      width + padding + border_size
    }`;
  }
}

console.log(box(false, 100, 20, 2));
