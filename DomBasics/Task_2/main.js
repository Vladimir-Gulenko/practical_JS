'use strict';
// Дан список с классом .list
// 	- Найдите первого потомка списка и сделайте его текст красного цвета
// 	- Найдите последнего потомка списка и сделайте его текст синего цвета

// Первый вариант выполнения

// const list = document.querySelector('.list');
// console.log(list);
// const first = list.firstElementChild;
// first.className = 'first';
// const last = list.lastElementChild;
// last.className = 'last';

// Второй вариант выполнения
let list = document.querySelectorAll('.list > li');
list[0].style.color = 'red';
list[1].style.color = 'brown';
list[2].style.color = 'violet';
list[list.length - 2].style.color = 'green';
list[list.length - 1].style.color = 'blue';