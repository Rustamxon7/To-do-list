const clearCompleted = (tasks) => {
  const removeCompleted = tasks.filter((item) => item.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(removeCompleted));
  window.location.reload();
};

export default clearCompleted;
