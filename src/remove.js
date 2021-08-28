const removeTask = (index, tasks) => {
  const remove = tasks.filter((item) => item.index !== index);
  localStorage.setItem('tasks', JSON.stringify(remove));
  window.location.reload();
};
export default removeTask;
