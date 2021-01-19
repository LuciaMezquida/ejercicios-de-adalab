"use strict";

// post new user

document
  .querySelector(".js-btn-post-new-user")
  .addEventListener("click", () => {
    const inputName = document.querySelector(".js-input-name");
    const inputEmail = document.querySelector(".js-input-email");
    const inputFilter = document.querySelector(".js-input-filter");
    const inputFilterMail = document.querySelector(".js-input-filterMail");

    // create body params
    const bodyParams = {
      userName: inputName.value,
      userEmail: inputEmail.value,
      userFiltered: inputFilter.value,
      userMailFiltered: inputFilterMail.value,
    };
    fetch("http://localhost:3000/user", {
      method: "POST",
      body: JSON.stringify(bodyParams),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Server response:", responseData);
        printJson(".js-post-new-user-result", responseData);
      });
  });

// get users data

document.querySelector(".js-btn-get-users").addEventListener("click", () => {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Server response:", responseData);
      printJson(".js-get-users-result", responseData);
    });
});

// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
