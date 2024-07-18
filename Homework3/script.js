/*
Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/

function cubing(number) {
    return number * number * number;
}

console.log(cubing(2) + cubing(3));

/*
Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/

function calculationOfTaxes(salary) {
    if (isFinite(salary)) {
        salary = salary * 0.87;
        console.log(`Размер заработной платы за вычетом налогов равен ${salary}`);
    } else {
        console.log('Значение задано неверно');
    }
}

calculationOfTaxes(5000);
calculationOfTaxes('dsfjsf');

/*
Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
*/

function maximumNumber(number1, number2, number3) {
    let maxNumber;
    if(number1 > number2 && number1 > number3) {
        maxNumber = number1;
    } else if (number2 > number1 && number2 > number3){
        maxNumber = number2;
    } else if (number3 > number1 && number3 > number2) {
        maxNumber = number3;
    } else {
        console.log('Введите разные числа');
    }
    return maxNumber;
}

console.log(maximumNumber(2,34,-89));

/*
Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль 
(sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
 Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/

function sum (number1, number2) {
    return number1 + number2;
}

function minus (number1, number2) {
    let result = 0;
    if (number1 > number2) {
        result = number1 - number2;
    } else {
        result = number2 - number1;
    }
    return result;
}

function multiplication (number1, number2) {
    return number1 * number2;
}

function division (number1, number2) {
    if (number2 === 0) {
        return'Делить на 0 нельзя!';
    } else {
        return number1 / number2;
    }
}

console.log(sum(2,6));
console.log(minus(5,12));
console.log(multiplication(10,2));
console.log(division(5,0));
console.log(division(10,2));


