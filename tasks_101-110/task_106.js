// task kyu 8 "Pre-FizzBuzz Workout #1"
/*This is the first step to understanding FizzBuzz.
Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
Your expected output is an array of positive integers from 1 to n (inclusive).
Your job is to write an algorithm that gets you from the input to the output.
*/

/*Это первый шаг к пониманию FizzBuzz.
Ваши входные данные: положительное целое число, n, больше или равное единице. n, у вас НЕТ КОНТРОЛЯ над его значением.
Ожидаемый результат — массив положительных целых чисел от 1 до n (включительно).
Ваша задача — написать алгоритм, который приведет вас от входа к выходу.*/

function preFizz(n) {
    if(n === 1){
        return [1]
    }
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}

console.log(preFizz(2))
