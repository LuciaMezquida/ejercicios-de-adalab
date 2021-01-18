const fs = require("fs");

const readFile = (fileName, callback) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback(data);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback();
    }
  });
};

readFile("./input-file.txt", (fileContent) => {
  const objectData = {};
  objectData.originalContent = fileContent;
  objectData.changedContent = fileContent.toUpperCase();
  objectData.textLength = fileContent.length;
  console.log(objectData);
  const newFileData = JSON.stringify(objectData);
  writeFile("./output-file.json", newFileData, () => {
    console.log("The file has been copied!");
  });
});
