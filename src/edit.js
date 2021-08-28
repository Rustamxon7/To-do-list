const editTask = (task, tasks) => {
  tasks.forEach((item) => {
    if (item.index === task.index) {
      item.description = task.description;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default editTask;
