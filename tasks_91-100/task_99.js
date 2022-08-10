"use strict";
// task kyu 7 "Two Oldest Ages"
/*The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.*/
/*Необходимо завершить функцию/метод двух старейших возрастов. Он должен принимать массив чисел в качестве аргумента и возвращать два самых высоких числа в массиве . Возвращаемое значение должно быть массивом в формате [second oldest age,  oldest age].
Порядок передаваемых чисел может быть любым. Массив всегда будет включать как минимум 2 элемента. Если есть два или более старших возраста, верните их оба в формате массива.*/

function twoOldestAges(ages){
    ages.sort((a,b)=> a - b)
    return [ages[ages.length-2], ages[ages.length-1]]
}

