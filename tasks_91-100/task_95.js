"use strict";
// task kyu 8 "Cat years, Dog years"
/*I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that*/
/*У меня есть кошка и собака.
Я получил их одновременно с котенком/щенком. Это было humanYearsмного лет назад.
Теперь верните их соответствующие возрасты как [ humanYears, catYears, dogYears]
ЗАМЕТКИ:
HumanYears >= 1
HumanYears - только целые числа
Кошачьи годы
15кошачьи годы для первого года
+9кошачьи годы на второй год
+4кошачьи годы за каждый последующий год
Собачьи годы
15собачьи годы за первый год
+9собачьи годы на второй год
+5собачьи годы за каждый последующий год*/

const humanYearsCatYearsDogYears = (humanYears)=> {
    let catYears = 0
    let dogYears = 0
    for (let i = 1; i <= humanYears; i++) {
        if (i === 1) {
            catYears += 15;
            dogYears += 15;
        } else if (i === 2) {
            catYears += 9;
            dogYears += 9;
        } else {
            catYears += 4;
            dogYears += 5;
        }
    }
    return [humanYears, catYears, dogYears]
}

console.log(humanYearsCatYearsDogYears(10))
