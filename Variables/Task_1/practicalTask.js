'use strict';

// Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.

// Кол-во мест в группах ограничено: sharm - 15, hurgada - 25, taba - 6

// Создайте переменные для хранения мест в группах.

// Когда пользователь посещает страницу, предложить ему ввести число необходимых мест, результат сохранить в переменную.

// Проверить являются ли введенные данные целым положительным числом.

// В случае неверного ввода от пользователя, скрипт показывает alert с текстом Ошибка ввода! и больше ничего не делает.
// Если пользователь нажал Cancel, скрипт показывает alert с текстом Нам очень жаль, приходите еще!.
// В случае верного ввода, последовательно проверить кол-во мест в группах, и кол-во необходимых мест введенных пользователем.
// Если была найдена группа, в которой количество мест больше либо равно необходимому, вывести сообщение через confirm, что есть место в группе такой-то, согласен ли пользоваетель быть в этой группе?

// Если ответ да, показать alert с текстом Приятного путешествия в группе <имя группы>
// Если ответ нет, показать alert с текстом Нам очень жаль, приходите еще!
// Если мест нигде нет, показать alert с сообщением Извините, столько мест нет ни в одной группе!

let sharmSitesNumber = 15;
let hurgadaSitesNumber = 25;
let tabaSitesNumber = 6;

const userInputSitesNumber = prompt('Пожалуйста введите количество мест для брони!', '');
alert('Количество забронированных мест :' + Number(userInputSitesNumber));

