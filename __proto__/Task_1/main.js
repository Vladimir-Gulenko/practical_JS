'use strict';

/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// const Account = function Account(login, email, friendsCount) {
//   this.login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;

//   Account.prototype.getAccountInfo = function() {
//     console.log('Login:', this.login);
//     console.log('Email:', this.email);
//     console.log('Count of friends:', this.friendsCount);
//   };
// };

// const mango = new Account('Mango', 'mango@email.xx', 10);
// const poly = new Account('Poly', 'poly@email.xx', 20);
// const ajax = new Account('Ajax', 'ajax@email.xx', 30);

// mango.getAccountInfo();
// poly.getAccountInfo();
// ajax.getAccountInfo();

// ES6

class Account {
  constructor(login, email, friendsCount) {
    this._login = login;
    this._email = email;
    this._friendsCount = friendsCount;
  }

  getAccountInfo() {
    console.log('Login:', this._login);
    console.log('Email:', this._email);
    console.log('Count of friends:', this._friendsCount);
  }
}

const mango = new Account('Mango', 'mango@email.xx', 10);
const poly = new Account('Poly', 'poly@email.xx', 20);
const ajax = new Account('Ajax', 'ajax@email.xx', 30);

mango.getAccountInfo();
poly.getAccountInfo();
ajax.getAccountInfo();