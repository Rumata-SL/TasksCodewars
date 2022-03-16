"use strict";
// task kyu 8 "Shifty Closures"
/*
    Functional closures can get overly attached.
     Set them straight!
    Why doesn't greet_abe() actually greet Abe?
*/
/*
    Функциональные затворы могут быть чрезмерно привязаны.
     Поправьте их!
    Почему функция welcome_abe() на самом деле не приветствует Эйба?
*/
const greet_abe = function () {
    let name = 'Abe';
    return "Hello, " + name + '!';
};
const greet_ben = function () {
    let name = 'Ben';
    return "Hello, " + name + '!';
};