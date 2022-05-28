"use strict";
// task kyu 8 "Squash the bugs"
/*Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.
There will only be one 'longest' word.*/

/*Простая задача — устранить все ошибки из предоставленного кода, чтобы код работал и выдавал ожидаемое значение. Вывод должен быть длиной самого длинного слова в виде числа.
Будет только одно «самое длинное» слово.*/

function findLongest(str) {

    var spl = str.split(" ");
    var longest = 0

    for (var i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }
    }
    return longest
}