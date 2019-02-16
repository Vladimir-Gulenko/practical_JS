'use strict';

// Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
//   после чего нажимает кнопку "Submit" и происходит отправка формы.

//   При отправке формы:
//     - не должна перезагружаться страница
//     - необходимо получить выбранную опцию и вывести в параграф с классом .result


const refs = {
  check: document.querySelector('.options'),
  submit: document.querySelector('.question-form'),
  result: document.querySelector('.result'),
};

let target = '';

const hendleSubmit = e => {
  e.preventDefault();

  refs.result.textContent = 'Result: ' + target;
};

const hendleChange = e => {
  target = e.target.value;
};

refs.submit.addEventListener('submit', hendleSubmit);
refs.check.addEventListener('change', hendleChange);
