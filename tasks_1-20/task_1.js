"use strict";
// task kyu 8 "Find Maximum and Minimum Values of a List"
/*
      Your task is to make two functions, max and min (maximum and minimum in PHP and Python, maxi and mini in Julia) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector. 
 */
/*
      Ваша задача состоит в том, чтобы сделать две функции maxи min( maximumи minimumв PHP, и в Python, maxiи miniв Julia), которые принимают (n) массив/вектор целых чисел listв качестве входных данных и выходных данных, соответственно, наибольшее и наименьшее число в этом массиве/векторе.
 */
const min = function (list) {
      if (list[0]) return Math.min(...list);
};

const max = function (list) {
      return Math.max(...list);
};
