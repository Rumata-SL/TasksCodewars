// task kyu 7 "Currying functions: multiply all elements in an array"

/*To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
The returned array should consist of each of the elements from the first array multiplied by the integer.
Example:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.*/

/*Для завершения этой Ката вам нужно создать функцию multiplyAll/ multiply_all, которая принимает в качестве аргумента массив целых чисел. Эта функция должна возвращать другую функцию, которая принимает одно целое число в качестве аргумента и возвращает новый массив.
Возвращаемый массив должен состоять из каждого элемента из первого массива, умноженного на целое число.
Пример:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];
Вы не должны изменять исходный массив.*/

const multiplyAll = (arr) => {
    return (x) => {
        if (arr.length === 0) {
            return []
        } else {
            return arr.map(i => i * x)
        }
    }
}