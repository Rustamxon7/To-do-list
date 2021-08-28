/* eslint-disable import/extensions */
import updateStorage from './updateStorage.js';
import showList from './showList.js';
import orderTasks from './orderTasks.js';

const removeTask = (tasks, id) => {
  tasks = tasks.filter((task) => task.index !== id);
  orderTasks(tasks);
  updateStorage(tasks);
  showList(tasks);
  return tasks;
};

export { removeTask as default };