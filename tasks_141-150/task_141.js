//task kyu 7 "Find the capitals"
/*Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );*/
/*Напишите функцию, которая принимает одну строку ( word) в качестве аргумента. Функция должна возвращать упорядоченный список, содержащий индексы всех заглавных букв в строке.
Пример
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );*/

const capitals = function (word) {
    let arr = []
    let check = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== check[i]) {
            arr.push(i)
        }
    }
    return arr
};