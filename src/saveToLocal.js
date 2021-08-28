const saveChanges = (doList) => {
  localStorage.setItem('doList', JSON.stringify(doList));
};

export default saveChanges;
