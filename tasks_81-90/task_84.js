"use strict";
// task kyu 8 "Hello, Name or World!"
/*Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).*/

/*Определите метод hello, который returns"Hello, Name!" к данному name, или говорит Привет, Мир! если имя не указано (или передано как пустая строка).
Предполагая, что nameэто a Stringи он проверяет опечатки пользователя, чтобы вернуть имя с первой заглавной буквой (Xxxx).*/

function hello(name) {
    if (!name) {
        return "Hello, World!"
    }
    let changeName = name.toLowerCase().split("")
    changeName[0] = changeName[0].toUpperCase()
    changeName = changeName.join('')
    return `Hello, ${changeName}!`
}

hello("sergeY")