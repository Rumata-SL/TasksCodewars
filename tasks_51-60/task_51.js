"use strict";
// task kyu 7 "Exes and Ohs"
/*Check to see if a string has the same amount of 'x's and 'o's.
 The method must return a boolean and be case insensitive. The string can contain any char.
 */

/*Проверьте, содержит ли строка одинаковое количество «x» и «o».
Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.
*/

function XO(str) {
    let x = '';
    let o = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            x += str[i];
        } else if (str[i].toLowerCase() === 'o') {
            o += str[i];
        }
    }
    return x.length === o.length;
}