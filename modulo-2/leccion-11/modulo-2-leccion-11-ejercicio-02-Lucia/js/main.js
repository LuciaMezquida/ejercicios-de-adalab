'use strict';

function getCharacter() {
  let character = document.querySelector('.js-cast').value
  fetch(`https://swapi.dev/api/people/?search=${character}`)
    .then(response => response.json())
    .then(data => {
      let result = document.querySelector('.js-result')
      result.innerHTML += `<li>Personaje: ${data.results[0].name}. Género: ${data.results[0].gender}</li>`
    });
}
document.querySelector('.js-btn').addEventListener("click", getCharacter);