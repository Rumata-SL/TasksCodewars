"use strict";
// task kyu 8 "Unfinished Loop - Bug Fixing #1"
/*
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/

/*
Незавершенный цикл — исправление ошибки № 1
О нет, Тимми создал бесконечный цикл! Помогите Тимми найти и исправить ошибку в его незавершенном цикле for!
*/
function createArray(number) {
    let newArray = [];

    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}