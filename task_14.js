"use strict";
// task kyu 7 "Small enough? - Beginner"
/*
    You will be given an array and a limit value.
    You must check that all values in the array are
    below or equal to the limit value. If they are, return true. Else, return false.
    You can assume all values in the array are numbers.
*/

/*
    Вам будет предоставлено значение arrayи limit. Вы должны убедиться,
     что все значения в массиве ниже или равны предельному значению.
      Если они есть, верните true. Иначе возвращайся false.
    Вы можете предположить, что все значения в массиве являются числами.
*/
function smallEnough(a, limit) {
    a.sort((a, b) => a - b);
    return a[a.length - 1] <= limit;
}