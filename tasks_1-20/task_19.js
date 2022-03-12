"use strict";
// task kyu 8 "Keep Hydrated!"
/*
    Nathan loves cycling.
    Because Nathan knows it is important to stay hydrated,
     he drinks 0.5 litres of water per hour of cycling.
    You get given the time in hours and you need to return
     the number of litres Nathan will drink, rounded to the smallest value.
 */
/*
    Натан любит кататься на велосипеде.
    Поскольку Натан знает, как важно избегать обезвоживания,
     он выпивает 0,5 литра воды за час езды на велосипеде.
    Вам дается время в часах, и вам нужно вернуть количество литров,
    которые выпьет Натан, округленное до наименьшего значения.
*/
function litres(time) {
    return ~~(time*0.5);
}