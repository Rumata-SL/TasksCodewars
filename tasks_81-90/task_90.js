"use strict";
// task kyu 6 "Detect Pangram"
/*A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/
/*Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу. Например, предложение «Быстрая коричневая лиса перепрыгивает через ленивую собаку» является панграммой, потому что в нем хотя бы один раз используются буквы AZ (регистр значения не имеет).
Учитывая строку, определите, является ли она панграммой. Возвращает True, если это так, False, если нет. Не обращайте внимания на цифры и знаки препинания.*/


let str = "The quick brown fox jumps over the lazy dog"
let str1 =  "This is not a pangram."

function isPangram(string) {
    string = new Set(string
        .toLowerCase()
        .split(' ')
        .join('')
        .replace(/[\W\d]/g, '')
        .split(''))
    return string.size === 26
}

console.log(isPangram(str))