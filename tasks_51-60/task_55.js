"use strict";
// task kyu 5 "Simple Pig Latin"
/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.*/

/*Переместите первую букву каждого слова в конец, а затем добавьте «ay» в конец слова. Оставьте знаки препинания нетронутыми.*/


function pigIt(str) {
    str = str.split(' ');
    let arr = [];
    for (let key of str) {
        (/([a-zA-Z])/).test(key) ? arr.push(key.substring(1) + key[0] + "ay") : arr.push(key)
    }
    return arr.join(" ");
}

