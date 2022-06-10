"use strict";
// task kyu 5 "Valid Parentheses"
/*Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.*/

/*Напишите функцию, которая принимает строку скобок и определяет, допустим ли порядок скобок. Функция должна возвращать trueзначение, если строка действительна и falseнедействительна.*/

function validParentheses(parens) {
    let set = 0;
    for (let i = 0; i < parens.length && set >= 0; i++) {
        set += (parens[i] === '(') ? 1 : -1;
    }
    return (!set);
}