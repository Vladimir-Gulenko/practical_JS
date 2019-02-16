'use strict';


// Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
// инпуты проверяли свое содержимое на правильное количество символов. 

// - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
// - Если введено подходящее количество, то outline инпута становится зеленым, 
//   если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid

const refs = {
  list: document.querySelector('.input-list'),
};

let value = 0;
let inputLength = 0;

const inputCheck = (value, el) => {
  if (inputLength !== value) {
    el.classList.add('invalid');
    el.classList.remove('valid');

    return;
  }

  el.classList.add('valid');
  el.classList.remove('invalid');
};

const hendleFocusout = e => {
  value = Number(e.target.getAttribute('data-length'));
  inputLength = e.target.value.length;

  inputCheck(value, e.target);
};

refs.list.addEventListener('focusout', hendleFocusout);