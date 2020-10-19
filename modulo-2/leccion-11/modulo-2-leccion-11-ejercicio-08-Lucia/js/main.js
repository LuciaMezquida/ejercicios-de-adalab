"use strict";

let result = document.querySelector(".js-result");
let characterInfo = {
  name: "Nombre",
  gender: "Género",
};
let character = document.querySelector(".js-cast").value;

function getCharacter() {
  if (localStorage.getItem(character)) {
    recoveryInfo(character);
  } else {
    fetch(`https://swapi.dev/api/people/?search=${character}`)
      .then((response) => response.json())
      .then((data) => {
        result.innerHTML += `<li>Personaje: ${data.results[0].name}. Género: ${data.results[0].gender}</li>`;
        characterInfo.name = data.results[0].name;
        characterInfo.gender = data.results[0].gender;
        localStorage.setItem(character, JSON.stringify(characterInfo));
      });
  }
}
document.querySelector(".js-btn").addEventListener("click", getCharacter);

function recoveryInfo(characterInput) {
  const info = JSON.parse(localStorage.getItem(characterInput));
  result.innerHTML += `<li>Personaje: ${info.name}. Género: ${info.gender}</li>`;
}
recoveryInfo(character);
