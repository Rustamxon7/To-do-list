// /* eslint-disable import/extensions */
// import updateStorage from './updateStorage.js';
// // import getStorage from './getStorage.js';
// import orderTasks from './orderTasks.js';
// import showList from './showList.js';

// const updateAfterDrag = (container) => {
//   const listOfElements = container.children;
//   const tasks = getStorage();
//   const orderedTasks = [];
//   Array.from(listOfElements).forEach((element) => {
//     const id = parseInt(element.id, 10);
//     const index = tasks.findIndex((task) => task.index === id);
//     orderedTasks.push(tasks[index]);
//   });
//   orderTasks(orderedTasks);
//   updateStorage(orderedTasks);
//   showList(orderedTasks);
// };

// export { updateAfterDrag as default };