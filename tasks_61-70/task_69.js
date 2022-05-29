"use strict";
// task kyu 8 "All Star Code Challenge #18"
/*Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.*/
/*Создайте функцию, которая принимает 2 строковых аргумента и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.
Если вхождений не найдено, должно быть возвращено число 0.*/
function strCount(str, letter){
    return str.split('').filter(l=>letter===l).length
}