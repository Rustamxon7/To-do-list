const completed = (index, task, e, description) => {
  if (e.target.checked === true) {
    if (task.index === index) {
      task.completed = true;
      description.style.textDecoration = 'line-through solid';
    }
    return task;
  }
  if (e.target.checked === false) {
    if (task.index === index) {
      task.completed = false;
      description.style.textDecoration = 'none';
    }
    return task;
  }
  return task;
};

export default completed;
