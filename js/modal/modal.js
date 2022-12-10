import refs from '../refs/index.js';
import operation from './operation/index.js';

const { modalWindow } = refs;
const { closeOnTargetClick, toggleModal, onSubmit, onFormInput, populateMulti } = operation;

populateMulti();

modalWindow.openModalBtn.addEventListener('click', toggleModal.bind(modalWindow));
modalWindow.closeModalBtn.addEventListener('click', toggleModal.bind(modalWindow));
modalWindow.modal.addEventListener('click', closeOnTargetClick.bind(modalWindow));
modalWindow.form.addEventListener('submit', onSubmit.bind(modalWindow));
modalWindow.form.addEventListener('input', _.throttle(onFormInput.bind(modalWindow), 500));
