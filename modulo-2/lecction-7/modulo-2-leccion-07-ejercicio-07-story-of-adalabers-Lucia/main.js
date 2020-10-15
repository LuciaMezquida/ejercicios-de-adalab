"use strict";

const adalabers = [
  {
    name: "Maria",
    age: 29,
    job: "diseñadora",
  },
  {
    name: "Lucía",
    age: 31,
    job: "ingeniera química",
  },
  {
    name: "Susana",
    age: 34,
    job: "periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job: "actriz",
  },
  {
    name: "Inmaculada",
    age: 21,
    job: "diseñadora",
  },
];

function countAdalabers () {
  return adalabers.length;
}

function averageAge () {
  let acc = 0;
  for (let i = 0; i < adalabers.length; i++) {
    acc = acc + adalabers[i].age;
  }
  return acc / adalabers.length
}

function theYoungest () {
  let adalaber_a_comparar = adalabers[0].age;
  let youngest = '';
  for (let i = 0; i < adalabers.length; i++) {
    if(adalaber_a_comparar > adalabers[i].age)
      adalaber_a_comparar = adalabers[i].age
      youngest = adalabers[i].name
  }
  return youngest 
}


function countDesigners () {
  let adaDesigner = 0;
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].job === 'diseñadora') {
      adaDesigner = adaDesigner + 1;
    }
    
  }
  return adaDesigner
}















// function countAdalabers(arr) {
//   return arr.length;
// }

// function averageAge(arr) {
//   let acc = 0;
//   for (let i = 0; i < arr.length; i++) {
//     acc += arr[i].age;
//   }
//   return acc / adalabers.length;
// }

// function theYoungest(arr) {
//   let minAge = arr[0].age;
//   let youngest = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (minAge > arr[i].age) {
//       minAge = arr[i].age;
//       youngest = arr[i].name;
//     }
//   }
//   return youngest;
// }

// function countDesigners(arr) {
//   let designer = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].job === "diseñadora") {
//       designer += arr[i].name + ", ";
//     }
//   }
//   return designer
// }

console.log(countAdalabers(adalabers));
console.log(averageAge(adalabers));
console.log(theYoungest(adalabers));
console.log(countDesigners(adalabers));
