"use strict";
// task kyu 7 "Summing a number's digits"
/*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
For example: (Input --> Output)
10 --> 1
99 --> 18
-32 --> 5*/

/*Напишите функцию с именем sumDigits, которая принимает число в качестве входных данных и возвращает сумму абсолютного значения каждой из десятичных цифр числа.
Например: ( Ввод --> Вывод )
10 --> 1
99 --> 18
-32 --> 5*/

function sumDigits(number) {
    return eval( Math.abs(number).toString().split('').join("+"))
}

console.log(sumDigits(11))
