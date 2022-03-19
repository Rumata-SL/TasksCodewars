"use strict";
// task kyu 5 "RGB To Hex Conversion"
/*
    The rgb function is incomplete. Complete it so that
     passing in RGB decimal values will result in a hexadecimal
      representation being returned. Valid decimal values for RGB are 0 - 255.
       Any values that fall out of that range must be rounded to the closest valid value.
    Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/
/*
    Функция rgb неполная. Завершите его, чтобы передача десятичных
    значений RGB приводила к возврату шестнадцатеричного представления.
     Допустимые десятичные значения для RGB: 0–255. Любые значения,
      выпадающие из этого диапазона, должны быть округлены до ближайшего допустимого значения.
    Примечание. Ваш ответ всегда должен состоять из 6 символов,
    сокращение с 3 здесь не сработает.
*/
function rgb(r, g, b) {
    let rgb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let red = (r > 255) ? 255 : (r < 0) ? 0 : r;
    let green = (g > 255) ? 255 : (g < 0) ? 0 : g;
    let blue = (b > 255) ? 255 : (b < 0) ? 0 : b;

    let one;
    let two;
    let res = "";

    let arr = [red, green, blue];
    arr.forEach((v) => {
        let arr2;
        two = Math.floor(v / 16);
        one = (v / 16 - Math.floor(v / 16)) * 16;
        one = rgb[one];
        two = rgb[two];
        arr2 = `${two}${one}`;
        res += arr2;
    })

    return res;
}