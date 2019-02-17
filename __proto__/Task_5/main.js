'use strict';

/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущее значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

class Car {
  constructor(maxSpeed, value) {
    // ... код
    this.maxSpeed = maxSpeed;
    this._value = value;
  }
  // ... код
  get value() {
    console.log(this._value);
  }

  set value(value) {
    this._value = value;
  }
}

const myCar = new Car(50, 2000);

myCar.value; // 2000
myCar.value = 4000;
myCar.value; // 4000