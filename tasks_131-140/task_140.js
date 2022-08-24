// task kyu 7 "Growth of a Population"
/*In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?*/

/*В маленьком городке население p0 = 1000на начало года. Население регулярно увеличивается на 2 percent1 год, и, кроме того , 50каждый год в город приезжают новые жители. Сколько лет нужно городу, чтобы его население было больше или равно количеству p = 1200жителей?*/

function nbYear(p0, percent, aug, p) {
    let years = 0;
    while(p0 < p){
        p0 = p0 + aug + ~~(p0*percent/100);
        years ++;
    }
    return years;
}