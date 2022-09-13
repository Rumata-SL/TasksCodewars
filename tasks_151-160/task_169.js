// task kyu 8 "Area of a Square"
/*Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.*/
/*AЗавершите функцию, которая вычисляет площадь красного квадрата, когда в качестве входных данных задана длина дуги окружности . Возвращает результат, округленный до двух знаков после запятой.*/

function squareArea(A) {
    return +(((A / (2 * Math.PI * (90 / 360)))**2).toFixed(2));
}