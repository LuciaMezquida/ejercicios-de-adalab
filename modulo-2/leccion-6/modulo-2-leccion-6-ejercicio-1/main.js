"use strict";
const adalaber1 = {
  name: "Susana",
  age: 32,
  job: "periodista",
};

const text = document.querySelector(".text");
text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
};
const text1 = document.querySelector(".text1");
text1.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`;
