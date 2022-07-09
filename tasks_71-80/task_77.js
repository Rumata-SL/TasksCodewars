"use strict";
// task kyu 7 "Are the numbers in order?"

/*In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.*/
/*В этом Ката ваша функция получает на вход массив целых чисел. Ваша задача — определить, расположены ли числа в порядке возрастания. Говорят, что массив находится в порядке возрастания, если нет двух соседних целых чисел, где левое целое число превышает по значению правое целое.

Для целей этого Ката вы можете предположить, что все входные данные допустимы, т. е. непустые массивы, содержащие только целые числа.

Обратите внимание, что массив из 1 целого числа автоматически считается отсортированным в порядке возрастания, поскольку все (нулевые) соседние пары целых чисел удовлетворяют условию, согласно которому левое целое число не превышает по значению правое целое число. Пустой список считается вырожденным случаем и, следовательно, не будет тестироваться в этом Ката — не стесняйтесь поднимать вопрос, если вы видите, что такой список тестируется.*/

function inAscOrder(arr) {
    if (arr.length === 1) {
        return true
    }
    for(let i = 0; i < arr.length;i++ ){
        if(arr[i] > arr[i + 1]){
            return false
        }
    }
    return true
}