'use strict'


//   Попросить пользователя ввести произвольную строку
//   и записать ее в переменную string
const string = prompt('Введите произвольный текст!');

// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
const arr = string.split(" ");

console.log(arr);

// Вывести в консоли общую длину массива arr
console.log(arr.length);

// Используя цикл, вывести в консоль все индексы массива arr
for (let i = 0; i < arr.length; i += 1)
    console.log(i);

// Используя цикл, вывести в консоль все элементы массива arr
for (let i = 0; i < arr.length; i += 1)
    console.log(arr[i]);

// Используя цикл, вывести в консоли все пары индекс:значение массива arr
for (let i = 0; i < arr.length; i += 1)
    console.log(i + ':' + arr[i]);