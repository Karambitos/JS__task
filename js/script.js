// 'use strict';
document.addEventListener('DOMContentLoaded', () => {

    // let result = "";
    // function parseIntFunction(params) {
    //     result = parseInt(params);
    //     return result;
    // }

    // 1. Дан объект **car**.
    //     Написать условие если поле **lastService** больше 5 месяцев 
    //     (*из строки нужно достать число*) 
    //     то нужно вывести в консоль сообщение 'Need Repair' и 
    //     свойство **needRepair** в объекте **car** 
    //     изменить на **true**; иначе изменить на **false**.

    let car = {
        name: 'Lexus',
        age: 10,
        lastService: '1 month',
        create: 2008,
        needRepair: false
    }


    let serviceAge = parseInt(car.lastService);
    if (serviceAge > 5) {
        console.log("1. ", 'Need Repair');
        car.needRepair = true;
    } else {
        console.log("1. ", 'NO Need Repair');
        car.needRepair = false;
    }

    // 2. Дан следующий код:
    //     Написать условие **если цена товара больше или равна минимальной 
    //     цене и меньше или равна максимальной цене** 
    //     то вывести в консоль название этого товара, иначе вывести в консоль 
    //     что товар не найден. 

    let product = {
        name: 'Яблоко',
        price: '10$'
    };
    let min = 10; // минимальная цена
    let max = 20; // максимальная цена
    if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
        console.table(product);
    } else {
        console.table("2. ", "товар не найден");
    };

    // 3. На основе строки
    //     *“JavaScript is a pretty good language”*
    //     Cделать новую строку, где каждое слово начинается с большой буквы, 
    //     а пробелы удалены. Использовать цикл **for.**

    let string = "JavaScript is a pretty good language";
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newString += string[i + 1].toUpperCase();
            i++;
        } else {
            newString += string[i];
        }
    }
    let indexP = newString.indexOf("Pretty");
    newString[indexP].toLowerCase();
    let newStringCamel = newString.slice(0, indexP) + newString[indexP].toLowerCase() + newString.slice(indexP + 1, );
    console.log("3. ", newString);
    console.log("3. ", newStringCamel);

    // 4. Создать функцию, которая принимает массив, 
    //    а возвращает новый массив с дублированными элементами входного массива:
    //    *doubleArray([1,2,3]) // [1,2,3,1,2,3]*

    let doubleArray = [1, 2, 3];
    let newArr = [];
    doubleFunction(doubleArray)
    console.log("4. ", newArr);

    function doubleFunction(arr) {
        newArr = doubleArray.concat(doubleArray)
    }

    // 5. Создать функцию, которая принимает произвольное (любое) 
    //     число массивов и удаляет из каждого массива первый элемент, 
    //     а возвращает массив из оставшихся значений:
    //     *changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ],* 
    //     *changeCollection([1,2,3]) → [ [2,3] ]* и т.д*.*

    function changeFunction() {
        for (var i = 0; i < arguments.length; i++) {
            arguments[i].shift();
            newCollection.push(arguments[i]);
        }
    }
    let collectionOne = [1, 2, 3];
    let collectionTwo = ["a", "b", "c"];
    let collectionThree = ["5", "34", "30", 100, 435];
    let newCollection = [];
    changeFunction(collectionOne, collectionTwo, collectionThree);
    console.log("5. ", newCollection);

    // 6. Дан массив пользователей:
    let userArr = [{
            "_id": "5d1c3860aa841704d3245513",
            "isActive": false,
            "balance": 2764.35,
            "age": 33,
            "name": "Allie Blair",
            "gender": "female",
            "company": "PHOTOBIN",
            "email": "allieblair@photobin.com",
            "phone": "+1 (951) 566-2987",
            "registered": "2018-11-30T02:29:00 -02:00"
        },
        {
            "_id": "5d1c386095ffb689687f2db9",
            "isActive": false,
            "balance": 3276.25,
            "age": 22,
            "name": "Yesenia Leblanc",
            "gender": "female",
            "company": "SKINSERVE",
            "email": "yesenialeblanc@skinserve.com",
            "phone": "+1 (947) 446-2840",
            "registered": "2015-10-31T01:10:31 -02:00"
        },
        {
            "_id": "5d1c3860e73ff2a338722e81",
            "isActive": true,
            "balance": 1868.65,
            "age": 38,
            "name": "Mamie Kramer",
            "gender": "female",
            "company": "EARBANG",
            "email": "mamiekramer@earbang.com",
            "phone": "+1 (885) 564-3305",
            "registered": "2014-06-03T09:36:40 -03:00"
        },
        {
            "_id": "5d1c386000e4f2fc62be1b1e",
            "isActive": true,
            "balance": 1003.15,
            "age": 32,
            "name": "Crawford Bryant",
            "gender": "male",
            "company": "DIGIRANG",
            "email": "crawfordbryant@digirang.com",
            "phone": "+1 (889) 408-2141",
            "registered": "2015-01-15T05:20:21 -02:00"
        },
        {
            "_id": "5d1c386008ff236a315d638b",
            "isActive": false,
            "balance": 3045.41,
            "age": 36,
            "name": "Helene Holland",
            "gender": "female",
            "company": "HYDROCOM",
            "email": "heleneholland@hydrocom.com",
            "phone": "+1 (937) 554-2040",
            "registered": "2014-09-15T08:22:59 -03:00"
        },
        {
            "_id": "5d1c3860b4c27c4d5fdb6c1f",
            "isActive": true,
            "balance": 1693.51,
            "age": 23,
            "name": "Hernandez Osborn",
            "gender": "male",
            "company": "TERRASYS",
            "email": "hernandezosborn@terrasys.com",
            "phone": "+1 (965) 595-3942",
            "registered": "2016-08-06T12:19:01 -03:00"
        }
    ]
    //     Создать функцию которая принимает массив пользователей, 
    //     поле по которому хочу фильтровать, значение на которое хочу фильтровать. 
    //     Возвращать новый массив с пользователями соответсвующие указанным параметрам. 
    //     Пример результата:
    //     funcGetUsers(users, "gender", "male"); 
    //     [{name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
    let newUserArr = [];

    function funcGetUsers(arr, key, keyValue) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][key] === keyValue) {
                let obj = {
                    "name": arr[i]["name"],
                    "age": arr[i]["age"],
                }
                obj[key] = keyValue;
                newUserArr.push(obj);
            }
        }
        return newUserArr;

    }

    funcGetUsers(userArr, "gender", "male");
    console.log("6. ", "фильтр", newUserArr)

    // 7. Проверить как изменится объект **obj** и найти объяснение
    const obj = {};
    (function (x) {
        x.b = 1;
        x = null;
    })(obj);
    console.log("7. ", "x не влияет на obj", obj)

    // 8. Создать объект, у которого будет цена товара и его скидка, а также
    //     два метода: для получения цены и для расчета цены с учетом скидки:
    // const price = {
    //     price: 10,
    //     discount: '15%',
    //     ... 
    //   };
    //   price.getPrice(); // 10
    //   price.getPriceWithDiscount(); // 8.5

    const price = {
        price: 10,
        discount: '15%',
        getPrice() {
            console.log("8. ", "цена товара без скидки", this.price);
        },
        getPriceWithDiscount() {
            let value = (this.price - (this.price / 100 * parseInt(this.discount)));
            console.log("8. ", "цена товара со скидкой", value);
        },
    };
    price.getPrice(); // 10
    price.getPriceWithDiscount(); // 8.5

    // 9. Даны объект и функция:
    let sizes = {
        width: 5,
        height: 10,
    };
    getSquare = function () {
        return this.width * this.height;
    };
    sizes.getSquare = getSquare;
    console.log("9. ", "полученный размер", sizes.getSquare())
    //    Не изменяя функцию или объект, получить результат функции
    //    *getSquare* для объекта sizes

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // let string = 'some test string'
    // // # Домашнее задание.            
    // // Дана строка: 
    // let string = 'some test string'; 
    // let value;
    // // 1. Сделать первую и последнюю буквы строки в верхнем регистре. При помощи конкатенации и через шаблонные строки.
    // value = string[0].toUpperCase() + string.slice(1, -1) + string[string.length-1].toUpperCase();
    // console.log("1. ", value);
    // let value2 = string[0].toUpperCase().concat(string.slice(1, -1) , string[string.length-1].toUpperCase());
    // console.log("1.1. ", value2);
    // value = string.replace("s", "S").replace("g", "G")
    // console.log("1.2 ", value);
    // // document.body.innerHTML =
    // // `
    // // ${string[0].toUpperCase()}${string.slice(1, -1)}${string[string.length-1].toUpperCase()}
    // // `
    // let value3 = `${string[0].toUpperCase()}${string.slice(1, -1)}${string[string.length-1].toUpperCase()}`
    // console.log("1.3. ", value3);
    // // 2. Найти положение слова 'string' в строке.
    // value = string.indexOf("string");
    // console.log("2. " , value);
    // // 3. Найти положение второго пробела в строке (“вручную” ничего не считать).
    // value = string.indexOf(" ", 5);
    // console.log("3. " , Number(value));
    // // 4. Получить строку с 5-го по 9-й символы.
    // value = string.slice(5, 9);
    // console.log("4. " , value);
    // // 5. Получить число pi из Math и округлить его до 2-х знаков после точки.
    // value = Math.PI.toFixed(2);
    // console.log("5. " , value);
    // // 6. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 511, 12, 13, 51.
    //     let numbersArr = [15, 11, 16, 12, 511, 12, 13, 51]; 
    //     let valueMaxArr = Math.max.apply(null, numbersArr);
    //     let valueMinArr = Math.min.apply(null, numbersArr);
    //     console.log("6.0. " , valueMaxArr);
    //     console.log("6.1. " , valueMinArr);
    //     let valueMax = Math.max(15, 11, 16, 12, 511, 12, 13, 51); 
    //     let valueMin = Math.min(15, 11, 16, 12, 511, 12, 13, 51); 
    //     console.log("6.2. " , valueMax);
    //     console.log("6.3. " , valueMin);
    // // 7. Получить случайное число и округлить его до двух цифр после запятой.
    // value = Math.random().toFixed(2);
    // console.log("7. " , value);
    // // 8. Получить случайное целое число от 0 до X. X - любое произвольное число.
    // value = Math.round(Math.random() * 100);
    // console.log("8. " , value);
    // // 9. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
    // let example = (0.6 + 0.7);
    // value = +example.toFixed(1);
    // console.log("9. " , value);
    // // 10. Создать объект с полем **product**, равным 'iPhone'.
    // // 11. Добавить в объект поле **price**, равное 1000 и поле **currency**, равное 'dollar'.
    // // 12. Добавить поле **details**, которое будет содержать объект с полями **model** и **color**
    // let obj = {
    //     "**product**": 'iPhone',
    // };
    // obj["**price**"] = 1000;
    // obj["**currency**"] = 'dollar';
    // obj["**details**"] = {
    //     "**model**": "",
    //     "**color**": "",
    // };
    // console.warn("10-12");
    // console.table(obj);
    // // **Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями**.

});