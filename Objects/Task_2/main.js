'use strict';


/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
    biggestProperty: function (tasksCompleted) {
        let arr = Object.entries(tasksCompleted);
        let maxVal;
        let maxKey;
        for (let [key, value] of arr) {
            if (!maxVal || value > maxVal) {
                maxVal = value;
                maxKey = key;
            }
        }
        return [`${maxKey}:${maxVal}`];
    }
};
console.log(tasksCompleted.biggestProperty(tasksCompleted));