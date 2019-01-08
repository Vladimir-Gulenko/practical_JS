'use strict'
/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/
// const findLongestWord = function (str) {
//   let strSplit = str.split(' ');
//   let longestWord = '';
//   for (const item of strSplit){
//     item.length > longestWord.length ? longestWord = item : null;
//   }

//   return longestWord;
// }

const findLongestWord = function (str) {
    let strSplit = str.split(' ');
    var longestWord = strSplit.reduce(function(longest, currentWord) {
      if(currentWord.length > longest.length)
         return currentWord;
      else
         return longest;
    } );
    return longestWord;
  };


    // Вызовы функции для проверки
    console.log(
      findLongestWord("The quick brown fox jumped over the lazy dog")
    ); // вернет 'jumped'

    console.log(
      findLongestWord("Google do a roll")
    ); // вернет 'Google'

    console.log(
      findLongestWord("May the force be with you")
    ); // вернет 'force'