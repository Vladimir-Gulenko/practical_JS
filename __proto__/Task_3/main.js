'use strict';

/*
  Создайте класс Car с указанными полями и методами.
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
}

const car = new Car(300);

car.turnOn();
console.log('Машина заведена:', car.running);

car.accelerate(100);
console.log(car.speed);

car.decelerate(50);
console.log(car.speed);

car.drive(5);
console.log(car.distance);

car.turnOff();
console.log('Машина заведена:', car.running);
