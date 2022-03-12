"use strict";
// task kyu 8 "Is the string uppercase?"
/*
      Add the isUpperCase method to String to
      see whether the string is ALL CAPS. 
  */
/*
      Добавьте isUpperCaseметод, Stringчтобы увидеть,
      написана ли строка ЗАГЛАВНЫМИ БУКВАМИ.  
*/

String.prototype.isUpperCase = function () {
      return this.toString() === this.toUpperCase();
};
