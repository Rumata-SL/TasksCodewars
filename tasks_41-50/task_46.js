"use strict";
// task kyu 4 "Sum Strings as Numbers"
/*
Given the string representations of two integers, return the string representation of the sum of those integers.
*/

/*
Учитывая строковые представления двух целых чисел, вернуть строковое представление суммы этих целых чисел.
*/
function sumStrings(a, b) {
    let str = '';
    let zero = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || zero) {
        zero += ~~a.pop() + b.pop();
        str = zero % 10 + str;
        zero = zero > 9;
    }
    return str.replace(/^0+/, '')
}