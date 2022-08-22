//task kyu 7 "Factorial"
/*Your task is to write function factorial.*/

/*Ваша задача написать функцию factorial.*/

function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++){
        res *= i;
    }
    return res
}