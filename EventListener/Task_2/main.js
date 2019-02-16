'use strict';

// Даны 2 инпута, абзац и кнопка.
// По нажатию на кнопку получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.

const refs = {
    calc: document.querySelector(".container"),
    button: document.querySelector("button"),
    result: document.querySelector(".result"),
    input: [...document.querySelectorAll("input")]
};

refs.calc.addEventListener('click', () => {
    let total = 0;
    for (let item of refs.input) {
        total += + item.value;
    }
    refs.result.textContent = total;
});