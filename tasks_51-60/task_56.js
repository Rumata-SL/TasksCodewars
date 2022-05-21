"use strict";
// task kyu 6 "Two Sum"
/*Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).*/

/*Напишите функцию, которая принимает массив чисел (целые числа для тестов) и целевое число. Он должен найти в массиве два разных элемента, которые при суммировании дают целевое значение. Затем индексы этих элементов должны быть возвращены в виде кортежа/списка (в зависимости от вашего языка) следующим образом: (index1, index2).*/

function twoSum(numbers, target) {
        for (let i=0; i<numbers.length; i++){
            for (let j = 1; j<numbers.length;j++){
                let sum = numbers[i] + numbers[j];
                if(target === sum) return [i , j]
            }
        }
}