// task kyu 6 "Array Deep Count"
/*Array.prototype.length will give you the number of top-level elements in an array.
Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.
For example:
deepCount([1, 2, 3]);
//>>>>> 3
deepCount(["x", "y", ["z"]]);
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);
//>>>>> 7
The input will always be an array.*/
/*Array.prototype.lengthдаст вам количество элементов верхнего уровня в массиве.
Ваша задача — создать функцию deepCount, которая возвращает количество ВСЕХ элементов в массиве, включая любые элементы внутри массивов внутреннего уровня.
Например:
deepCount([1, 2, 3]);
//>>>>> 3
deepCount(["x", "y", ["z"]]);
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);
//>>>>> 7
Вход всегда будет массивом.*/

/*function deepCount(a){
        return a.flat(Infinity).length
}*/
function deepCount(a) {
    return a.reduce((acc, el) => acc + (Array.isArray(el) ? deepCount(el) : 0), a.length);
}

console.log(deepCount([[[[[[[[[]]]]]]]]]))