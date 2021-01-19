const fs = require("fs");

let text = "Lorem ipsum";
const objectData = {
  originalContent: text,
  changedContent: text.toUpperCase(),
  textLenght: text.length,
};

console.log(objectData);
text = JSON.stringify(objectData);
console.log(text);

fs.writeFile("./output.txt", text, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("The file has been created");
  }
});
