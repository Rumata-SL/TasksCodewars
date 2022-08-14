// task kyu 8 "Name Shuffler"
/*Write a function that returns a string in which firstname is swapped with last name.
Example(Input --> Output)
"john McClane" --> "McClane john"*/
/*Напишите функцию, которая возвращает строку, в которой имя заменено на фамилию.
Пример (ввод --> вывод)
"john McClane" --> "McClane john"*/

function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
}

console.log(nameShuffler("john McClane"))