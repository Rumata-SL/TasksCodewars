// task kyu 5 "Perimeter of squares in a rectangle"

/*The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:*/

/*На чертеже изображено 6 квадратов, стороны которых имеют длину 1, 1, 2, 3, 5, 8. Легко видеть, что сумма периметров этих квадратов равна: 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
Не могли бы вы указать сумму периметров всех квадратов прямоугольника, когда
 имеется n + 1 квадратов.*/


function perimeter(n) {
    let arrFib = [];
    arrFib[0] = 0;
    arrFib[1] = 1;
    for (let i = 2; i < n + 2; i++) {
        arrFib[i] = arrFib[i - 2] + arrFib[i - 1];
    }
    return eval(arrFib.join('+')) * 4


}

console.log(perimeter(7))