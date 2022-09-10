// task kyu 6 "What century is it?"
/*Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"*/
/*Возвращает век введенного года. Ввод всегда будет строкой из 4 цифр, поэтому проверка не требуется.
Примеры
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"*/

const whatCentury = (year) => {
    // let res = Number(year.slice(0, 2)) + 1;
    // let res = parseInt(year/100)+
    let res = Math.ceil(year/100)
    if (res < 20) {
        return `${res}th`;
    }

    switch (res % 10) {
        case 1:
            return `${res}st`;
        case 2:
            return `${res}nd`;
        case 3:
            return `${res}rd`;
        default:
            return `${res}th`;
    }
}

console.log(whatCentury("2000"))