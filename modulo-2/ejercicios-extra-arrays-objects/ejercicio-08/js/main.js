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
container.innerHTML += '<h1>Nombres de promos y nombre, edad y el id de alumnas</h1>';
container.innerHTML += '<ul class="js-list"></ul>';

const containerList = document.querySelector('.js-list');

let idAcum = 0
for (let i = 0; i < promos.length; i++) {
  containerList.innerHTML += `<li class="js-list-item">
  <p>Nombre: ${promos[i].name}</p></li>`;
  containerList.innerHTML += `<ul class="js-student-list${i}"></ul>`;
  
  for (let j = 0; j < promos[i].students.length; j++) {
    idAcum += 1;
    let containerListItem = document.querySelector('.js-student-list'+[i]);
    containerListItem.innerHTML += `<li class="js-student" id="id-${idAcum}">${promos[i].students[j].name}, ${promos[i].students[j].age}</li>`;
    
  }
}

/*Selecciono todos los elementos li con clase js-student (donde vienen el nombre y id de cada alumna). Se crea un array llamado students, que itero para añadir un evento click a cada elemento li del array. Luego creo una función callback que muestra por consola el id del elemento en el que he hecho click en cada momento */

function showId (event) {
  console.log('Id de la alumna: ' + event.currentTarget.id);
}

const students = document.querySelectorAll('.js-student')
for (let i = 0; i < students.length; i++) {
  students[i].addEventListener('click', showId);
}