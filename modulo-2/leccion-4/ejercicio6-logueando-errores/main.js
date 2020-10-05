"use strict";

function getEl(elem) {
  const element = document.querySelector(elem);
  if (element === null) {
    return console.error(
      `No existe ningún elemento con clase, id o tag llamado ${element}`
    );
  } else {
    return console.log(element);
  }
}
getEl(".container");
getEl("container");
