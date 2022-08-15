// task kyu 6 "Convert string to camel case"

/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"*/
/*Завершите метод/функцию, чтобы он преобразовывал слова, разделенные тире/подчеркиванием, в верблюжий регистр. Первое слово в выводе должно быть написано с заглавной буквы только в том случае, если исходное слово было написано с заглавной буквы (известный как верхний верблюжий регистр, также часто называемый регистром Паскаля).
Примеры
"the-stealth-warrior"превращается в "theStealthWarrior"
"The_Stealth_Warrior"превращается в"TheStealthWarrior"*/

function toCamelCase(str){
    str = str.split('');
    return str.map(function(el, i){
        if(el === '-' || el === '_'){
            el = str[i+1].toUpperCase();
            str.splice(i+1, 1);
        }
        return el;
    }).join('');
}


console.log(toCamelCase("the_stealth-warrior"))