// task kyu 8 "Find the Remainder"

/*Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.*/

/*Напишите функцию, которая принимает два целых числа и возвращает остаток от деления большего значения на меньшее.
Деление на ноль должно вернуть NaN.*/

function remainder(n, m) {
    if (n > m) {
        let answer = n % m;
        if (m === 0) {
            return NaN;
        } else {
            return answer;
        }
    } else if (m > n) {
        let answer = m % n;
        if (n === 0) {
            return NaN;
        } else {
            return answer;
        }
    } else {
        let answer = n % m;
        return answer;
    }
}
