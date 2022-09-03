// task kyu 7 "Geometric Progression Sequence"
/*In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.
Result should be separated by comma and space.
Example
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'*/
/*В вашем классе вы начали уроки геометрической прогрессии. Поскольку вы также являетесь программистом, вы решили написать функцию, которая будет печатать первые nэлементы последовательности с заданной константой rи первым элементом a.
Результат должен быть разделен запятой и пробелом.
Пример
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'*/


const geometricSequenceElements = (a, r, n) => {
    let res = []
    for (let i = 0; res.length < n; i++) {
        if(!res.length){
            res.push(a)
        }else {
            res.push(res[i-1]*r)
        }
    }
    return res.join(", ")
}

console.log(geometricSequenceElements(2, 3, 5))