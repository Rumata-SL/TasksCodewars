"use strict";
// task kyu 8 "Grasshopper - Terminal game combat function"
/*
      Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0. 
 */
/*
      Создайте боевую функцию, которая берет текущее здоровье игрока и количество полученных повреждений и возвращает новое здоровье игрока. Здоровье не может быть меньше 0 . 
 */
function combat(health, damage) {
      return health > damage ? health - damage : 0;
}
