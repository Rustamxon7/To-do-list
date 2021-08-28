const updateStorage = (storage) => {
  localStorage.setItem('storage', JSON.stringify(storage));
};

export { updateStorage as default };