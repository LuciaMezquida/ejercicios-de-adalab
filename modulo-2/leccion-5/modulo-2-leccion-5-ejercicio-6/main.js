"use strict";

const name = document.querySelector(".name");

function saySth(event) {
  const text = document.querySelector(".text");
  let input = event.currentTarget.value;
  text.innerHTML = input;
}

name.addEventListener("keyup", saySth);
