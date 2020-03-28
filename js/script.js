
'use strict';
document.addEventListener('DOMContentLoaded', () => {
    let string = 'some test string'
    // # Домашнее задание.
    // Дана строка: 
    let string = 'some test string'; 
    let value;
    // 1. Сделать первую и последнюю буквы строки в верхнем регистре. При помощи конкатенации и через шаблонные строки.
    value = string[0].toUpperCase() + string.slice(1, -1) + string[string.length-1].toUpperCase();
    console.log("1. ", value);
    let value2 = string[0].toUpperCase().concat(string.slice(1, -1) , string[string.length-1].toUpperCase());
    console.log("1.1. ", value2);
    value = string.replace("s", "S").replace("g", "G")
    console.log("1.2 ", value);
    // document.body.innerHTML =
    // `
    // ${string[0].toUpperCase()}${string.slice(1, -1)}${string[string.length-1].toUpperCase()}
    // `
    let value3 = `${string[0].toUpperCase()}${string.slice(1, -1)}${string[string.length-1].toUpperCase()}`
    console.log("1.3. ", value3);
    // 2. Найти положение слова 'string' в строке.
    value = string.indexOf("string");
    console.log("2. " , value);
    // 3. Найти положение второго пробела в строке (“вручную” ничего не считать).
    value = string.indexOf(" ", 5);
    console.log("3. " , Number(value));
    // 4. Получить строку с 5-го по 9-й символы.
    value = string.slice(5, 9);
    console.log("4. " , value);
    // 5. Получить число pi из Math и округлить его до 2-х знаков после точки.
    value = Math.PI.toFixed(2);
    console.log("5. " , value);
    // 6. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 511, 12, 13, 51.
        let numbersArr = [15, 11, 16, 12, 511, 12, 13, 51]; 
        let valueMaxArr = Math.max.apply(null, numbersArr);
        let valueMinArr = Math.min.apply(null, numbersArr);
        console.log("6.0. " , valueMaxArr);
        console.log("6.1. " , valueMinArr);
        let valueMax = Math.max(15, 11, 16, 12, 511, 12, 13, 51); 
        let valueMin = Math.min(15, 11, 16, 12, 511, 12, 13, 51); 
        console.log("6.2. " , valueMax);
        console.log("6.3. " , valueMin);
    // 7. Получить случайное число и округлить его до двух цифр после запятой.
    value = Math.random().toFixed(2);
    console.log("7. " , value);
    // 8. Получить случайное целое число от 0 до X. X - любое произвольное число.
    value = Math.round(Math.random() * 100);
    console.log("8. " , value);
    // 9. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
    let example = (0.6 + 0.7);
    value = +example.toFixed(1);
    console.log("9. " , value);
    // 10. Создать объект с полем **product**, равным 'iPhone'.
    // 11. Добавить в объект поле **price**, равное 1000 и поле **currency**, равное 'dollar'.
    // 12. Добавить поле **details**, которое будет содержать объект с полями **model** и **color**
    let obj = {
        "**product**": 'iPhone',
    };
    obj["**price**"] = 1000;
    obj["**currency**"] = 'dollar';
    obj["**details**"] = {
        "**model**": "",
        "**color**": "",
    };
    console.warn("10-12");
    console.table(obj);

    // **Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями**.
    
});
