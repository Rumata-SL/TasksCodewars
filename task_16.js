"use strict";
// task kyu 8 "Counting sheep..."
/*
    Consider an array/list of sheep where some
    sheep may be missing from their place.
     We need a function that counts the number of sheep present in the array (true means present).
*/

/*
    Рассмотрим массив/список овец, где некоторые
     овцы могут отсутствовать на своем месте.
     Нам нужна функция, которая подсчитывает количество овец,
      присутствующих в массиве (true означает наличие).
  */
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(el => el === true).length;
}