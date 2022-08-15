// task kyu 6 "Create Phone Number"
/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"*/
/*Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), которая возвращает строку этих чисел в виде номера телефона.
Пример
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"*/

function createPhoneNumber (numbers){

    let res = '(***) ***-****';
    for (let i = 0; i<numbers.length;i++){
        res = res.replace('*', numbers[i])
    }
    return res
}

console.log(foo([9,0,5,8,5,3,5,0,3,2]))