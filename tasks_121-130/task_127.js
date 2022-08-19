// task kyu 8 "Well of Ideas - Easy Version"

/*For every good kata idea there seem to be quite a few bad ones!
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.*/

/*На каждую хорошую идею ката приходится немало плохих!
В этом ката вам нужно проверить предоставленный массив (x) на наличие хороших идей «хорошо» и плохих идей «плохо». Если есть одна или две хорошие идеи, верните «Опубликовать!», если их больше 2, верните «Чую серию!». Если нет хороших идей, как это часто бывает, верните «Fail!».*/

function well(x) {
    let arr = x.filter(el=> el === 'good')
    return !arr.length ? 'Fail!' : arr.length > 2 ? 'I smell a series!' : "Publish!"
}
console.log(well(
    ['bad', 'bad', 'bad', 'bad', 'bad', 'bad','good','good','good']))

