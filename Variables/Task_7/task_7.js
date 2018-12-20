'use strict';

// Напишите скрипт который: 

// - Через prompt cпрашивает 'Введите произвольное целое число'
// - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
// - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
// - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'

const inputAsk = 'Введите произвольное целое число';
const tabCancel = 'Приходите еще!';
const inputRight = 'Спасибо!'
const inputWrong = 'Необходимо было ввести целое число!';
const inputNumber = prompt(inputAsk);

if (inputNumber === null) {
  alert(tabCancel);
} else
if (parseInt(inputNumber) == inputNumber) {
  alert(inputRight);
} else {
  alert(inputWrong);
}
