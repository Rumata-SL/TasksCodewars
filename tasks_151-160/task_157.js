// task kyu 7 "Unpacking Arguments"
/*You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.
eg:
spread(someFunction, [1, true, "Foo", "bar"] )
// is the same as...
someFunction(1, true, "Foo", "bar")*/

/*Вы должны создать функцию spread, которая принимает функцию и список аргументов, которые должны быть применены к этой функции. Вы должны заставить эту функцию возвращать результат вызова данной функции/лямбды с заданными аргументами.
например:
spread(someFunction, [1, true, "Foo", "bar"] )
// is the same as...
someFunction(1, true, "Foo", "bar")*/

function spread(func, args) {
    return func(...args)
}