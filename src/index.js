/* eslint-disable import/extensions */

import './style.css';
// import Sortable from 'sortablejs';
// import showList from './showList.js';
// import updateStatus from './updateStatus.js';
// import updateStorage from './updateStorage.js';
// import removeTask from './removeTask.js';
// import removeCompletedTasks from './removeCompletedTasks.js';
// import editTask from './editTask.js';
// import updateAfterDrag from './updateAfterDrag.js';

const orderTasks = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
};

const showList = (tasksList) => {
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  for (let index = 0; index < tasksList.length; index += 1) {
    const task = document.createElement('li');
    const remove = document.createElement('i');
    const edit = document.createElement('i');
    const descriptionContainer = document.createElement('div');
    const description = document.createElement('p');
    const editDescription = document.createElement('input');
    if (tasksList[index].completed) {
      const checked = document.createElement('i');
      checked.className = 'fas fa-check';
      descriptionContainer.appendChild(checked);
      description.classList.add('completed');
    } else {
      const check = document.createElement('input');
      check.type = 'checkbox';
      check.className = 'check';
      descriptionContainer.appendChild(check);
    }
    edit.className = 'fas fa-edit d-none';
    editDescription.type = 'text';
    editDescription.className = 'edit-description d-none';
    task.id = tasksList[index].index;
    remove.className = 'fas fa-trash';
    descriptionContainer.classList.add('description-container');
    description.className += ' description';
    description.innerHTML += ` ${tasksList[index].description}`;
    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(editDescription);
    task.className = 'task';
    task.setAttribute('draggable', 'true');
    task.appendChild(descriptionContainer);
    task.appendChild(remove);
    task.appendChild(edit);
    listDiv.appendChild(task);
  }
};

const updateStatus = (list, id, completed) => {
  list.forEach((task) => {
    if (task.index === id) task.completed = completed;
  });
};

const updateStorage = (storage) => {
  localStorage.setItem('storage', JSON.stringify(storage));
};

const getStorage = () => {
  const storage = JSON.parse(localStorage.getItem('storage'));
  return storage !== null ? storage : [];
};

const editTask = (tasks, target) => {
  const id = parseInt(target.parentElement.parentElement.id, 10);
  let description = target.innerText;
  const input = target.parentElement.lastChild;
  const editButton = target.parentElement.parentElement.lastChild;
  const removeButton = editButton.previousSibling;
  target.classList.add('d-none');
  removeButton.classList.add('d-none');
  editButton.classList.remove('d-none');
  input.value = description;
  input.classList.remove('d-none');
  input.addEventListener('keyup', () => {
    description = input.value;
  });
  editButton.addEventListener('click', () => {
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].index === id) tasks[i].description = description;
    }
    editButton.classList.add('d-none');
    removeButton.classList.remove('d-none');
    input.classList.add('d-none');
    target.classList.remove('d-none');
    updateStorage(tasks);
    showList(tasks);
  });
};

const removeTask = (tasks, id) => {
  tasks = tasks.filter((task) => task.index !== id);
  orderTasks(tasks);
  updateStorage(tasks);
  showList(tasks);
  return tasks;
};

const removeCompletedTasks = (tasks) => {
  tasks = tasks.filter((task) => task.completed === false);
  orderTasks(tasks);
  updateStorage(tasks);
  showList(tasks);
  return tasks;
};

const updateAfterDrag = (container) => {
  const listOfElements = container.children;
  const tasks = getStorage();
  const orderedTasks = [];
  Array.from(listOfElements).forEach((element) => {
    const id = parseInt(element.id, 10);
    const index = tasks.findIndex((task) => task.index === id);
    orderedTasks.push(tasks[index]);
  });
  orderTasks(orderedTasks);
  updateStorage(orderedTasks);
  showList(orderedTasks);
};

let tasks = getStorage();

showList(tasks);

const listDiv = document.getElementById('list');
const clearAllButton = document.getElementById('clear-list');
listDiv.addEventListener('click', (event) => {
  if (event.target !== event.currentTarget) {
    if (event.target.className === 'check') {
      tasks = getStorage();
      updateStatus(tasks, parseInt(event.target.parentElement.parentElement.id, 10), true);
      showList(tasks);
      updateStorage(tasks);
    }
    if (event.target.className === 'fas fa-check') {
      tasks = getStorage();
      updateStatus(tasks, parseInt(event.target.parentElement.parentElement.id, 10), false);
      showList(tasks);
      updateStorage(tasks);
    }
    if (event.target.className === 'fas fa-trash') {
      tasks = getStorage();
      tasks = removeTask(tasks, parseInt(event.target.parentElement.id, 10));
    }
    if (event.target.classList.contains('description')) {
      tasks = getStorage();
      editTask(tasks, event.target);
    }
  }
  event.stopPropagation();
});

clearAllButton.addEventListener('click', () => {
  tasks = removeCompletedTasks(tasks);
});

const addTask = (tasks) => {
  const description = document.getElementById('task-desc').value;
  const index = tasks.length === 0 ? 1 : tasks[tasks.length - 1].index + 1;
  const completed = false;
  tasks.push({ description, index, completed });
  document.getElementById('task-desc').value = '';
};

const addTaskButton = document.getElementById('add');
addTaskButton.addEventListener('click', () => {
  addTask(tasks);
  updateStorage(tasks);
  showList(tasks);
});

listDiv.addEventListener('dragend', (event) => {
  updateAfterDrag(listDiv);
  event.stopPropagation();
});
