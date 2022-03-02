"use strict";
// task kyu 8 "Twice as old"
/*
      Your function takes two arguments:
      current father's age (years)
      current age of his son (years)
      Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
*/
/*
      Ваша функция принимает два аргумента:
      текущий возраст отца (лет)
      текущий возраст его сына (лет)
      Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше). 
 */
function twiceAsOld(dadYearsOld, sonYearsOld) {
      return dadYearsOld > sonYearsOld * 2
            ? dadYearsOld - sonYearsOld * 2
            : sonYearsOld * 2 - dadYearsOld;
}
