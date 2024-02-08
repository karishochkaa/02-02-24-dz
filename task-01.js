// # Завдання 1
//Є три масиви з рівнем продажів менеджерів. Знайди найменше та найбільше значення
const arr1 = [2200, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];
const totalArr = arr1.concat(arr2, arr3);
console.log(totalArr);
//
let smallestNumber = totalArr[0];
for (const number1 of totalArr) {
    if (number1 < smallestNumber) {
        smallestNumber = number1;
    }
}
console.log(smallestNumber);
//
let bigestNumber = totalArr[0];
for (const number2 of totalArr) {
    if (number2 > bigestNumber) {
        bigestNumber = number2;
    }
}
console.log(bigestNumber);