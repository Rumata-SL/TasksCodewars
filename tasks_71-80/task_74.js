"use strict";
// task kyu 8 "Filling an array (part 1)"
/*We want an array, but not just any old array, an array with contents!
Write a function that produces an array with the numbers 0 to N-1 in it.
For example, the following code will result in an array containing the numbers 0 to 4:
arr(5) // => [0,1,2,3,4]*/

/*Нам нужен массив, но не какой-нибудь старый массив, а массив с содержимым!
Напишите функцию, которая создает массив с числами 0в N-1нем.
Например, следующий код создаст массив, содержащий числа 0для 4:
arr(5) // => [0,1,2,3,4]*/

function getArr(N) {
    let arr = []
    for (let i = 0; i < N; i++) {
        arr.push(i)
    }
    return arr
}
