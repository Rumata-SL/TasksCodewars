"use strict";
// task kyu 8 "Jenny's secret message"
/*
    Jenny has written a function that returns a greeting for a user.
    However, she's in love with Johnny, and would like to greet him slightly different.
     She added a special case to her function, but she made a mistake.
 */

/*
    Дженни написала функцию, которая возвращает приветствие для пользователя.
     Однако она влюблена в Джонни и хотела бы поприветствовать его немного по-другому.
      Она добавила к своей функции особый случай, но допустила ошибку.
 */
function greet(name) {
    if (name === "Johnny"){
        return "Hello, my love!";
    }
    return "Hello, " + name + "!";
}