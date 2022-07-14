"use strict";
// task kyu 7 "Don't give me five!"

/*In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!*/

/*В этом ката вы получаете начальный номер и конечный номер региона и должны вернуть количество всех чисел, кроме номеров с 5 в нем. Начальный и конечный номер включительно!*/

function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start ; i <= end ; i++) {
        if(!/5/.test(i)){
            count++
        }
    }
    return count
}

console.log(dontGiveMeFive(4, 17))