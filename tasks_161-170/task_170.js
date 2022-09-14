// task kyu 7 "Breaking chocolate problem"

/*Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.*/

/*Ваша задача состоит в том, чтобы разбить плитку шоколада заданного размера nx mна маленькие квадраты. Каждый квадрат имеет размер 1x1 и не ломается. Реализуйте функцию, которая будет возвращать минимальное количество необходимых разрывов.

Например, если вам дали плитку шоколада размера 2x 1, вы можете разделить ее на отдельные квадраты всего за один раз, но для размера 3x 1вы должны сделать два разрыва.

Если входные данные недействительны, вы должны вернуть 0 (так как разрывы не нужны, если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.*/

function breakChocolate(n, m) {
    return (n > 1 && m > 1) || (n > 1 && m === 1) || (n === 1 && m > 1) ? n * m - 1 : 0
}