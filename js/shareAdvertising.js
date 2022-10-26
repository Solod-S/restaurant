const DONTSWON_SHARE = 'dontShowShare';
//после первого закрытия я не хочу больше видеть это окно
const shareAdvertising = {
  closeModalBtnEl: document.querySelector('[data-share-close]'),
  modalEl: document.querySelector('[data-share]'),
  body: document.querySelector('body'),

  start() {
    if (!JSON.parse(localStorage.getItem(DONTSWON_SHARE))) {
      setTimeout(shareAdvertising.openModel(), 3000);
    }
  },
  openModel() {
    const { modalEl, body, onKeyPresEsq } = this;
    window.addEventListener('keydown', onKeyPresEsq);
    modalEl.classList.remove('is-hidden');
    body.classList.toggle('no-scroll');
  },
  closeModel() {
    const { modalEl, body, onKeyPresEsq } = this;
    localStorage.setItem(DONTSWON_SHARE, JSON.stringify('true'));
    window.removeEventListener('keydown', onKeyPresEsq);
    modalEl.classList.add('is-hidden');
    body.classList.toggle('no-scroll');
  },
  closeOnTargetClick(event) {
    const { currentTarget, target } = event;
    const { modalEl, body } = this;
    if (currentTarget === target) {
      modalEl.classList.add('is-hidden');
      body.classList.toggle('no-scroll');
    }
  },
  onKeyPresEsq(event) {
    const { code } = event;
    const { modalEl, body, onKeyPresEsq } = shareAdvertising;
    if (code === 'Escape') {
      modalEl.classList.add('is-hidden');
      body.classList.toggle('no-scroll');

      window.removeEventListener('keydown', onKeyPresEsq);
    }
  },
};

shareAdvertising.closeModalBtnEl.addEventListener(
  'click',
  shareAdvertising.closeModel.bind(shareAdvertising)
);
shareAdvertising.modalEl.addEventListener(
  'click',
  shareAdvertising.closeOnTargetClick.bind(shareAdvertising)
);
shareAdvertising.start();
