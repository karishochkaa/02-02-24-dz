// # Завдання 2
// Маємо два масиви. В першому прізвища менеджерів, в другому суми їх продажів. 
// Виведи в консоль кожного менеджера та їх продажі
// Очікуваний результат: Petro - 20000, Viktor - 34000, Anna - 17000, Olga - 23000
const managers = ["Petro", "Viktor", "Anna", "Olga"];
const sales = [20000, 34000, 17000, 23000];
//
for (let i = 0; i < managers.length; i++) {
    console.log(`${managers[i]} - ${sales[i]}`);
}
