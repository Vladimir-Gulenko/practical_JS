'use strict';

// Создайте игру угадай число.

// Есть массив чисел numbers, содержащий "верные" числа.
// Числа в массиве всегда идут по возрастанию, 1 - 5, 20 - 40, 2 - 100 и т.п.

// Просим пользователя ввести цифру от самого маленького,
// до самого большого элемента массива.Эти значения необходимо
// сохранить в переменные min и max.Учтите что массив произвольный,
// но элементы всегда идут по возрастанию.

// Пусть prompt говорит "Введите цифру между x и y", где x и y
// соотвественно самый маленький и самый большой элемент массива.

// Но пользователь может ввести что угодно, необходимо проверить
// что было введено.Преобразовать input в числовой тип и проверить число ли это.

// Если не число - выводим alert с сообщением о том, что было
// введено не число.
// Если число - проверить содержит ли в себе массив numbers это число.
// Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
// Если не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.

function compare(x, y) {
  if (x >= y) return 1;
  if (x < y) return -1;
}

const numbers = [99, 12, 15, 25, 37, 41];
numbers.sort(compare);
const min = numbers[0];
const max = numbers[numbers.length - 1];

console.log(numbers);
let guess = 0;

do {
  guess = prompt(`Please input a randon integer between ${min} and ${max}`);
  if (Number.isNaN(+guess)) {
    alert('Not a number at all');
    //continue;
  } else if (guess === null) {
    break;
  } else {
    if (numbers.includes(+guess)) {
      alert("You've won");
    } else {
      alert('Not so smart');
    }
  }
} while (1);
