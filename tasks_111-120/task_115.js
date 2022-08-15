// task kyu 6 "Nuclear Missile Manager"

/*Our nuclear missile manager system is coded in Node.js. We are currently testing the system and it seems that the launchAll function does not work as expected. It should launch 5 missiles each 1 second apart. The current code tries to launch the missile #5 five times...
Can you fix this for us? You know, it's pretty critical code...
Note: There are 5 missiles labeled i which is a number in {0, 1, 2, 3, 4}. The missile i should be launched after i seconds.*/

/*Наша система управления ядерными ракетами написана на Node.js. В настоящее время мы тестируем систему, и кажется, что launchAllфункция не работает должным образом. Он должен запускать 5 ракет с интервалом в 1 секунду. Текущий код пытается запустить ракету № 5 пять раз...
Вы можете исправить это для нас? Вы знаете, это довольно важный код...
Примечание . Имеется 5 ракет, помеченных цифрами i{0, 1, 2, 3, 4}. Ракета iдолжна быть запущена через iнесколько секунд.*/

function launchAll(launchMissile) {
    for (var i = 0; i < 5; i++) {
            setTimeout(function (i) {
                console.log(i)
            }, i * 1000,i );
        }

}
launchAll()