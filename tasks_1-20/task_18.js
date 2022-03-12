"use strict";
// task kyu 8 "Reversed Words"
/*
    Complete the solution so that it reverses
    all of the words within the string passed in.
 */
/*
    Завершите решение, чтобы оно перевернуло
    все слова в переданной строке.
*/
function reverseWords(str){
    return str.split(" ").reverse().join(" ");
}