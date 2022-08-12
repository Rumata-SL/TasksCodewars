// task kyu 8 "FIXME: Replace all dots"
/*The code provided is supposed replace all the dots . in the specified String str with dashes -*/
/*Предоставленный код должен заменить все точки .в указанной строке strтире .-*/

const replaceDots = function(str) {
    return str.replace(/[.]/g, "-")
}

console.log(replaceDots("one.two.three"))