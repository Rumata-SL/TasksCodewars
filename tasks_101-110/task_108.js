// task kyu 8 "Reversing Words in a String"
/*You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
Example (Input --> Output)
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"*/
/*Вам нужно написать функцию, которая переворачивает слова в заданной строке. Слово также может соответствовать пустой строке. Если это недостаточно ясно, вот несколько примеров:
Поскольку ввод может содержать пробелы в конце, вам также необходимо игнорировать ненужные пробелы.
Пример ( Ввод --> Вывод )
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"*/

function reverse(string){
    return string.split(' ').reverse().join(' ')
}