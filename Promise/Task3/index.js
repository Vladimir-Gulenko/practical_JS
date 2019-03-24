'use strict'

const goRace = (nameCarsDriver, delay = 0) => {

  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(`Driver ${nameCarsDriver} finished in ${delay} ms`)
      }, delay);
    }
  );
};

const Michael = goRace('Michael', 1000);
const David = goRace('David', 2000);

Promise.race([Michael, David]).then(winner => console.log(winner));
Promise.all([Michael, David]).then(results => console.log(results))
  .catch(error => {
    console.log('Something going wrong!', error);

  });


//-----------------------------------------------------------------------

const hello = () => {
  return Promise.resolve("Hello!")
};

hello().then(console.log)

//-----------------------------------------------------------------------
const goodby = () => {
  return Promise.reject("Goodby!")
};

goodby().catch(console.log)


//-----------------------------------------------------------------------