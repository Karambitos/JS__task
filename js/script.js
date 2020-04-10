// 'use strict';
document.addEventListener("DOMContentLoaded", () => {
    {
        console.warn("============================ III week ")

        const map = ["_id", "name", "isActive", "balance"];
        const users = [{
                "_id": "5d220b10e8265cc978e2586b",
                "isActive": true,
                "balance": 2853.33,
                "age": 20,
                "name": "Buckner Osborne",
                "gender": "male",
                "company": "EMPIRICA",
                "email": "bucknerosborne@empirica.com",
                "phone": "+1 (850) 411-2997",
                "registered": "2018-08-13T04:28:45 -03:00"
            },
            {
                "_id": "5d220b10144ef972f6c2b332",
                "isActive": true,
                "balance": 1464.63,
                "age": 38,
                "name": "Rosalie Smith",
                "gender": "female",
                "company": "KATAKANA",
                "email": "rosaliesmith@katakana.com",
                "phone": "+1 (943) 463-2496",
                "registered": "2016-12-09T05:15:34 -02:00"
            },
            {
                "_id": "5d220b1083a0494655cdecf6",
                "isActive": false,
                "balance": 2823.39,
                "age": 40,
                "name": "Estrada Davenport",
                "gender": "male",
                "company": "EBIDCO",
                "email": "estradadavenport@ebidco.com",
                "phone": "+1 (890) 461-2088",
                "registered": "2016-03-04T03:36:38 -02:00"
            }
        ];
        // 1. На основе массива **map** и массива **users** собрать 
        //     новый массив объектов где в каждом объекте будут только те 
        //     свойства которые перечислены в массиве **map**
        //     На выходе мы должны получить массив вида: 
        //     [ { _id: ..., name: ..., isActive: ..., balance: ... }, ... ];

        let newUser = [];
        let newUserArr = [];

        for (var i = 0; i < map.length; i++) {
            let mapKey = map[i]
            console.log(mapKey)
            // newUser = funcGetUsers(users, mapKey);

            for (var i = 0; i < users.length; i++) {
                if (users[i][mapKey]) {
                    let obj = {};
                    obj[mapKey] = 'значение';
                    newUserArr.push(obj);
                }
            }

            // users.forEach((user) => {
            //     newArr = users.map(user => ({
            //         user: user[mapKey],
            //     }));
            // console.log("1. ", newArr)
            // console.log(user)
            // console.log(user[mapKey])
            // })
        }

        // function funcGetUsers(arr, key) {
        //     let newUserArr = [];
        //     for (var i = 0; i < arr.length; i++) {
        //         if (arr[i][key]) {
        //             let obj = {};
        //             obj[key] = 'значение';
        //             newUserArr.push(obj);
        //         }
        //     }
        //     return newUserArr;
        // }

        console.log("6. ", newUserArr);

        // for (var i = 0; i < map.length; i++) {
        //     console.log(map[i])
        //     let mapKey = map[i]
        // }
        // let newArr = users.map(user => ({
        //     name: user.name,
        //     age: user.age
        // }));
        // console.log("1. ", newArr)

        // 2. Дан массив объектов, где каждый объект содержит информацию о 
        //     букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

        let password = [{
                char: "a",
                index: 12
            }, {
                char: "w",
                index: 8
            }, {
                char: "Y",
                index: 10
            }, {
                char: "p",
                index: 3
            }, {
                char: "p",
                index: 2
            },
            {
                char: "N",
                index: 6
            }, {
                char: " ",
                index: 5
            }, {
                char: "y",
                index: 4
            }, {
                char: "r",
                index: 13
            }, {
                char: "H",
                index: 0
            },
            {
                char: "e",
                index: 11
            }, {
                char: "a",
                index: 1
            }, {
                char: " ",
                index: 9
            }, {
                char: "!",
                index: 14
            }, {
                char: "e",
                index: 7
            }
        ]
        let massege = "";
        password.sort((prev, next) =>
            prev.index - next.index
        );
        password.forEach((value) => {
            massege += value.char;
        })
        console.log("2. ", massege)
        // Напишите функцию, которая из элементов массива соберет и вернёт строку, 
        // основываясь на index каждой буквы. Например:
        // [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → "Hi!"

        // 3. Организовать функцию getInfo, которая принимает объект вида
        //     **{ name: ..., info: { employees: [...], partners: [ … ] } }**
        //     и выводит в консоль имя (если имени нет, показывать ‘Unknown’) 
        //     и первые две компании из массива partners:

        const organisation = {
            name: 'Google',
            info: {
                employees: ['Vlad', 'Olga'],
                partners: ['Microsoft', 'Facebook', 'Xing']
            }
        };
        // *getInfo*(organisation); → Name: Google Partners: Microsoft Facebook

        function getInfo(org) {
            if (!org.name) {
                org.name = "Unknown";
            }
            let newOrganisation = ("Name: " + org.name + " Partners: " + org.info.partners.slice(0, 2))
            return newOrganisation
        }
        let organisationInfo = getInfo(organisation)
        console.log("3. ", organisationInfo)


        // 4. Дан объект:

        const person = {
            name: 'Denis',
            age: 30,
            lastGet: '',
            lastUpdate: ''
        };

        // Сделать так что-бы при получении или изменении свойства 
        // **name** в свойствах **lastGet** и **lastUpdate** сохранялась 
        // дата последнего получения или последнего обновления соответсвенно. 

        // 5. Дан объект:

        const product = {
            brand: 'Apple',
            model: 'iPhone 7',
            price: '$300'
        };

        // сделать геттер который будет возвращать **brand** и **model** 
        // в виде строки "Apple iPhone 7" ****а также сделать сеттер в 
        // который будет передаваться строка например "Samsung S8 Gold" и 
        // в объекте в поле **brand** будет записано "Samsung" а в поле **model** 
        // будет записано "S8 Gold"

    } {
        console.warn("============================ II week ")
        // 1. Дан объект **car**.
        //     Написать условие если поле **lastService** больше 5 месяцев
        //     (*из строки нужно достать число*)
        //     то нужно вывести в консоль сообщение 'Need Repair' и
        //     свойство **needRepair** в объекте **car**
        //     изменить на **true**; иначе изменить на **false**.

        let car = {
            name: "Lexus",
            age: 10,
            lastService: "1 month",
            create: 2008,
            needRepair: false,
        };

        let serviceAge = parseInt(car.lastService);
        if (serviceAge > 5) {
            console.log("1. ", "Need Repair");
            car.needRepair = true;
        } else {
            console.log("1. ", "NO Need Repair");
            car.needRepair = false;
        }

        // 2. Дан следующий код:
        //     Написать условие **если цена товара больше или равна минимальной
        //     цене и меньше или равна максимальной цене**
        //     то вывести в консоль название этого товара, иначе вывести в консоль
        //     что товар не найден.

        let product = {
            name: "Яблоко",
            price: "10$",
        };
        let min = 10; // минимальная цена
        let max = 20; // максимальная цена
        let pars = parseInt(product.price);
        if (pars >= min && pars <= max) {
            console.table(product);
        } else {
            console.table("2. ", "товар не найден");
        }

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
        let newStringCamel =
            newString.slice(0, indexP) +
            newString[indexP].toLowerCase() +
            newString.slice(indexP + 1);
        console.log("3. ", newString);
        console.log("3. ", newStringCamel);

        // 4. Создать функцию, которая принимает массив,
        //    а возвращает новый массив с дублированными элементами входного массива:
        //    *doubleArray([1,2,3]) // [1,2,3,1,2,3]*

        let doubleArray = [1, 2, 3];
        let newArr = doubleFunction(doubleArray);
        console.log("4. ", newArr);

        function doubleFunction(arr) {
            return arr.concat(arr);
        }

        // 5. Создать функцию, которая принимает произвольное (любое)
        //     число массивов и удаляет из каждого массива первый элемент,
        //     а возвращает массив из оставшихся значений:
        //     *changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ],*
        //     *changeCollection([1,2,3]) → [ [2,3] ]* и т.д*.*

        function changeFunction() {
            let newCollection = [];
            for (var i = 0; i < arguments.length; i++) {
                arguments[i].shift();
                newCollection.push(arguments[i]);
            }
            return newCollection;
        }
        let collectionOne = [1, 2, 3];
        let collectionTwo = ["a", "b", "c"];
        let collectionThree = ["5", "34", "30", 100, 435];
        let lastCollection = changeFunction(
            collectionOne,
            collectionTwo,
            collectionThree
        );
        console.log("5. ", lastCollection);

        // 6. Дан массив пользователей:
        let userArr = [{
                _id: "5d1c3860aa841704d3245513",
                isActive: false,
                balance: 2764.35,
                age: 33,
                name: "Allie Blair",
                gender: "female",
                company: "PHOTOBIN",
                email: "allieblair@photobin.com",
                phone: "+1 (951) 566-2987",
                registered: "2018-11-30T02:29:00 -02:00",
            },
            {
                _id: "5d1c386095ffb689687f2db9",
                isActive: false,
                balance: 3276.25,
                age: 22,
                name: "Yesenia Leblanc",
                gender: "female",
                company: "SKINSERVE",
                email: "yesenialeblanc@skinserve.com",
                phone: "+1 (947) 446-2840",
                registered: "2015-10-31T01:10:31 -02:00",
            },
            {
                _id: "5d1c3860e73ff2a338722e81",
                isActive: true,
                balance: 1868.65,
                age: 38,
                name: "Mamie Kramer",
                gender: "female",
                company: "EARBANG",
                email: "mamiekramer@earbang.com",
                phone: "+1 (885) 564-3305",
                registered: "2014-06-03T09:36:40 -03:00",
            },
            {
                _id: "5d1c386000e4f2fc62be1b1e",
                isActive: true,
                balance: 1003.15,
                age: 32,
                name: "Crawford Bryant",
                gender: "male",
                company: "DIGIRANG",
                email: "crawfordbryant@digirang.com",
                phone: "+1 (889) 408-2141",
                registered: "2015-01-15T05:20:21 -02:00",
            },
            {
                _id: "5d1c386008ff236a315d638b",
                isActive: false,
                balance: 3045.41,
                age: 36,
                name: "Helene Holland",
                gender: "female",
                company: "HYDROCOM",
                email: "heleneholland@hydrocom.com",
                phone: "+1 (937) 554-2040",
                registered: "2014-09-15T08:22:59 -03:00",
            },
            {
                _id: "5d1c3860b4c27c4d5fdb6c1f",
                isActive: true,
                balance: 1693.51,
                age: 23,
                name: "Hernandez Osborn",
                gender: "male",
                company: "TERRASYS",
                email: "hernandezosborn@terrasys.com",
                phone: "+1 (965) 595-3942",
                registered: "2016-08-06T12:19:01 -03:00",
            },
        ];
        //     Создать функцию которая принимает массив пользователей,
        //     поле по которому хочу фильтровать, значение на которое хочу фильтровать.
        //     Возвращать новый массив с пользователями соответсвующие указанным параметрам.
        //     Пример результата:
        //     funcGetUsers(users, "gender", "male");
        //     [{name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

        function funcGetUsers(arr, key, keyValue) {
            let newUserArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i][key] === keyValue) {
                    let obj = {
                        name: arr[i]["name"],
                        age: arr[i]["age"],
                    };
                    obj[key] = keyValue;
                    newUserArr.push(obj);
                }
            }
            return newUserArr;
        }

        let newUser = funcGetUsers(userArr, "gender", "male");
        console.log("6. ", "фильтр", newUser);

        // 7. Проверить как изменится объект **obj** и найти объяснение
        const obj = {};
        (function (x) {
            x.b = 1;
            x = null;
        })(obj);
        console.log("7. ", "x не влияет на obj", obj);

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
            discount: "15%",
            getPrice() {
                console.log("8. ", "цена товара без скидки", this.price);
            },
            getPriceWithDiscount() {
                let value = this.price - (this.price / 100) * parseInt(this.discount);
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
        console.log("9. ", "полученный размер", sizes.getSquare());
        //    Не изменяя функцию или объект, получить результат функции
        //    *getSquare* для объекта sizes

    } {
        console.warn("============================ I week ")
        // # Домашнее задание.
        // Дана строка:
        let string = 'some test string';
        let value;
        // 1. Сделать первую и последнюю буквы строки в верхнем регистре. При помощи конкатенации и через шаблонные строки.
        value = string[0].toUpperCase() + string.slice(1, -1) + string[string.length - 1].toUpperCase();
        console.log("1. ", value);
        let value2 = string[0].toUpperCase().concat(string.slice(1, -1), string[string.length - 1].toUpperCase());
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
        console.log("2. ", value);
        // 3. Найти положение второго пробела в строке (“вручную” ничего не считать).
        value = string.indexOf(" ", 5);
        console.log("3. ", Number(value));
        // 4. Получить строку с 5-го по 9-й символы.
        value = string.slice(5, 9);
        console.log("4. ", value);
        // 5. Получить число pi из Math и округлить его до 2-х знаков после точки.
        value = Math.PI.toFixed(2);
        console.log("5. ", value);
        // 6. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 511, 12, 13, 51.
        let numbersArr = [15, 11, 16, 12, 511, 12, 13, 51];
        let valueMaxArr = Math.max.apply(null, numbersArr);
        let valueMinArr = Math.min.apply(null, numbersArr);
        console.log("6.0. ", valueMaxArr);
        console.log("6.1. ", valueMinArr);
        let valueMax = Math.max(15, 11, 16, 12, 511, 12, 13, 51);
        let valueMin = Math.min(15, 11, 16, 12, 511, 12, 13, 51);
        console.log("6.2. ", valueMax);
        console.log("6.3. ", valueMin);
        // 7. Получить случайное число и округлить его до двух цифр после запятой.
        value = Math.random().toFixed(2);
        console.log("7. ", value);
        // 8. Получить случайное целое число от 0 до X. X - любое произвольное число.
        value = Math.round(Math.random() * 100);
        console.log("8. ", value);
        // 9. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
        let example = (0.6 + 0.7);
        value = +example.toFixed(1);
        console.log("9. ", value);
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

    }
});