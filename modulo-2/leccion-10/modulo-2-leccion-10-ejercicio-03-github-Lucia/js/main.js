'use strict';

function getGithubUser() {
  const inputValue = document.querySelector(".text").value;
  console.log(inputValue)
  fetch("https://api.github.com/users/" + inputValue)
    .then(response => response.json())
    .then(data => {

      const name = document.querySelector(".name");
      name.innerHTML = data.login;
      const img = document.querySelector("img");
      img.src = data.avatar_url;
      img.alt = "Una diva";
      const number = document.querySelector(".number");
      number.innerHTML = data.public_repos;

    });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getGithubUser);