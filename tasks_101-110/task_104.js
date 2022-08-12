// task kyu 7 "Complementary DNA"

/*In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at al*/

/*В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». Ваша функция получает одну сторону ДНК (строка, кроме Haskell); вам нужно вернуть другую дополнительную сторону. Нить ДНК никогда не бывает пустой или ДНК вообще не существует*/

function DNAStrand_(dna) {
    const objDNA = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    }
    return [...dna].map(i => {
        return i = objDNA[i] || '';
    }).join("")

}