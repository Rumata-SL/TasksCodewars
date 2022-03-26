"use strict";
// task kyu 8 "Find the first non-consecutive number"
/*
Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
*/

/*
Ваша задача — найти первый элемент массива, который не является последовательным.
Под непоследовательным мы подразумеваем не ровно 1 больше, чем предыдущий элемент массива.
*/
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i + 1] !== arr[i] + 1)
            return arr[i + 1];
    }
    return null;
}