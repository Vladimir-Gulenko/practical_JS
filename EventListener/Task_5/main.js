'use strict';

// Дан список изображений. Сделайте так, чтобы по клику на картинку 
// алертом выводился ее src. Обязательно используйте делегирование событий.

const refs = {
  images: document.querySelector('.images'),
};

const hendleClick = e => {
  alert(e.target.src);
};

refs.images.addEventListener('click', hendleClick);