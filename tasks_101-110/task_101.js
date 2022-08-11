"use strict";
// task kyu 8 "Stringy Strings"
/*write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
the string should start with a 1.
a string with size 6 should return :'101010'.
with size 4 should return : '1010'.
with size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.*/
/*напишите мне функцию stringy, которая принимает sizeи возвращает stringчередование '1s'и '0s'.
строка должна начинаться с 1.
строка с size6 должна возвращать : '101010'.
с size4 должно вернуться : '1010'.
с size12 должен вернуть : '101010101010'.
Размер всегда будет положительным и будет использовать только целые числа.*/

const stringy = (size) => {
    let res = [1]
    for (let i = 1; i < size; i++) {
        i % 2 === 0 ? res.push(1) : res.push(0)
    }
    return res.join("").toString()
}
console.log(stringy(4))