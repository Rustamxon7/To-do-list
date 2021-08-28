export function clearCompleted(tasks) {
  const removeCompleted = tasks.filter((item) => item.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(removeCompleted));
  window.location.reload();
}

export function completed(index, task, e, description) {
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
      // console.log('Hii');
    }
    return task;
  }
  return task;
}
