// task kyu 4 "Remove Zeros"

/*Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.
For example, the following array
[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
is transformed into
[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.
You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.*/
/*Напишите функцию, которая принимает массив значений и перемещает все нулевые элементы в конец массива, в противном случае сохраняя порядок массива. Нулевые элементы также должны сохранять порядок, в котором они встречались.
Например, следующий массив
[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
превращается в
[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
Нулевые элементы определяются либо 0или "0". Некоторые тесты могут включать элементы, не являющиеся числовыми литералами.
Вам НЕ разрешено использовать какие-либо временные массивы или объекты. Вам также не разрешается использовать какие- Array.prototypeлибо Object.prototypeметоды или .*/

// №1
function removeZeros(array) {
    let limit = array.length;
    let tmp;
    for (let i = 0; i < limit; i++) {
        if (array[i] === 0 || array[i] === "0") {
            tmp = array[i];
            for (let j = i--; j < array.length-1; j++) {
                array[j] = array[j+1];
            }
            array[array.length-1] = tmp;
            limit --;
        }
    }
    return array;
}
// №2
function removeZeros2(array) {
    const head = []
    const tail = []
    for (const e of array) {
        if (e === 0 || e === "0") {
            tail[tail.length] = e
        } else {
            head[head.length] = e
        }
    }
    return [...head, ...tail]
}