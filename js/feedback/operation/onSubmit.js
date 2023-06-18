import optionsForNotiflix from '../../services/notiflix-options.js';

const STORAGE_KEY = 'feedBackLocallStorageKey';
Notiflix.Notify.init(optionsForNotiflix);

const onSubmit = event => {
  event.preventDefault();
  const { name, feedback, pnone } = event.currentTarget.elements;

  if (!name.value || !feedback.value || !pnone.value) {
    Notiflix.Notify.failure('Attention! All fields must be filled.');
    console.log(`Attention! All fields must be filled.`);
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
