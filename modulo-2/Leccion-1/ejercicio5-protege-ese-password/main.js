"use strict";

const title = document.querySelector(".title");
const password = document.querySelector(".password");
console.log(title);
console.log(password);

password.innerHTML = "**";
console.log(title.innerHTML);
console.log(password.innerHTML);
title.innerHTML = title.innerHTML + " " + password.innerHTML;
