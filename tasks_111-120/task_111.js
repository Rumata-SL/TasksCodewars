// task kyu 8 "How many lightsabers do you own?"
/*Inspired by the development team at Vooza, write the function that
accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.*/
/*Вдохновившись командой разработчиков Vooza, напишите функцию, которая
принимает имя программиста и
возвращает количество световых мечей, которыми владеет этот человек.
Кстати, единственный человек, у которого есть световые мечи, это Зак. У него 18 световых мечей, что является огромным количеством световых мечей. Кто-то еще владеет 0.*/

function howManyLightsabersDoYouOwn(name) {
    return name === "Zach" ? 18 : 0
}