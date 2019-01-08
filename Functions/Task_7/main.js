'use strict'

/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers = [2, 1, 4, 9];

function addUniqueNumbers(...arg) {
  let arr = Array.from(arg);
  for (let i = 0; i < uniqueNumbers.length; i++) {
    if (uniqueNumbers.includes(arr[i]) === true) {
      delete arr[i];
    } 
    else {
      uniqueNumbers.push(arg[i]);
    }
  }; 
  return uniqueNumbers;
}

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]