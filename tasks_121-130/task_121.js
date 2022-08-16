//task kyu 7 "Vowel Count"
/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/
/*Возвращает количество (количество) гласных в заданной строке.
Мы будем рассматривать a, e, i, o, uкак гласные для этой Ката (но не y).
Входная строка будет состоять только из строчных букв и/или пробелов.*/

const getCount = (str)=>{
    let count = 0
    for (let i = 0; i< str.length;i++){
        switch (str[i]){
            case 'a':
                count +=1
                break;
            case 'e':
                count +=1
                break
            case 'i':
                count +=1
                break
            case 'o':
                count +=1
                break
            case 'u':
                count +=1
                break
        }
    }
    return count
}
console.log(getCount("abracadabra"))

