// task kyu 6 "Compare powers"
/*You certainly can tell which is the larger number between 210 and 215.

But what about, say, 210 and 310? You know this one too.

Things tend to get a bit more complicated with both different bases and exponents: which is larger between 39 and 56?

Well, by now you have surely guessed that you have to build a function to compare powers, returning -1 if the first member is larger, 0 if they are equal, 1 otherwise; powers to compare will be provided in the [base, exponent] format:

comparePowers([2,10],[2,15])===1
comparePowers([2,10],[3,10])===1
comparePowers([2,10],[2,10])===0
comparePowers([3,9],[5,6])===-1
comparePowers([7,7],[5,8])===-1*/
/*Вы, конечно, можете сказать, какое число больше между 2 ·10 и 2 ·15 .

Но как насчет, скажем, 2 ·10 и 3 ·10 ? Ты тоже знаешь это.

Все становится немного сложнее как с разными основаниями, так и с показателями степени: что больше между 3 9 и 5 6 ?

Что ж, теперь вы наверняка догадались, что вам нужно построить функцию для сравнения степеней, возвращающую -1, если первый член больше, 0, если они равны, 1 в противном случае; полномочия для сравнения будут предоставлены в [base, exponent]формате:

comparePowers([2,10],[2,15])===1
comparePowers([2,10],[3,10])===1
comparePowers([2,10],[2,10])===0
comparePowers([3,9],[5,6])===-1
comparePowers([7,7],[5,8])===-1*/
function comparePowers(n1, n2) {
    let f = (Math.log10(n1[0]) * n1[1]);
    let s = (Math.log10(n2[0]) * n2[1]);
    return (Math.log10(n1[0]) * n1[1]) === (Math.log10(n2[0]) * n2[1])
        ? 0
        : (Math.log10(n1[0]) * n1[1]) > (Math.log10(n2[0]) * n2[1])
            ? -1
            : 1
}