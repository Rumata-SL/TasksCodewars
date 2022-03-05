"use strict";
// task kyu 7 "Mumbling"
/*
    This time no story, no theory.
     The examples below show you how to write function accum:
    Examples:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

/*
    На этот раз ни истории, ни теории.
     В приведенных ниже примерах показано, как написать функцию accum:
    Примеры:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/
function accum(s) {
    return [...s].map((el, i) => (el.toUpperCase() + el.toLowerCase().repeat(i))).join("-");
}