# Домашнее задание.

1. На основе массива **map** и массива **users** собрать новый массив
 объектов где в каждом объекте будут только те свойства которые перечислены
 в массиве **map**

    const map = ["_id", "name", "isActive", "balance"];
    const users = [
      {
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

На выходе мы должны получить массив вида: 

    [ { _id: ..., name: ..., isActive: ..., balance: ... }, ... ];

2. Дан массив объектов, где каждый объект содержит информацию о 
букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

    [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

Напишите функцию, которая из элементов массива соберет и вернёт строку,
 основываясь на index каждой буквы. Например:

    // [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → "Hi!"

3. Организовать функцию getInfo, которая принимает объект вида 
**{ name: ..., info: { employees: [...], partners: [ … ] } }**
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) 
и первые две компании из массива partners:

    **const** organisation = { 
      name: 'Google', 
      info: { 
        employees: ['Vlad', 'Olga'], 
        partners: ['Microsoft', 'Facebook', 'Xing'] 
    } };
    // *getInfo*(organisation); → Name: Google Partners: Microsoft Facebook

4. Дан объект:

    const person = {
    	name: 'Denis',
    	age: 30,
    	lastGet: '',
    	lastUpdate: ''
    };

Сделать так что-бы при получении или изменении свойства **name** в 
свойствах **lastGet** и **lastUpdate** сохранялась дата последнего 
получения или последнего обновления соответсвенно. 

5. Дан объект:

    const product = {
    	brand: 'Apple',
    	model: 'iPhone 7',
    	price: '$300'
    };

сделать геттер который будет возвращать **brand** и **model** в 
виде строки "Apple iPhone 7" ****а также сделать сеттер в который 
будет передаваться строка например "Samsung S8 Gold" и в объекте в 
поле **brand** будет записано "Samsung" а в поле **model** будет записано "S8 Gold"

### Arrow functions
https://vimeo.com/344241381/2dfe1ee4e3
[https://medium.com/@KucherDev/когда-и-почему-стоит-использовать-стрелочные-функции-es6-3135a973490b]
[https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Functions/Стрілкові_функції]

### Перебирающие методы массивов
https://vimeo.com/345009722/c68854d242
[https://learn.javascript.ru/array-iteration]
[https://medium.com/@stasonmars/объясняем-методы-в-массивах-js-filter-vs-map-vs-reduce-vs-foreach-995ef7468c4a]

### Замыкание
https://vimeo.com/345836732/8d8a42e0d4
[https://medium.com/@sshambir/осваиваем-замыкания-в-javascript-5b83267ef7d1]
[https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36]
[https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8]

### Методы объектов
https://vimeo.com/345836507/26f18df7f5
[https://medium.com/youstart-labs/javascript-object-methods-every-developer-should-know-c68c132a658]
[https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/]

### Object descriptor
https://vimeo.com/346693257/b7711f7e30
[https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty]
[https://learn.javascript.ru/descriptors-getters-setters]

### Объекты обертки
https://vimeo.com/345836585/08905c514c
[https://javascriptrefined.io/the-wrapper-object-400311b29151]

### Деструктуризация
https://vimeo.com/345836538/8a41e9627e
[https://medium.com/@stasonmars/деструктуризация-в-es6-полное-руководство-b865bb71f376]
[http://jsraccoon.ru/es6-spread-rest]