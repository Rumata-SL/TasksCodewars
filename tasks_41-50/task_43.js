"use strict";
// task kyu 7 "You're a square!"
/*
Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
*/
/*
Учитывая целое число, определите, является ли оно квадратным числом :
В математике квадратное число или идеальный квадрат — это целое число, являющееся квадратом целого числа; другими словами, это произведение некоторого целого числа на самого себя.
*/
const isSquare =(n)=>{
    if(n === 0){
        return true
    } else {
        return n > 0 && Math.sqrt(n) % 1 === 0;
    }
}