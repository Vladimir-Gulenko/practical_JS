'use strict';

// Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
//   Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
//   она находится. Обязательно используйте делегирование событий.

const refs = {
  list: document.querySelector('.list'),
};

const remove = el => {
  const listItem = el.parentNode;

  listItem.remove();
};

const hendleButton = e => {
  remove(e.target);
};

refs.list.addEventListener('click', hendleButton);
