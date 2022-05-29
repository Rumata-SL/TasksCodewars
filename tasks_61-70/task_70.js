"use strict";
// task kyu 8 "Difference of Volumes of Cuboids"
/*In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.*/
/*В этом простом упражнении вы создадите программу, которая будет принимать два списка целых чисел aи b. Каждый список будет состоять из 3 положительных целых чисел выше 0, представляющих размеры прямоугольных параллелепипедов aи b. Вы должны найти разницу объемов прямоугольных параллелепипедов независимо от того, какой из них больше.

Например, если переданы параметры ([2, 2, 3], [5, 4, 1]), объем aравен 12, а объем bравен 20. Следовательно, функция должна вернуть 8.

Ваша функция будет проверена как на готовых примерах, так и на случайных.*/

function findDifference(a, b) {
    return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b))
}