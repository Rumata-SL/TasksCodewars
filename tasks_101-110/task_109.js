// task kyu 8 "Palindrome Strings"
/*A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false*/

/*Палиндром — это слово, фраза, число или другая последовательность символов, которая одинаково читается как в прямом, так и в обратном порядке. Это включает в себя заглавные буквы, знаки препинания и разделители слов.
Реализуйте функцию, которая проверяет, является ли что-то палиндромом. Если ввод представляет собой число, сначала преобразуйте его в строку.
Примеры (ввод ==> вывод)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false*/

function isPalindrome(line) {
    let str = typeof line === "number" ? line.toString().toUpperCase(): line.toUpperCase()
    return str === str.split("").reverse().join("")
}