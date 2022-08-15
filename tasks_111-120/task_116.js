// task kyu 6 "CamelCase Method"

/*Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord*/

/*Напишите простой метод .camelCase ( camel_caseфункция в PHP, CamelCaseC# или camelCaseJava) для строк. Во всех словах первая буква должна быть заглавной без пробелов.
Например:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord*/


String.prototype.camelCase = function(){
    return this.split(' ').map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1)}`)
        .join('');
};