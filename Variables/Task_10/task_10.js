'use strict';


// Создайте срипт поиска отелей, где пользователь 
//   с помощью prompt должен ввести число от 1 до 5

//   Проверить что пользователь ввел именно цифру от 1 до 5

//   Если пользователь нажал Cancel, то вывести 
//   alert с текстом 'очень жаль, приходите еще!'

//   Если было введено что либо кроме чисел 1-5, 
//   вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'

//   Если же пользовател ввел валидное число, 
//   в зависимости от числа, используя switch, 
//   вывести alert с одной из строк:

//     1 - 'Каталог хостелов' 
//     2 - 'Каталог бюджетных отелей'
//     3 - 'Каталог отелей ***'
//     4 - 'Каталог отелей ****'
//     5 - 'Каталог лучших отелей'

const inputAsk = 'Введите число от 1 до 5 !';
const tabCancel = 'Oчень жаль, приходите еще!';
const inputWrong = 'Неверный ввод, возможные варианты 1-5!';
const inputNumber_1 = 'Каталог хостелов';
const inputNumber_2 = 'Каталог бюджетных отелей';
const inputNumber_3 = 'Каталог отелей ***';
const inputNumber_4 = 'Каталог отелей ****';
const inputNumber_5 = 'Каталог лучших отелей';

const inputNumber = prompt(inputAsk);
if (inputNumber === null) {
    alert(tabCancel);
} else {
    switch (inputNumber) {
        case '1':
            alert(inputNumber_1);
            break;

        case '2':
            alert(inputNumber_2);;
            break;

        case '3':
            alert(inputNumber_3);;
            break;

        case '4':
            alert(inputNumber_4);;
            break;
        case '5':
            alert(inputNumber_5);;
            break;
        default:
            alert(inputWrong);
    }

    console.log(inputNumber);
}