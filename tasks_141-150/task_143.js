// task kyu 8 "Count by X"
/*Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).*/
/*Создайте функцию с двумя аргументами, которая будет возвращать массив первых nкратных x.
Предположим, что и заданное число, и количество раз для подсчета будут положительными числами больше, чем 0.
Возвращайте результаты в виде массива или списка (в зависимости от языка).*/


function countBy(x, n) {
    const res = []
    for (let i = 1; res.length < n; i++) {
        if (i % x === 0) {
            res.push(i)
        }
    }
    return res
}

countBy(1, 10)
countBy(2, 5)