// task kyu 7 "Convert an array of strings to array of numbers"
/*Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
You need to cast the whole array to the correct type.
Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
ie:["1", "2", "3"] to [1, 2, 3]
Note that you can receive floats as well.*/

/*О, нет!
Какой-то действительно забавный веб-разработчик дал вам последовательность чисел из своего ответа API в виде последовательности строк !
Вам нужно привести весь массив к правильному типу.
Создайте функцию, которая принимает в качестве параметра последовательность чисел, представленную в виде строк, и выводит последовательность чисел.
то есть: ["1", "2", "3"]к[1, 2, 3]
Обратите внимание, что вы также можете получать поплавки.*/

function toNumberArray(stringarray){
    return stringarray.map(el => +el)
}
