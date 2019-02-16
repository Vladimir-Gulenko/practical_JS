'use strict';


// Напишите скрипт который:
    
//     - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
//     - При наборе текста в инпуте (событие input), текущее его значение должно 
//       отображаться в p.input-value 

const refs = {
    message: document.querySelector('.message'),
    input: document.querySelector('.input'),
    value: document.querySelector('.input-value'),
  };
  
  const hendleFocus = e => {
    refs.message.textContent = 'Input is in focus!';
  };
  
  const hendleInput = e => {
    refs.value.textContent = e.target.value;
  };
  
  const hendleFocusout = e => {
    refs.message.textContent = '';
    refs.value.textContent = 'Current input value:';
  };
  
  refs.input.addEventListener('focus', hendleFocus);
  refs.input.addEventListener('input', hendleInput);
  refs.input.addEventListener('focusout', hendleFocusout);