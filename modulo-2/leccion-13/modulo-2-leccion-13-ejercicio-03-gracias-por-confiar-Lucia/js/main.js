"use strict";

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];
let usersPremium = [];
let noPremium = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].isPremium === true) {
    usersPremium = users.map((item) => `Bienvenida ${item}. Gracias por confiar en nosotros.`);
  } else {
    noPremium = users.map((item) => `Bienvenida ${item}`);
  }
}
console.log(usersPremium);

console.log(noPremium);
