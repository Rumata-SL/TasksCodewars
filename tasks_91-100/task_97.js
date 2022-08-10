"use strict";
// task kyu 8 "Filter out the geese"
/*Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
The geese are any strings in the following array, which is pre-populated in your solution:
  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:
 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.*/
/*Напишите функцию, которая принимает список строк в качестве аргумента и возвращает отфильтрованный список, содержащий те же элементы, но с удаленными «гусями».
Гуси — это любые строки в следующем массиве, который предварительно заполнен в вашем решении:
  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
Например, если этот массив был передан в качестве аргумента:
 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Ваша функция вернет следующий массив:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
Элементы в возвращаемом массиве должны быть в том же порядке, что и в исходном массиве, переданном вашей функции, хотя и с удаленными «гусями». Обратите внимание, что все строки будут в том же регистре, что и предоставленные, а некоторые элементы могут повторяться.*/

function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(el => el !== geese.find(i => i === el))
}
