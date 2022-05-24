"use strict";
// task kyu 8 "Sum of differences in array"

/*Your task is to sum the differences between consecutive pairs in the array in descending order.*/
/*Ваша задача — просуммировать различия между последовательными парами в массиве в порядке убывания.*/

function sumOfDifferences(arr) {
    if (arr.length < 2)
        return 0;

    let array = arr.sort((a, b) =>a - b);

    return array[array.length - 1] - array[0];
}