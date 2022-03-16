"use strict";
// task kyu 8 "Do I get a bonus?"
/*
    It's bonus time in the big city!
     The fatcats are rubbing their paws in anticipation...
     but who is going to make the most money?
    Build a function that takes in two arguments (salary, bonus).
     Salary will be an integer, and bonus a boolean.
    If bonus is true, the salary should be multiplied by 10.
     If bonus is false, the fatcat did not make enough
      money and must receive only his stated salary.
  */
/*
    Это бонусное время в большом городе! Жирные коты потирают лапы в предвкушении...
     но кто заработает больше всего денег?
    Создайте функцию, которая принимает два аргумента (зарплата, премия).
     Заработная плата будет целым числом, а бонус — логическим.
    Если премия верна, зарплата должна быть умножена на 10.
     Если премия ложна, толстяк не заработал достаточно денег
      и должен получать только свою заявленную зарплату.
 */
function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`;
}