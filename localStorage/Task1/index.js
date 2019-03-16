'use strict'

const refs = {
    pageThema: document.querySelector('theme-manager'),
    btnLight: document.querySelector('button[data-theme ="light"]'),
    btnDark: document.querySelector('button[data-theme ="dark"]')
};


if (localStorage.getItem('pageTheme') !== null) {
    document.body.classList.add(localStorage.getItem('pageTheme'));
};
refs.btnLight.addEventListener("click", e => {
    console.log('l');
    localStorage.setItem('pageTheme', 'theme-light');
    document.body.classList.add('theme-light');
});

refs.btnDark.addEventListener("click", e => {
    console.log('d');
    localStorage.setItem('pageTheme', 'theme-dark');
    document.body.classList.add('theme-dark');
});