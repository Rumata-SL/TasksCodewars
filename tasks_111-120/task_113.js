// task kyu 6 "Replace With Alphabet Position"

/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )*/

/*В этой ката вы должны, учитывая строку, заменить каждую букву ее позицией в алфавите.
Если что-то в тексте не является буквой, игнорируйте это и не возвращайте.
"a" = 1, "b" = 2, и т.д.
Пример
alphabetPosition("The sunset sets at twelve o' clock.")
Должен возвращаться "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(в виде строки)*/

function alphabetPosition_(text) {
    text = text.toLowerCase();
    let str = "";
    let i = 0;
    while (i < text.length) {
        if (text.charCodeAt(i) - 96 > 0 && text.charCodeAt(i) - 96 <= 26) {
            str += text.charCodeAt(i) - 96 + ' ';
        }
        i++
    }
    return str.trim();
}

console.log(alphabetPosition_("The sunset sets at twelve o' clock."))