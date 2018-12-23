'use strict'

// Напишите скрипт, который выбирает из массива numbers
// все числа, которые больше чем значение переменной num,
// записывая эти числа в массив newArray.
// В результате в массиве newArray будут все подходяшие числа.

const numbers = [1, 3, 17, 5, 9, 24, 8, 14, 34, 18, 26];
const num = 10;
const newArray = [];

for (const value of numbers) {
    if (value > num) {
        newArray.push(value);
    }
}
console.log(newArray);