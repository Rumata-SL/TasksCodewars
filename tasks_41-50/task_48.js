"use strict";
// task kyu 6 "Sum of Digits / Digital Root"
/*
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/
/*
Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной цифры, продолжайте уменьшать таким образом, пока не будет получено однозначное число. Ввод будет неотрицательным целым числом.
*/

let nnn = 1234567;
const foo = (n) => {
    while (n > 9) {
        n = n.toString(10)
            .split("")
            .map(el => Number(el))
            .reduce((acc, el) => {
                return acc + el
            }, 0)
    }
    return n
}
console.log(foo(nnn))
