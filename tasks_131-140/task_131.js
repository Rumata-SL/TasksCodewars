// task kyu 7 "Find the divisors!"

/*Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"*/

/*Создайте функцию с именем divisors/ Divisors, которая принимает целое число n > 1и возвращает массив со всеми делителями целого числа (кроме 1 и самого числа), от наименьшего до наибольшего. Если число простое, верните строку '(integer) is prime' ( nullв C#) (используйте Either String aв Haskell и Result<Vec<u32>, String>Rust).
Пример:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"*/

function divisors(integer) {
    let res = []
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            res.push(i)
        }
    }
    if (!res.length) {
        return `${integer} is prime`
    }
    return res
};

divisors(15)