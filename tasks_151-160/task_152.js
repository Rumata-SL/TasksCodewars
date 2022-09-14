// task kyu 6 "Does my number look big in this?"


/*A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcisstic:
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:
    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:
Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.*/

/*Нарциссическое число — это положительное число, представляющее собой сумму собственных цифр, каждая из которых возведена в степень количества цифр в данном основании. В этом Ката мы ограничимся десятичными числами (с основанием 10).
Например, возьмем 153 (3 цифры), что является самовлюбленным:
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
и 1652 (4 цифры), что не является:
    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
Соревнование:
Ваш код должен возвращать истину или ложь (не «истину» и «ложь») в зависимости от того, является ли данное число Нарциссическим числом в базе 10. Это может быть Истина и Ложь на вашем языке, например PHP.
Проверка ошибок текстовых строк или других недопустимых входных данных не требуется, в функцию будут переданы только допустимые положительные ненулевые целые числа.*/

function narcissistic(value) {

    let arrPow = value.toString().split("").map(n => n ** value.toString().length)
    return value === arrPow.reduce((a, b) => a + b)

}