"use strict";
// task kyu 7 "Credit Card Mask"
/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.*/

/*Обычно, когда вы что-то покупаете, вас спрашивают, верны ли номер вашей кредитной карты, номер телефона или ответ на ваш самый секретный вопрос. Однако, поскольку кто-то может заглянуть вам через плечо, вы не хотите, чтобы это отображалось на вашем экране. Вместо этого мы маскируем его.
Ваша задача — написать функцию maskify, которая заменяет все символы, кроме последних четырех, на '#'.*/

function maskify(cc) {
    if (cc.length <= 4) {
        return cc
    }
    let str1 = ''
    for (let i = 0; i < cc.length - 4; i++) {
        str1 += "#"
    }
    return str1 + cc.slice(-4)
}

