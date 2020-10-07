"use strict";
const adalaber1 = {
  name: "Susana",
  age: 32,
  job: "periodista",
  run: (text) => `${text}`,
  runMarathon: (distance) => `Estoy corriendo un maratón de ${distance} km`,
  showbio: function () {
    console.log("Mi nombre es " + this.name + ", tengo " + this.age + " años y soy " + this.job);
  },
};
adalaber1.showbio();

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
  showbio: function () {
    console.log("Mi nombre es " + this.name + ", tengo " + this.age + " años y soy " + this.job);
  },
};
adalaber2.showbio();
