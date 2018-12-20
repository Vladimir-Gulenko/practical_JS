'use strict';

// Напишите скрипт который:

//   - Через prompt cпрашивает 'Какой сейчас год?'
//   - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
//   - Если что-то другое — показывать alert 'Но ведь на дворе 2018!'

const question = 'Какой сейчас год?';
const greeting = 'Все верно!';
const mistake = 'Но ведь на дворе 2018!';

let inputYear = prompt(question);
if (inputYear !== '2018') {
  alert(mistake);
} else {
  alert(greeting);
}
