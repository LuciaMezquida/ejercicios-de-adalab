"use strict";

// let yearValue = document.querySelector(".year");
// console.log(yearValue);
// const year = parseInt(yearValue.value);
// console.log(year);

const year = 2020;

if (year % 4 === 0) {
  console.log(year + " es un año bisiesto");
} else if (year % 4 === 1) {
  //2017
  console.log(year + " no es bisiesto. Lo será en " + (year + (4 - 1)));
} else if (year % 4 === 2) {
  //2018
  console.log(year + " no es bisiesto. Lo será en " + (year + (4 - 2)));
} else if (year % 4 === 3) {
  //2019
  console.log(year + " no es bisiesto. Lo será en " + (year + (4 - 3)));
}
