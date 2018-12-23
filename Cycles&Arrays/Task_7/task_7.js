'use strict'

//   Напишите скрипт, который проверяет произвольную строку 
//   в переменной string и находит в ней самое длинное слово,
//   записывая его в переменную longestWord.


const string = "May the force be with you";
let longestWord;
let arr = string.split(" ");
let wordLength = 0;
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > wordLength) {
        wordLength = arr[i].length;
        longestWord = arr[i];
    }
};

console.log(longestWord);