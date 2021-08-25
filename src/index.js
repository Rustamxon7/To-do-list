/* eslint-disable no-unused-vars */
import _, { add } from 'lodash';
import './style.css';

const list = document.getElementById('list');

const doList = [
  {
    id: 0,
    description: 'Go to the mall',
    completed: false,
  },
  {
    id: 1,
    description: 'Clean your room',
    completed: false,
  },
  {
    description: 'Coding',
    id: 2,
    completed: false,
  },
];

function addToDo(toDoList) {
  for (let id = 0; id < toDoList.length; id += 1) {
    const item = `
   <li>
           <ion-icon id="${doList[id].id}" class="el-1" name="square-outline"></ion-icon>
           <p class="el-2">${doList[id].description}</p>
          <ion-icon id="${doList[id].completed}" class="el-3" name="ellipsis-vertical-outline"></ion-icon>
        </li>`;
    list.innerHTML += item;
  }
}

addToDo(doList);
