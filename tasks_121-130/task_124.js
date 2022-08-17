// task kyu 6 "Split Strings"

/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/

/*Завершите решение так, чтобы оно разбило строку на пары из двух символов. Если строка содержит нечетное количество символов, то отсутствующий второй символ последней пары должен быть заменен символом подчеркивания ('_').
Примеры:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']*/

function foo(str) {
    let arr = str.split("")
    if (str.length % 2) {
        arr.push("_")
    }
    let arr2 = arr.filter((el, i) => i % 2 === 0)
    let arr3 = arr.filter((el, i) => i % 2 !== 0)
    let res = []
    for (let i = 0; i < arr2.length; i++) {
        res.push(arr2[i] + arr3[i])
    }
    return res
}

foo('abcdef')