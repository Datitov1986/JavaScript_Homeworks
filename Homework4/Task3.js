/*
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/

const array = [];
for (let index = 0; index < 5; index++) {
    array[index] = Math.round(Math.random() * 10);
}

console.log(array);

let sumArray = 0;
for (let index = 0; index < array.length; index++) {
    sumArray += array[index];
}

console.log(`Сумма элементов массива: ${sumArray}`);

let minNumArray = array[0];
for (let index = 0; index < array.length; index++) {
    if (array[index] < minNumArray) minNumArray = array[index];
}

console.log(`Минимальное значение в массиве: ${minNumArray}`);

let count = 0;
let indexesOfThrees = [];

for (let index = 0; index < array.length; index++) {
    if (array[index] === 3) {
        count++;
        indexesOfThrees.push(index);
    }
}

if (count === 0) {
    console.log("Троек в сгенерированном массиве нет");
} else {
    console.log("Новый массив:");
    console.log(indexesOfThrees);
}