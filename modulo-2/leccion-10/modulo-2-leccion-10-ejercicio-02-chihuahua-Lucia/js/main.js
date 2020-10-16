'use strict'

const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getChihuahuaImage);

const btn2 = document.querySelector(".js-dog2");
btn2.addEventListener("click", getChihuahuaImage);


function getChihuahuaImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
  .then(response => response.json())
  .then(data => {
    const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un perro";
  });
}