"use strict";
// task kyu 8 "Exclamation marks series #1: Remove an exclamation mark from the end of string"
/*Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.*/

/*Убрать восклицательный знак в конце строки. Для начинающего ката можно считать, что входные данные всегда являются строкой, проверять ее не нужно.*/


function remove(string) {
    return string[string.length - 1] === '!' ? string.slice(0, string.length - 1) : string;
}