"use strict";

for (let i = 1; i <= 10; i++) {
  console.log("Voy por la vuelta " + i);
}

let blocks = [];
// for (let j = 470, i = 10; j >= 320, i <= 1130; j -= 25, i += 80) {
//   blocks.push([i, j]);
//   console.log(blocks);
// }
for (let j = 470; j >= 320; j -= 25) {
  for (let i = 10; i <= 1130; i += 80) {
    blocks.push([i, j]);
    console.log(blocks);
  }
}
