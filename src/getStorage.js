const getStorage = () => {
  const storage = JSON.parse(localStorage.getItem('storage'));
  return (storage !== null) ? storage : [];
};

export { getStorage as default };