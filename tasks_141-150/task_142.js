// task kyu 7 "Even numbers in an array"
/*Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.*/

/*Учитывая arrayколичество чисел, вернуть новый массив длины number, содержащий последние четные числа из исходного массива (в том же порядке). Исходный массив не будет пустым и будет содержать не менее "числа" четных чисел.*/

function evenNumbers(array, number) {
    const res = []
    for (let i = array.length - 1; res.length < number; i--) {
        if (array[i] % 2 === 0) {
            res.unshift(array[i])
        }
    }
    return res

}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)