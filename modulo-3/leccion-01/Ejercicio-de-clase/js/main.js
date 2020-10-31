"use strict";

fetch("http://api.igarrido.es/adalab.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const body = document.querySelector("body");

    for (let i = 0; i < data.length; i++) {
      const adalaber = new Adalaber(data[i].fullname, data[i].promo, data[i].github);
      if (adalaber.github !== undefined) {
        body.innerHTML += `ADALABER: ${adalaber.github}<br/>`;
      }
    }
    for (let i = 0; i < data.length; i++) {
      const profesor = new Profes(data[i].fullname, data[i].despacho, data[i].email);
      if (profesor.despacho !== undefined) {
        body.innerHTML += `PROFES DESPACHO: ${profesor.despacho}<br/>`;
      }
    }
  });
class Adalab {
  constructor(fullName) {
    this.fullName = fullName;
  }
}

class Adalaber extends Adalab {
  constructor(fullName, promo, github) {
    super(fullName);
    this.promo = promo;
    this.github = github;
  }
}
class Profes extends Adalab {
  constructor(fullName, despacho, email) {
    super(fullName);
    this.despacho = despacho;
    this.email = email;
  }
}
