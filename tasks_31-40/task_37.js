"use strict";
// task kyu 8 "DNA to RNA Conversion"
/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.
*/
/*
Дезоксирибонуклеиновая кислота, ДНК является основной молекулой хранения информации в биологических системах. Он состоит из четырех оснований нуклеиновых кислот гуанина («G»), цитозина («C»), аденина («A») и тимина («T»).
Рибонуклеиновая кислота, РНК, является основной молекулой-мессенджером в клетках. РНК немного отличается от ДНК своей химической структурой и не содержит тимина. В РНК тимин заменен другой нуклеиновой кислотой урацилом («U»).
Создайте функцию, которая переводит заданную строку ДНК в РНК.
*/
function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U");
}