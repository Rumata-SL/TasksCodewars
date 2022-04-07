"use strict";
// task kyu 6 "Find the odd int"
/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/

/*
Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.
Всегда будет только одно целое число, которое встречается нечетное количество раз.
*/
function findOdd(A) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++
            }
        }
        if (count % 2) {
            return A[i]
        }
    }
}