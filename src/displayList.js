import saveChanges from './updateStatus';

const displayList = (doList) => {
  const list = document.getElementById('list');

  for (let i = 0; i < 3; i += 1) {
    const item = `
   <li id="${doList[i].id}">
   <i id="check" class="fas fa-square el-1 checkbox"></i>
           <p class="el-2">${doList[i].description}</p>
          <ion-icon id="${doList[i].completed}" class="el-3" name="ellipsis-vertical-outline"></ion-icon>
        </li>`;
    list.innerHTML += item;
  }

  const check = document.querySelectorAll('.checkbox');
  const text = document.querySelectorAll('.el-2');
  const unchecked = document.querySelectorAll('.fa-square');

  for (let i = 0; i < doList.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    check[i].addEventListener('click', () => {
      if (doList[i].completed === false) {
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

    if (localStorage !== null) {
      doList = JSON.parse(localStorage.getItem('doList'));
      const checkmark = doList[i].completed;
      if (checkmark) {
        doList = JSON.parse(localStorage.getItem('doList'));
        saveChanges(doList);
        unchecked[i].classList.remove('fa-square');
        unchecked[i].classList.add('fa-check-square');
        text[i].classList.add('line');
      }
    }
  }
};

export default displayList;
