"use strict";

// task kyu 7 "Sort Numbers"

/*Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.*/

/*Завершите решение, чтобы оно отсортировало переданный массив чисел. Если функция передает пустой массив или значение null/nil, она должна вернуть пустой массив.*/

function solution(nums) {
    if (nums !== null || nums.length === 0) {
        return []
    }
        return nums.sort((a,b)=>a-b)
}