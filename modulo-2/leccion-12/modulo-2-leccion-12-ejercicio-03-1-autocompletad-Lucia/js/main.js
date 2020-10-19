"use strict";

const usersInfo = [
  {
    name: "Daenerys",
    lastName: "Targaryen",
    telephone: 555666777,
  },
  {
    name: "Arya",
    lastName: "Stark",
    telephone: 111222333,
  },
  {
    name: "Cercei",
    lastName: "Lanister",
    telephone: 888999000,
  },
];

const select = document.querySelector(".js-select");
const input = document.querySelectorAll(".js-input");

function fillGaps(event) {
  for (let i = 0; i < usersInfo.length; i++) {
    if (event.currentTarget.value === usersInfo[i].name) {
      input[0].value = usersInfo[i].name;
      input[1].value = usersInfo[i].lastName;
      input[2].value = usersInfo[i].telephone;
    }
  }
}

select.addEventListener("change", fillGaps);
