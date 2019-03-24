'use strict'

const getUserLocation = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const failed = Math.random() > 0.5;
      failed ? reject('Sorry! You have error:') : resolve('Ukraine');

    }, 1000);
  });
  return promise;
};

getUserLocation()
.then(
  location => {
    console.log('Location:', `${location}`);
  })
  .catch(
  error => {
    console.log(error);

  })
  .finally(
    result =>{
    console.log('OPERATION COMPLETED')
    }
  );
