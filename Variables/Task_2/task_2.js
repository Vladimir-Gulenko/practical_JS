'use strict';

// Есть три переменные содержащие день, месяц, и год. 
// Необходимо получить строку день\месяц\год
// в формате xx\xx\xxxx
// Найдите ошибку в записи значания для переменной date, 
// результат будет выведен в консоль и равен комментарию 
// напротив console.log()


const day = 2;
const month = 10;
const year = 2017;
let dayForm;

if (day < 10) {
    dayForm = '0' + day;
} else {
    dayForm = '' + day;
}
const date = `${dayForm}\\${month}\\${year} `;

console.log(date); // 02\10\2017