// task kyu 5 "Human Readable Time"

/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)*/

/*Напишите функцию, которая принимает неотрицательное целое число (секунды) в качестве входных данных и возвращает время в удобочитаемом формате ( HH:MM:SS)
HH= часы, дополненные до 2 цифр, диапазон: 00–99
MM= минуты, дополненные до 2 цифр, диапазон: 00–59
SS= секунды, дополненные до 2 цифр, диапазон: 00–59
Максимальное время никогда не превышает 359999 ( 99:59:59)*/

function formatTime(seconds) {
    return [
        ~~(seconds / 60 / 60),
        ~~(seconds / 60 % 60),
        ~~(seconds % 60)
    ].join(':').replace(/\b(\d)\b/g, "0$1")
}

console.log(formatTime(3599996))