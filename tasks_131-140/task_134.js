// task kyu 5 "Merged String Checker"
/*At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.
The restriction is that the characters in part1 and part2 should be in the same order as in s.
The interviewer gives you the following example and tells you to figure out the rest from the given test cases.
For example:
'codewars' is a merge from 'cdw' and 'oears':
    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears*/

/*На собеседовании вам предлагается написать алгоритм для проверки того, может ли заданная строка , sбыть сформирована из двух других строк, part1и part2.
Ограничение состоит в том, что символы в part1и part2должны быть в том же порядке, что и в s.
Интервьюер дает вам следующий пример и говорит вам выяснить остальное из заданных тестовых случаев.
Например:
'codewars' is a merge from 'cdw' and 'oears':
    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears*/

function isMerge_(s, part1, part2) {
    let str = s;
    let str1 = part1;
    let str2 = part2
    let arr1 = (str1 + str2).split("").sort().join("")
    str = str.split("").sort().join("")
    let res = arr1 === str;

    return res
}

function isMerge(s, part1, part2) {
    return !s ? !(part1 || part2) :
        s[0] === part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
        s[0] === part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

// isMerge('codewars', 'cdw', 'oears');
isMerge('bfaef', 'f', 'bfae')