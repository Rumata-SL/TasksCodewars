// task kyu 7 "Building Strings From a Hash"

/*Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"*/

/*Завершите решение так, чтобы оно принимало переданный объект (JavaScript/CoffeeScript) или хэш (ruby) и генерировало удобочитаемую строку из своих пар ключ/значение.
Формат должен быть «КЛЮЧ = ЗНАЧЕНИЕ». Каждая пара ключ/значение должна быть разделена запятой, кроме последней пары.
Пример:
solution({a: 1, b: '2'}) // should return "a = 1,b = 2"*/

function solution(pairs) {
    return Object.keys(pairs).map(el => `${el} = ${pairs[el]}`).join(',')
}