'use strict'

/* Есть массив имен пользователей */

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

/* Используя методы массива, последовательно выполнить следующие операции */

// Удалить из начала массива нулевой элемент
users.shift();
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массивa последний элемент
users.pop();
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива любое имя
users.unshift('Zigmund');
console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// Добавить в конец массива два любых имени за одну операцию
users.push('Bonnie', 'Clyde');
console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]