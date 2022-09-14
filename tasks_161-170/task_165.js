// task kyu 7 "No oddities here"
/*Write a small function that returns the values of an array that are not odd.
All values in the array will be integers. Return the good values in the order they are given.*/

/*Напишите небольшую функцию, которая возвращает нечетные значения массива.
Все значения в массиве будут целыми числами. Верните хорошие значения в том порядке, в котором они заданы.*/

function noOdds(values) {
    return values.filter(el => el % 2 === 0)
}