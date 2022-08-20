// task kyu 7 "Remove duplicate words"
/*Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'*/
/*Ваша задача — удалить из строки все повторяющиеся слова, оставив только одиночные (первые) слова.
Пример:
Вход:
«альфа-бета-бета-гамма-гамма-дельта альфа-бета-бета-гамма-гамма-дельта»
Выход:

«альфа-бета-гамма-дельта»*/

function removeDuplicateWords (s){
    let arr = [...new Set(s.split(" "))].join(" ")
    return arr
}

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')