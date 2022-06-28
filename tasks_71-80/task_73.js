"use strict";
// task kyu 8 "To square(root) or not to square(root)"

/*Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:
If the number has an integer square root, take this, otherwise square the number.
Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]*/
/*Напишите метод, который будет получать массив целых чисел в качестве параметра и будет обрабатывать каждое число из этого массива.
Вернуть новый массив с обработкой каждого числа входного массива следующим образом:
Если число имеет целый квадратный корень, возьмите его, иначе возведите число в квадрат.
Пример
[4,3,9,7,2,1] -> [2,9,3,49,4,1]*/

function squareOrSquareRoot(array) {
    return array.map(number => Math.sqrt(number) % 1 === 0 ? Math.sqrt(number) : number**2)
}