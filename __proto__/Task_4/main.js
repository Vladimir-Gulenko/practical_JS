'use strict';

/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/

class Car {
  constructor(maxSpeed) {
    /*
        Добавьте свойства:
          - speed - для отслеживания текущей скорости, изначально 0.

          - maxSpeed - для хранения максимальной скорости

          - running - для отслеживания заведен ли автомобиль,
            возможные значения true или false. Изначально false.

          - distance - содержит общий киллометраж, изначально с 0
      */
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
  }

  turnOn() {
    // Добавьте код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
    this.running = true;
  }

  turnOff() {
    // Добавьте код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
    this.running = false;
  }

  accelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
    if (spd > this.maxSpeed)
      return console.log('Вы пытаетесь ехать больше максимальной скорости');

    this.speed += spd;
  }

  decelerate(spd) {
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
    if (spd > this.maxSpeed || spd < 0) return;

    this.speed -= spd;
  }

  drive(hours) {
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
    if (!this.running) return console.log('Машина не заведена');

    this.distance = hours * this.speed;
  }

  static getSpecs(someCar) {
    console.log('maxSpeed:', someCar.maxSpeed);
    console.log('running:', someCar.running);
    console.log('distance:', someCar.distance);
  }
}

const someCar = new Car(100);
someCar.turnOn();
someCar.accelerate(100);
someCar.drive(2);

Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
