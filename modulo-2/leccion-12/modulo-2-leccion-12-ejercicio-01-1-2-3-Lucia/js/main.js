"use strict";

const numbers = [1, 2, 3];
const listContainer = document.querySelector(".js-list");
for (let i = 0; i < numbers.length; i++) {
  const list = document.createElement("li");
  const listContent = document.createTextNode(numbers[i]);
  list.appendChild(listContent);
  listContainer.appendChild(list);
}
