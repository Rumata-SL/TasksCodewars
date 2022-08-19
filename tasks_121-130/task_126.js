// task 8 kyu "Vowel remover"
/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.*/

/*оздайте функцию, вызываемую shortcutдля удаления строчных гласных ( a, e, i, o, u) в заданной строке.*/

function shortcut(string) {
    let arr = string.split("")
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'a' && arr[i] !== 'e' && arr[i] !== 'i' && arr[i] !== 'o' && arr[i] !== 'u') {
            arr2.push(arr[i])
        }
    }
    return arr2.join("")
}

console.log(shortcut("kirill"))

