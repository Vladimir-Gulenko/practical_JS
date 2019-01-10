'use strict';


/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [{
        name: 'Poly',
        age: 7,
        mood: 'happy'
    },
    {
        name: 'Mango',
        age: 4,
        mood: 'blissful'
    },
    {
        name: 'Ajax',
        age: 3,
        mood: 'tired'
    }
];

function getAllPropValues(arr, prop) {
    return arr.reduce(function (result, item) {
        if (result.indexOf(item[prop]) == -1 && // if need unique values
            typeof item[prop] != "undefined") // if don't want undefined's
            result.push(item[prop]);
        return result;
    }, []);
};

// function getAllPropValues(arr, prop) {
//     return arr.map(el => el[prop]);
// };


// Вызовы функции для проверки
console.log(
    getAllPropValues(users, 'name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
    getAllPropValues(users, 'mood')
); // ['happy', 'blissful', 'tired']

console.log(
    getAllPropValues(users, 'active')
); // []



