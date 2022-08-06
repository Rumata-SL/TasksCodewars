"use strict";
// task kyu 8 "Powers of 2"
/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).*/
/*Завершите функцию, которая принимает неотрицательное целое число nв качестве входных данных и возвращает список всех степеней 2с показателем степени от 0до n( включительно ).*/

function powersOfTwo(n){
    let arr = []
    for(let i = 0; i <= n; i++){
        arr.push(2**i)
    }
return arr
}
console.log(powersOfTwo(4))