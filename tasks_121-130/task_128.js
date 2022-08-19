// task 6 kyu "Pyramid Array"

/*Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]*/

/*Напишите функцию, которая при задании числа >= 0 возвращает массив подмассивов возрастающей длины.
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Примечание: подмассивы должны быть заполнены 1s*/


function pyramid(n) {
    const res = [];
    let i = 0;
    while (i < n) {
        res.push([...Array(i + 1)].fill(1))
        i++
    }
    return res;
}

console.log(pyramid(5))