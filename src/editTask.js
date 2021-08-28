/* eslint-disable import/extensions */
import updateStorage from './updateStorage.js';
import showList from './showList.js';

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

export { editTask as default };