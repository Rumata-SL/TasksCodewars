"use strict";
// task kyu 8 "Quarter of the year"
/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.*/
/*Дан месяц как целое число от 1 до 12, вернитесь к тому, к какому кварталу года он принадлежит, как целое число.*/

const quarterOf = (month) => {
    return Math.ceil(month / 3)
}
