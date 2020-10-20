"use strict";
const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];
const incidenceUser = users.find((user) => user.pin === 5232);
console.log("Es usuario de la incidencia es: " + incidenceUser.name);

const userToErase = users.findIndex((user) => user.pin === 5232);
users.splice(userToErase, 1);
console.log(users);
