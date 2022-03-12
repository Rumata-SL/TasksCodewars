"use strict";
// task kyu 8 "Array plus array"
/*
    I'm new to coding and now I want to get the sum of two
     arrays...actually the sum of all their elements.
      I'll appreciate for your help.
    P.S. Each array includes only integer numbers. Output is a number too.
*/
/*
    Я новичок в кодировании, и теперь я хочу получить сумму
     двух массивов... на самом деле сумму всех их элементов.
      Я буду признателен за вашу помощь.
    PS Каждый массив включает только целые числа. Выход - тоже число.
*/
function arrayPlusArray(arr1, arr2) {
    return arr = [...arr1, ...arr2].reduce((a, b) => a + b);
}