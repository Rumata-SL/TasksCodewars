// task kyu 7 "Sum of all arguments"

/*Write a function that finds the sum of all its arguments.
eg:
sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15*/

/*Напишите функцию, которая находит сумму всех своих аргументов.
например:
sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15*/

function sum() {
    // const arr = [...arguments]
    return [...arguments].reduce((acc, el) => acc += el, 0)
}

console.log(sum(1,2,3))