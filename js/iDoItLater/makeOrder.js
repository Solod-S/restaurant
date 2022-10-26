const makeOrder = {
  makeOrderBtn: document.querySelectorAll('[data-btn-order]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
  onMakeOrder() {
    const { modal, body } = this;
    modal.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
  },
  onClose() {
    makeOrder.modal.classList.add('is-hidden');
    makeOrder.body.classList.remove('no-scroll');
  },
};

makeOrder.makeOrderBtn.forEach(el =>
  el.addEventListener('click', makeOrder.onMakeOrder.bind(makeOrder))
);
makeOrder.closeModalBtn.addEventListener('click', makeOrder.onClose);
