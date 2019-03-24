"use strict";

//  * Перепиши функцию updateActiveState так, чтобы она
//  * не использовала callback-функцию, а возвращала промис.

const users = [{
    name: "Mango",
    active: true
  },
  {
    name: "Poly",
    active: false
  },
  {
    name: "Ajax",
    active: true
  },
  {
    name: "Lux",
    active: false
  }
];

const updateActiveState = () => {
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(users)
      }, 500);

    }
  )
};

updateActiveState(users).then(console.table)