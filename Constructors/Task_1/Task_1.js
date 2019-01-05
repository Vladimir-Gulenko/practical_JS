'use strict';

// Напишите код, который бы  с помощью 
// функции-конструкора User, позволял создавать 
// объекты пользователя со следующим свойствами:
//   - name - строка (имя)
//   - isActive - буль (активен)
//   - age - число (возраст)
//   - friends - число (кол-во друзей)

// Имя, активность, возраст и друзей, необходимо передать 
// как аргументы при вызове конструктора.

// Добавить метод getUserInfo(), которая, выводит строку:
// `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

// Создать несколько объектов пользователя User и с помощью 
// функции getUserInfo вывести строку в консоль.


function User (name, isActive, age, friends) {
  this.name = name;
  this.isActive = isActive;
  this.age = age;
  this.friends = friends;

 this.getUserInfo = function() {
   
 }
 console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
};

const user1 = new User ('Mango', 'true', 18, 2 );
const user2 = new User ('Poly', 'false', 28, 5 );
const user3 = new User ('Zazu', 'true', 45, 1 );

