/*
    ** Задание 5 **
        Дано 2 массива

*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье"
];

const dictionaryWeek = {};

for (let i = 0; i < en.length; i++) {
    dictionaryWeek[en[i]] = ru[i];
}

console.log(dictionaryWeek);