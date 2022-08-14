// task kyu 8 "Generate range of integers"
/*Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
Task
Implement a function named
generateRange(2, 10, 2) // should return array of [2,4,6,8,10]*/
/*Реализуйте функцию с именем generateRange(min, max, step), которая принимает три аргумента и генерирует диапазон целых чисел от минимума до максимума с шагом. Первое целое число — это минимальное значение, второе — максимальное значение диапазона, а третье — шаг. (мин < макс)
Задача
Реализовать функцию с именем
generateRange(2, 10, 2) // should return array of [2,4,6,8,10]*/

function generateRange(min, max, step){
    const res = []
    for (let i = min; i <= max; i += step){
        res.push(i)
    }
    return res
}

console.log(generateRange(1,10,3))