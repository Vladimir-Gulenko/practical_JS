'use strict'

// Напишите цикл, который предлагает, через prompt, ввести число больше 100.

// Если посетитель ввёл другое число или нажал Cancel– попросить ввести ещё раз,
// и так далее, пока не введет число больше 100.
let num;

do {
    num = prompt('Введите число больше 100!');

} while (num <= 100 || num !== null);