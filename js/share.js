console.log(`До вызова setTimeout`);

const share = {
  // openModalBtn: document.querySelector('[data-share-open]'),
  closeModalBtn: document.querySelector('[data-share-close]'),
  modal: document.querySelector('[data-share]'),
  body: document.querySelector('body'),
  toggleModal() {
    this.modal.classList.toggle('is-hidden');
    this.body.classList.toggle('no-scroll');
  },
};

share.closeModalBtn.addEventListener('click', share.toggleModal.bind(share));

setTimeout(share.toggleModal.bind(share), 3000, 3);
