'use strict'

// Есть массив паролей зарегистрированных пользователей passwords.
// При посещении страницы, необходимо попросить пользователя ввести свой пароль, после чего проверить содержит ли массив passwords пароль введенный пользователем.
// Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts. Подсказка: используйте цикл do...while.
// Если был введен пароль который есть в массиве passwords, вывести alert с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
// Если был введен не существующий пароль, отнять от лимита попыток единицу, вывести alert с текстом 'Неверный пароль, у вас осталось n попыток', где n это оставшийся лимит.
// После того как пользователь закрыл alert, запросить пароль снова.
// Продолжать запрашивать пароль до тех пор, пока пользователь не введет существующий пароль, не кончатся попытки или пока пользователь не нажмет Cancel в prompt.
// Если закончились попытки, вывести alert с текстом 'У вас закончились попытки, аккаунт заблокирован!'
// Если пользователь нажмет Cancel, прекратить выполнение цикла.


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
const paswAsk = ' Please, enter your password ';
const userInput = prompt(paswAsk);

const isPasswordUnique = (password, passwords) => {
    if (passwords.includes(password)) {
        return false;
    }
    return true;
};

const attemptsDecrease = (attempts) => {
    if (isPasswordUnique === false) {
        let attempts = attempts - 1;
    }
    console.log(attempts);
};
do {


} while (attempts === 0);

isPasswordUnique();
attemptsDecrease();