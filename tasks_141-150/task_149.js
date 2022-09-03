// task kyu 7 "Remove All The Marked Elements of a List"

/*Define a method/function that removes from a given array of integers all the values contained in a second array.
Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]*/

/*Определите метод/функцию, которая удаляет из заданного массива целых чисел все значения, содержащиеся во втором массиве.
Примеры (ввод -> вывод):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]*/

Array.prototype.remove_ = function (integer_list, values_list) {
    integer_list = integer_list.filter(i => {
        return !values_list.includes(i);
    });
    return integer_list
}