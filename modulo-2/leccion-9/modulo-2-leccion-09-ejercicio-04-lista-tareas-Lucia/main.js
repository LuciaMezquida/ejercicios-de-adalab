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

function createList(item) {
  const list = document.querySelector('.js-list')
  return list.innerHTML = `<li>${item}</li>`
}


function showNumberTasks () {
  const task = document.querySelector('.js-tasks')
  return task.innerHTML = `Hay ${tasks.length} tareas`
  
}
showNumberTasks()

function showTasks () {
  const task1 = document.querySelector('.js-tasks1')
  for (let i = 0; i < tasks.length; i++) {
    createList(tasks[i].name)
  }
}
showTasks()


