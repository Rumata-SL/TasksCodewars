"use strict";
// task kyu 5 "Moving Zeros To The End"
/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/
/*
Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок остальных элементов.
*/
const a = [false,1,0,1,2,0,1,3,"a"]
function moveZeros(arr) {
    let arr1 = arr.filter(el=> el !==0 )
    let arr2 = arr.filter(el=> el ===0 )
        return [arr1, ...arr2]
}

