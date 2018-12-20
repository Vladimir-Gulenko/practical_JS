'use strict';

// В переменную num записывается случайное число.

// Используя ветвления запишите в переменную type строку:  
//   - "even" если num четное
//   - "odd" если num не четное

const num = Number.parseInt(Math.random() * 100);

let type;

if (num % 2 === 0) {type = 'even';}
else {type = 'odd';}

// type = num % 2 === 0 ? 'even' : "odd"

console.log(`${num} is ${type}`);