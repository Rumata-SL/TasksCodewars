"use strict";
// task kyu 6 "Stop gninnipS My sdroW!"
/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.*/

/*Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми всеми словами из пяти или более букв (точно так же, как имя этого Ката). Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.*/
let str = "Hey fellow warriors"

function spinWords(string){
    return string.split(" ").map(el => el.length > 4 ? el.split("").reverse().join(""): el).join(' ')
}
console.log(spinWords(str))