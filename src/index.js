/* eslint-disable import/extensions */

import './style.css';
// import Sortable from 'sortablejs';
import showList from './showList.js';
import updateStatus from './updateStatus.js';
import updateStorage from './updateStorage.js';
import getStorage from './getStorage.js';
import addTask from './addTask.js';
import removeTask from './removeTask.js';
import removeCompletedTasks from './removeCompletedTasks.js';
import editTask from './editTask.js';
import updateAfterDrag from './updateAfterDrag.js';

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
