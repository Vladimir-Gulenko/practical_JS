'use strict';


/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

function countTotalSalary(salaries) {

    const values = Object.values(salaries); 

    let total = 0;

    for (const value of values) {
        total += value;
    }
    return total;
    };

    // Вызовы функции для проверки
    console.log(
        countTotalSalary({})
    ); // 0

    console.log(
        countTotalSalary({
            mango: 100,
            poly: 150,
            alfred: 80
        })
    ); // 330