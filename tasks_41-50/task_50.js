"use strict";
// task kyu 7 "Sum of Minimums!"
/*Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.*/

/*Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.*/

let arr = [
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]
]
const foo = (arr) => {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        arr1.push(Math.min(...arr[i]))
    }
    return arr1.reduce((acc, el) => acc + el)
}
// const sumOfMinimums = arr => arr.map(x => Math.min(...x)).reduce((a, b) => a + b, 0);

