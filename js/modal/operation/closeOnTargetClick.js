import operation from './index.js';

const closeOnTargetClick = event => {
  const { toggleModal } = operation;
  const { currentTarget, target } = event;

  if (currentTarget === target) {
    toggleModal('targetClick');
  }
};

export default closeOnTargetClick;
