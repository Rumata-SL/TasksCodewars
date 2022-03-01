"use strict";
// task kyu 7 "The highest profit wins!"
/*
      Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
      Task
      Write a function that returns both the minimum and maximum number of the given list/array. 
*/
/*
      У Бена есть очень простая идея для получения прибыли: он что-то покупает и снова продает. Конечно, это не принесло бы ему никакой прибыли, если бы он просто покупал и продавал по одной и той же цене. Вместо этого он купит его по самой низкой цене и продаст по самой высокой.
      Задача
      Напишите функцию, которая возвращает минимальное и максимальное количество заданного списка/массива. 
*/
function minMax(arr) {
      arr.sort((a, b) => a - b);
      return [arr[0], arr[arr.length - 1]];
}
