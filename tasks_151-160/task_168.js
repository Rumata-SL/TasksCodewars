// task kyu 7 "V A P O R C O D E"

/*Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
Note that spaces should be ignored in this case.
Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"*/
/*Напишите функцию, которая преобразует любое предложение в предложение VAPORWAVE. предложение VAPORWAVE преобразует все буквы в верхний регистр и добавляет 2 пробела между каждой буквой (или специальным символом) для создания эффекта VAPORWAVE.
Обратите внимание, что пробелы в этом случае следует игнорировать.
Примеры
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"*/

const vaporcode = (string) => {
   return  string.replace(/\s/g, "").split("").join("  ").toUpperCase();
}

console.log(vaporcode("Why isn't my code working?"))