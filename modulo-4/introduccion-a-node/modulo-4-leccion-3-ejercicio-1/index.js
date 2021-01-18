const fs = require("fs");

fs.readFile("./input.txt", "utf-8", (err, fileContent) => {
  if (err !== null) {
    console.log("Error: ", err);
  }
  console.log("El contenido del fichero es: ", fileContent);
  console.log("La longitud del contenido es: ", fileContent.length);
});
