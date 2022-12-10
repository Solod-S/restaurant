import refs from '../../refs/index.js';

const STORAGE_KEY = 'feedBackLocallStorageKey';

const populateMulti = () => {
  const {
    feedBackForm: { form },
  } = refs;

  const parsedDataFromLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!parsedDataFromLocalStorage) {
    return;
  } else if (parsedDataFromLocalStorage) {
    for (let element of form.elements) {
      const entris = Object.entries(parsedDataFromLocalStorage);

      entris.forEach(([name, value]) => {
        if (element.name === name) {
          element.value = value;
        }
      });
    }
  }
};

export default populateMulti;
