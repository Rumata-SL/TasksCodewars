"use strict";
// task kyu 8 "Training JS #7: if..else and ternary operator"

/*Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
number	price (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90*/

/*Полная функция saleHotdogs/ SaleHotDogs/ sale_hotdogs, функция принимает 1 параметр: n, n - количество клиентов, покупающих хот-доги, разные числа имеют разные цены (см. следующую таблицу), возвращает число, которое клиент должен заплатить, сколько денег.
количество	цена (центы)
п < 5	100
n >= 5 и n < 10	95
п >= 10	90*/

function saleHotdogs(n) {
    return n < 5 ? n * 100 : ((n >= 5 && n < 10) ? n * 95 : n * 90)
}