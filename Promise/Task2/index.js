'use strict'

const todos = {

  items: ['item1', 'item2'],

  add(item) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.items.push(item);
        resolve(item);
      }, 1000);
    });
  },

  delete(item) {
    return new Promise((resolve) => {
      setTimeout(() => {
          this.items = this.items.filter(i => item !== i);
          resolve(this.items);
        },
        1000);
    });
  }
};
const updateUI = data => console.log(data);
todos.add('item3').then(addedItem => updateUI(addedItem));
todos.delete('item1').then(items => updateUI(items));