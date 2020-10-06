"use strict";
const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

const button = document.querySelector(".button");
button.addEventListener("click", function () {
  const movie = document.querySelector(".movie");
  movie.innerHTML = `<ul>
  <li class="inception">${inception}</li>
  <li class="butterfly">${theButterFlyEffect}</li>
  <li class="sunshine">${eternalSunshineOfTheSM}</li>
  <li class="velvet">${blueVelvet}</li>
  <li class="split">${split}</li>
</ul>`;
});

const inceptionMovie = document.querySelector(".inception");
const butterflyMovie = document.querySelector(".butterfly");
const sunshineMovie = document.querySelector(".sunshine");
const velvetMovie = document.querySelector(".velvet");
const splitMovie = document.querySelector(".split");

function printMovie(event) {
  console.log(event.currentTarget.innerHTML);
}

inceptionMovie.addEventListener("click", printMovie);
butterflyMovie.addEventListener("click", printMovie);
sunshineMovie.addEventListener("click", printMovie);
velvetMovie.addEventListener("click", printMovie);
splitMovie.addEventListener("click", printMovie);
