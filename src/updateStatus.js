const updateStatus = (list, id, completed) => {
  list.forEach((task) => {
    if (task.index === id) task.completed = completed;
  });
};

export { updateStatus as default };
