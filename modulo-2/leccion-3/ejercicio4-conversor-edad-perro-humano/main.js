"use strict";
//selecciono el campo del input
const newAge = prompt("Escribe la edad de tu perro");
let age = parseInt(newAge);

if (age === 1) {
  console.log("Su perro tiene 15 años");
} else if (age === 2) {
  console.log("Su perro tiene 24 años");
} else {
  console.log("Su perro tiene " + age * 5 + " años");
}

const day;
if (day % 2 === 0) {
  console.log('me tocan los niños');
} else if (day % 2 !== 0){
  
}