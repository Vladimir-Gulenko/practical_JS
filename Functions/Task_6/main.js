'use strict'
/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
const findLargestNumber = function (numbers) {
  return Math.max.apply(null, numbers);
};

// let x = 0;
// function findLargestNumber(numbers) {
//     for (let i of numbers) {
//         if (i > x) {
//             x = i;
//         }
//     }
//     return x;
// }

// Вызовы функции для проверки
console.log(
  findLargestNumber([1, 2, 3])
); // вернет 3

console.log(
  findLargestNumber([27, 12, 18, 5])
); // вернет 27

console.log(
  findLargestNumber([31, 128, 14, 74])
); // вернет 128