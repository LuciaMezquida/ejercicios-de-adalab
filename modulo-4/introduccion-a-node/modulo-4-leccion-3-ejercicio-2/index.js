const fs = require("fs");

let text = "Como como poco coco, poco coco compro";
const objectData = {
  originalContent: "Lorem ipsum",
  changedContent: "LOREM IPSUM",
  textLenght: 11,
};

console.log(objectData);
text = JSON.stringify(objectData);
console.log(text);

fs.writeFile("./output.txt", objectData, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("The file has been created");
  }
});
