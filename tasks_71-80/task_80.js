"use strict";
// task kyu 7 "JavaScript Array Filter"

/*JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
The solution would work like the following:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]*/

/*Массивы JavaScript поддерживают функцию фильтра (начиная с JavaScript 1.6). Используйте функциональность фильтра, чтобы завершить данную функцию.
Решение будет работать следующим образом:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]*/

function getEvenNumbers(numbersArray){
return numbersArray.filter(i => i % 2 === 0)
}