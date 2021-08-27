/* eslint-disable no-unused-vars */
import _, { add } from 'lodash';
import './style.css';
import saveChanges from './updateStatus';
import arr from './arr';

const list = document.getElementById('list');

let doList = arr;

doList = localStorage.getItem('doList') !== null ? JSON.parse(localStorage.getItem('doList')) : doList;

for (let i = 0; i < doList.length; i += 1) {
  const item = `
   <li id="${doList[i].id}">
   <i id="check" class="fas fa-square"></i>
           <p class="el-2">${doList[i].description}</p>
          <ion-icon id="${doList[i].completed}" class="el-3" name="ellipsis-vertical-outline"></ion-icon>
        </li>`;
  list.innerHTML += item;

  if (doList[i].completed) {
    const unchecked = document.querySelectorAll('.fas');
    const text = document.querySelectorAll('.el-2');
    doList[i].completed = true;
    text[i].classList.add('line');
    unchecked[i].classList.add('fa-check-square');
    unchecked[i].classList.remove('fa-square');
  }
}
const check = document.querySelectorAll('.fas');
const text = document.querySelectorAll('.el-2');
const unchecked = document.querySelectorAll('.fas');
for (let i = 0; i < doList.length; i += 1) {
  // eslint-disable-next-line no-loop-func
  check[i].addEventListener('click', () => {
    if (!doList[i].completed) {
      doList[i].completed = true;
      saveChanges(doList);
      unchecked[i].classList.remove('fa-square');
      unchecked[i].classList.add('fa-check-square');
      text[i].classList.add('line');
    } else {
      doList[i].completed = false;
      saveChanges(doList);
      unchecked[i].classList.add('fa-square');
      unchecked[i].classList.remove('fa-check-square');
      text[i].classList.remove('line');
    }
  });
}
