"use strict";
// task kyu 8 "Removing Elements"
/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.*/

/*Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.*/
function removeEveryOther(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i])
    }
    return newArr
}