"use strict";
// task kyu 5 "Moving Zeros To The End"
/*
    Write an algorithm that takes an array and moves
    all of the zeros to the end, preserving the order of the other elements.
*/

/*
    Напишите алгоритм, который берет массив и перемещает
     все нули в конец, сохраняя порядок остальных элементов.
 */
function moveZeros(arr) {
    const res = []
    const res1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            res.push(arr[i])
        } else {
            res1.push(arr[i])
        }
    }
    return [...res1, ...res]
}
