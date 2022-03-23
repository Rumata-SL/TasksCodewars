"use strict";
// task kyu 6 "Is a number prime?"
/*
    Определите функцию, которая принимает один целочисленный аргумент и возвращает логическое значение trueили falseв зависимости от того, является ли целое число простым.
    Согласно Википедии, простое число (или простое число) — это натуральное число больше 1, которое не имеет положительных делителей, кроме 1 и самого себя.
*/

/*
    Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.
    Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    const max = Math.sqrt(num) + 1;
    for (let i = 2; i < max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

