const addTask = (tasks, description) => {
  const rand = Math.max(...tasks.map((item) => item.index), 1);
  const id = rand + 1;
  const newTask = { description, completed: false, index: id };
  return newTask;
};

export default addTask;
