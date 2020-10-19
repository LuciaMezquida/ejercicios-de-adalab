"use strict";

const paragraphs = document.querySelectorAll("p");
for (let item of paragraphs) {
  let paragraphHeight = item.offsetHeight;
  item.style.height = `${paragraphHeight / 3}px`;
}
