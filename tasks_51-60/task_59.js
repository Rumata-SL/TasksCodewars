"use strict";
// task kyu 8 "Will there be enough space?"
/*Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.*/

/*Боб работает водителем автобуса. Тем не менее, он стал чрезвычайно популярен среди жителей города. С таким количеством пассажиров, желающих сесть в его автобус, ему иногда приходится сталкиваться с проблемой нехватки места в автобусе! Он хочет, чтобы вы написали простую программу, сообщающую ему, сможет ли он разместить всех пассажиров*/

function enough(cap, on, wait) {
    return (on + wait > cap) ? on + wait - cap : 0
}