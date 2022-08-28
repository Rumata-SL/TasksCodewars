// task kyu 8 "Pythagorean Triple"
/*Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

A pythagorean triple is formed when:

c2 = a2 + b2
where c is the largest value of a, b, c.

For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42*/
/*Дан массив из 3 неотрицательных целых чисел a, b and c, определить, образуют ли они пифагорову тройку.

Пифагорова тройка образуется, если:

с 2 = а 2 + б 2
где cнаибольшее значение a, b, c.

Например: a = 3, b = 4, c = 5 образует пифагорову тройку, потому что 5 2 = 3 2 + 4 2*/

function isPythagoreanTriple(integers) {
    integers.sort((a, b) => a - b)
    return integers[2] ** 2 === integers[0] ** 2 + integers[1] ** 2 ? 1 : 0
}

console.log(isPythagoreanTriple([5,3,4]))