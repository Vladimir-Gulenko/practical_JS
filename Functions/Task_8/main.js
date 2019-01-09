'use strict';

  // Напишите скрипт, который, для объекта user, последовательно: 

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// - добавляет поле mood со значением 'happy'
user.mood = 'happy';

//  - заменяет значение hobby на 'javascript'
user.hobby = 'javascript';

//  - удаляет свойство premium
delete user.premium;

console.log(user);

//  - выводит содержимое объекта user в формате ключ:значение 
//  используя цикл for...in
for (let key in user) {
  console.log(`Key : ${key} `);
};

//  - выводит содержимое объекта user в формате ключ:значение 
//       используя Object.keys и for...of
let keys = Object.keys(user);
for (const key of keys) {
  console.log('Value: ', user[key]);
};
  //  - выводит содержимое объекта user в формате ключ:значение 
  //       используя Object.entries и for...of
  let entries = Object.entries(user);
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];

    console.log(`${key}: ${value}`);
  };