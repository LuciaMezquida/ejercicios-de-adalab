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

function countAdalabers(arr) {
  return arr.length;
}

function averageAge(arr) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i].age;
  }
  return acc / adalabers.length;
}
//mal
function theYoungest(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < arr[i + 1].age) {
      return arr[i].name;
    }
  }
}
//mal
function countDesigners(arr) {
  let designer = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].job === "diseñadora") {
      return (designer += arr[i].name + " ");
    }
  }
}

console.log(countAdalabers(adalabers));
console.log(averageAge(adalabers));
console.log(theYoungest(adalabers));
console.log(countDesigners(adalabers));
