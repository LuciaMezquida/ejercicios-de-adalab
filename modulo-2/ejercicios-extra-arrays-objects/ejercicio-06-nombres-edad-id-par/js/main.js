'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

const body = document.querySelector('body');
body.innerHTML = '<div class="js-result"></div>';

const container = document.querySelector('.js-result');
container.innerHTML += '<h1>Nombres de las promos y los nombres, la edad y el id de las alumnas que tenga edad par</h1>';
container.innerHTML += '<ul class="js-list"></ul>';

const containerList = document.querySelector('.js-list');

let idAcum = 0
for (let i = 0; i < promos.length; i++) {
  containerList.innerHTML += `<li class="js-list-item">
  <p>Nombre: ${promos[i].name}</p></li>`
  containerList.innerHTML += `<ul class="js-student-list${i}"></ul>`
  
  for (let j = 0; j < promos[i].students.length; j++) {
    idAcum += 1
    let containerListItem = document.querySelector('.js-student-list'+[i]);
    if (promos[i].students[j].age % 2 === 0) {
      containerListItem.innerHTML += `<li id="id-${idAcum}">${promos[i].students[j].name}, ${promos[i].students[j].age}</li>`
    }
    
    
  }
}

