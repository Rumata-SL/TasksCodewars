"use strict";
// task kyu 7 "Find the stray number"
/*
      You are given an odd-length array of integers,
      in which all of them are the same, except for one single number.
      Complete the method which accepts such an array,
      and returns that single different number. 
 */
/*
      Вам дан массив целых чисел нечетной длины ,
      в котором все они одинаковы, кроме одного единственного числа.
      Завершите метод, который принимает такой массив
      и возвращает это единственное другое число. 
 */
function stray(numbers) {
      numbers.sort((a, b) => a - b);
      return numbers[0] === numbers[1]
            ? numbers[numbers.length - 1]
            : numbers[0];
}
