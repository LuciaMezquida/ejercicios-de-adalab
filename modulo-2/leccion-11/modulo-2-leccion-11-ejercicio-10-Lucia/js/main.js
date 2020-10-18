"use strict";

function getCatImage() {
  fetch("https://api.thecatapi.com/v1/images/search?format=json&mime_types=gif", {
    headers: {
      "x-api-key": "5d5da435-2e30-413f-bfea-85d5056784f4",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data[0].url;
      img.alt = "Un lindo gatito";
    });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getCatImage);
