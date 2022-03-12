"use strict";
// task kyu 8 "Drink about"
/*
    Kids drink toddy.
    Teens drink coke.
    Young adults drink beer.
    Adults drink whisky.
    Make a function that receive age, and return what they drink.
    Rules:
    Children under 14 old.
    Teens under 18 old.
    Young under 21 old.
    Adults have 21 or more.
*/

/*
    Дети пьют тодди.
    Подростки пьют колу.
    Молодые люди пьют пиво.
    Взрослые пьют виски.
    Сделайте функцию, которая получает возраст и возвращает то, что они пьют.
    Правила:
    Дети до 14 лет.
    Подростки до 18 лет.
    Молодые до 21 года.
    У взрослых 21 и более.
*/
function peopleWithAgeDrink(old) {
    if (old <= 13) return "drink toddy";
    if (old <= 17) return "drink coke";
    if (old <= 20) return "drink beer";
    if (old > 20) return "drink whisky";
}

