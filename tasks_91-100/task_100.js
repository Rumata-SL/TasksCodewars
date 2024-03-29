"use strict";
// task kyu 6 "Persistent Bugger."
/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)*/

/*Напишите функцию , persistenceкоторая принимает положительный параметр numи возвращает его мультипликативную постоянство, то есть количество раз, которое вы должны умножить на цифры num, пока не получите одну цифру.
Например (Ввод --> Вывод) :
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)*/

function persistence(num) {
    let result = 0;
    while(num.toString().length > 1){
        num = num.toString().split('').reduce((acc,el)=>acc *= +el,1)
        result++
    }
    return result
}

console.log(persistence(4))