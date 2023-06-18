import refs from '../../refs/index.js';
import optionsForNotiflix from '../../services/notiflix-options.js';

const STORAGE_KEY = 'inputLocallStorageKey';
Notiflix.Notify.init(optionsForNotiflix);

const onSubmit = event => {
  const { modalWindow } = refs;
  const { modal, body } = modalWindow;
  const { name, feedback, pnone } = event.currentTarget.elements;

  event.preventDefault();
  if (!name.value || !feedback.value || !pnone.value) {
    Notiflix.Notify.failure('Attention! All fields must be filled.');
    console.log(`Attention! All fields must be filled.`);
    return;
  }
  const capturedData = new FormData(event.currentTarget);
  const saveData = {};
  capturedData.forEach((value, key) => {
    saveData[key] = value;
    modal.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
  });

  Notiflix.Notify.info('Мы собрали данные, скоро с Вами свяжиться наш менеджер');
  console.log(`Мы собрали данные, скоро с Вами свяжиться наш менеджер`);
  console.log('Мы собрали данные ==>', saveData);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

export default onSubmit;
