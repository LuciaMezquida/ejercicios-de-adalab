"use strict";

let hello = document.querySelector(".hello");
console.log(hello.innerHTML);
hello.innerHTML = hello.innerHTML + " " + "mundo";
