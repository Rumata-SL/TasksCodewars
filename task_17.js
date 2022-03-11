"use strict";
// task kyu 8 "Is n divisible by x and y?"
/*
    Create a function that checks if a number n
     is divisible by two numbers x AND y.
      All inputs are positive, non-zero digits.
*/

/*
    Создайте функцию, которая проверяет,
     n делится ли число на два числа x AND y .
      Все входные данные являются положительными, ненулевыми цифрами.
*/
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}