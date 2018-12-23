'use strict'

// Напишите программу, которая выводит через console.log все числа от 1 до 100, 
// с двумя исключениями.

// -для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’;
// -для чисел, делящихся на 5 (но не на 3) – ‘Buzz’;
// -если число делится и на 3 и на 5, то вывести 'FizzBuzz';

const min = 1;
const max = 100;

let arr = [];

for (let i = 0; i <= 100; i += 1) {
    arr.push(i);
    if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {
        arr[i] = 'Fizz';
    } else if (arr[i] % 5 === 0 && arr[i] % 3 !== 0) {
        arr[i] = 'Buzz';
    } else if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
        arr[i] = 'FizzBuzz';
    };
}
console.log(arr);

// Реализация задачи через функцию

// function fizzBuzz(n) {
//     for (var i = 1; i < n + 1; i++) {
//         if (i % 3 === 0 && i % 5 != 0) {
//             console.log('Fizz');
//         } else {
//             if (i % 5 === 0 && i % 3 != 0) {
//                 console.log('Buzz');
//             } else {
//                 if (i % 3 === 0 && i % 5 === 0) {
//                     console.log('FizzBuzz');
//                 } else {
//                     console.log(i);
//                 }
//             }
//         }
//     }
// }

// fizzBuzz(100);