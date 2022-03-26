"use strict";
// task kyu 8 "Find numbers which are divisible by given number"
/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
*/
/*
Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на заданный делитель. Первый аргумент — это массив, numbersа второй — divisor.
*/
function divisibleBy(numbers, divisor){
        const arr = [];
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] % divisor === 0){
                arr.push(numbers[i])
            }
        }
        return arr
}