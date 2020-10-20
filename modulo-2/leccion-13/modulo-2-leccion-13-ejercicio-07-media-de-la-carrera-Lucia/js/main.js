"use strict";

const times = [56, 9, 45, 28, 35];
const sumTimes = times.reduce((acc, item) => acc + item);
const meanNumbers = sumTimes / times.length;
console.log(meanNumbers);
