const fs = require("fs");

const readFile = (fileName, callback) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    console.log("1");
    if (err) {
      console.log("Error:", err);
    } else {
      callback(data);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    console.log("2");
    if (err) {
      console.log("Error:", err);
    } else {
      callback();
    }
  });
};

readFile("./input.txt", (fileContent) => {
  console.log("3");
  const currentDate = new Date().toString();
  const newFileContent = `${currentDate}: ${fileContent}`;
  writeFile("./output.txt", newFileContent, () => {
    console.log("The file has been copied!");
  });
});
