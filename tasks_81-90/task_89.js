"use strict";
// task kyu 6 "Array.diff"
/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]*/
/*Ваша цель в этом ката — реализовать функцию разности, которая вычитает один список из другого и возвращает результат.
Он должен удалить из списка все значения a, которые присутствуют в списке b, сохраняя их порядок.
arrayDiff([1,2],[1]) == [2]
Если значение присутствует в b, все его вхождения должны быть удалены из другого:
arrayDiff([1,2,2,2,3],[2]) == [1,3]*/

let arr = [1, 2, 2, 2, 3]
let c = [2]

function arrayDiff(a, b) {
    return a.filter(elem => !b.includes(elem))
}

console.log(arrayDiff(arr, c))