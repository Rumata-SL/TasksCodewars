"use strict";
// task kyu 8 "Count the divisors of a number"
/*
      Count the number of divisors of a positive integer n. 
 */
/*
      Подсчитайте количество делителей натурального числа n. 
 */
function getDivisorsCnt(n) {
      let count = 0;
      for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                  count += 1;
            }
      }
      return count;
}
