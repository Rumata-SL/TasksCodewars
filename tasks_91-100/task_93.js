"use strict";
// task kyu 7 "Two to One"
/*Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.*/

/*Возьмите 2 строки s1и s2включите только буквы от aдо z. Возвращает новую отсортированную строку, максимально длинную, содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2.
*/

function longest(s1, s2) {
    let arr = [...new Set([...s1.split(""), ...s2.split("")].sort())].join('')
    return arr
}

console.log(longest("aretheyhere", "yestheyarehere"))
