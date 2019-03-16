'use strict'
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop. 
 * 
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 * 
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
];

const refs = {
    btnStart: document.querySelector('button[data-action= "start"]'),
    btnStop:document.querySelector('button[data-action= "stop"]')
};

let timerId = null;

refs.btnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = color;
    
  }, 1000);
});

refs.btnStop.addEventListener("click", () => {
  clearInterval(timerId);
  console.log("setInterval stopped!");
});

