'use strict';

const face = document.querySelector('.js-face');
const btn = document.querySelector('.js-button');
const container = document.querySelector('.js-container');


function updateClick (){
  const select = document.querySelector('.js-select').value;
  face.innerHTML = select;
  let numRandom = Math.floor(Math.random() * 100)
  if (numRandom % 2 !== 0) {
    container.classList.add('orange')
  } else {
    container.classList.remove('orange')
  }
}

btn.addEventListener('click', updateClick)