'use strict';

  
//   Напишите скрипт который реализует следующее поведение:
 
//   - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
//     должно появляться. Для этого необходимо убрать класс modal-hidden. 
//     Для выбора модального модального окна используйте класс js-modal-backdrop
 
//   - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
//     или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.


const refs = {
  openModalBtn: document.querySelector('button[data-action="open-modal"]'),
  closeModalBtn: document.querySelector(
    '.close-btn[data-action="close-modal"]',
  ),
  modal: document.querySelector('.js-modal-backdrop'),
};

const openModal = () => {
  refs.modal.classList.remove('modal-hidden');
};

const closeModal = () => {
  refs.modal.classList.add('modal-hidden');
};

const hendleOpenModalBtnClick = e => {
  openModal();
};

const hendleCloseModalBtnClick = e => {
  closeModal();
};

const hendleCloseModalBackdropClick = e => {
  if (e.target !== e.currentTarget) return;

  closeModal();
};

const hendleEscapeKeyPress = e => {
  if (e.code !== 'Escape') return;

  closeModal();
};

refs.openModalBtn.addEventListener('click', hendleOpenModalBtnClick);
refs.closeModalBtn.addEventListener('click', hendleCloseModalBtnClick);
refs.modal.addEventListener('click', hendleCloseModalBackdropClick);
window.addEventListener('keydown', hendleEscapeKeyPress);