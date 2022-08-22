// task kyu 8 "Sort and Star"
/*You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.*/
/*Вам будет предоставлен список строк. Вы должны отсортировать его в алфавитном порядке (с учетом регистра и на основе значений символов ASCII), а затем вернуть первое значение.
Возвращаемое значение должно быть строкой и иметь "***"между каждой из ее букв.
Вы не должны удалять или добавлять элементы из/в массив.*/
const arr = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"];
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}
twoSort(arr)
console.log(twoSort(arr))