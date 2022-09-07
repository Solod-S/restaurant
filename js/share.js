console.log(`До вызова setTimeout`);

const share = {
  closeModalBtn: document.querySelector('[data-share-close]'),
  modal: document.querySelector('[data-share]'),
  body: document.querySelector('body'),
  onKeyPresEsq(event) {
    if (event.code === 'Escape') {
      share.modal.classList.toggle('is-hidden');
      share.body.classList.toggle('no-scroll');
      window.removeEventListener('keydown', share.onKeyPresEsq);
    }
  },
  toggleModal() {
    window.addEventListener('keydown', share.onKeyPresEsq);
    this.modal.classList.toggle('is-hidden');
    this.body.classList.toggle('no-scroll');
  },
  closeOnTargetClick(event) {
    // console.log(event.currentTarget);
    // //event.currentTarget -- текущий єлемент где висит евент листнер
    // console.log(event.target);
    // // используем чтобы точно указать что выбираем

    if (event.currentTarget === event.target) {
      this.modal.classList.toggle('is-hidden');
      this.body.classList.toggle('no-scroll');
    }
  },
};

share.closeModalBtn.addEventListener('click', share.toggleModal.bind(share));
share.modal.addEventListener('click', share.closeOnTargetClick.bind(share));
setTimeout(share.toggleModal.bind(share), 3000, 3);
