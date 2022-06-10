"use strict";
// task kyu 8 "Expressions Matter"
/*Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained*/

/*Даны три целых числа a ,b,c, вернуть наибольшее число , полученное после вставки следующих операторов и скобок :+,*,()
Другими словами, попробуйте каждую комбинацию a,b,c с [*+()] и верните максимальное полученное значение.*/
function expressionMatter(a, b, c) {
    let max = Math.max(
        a + b + c,
        a * b * c,
        a * b + c,
        a * (b + c),
        a + b * c,
        (a + b) * c
    );
    return max
}


