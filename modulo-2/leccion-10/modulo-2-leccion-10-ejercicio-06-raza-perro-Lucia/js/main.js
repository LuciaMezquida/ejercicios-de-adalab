'use strict';
let breeds = '';
function getBreedsImage () {
  fetch('https://dog.ceo/api/breeds/list')
    .then(firstResponse => firstResponse.json())
    .then(firstData => {
      breeds = firstData.message;
      const breedsLength = breeds.length - 1;
      return fetch('https://api.rand.fun/number/integer?max=' + breedsLength);
    })
    .then(secondResponse => secondResponse.json())
    .then(secondData => {
      const randomNumber = secondData.result
      console.log(randomNumber)
      const message = document.querySelector('.message');
      message.innerHTML = breeds[randomNumber]
      return fetch(`https://dog.ceo/api/breed/${breeds[randomNumber]}/images/random`);
    })
    .then(thirdResponse => thirdResponse.json())
    .then(thirdData => {
      const image = document.querySelector('img');
      image.src = thirdData.message;
      image.alt = 'Perrete'
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedsImage);