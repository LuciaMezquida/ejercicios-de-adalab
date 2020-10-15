'use strict';

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];
//Mostrar cuántas tareas hay
const container = document.querySelector('.container');
container.innerHTML += `<p>Hay ${tasks.length} tareas</p>`;

//Añado párrafo para las Tareas totales
container.innerHTML += `<p class="results"></p>`;

//Pintar todas las tareas en la pantalla, tachar las ya realizadas
container.innerHTML += `<ul class="list"></ul>`;
const list = document.querySelector('.list');

for (let i = 0; i < tasks.length; i++) {
  list.innerHTML += `<li>${tasks[i].name}</li>`;
  let lastItem = list.lastChild
  if (tasks[i].completed === true) {
    lastItem.classList.add('check'); //tachar las ya realizadas
    const complete = `<input type="checkbox" checked class="checked"/>`; //añadir checkbox 
    lastItem.innerHTML += complete;
  } else {
    const uncomplete = `<input type="checkbox" class="unchecked"/>`;//añadir checkbox
    lastItem.innerHTML += uncomplete;
  }
}

//Marcar una tarea como completa o incompleta
const checkbox = document.querySelectorAll('input');//selecciono todos los inputs que he creado
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('click', changeCheck) //al hacer click me desencadena la funcion
}
function changeCheck() {
  const listItems = document.querySelectorAll('li');
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) { 
      checkbox[i].classList.add('checked')
      checkbox[i].classList.remove('unchecked')
      tasks[i].completed = true;
      listItems[i].classList.add('check')
    } else {
      checkbox[i].classList.add('unchecked')
      checkbox[i].classList.remove('checked')
      tasks[i].completed = false;
      listItems[i].classList.remove('check')
    }
  }
  
  //Calculo las tareas totales que irán en el segundo párrafo
  const results = document.querySelector('.results');
  const tasksCompleted = document.querySelectorAll('.checked')
  const tasksUncompleted = document.querySelectorAll('.unchecked')
  results.innerHTML = `Tienes ${tasks.length} tareas. ${tasksCompleted.length} completadas y ${tasksUncompleted.length} por realizar`
}

//Llamo a la función para que se pinte el párrafo de las tareas totales al iniciar la página
changeCheck()
