"use strict";
// task kyu 8 "Enumerable Magic #25 - Take the First N Elements"
/*
    Create a function that accepts a list/array and a number n,
     and returns a list/array of the first n elements from the list/array.
*/

/*
    Создайте функцию, которая принимает список/массив и число n и возвращает
     список/массив первых n элементов из списка/массива.
 */
function take(arr, n) {
    return arr.splice(0, n);
}