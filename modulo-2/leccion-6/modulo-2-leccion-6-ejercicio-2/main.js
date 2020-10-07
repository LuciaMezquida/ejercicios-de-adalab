"use strict";
const adalaber1 = {
  name: "Susana",
  age: 32,
  job: "periodista",
  run: (text) => `${text}`,
  runMarathon: (distance) => `Estoy corriendo un maratón de ${distance} km`,
};

console.log(adalaber1.run("Estoy corriendo"));
console.log(adalaber1.runMarathon(50));
