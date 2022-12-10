import optionsForNotiflix from '../../services/notiflix-options.js';

const STORAGE_KEY = 'feedBackLocallStorageKey';
Notiflix.Notify.init(optionsForNotiflix);

const onSubmit = event => {
  event.preventDefault();
  const { name, feedback, pnone } = event.currentTarget.elements;

  if (!name.value || !feedback.value || !pnone.value) {
    Notiflix.Notify.failure('Внимание! Все поля должны быть заполнены.');
    console.log(`Внимание! Все поля должны быть заполнены`);
    return;
  }
  const capturedData = new FormData(event.currentTarget);
  const saveData = {};
  capturedData.forEach((value, key) => {
    saveData[key] = value;
  });

  Notiflix.Notify.info('Спасибо за Ваш отзыв, Ваше мнение очень важно для нас.');
  console.log(`Спасибо за Ваш отзыв`);
  console.log('Мы собрали данные ==>', saveData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

export default onSubmit;
