"use strict";
// task kyu 8 "Grasshopper - If/else syntax debug"
/*If/else syntax debug
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
The function receives one parameter health which will always be a whole number between -10 and 10.*/

/*Отладка синтаксиса if/else
checkAliveСоздавая игру, ваш партнер, Грег, решил создать функцию / CheckAlive/ для проверки того, жив ли пользователь check_alive. К сожалению, Грег допустил несколько ошибок при создании функции.
checkAlive// должно возвращать true CheckAlive, check_aliveесли здоровье игрока больше 0, или false, если оно равно 0 или ниже.
Функция получает один параметр health, который всегда будет целым числом от -10 до 10.*/

function checkAlive(health) {
    if(health <= 0) {
        return false
    }
    return true
}
