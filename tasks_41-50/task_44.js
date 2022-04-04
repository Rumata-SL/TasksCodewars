"use strict";
// task kyu 7 "Beginner Series #3 Sum of Numbers"
/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
*/
/*
Даны два целых числа aи b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните a
или b.
*/
function getSum( a,b ){
    if(a === b) {
        return a
    }
    else if (a < b) {
        return a + getSum(a+1, b);
    } else {
        return a + getSum(a-1, b);
    };
}