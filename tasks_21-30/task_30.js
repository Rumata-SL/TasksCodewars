"use strict";
// task kyu 6 "Bit Counting"
/*
    Write a function that takes an integer as input,
     and returns the number of bits that are equal to one in the
     binary representation of that number. You can guarantee that input is non-negative.
 */
/*
    Напишите функцию, которая принимает целое число в качестве
     входных данных и возвращает количество битов, равных единице
      в двоичном представлении этого числа. Вы можете гарантировать, что ввод неотрицательный.
 */
const countBits = function (n) {
    let num = [...n.toString(2)].filter(e => e === "1").length;
    return num
};