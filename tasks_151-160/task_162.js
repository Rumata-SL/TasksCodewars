// task kyu 7 "Find the nth Digit of a Number"
/*Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1*/
/*Завершите функцию, которая принимает на вход два числа numи nthвозвращает nthцифру num(считая справа налево).
Примечание
Если numотрицательно, игнорируйте его знак и рассматривайте его как положительное значение.
Если nthне положительный, возврат-1
Имейте в виду, что 42 = 00042. Это значит, findDigit(42, 5)что вернется0
Примеры( num, nth--> вывод)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1*/

const findDigit = function (num, nth) {
    return nth <= 0
        ? -1
        :( Math.abs(num).toString().slice(Math.abs(num).toString().length - nth, Math.abs(num).toString().length - nth + 1) * 1)
}