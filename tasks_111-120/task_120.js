// task kyu 5 "A Chain adding function"

/*We want to create a function that will add numbers together when called in succession.
add(1)(2); // == 3
We also want to be able to continue to add numbers to our chain.
add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
and so on.*/

/*Мы хотим создать функцию, которая будет складывать числа при последовательном вызове.
add(1)(2); // == 3
Мы также хотим иметь возможность продолжать добавлять номера в нашу цепочку.
add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
и так далее.*/

function add(n){
    const f = x => add(n + x)
    f.valueOf = () => n
    return f;
}

