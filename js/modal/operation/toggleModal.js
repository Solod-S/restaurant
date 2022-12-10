import refs from '../../refs/index.js';
import operation from './index.js';

const toggleModal = msg => {
  const { onKeyPresEsq } = operation;
  const { modalWindow } = refs;
  const { modal, body } = modalWindow;
  if (msg === 'targetClick') {
    window.removeEventListener('keydown', onKeyPresEsq);
  } else {
    window.addEventListener('keydown', onKeyPresEsq);
  }
  modal.classList.toggle('is-hidden');
  body.classList.toggle('no-scroll');
};

export default toggleModal;
