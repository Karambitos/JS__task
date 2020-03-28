
let string = 'some test string'

//task1
str = string[0].toUpperCase().concat( string.slice(1, -1), string[string.length - 1].toUpperCase());
//task2
str = string.indexOf('string');
//task3
str = string.lastIndexOf(' ');
//task4
str = string.slice(5, 9);
//task5
value = Math.PI.toFixed(2);
//task6 15, 11, 16, 12, 51, 12, 13, 51
valueMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
valueMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
//task7
value = Math.random().toFixed(2);
//task8  0 до 15ти
value = Math.floor(Math.random()* 10 + 16);
//task9 Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
value = 0.6 + 0.7;
value = parseFloat(value.toFixed(1));
//task10 Создать объект с полем product, равным 'iPhone'.
const object = {
  product: 'iPhone'
};
//task11 Добавить в объект поле price, равное 1000 и поле currency, равное 'dollar'.
object.price = 1000;
object.currency = 'dollar';
//task12 Добавить поле details, которое будет содержать объект с полями model и color
object.details = {};
object.details.model = 'XS';
object.details.colour = 'black';



console.log(object);


