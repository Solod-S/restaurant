const DONTSWON_SHARE = 'dontShowShare';
//после первого закрытия не хочу больше видеть это окно
const share = {
  closeModalBtn: document.querySelector('[data-share-close]'),
  modal: document.querySelector('[data-share]'),
  body: document.querySelector('body'),
  onKeyPresEsq(event) {
    const { modal, body } = this;
    if (event.code === 'Escape') {
      modal.classList.add('is-hidden');
      body.classList.toggle('no-scroll');

      window.removeEventListener('keydown', share.onKeyPresEsq);
    }
  },
  closeModel() {
    localStorage.setItem(DONTSWON_SHARE, JSON.stringify('true'));
    window.removeEventListener('keydown', share.onKeyPresEsq);
    this.modal.classList.add('is-hidden');
    this.body.classList.toggle('no-scroll');
  },
  openModel() {
    window.addEventListener('keydown', share.onKeyPresEsq);
    this.modal.classList.remove('is-hidden');
    this.body.classList.toggle('no-scroll');
  },
  closeOnTargetClick(event) {
    if (event.currentTarget === event.target) {
      this.modal.classList.add('is-hidden');
      this.body.classList.toggle('no-scroll');
    }
  },
};

share.closeModalBtn.addEventListener('click', share.closeModel.bind(share));
share.modal.addEventListener('click', share.closeOnTargetClick.bind(share));
if (!JSON.parse(localStorage.getItem(DONTSWON_SHARE))) {
  setTimeout(share.openModel.bind(share), 3000, 3);
}
