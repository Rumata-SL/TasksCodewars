// task kyu 7 "99 Problems, #1: last in list"

/*Write a function last that accepts a list and returns the last element in the list.
If the list is empty:
In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option
In languages that do not have an empty option, just return null*/

/*Напишите функцию last, которая принимает список и возвращает последний элемент списка.
Если список пуст:
В языках со встроенным типом optionили result(например, OCaml или Haskell) возвращайте пустое значение.option
В языках, которые не имеют пустой опции, просто вернитеnull*/

const last = xs => {
    return xs.length ? xs[xs.length-1]: null
}
