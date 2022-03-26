"use strict";
// task kyu 8 "Merge two sorted arrays into one"
/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
*/
/*
Вам даны два отсортированных массива, оба из которых содержат только целые числа. Ваша задача — найти способ объединить их в один, отсортированный по возрастанию. Завершите функцию mergeArrays(arr1, arr2), где arr1 и arr2 — исходные отсортированные массивы.
*/
function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1,...arr2])].sort((a, b) => a - b);
}