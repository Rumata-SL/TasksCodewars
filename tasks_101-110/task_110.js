// task kyu 8 "Enumerable Magic #3 - Does My List Include This?"

/*Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.*/

/*Создайте метод, который принимает список и элемент и возвращает значение, trueесли элемент принадлежит списку, в противном случае false.*/

function include(arr, item) {
    return arr.some(el => el === item)
}