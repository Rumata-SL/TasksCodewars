"use strict";
// task kyu 8 "Keep up the hoop"

/*Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message
If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".*/
/*Алекс только что получил новый хулахуп, он ему нравится, но он расстроен, потому что его младший брат лучше него.
Напишите программу, в которой Алекс может ввести (n), сколько раз обруч обойдётся, и она вернёт ему ободряющее сообщение :)
Если Алекс набирает 10 и более обручей, возвращает строку «Отлично, теперь переходим к трюкам».
Если он не наберет 10 обручей, верните строку «Продолжай, пока не наберешь».*/

function hoopCount (n) {
  return n >= 10? "Great, now move on to tricks": "Keep at it until you get it"
}
