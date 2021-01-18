const fs = require("fs");
const dataContent =
  "Como quieres que te quiera si el que quiero que me quiera no me quiere como quiero que me quiera";

fs.readFile("./input.txt", "utf-8", (err, fileContent) => {
  if (err !== null) {
    console.log("Error: ", err);
  }
  console.log("El contenido del fichero es: ", fileContent);
  console.log("La longitud del contenido es: ", fileContent.length);
});

fs.readFile("./input.json", "utf-8", (err, fileContent) => {
  if (err !== null) {
    console.log("Error: ", err);
  }
  const jsonData = JSON.parse(fileContent);
  console.log("El contenido del fichero es: ", jsonData.content);
  console.log("Es autor del contenido es: ", jsonData.author);
});

fs.writeFile("./output.txt", "utf-8", (err) => {
  if (err !== null) {
    console.log("Error: ", err);
  }
  console.log("The file has been saved");
});
