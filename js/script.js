"use strict"; /* Это директива, говорящая нашему файлу, что мы работаем в современном (строгом) режиме */

let number = 5;
const leftBorderWith = 1;

number = 10;
console.log(number);

let number1 = 4.3;

console.log(-4/0);
console.log('string'*9);

const something = 'can write absolutly different string';

const bool = true;

// Объект - это коллекция данных, структура, которая используется для хранения абсолютно любых данных
//Здесь могут находиться какие-то данные, которые называются свойствами объекта, и действия, которые называются методами

/* const obj = {
name: 'John', */  /* Формат ключ: значение */
/* age: 25,
isMarried: false,
};

console.log(obj.name); */

/* let arr = [`orange.png`, `plum.jpg`, 6, `makers.bmp`]; */ /* Ключ значения массива - это номер по порядку */
/* console.log(arr[1]); */

/* alert('Hello!');

const result = confirm('Are you here?');
console.log(result);

const answer = prompt("Вам есть 18?", "");
console.log(typeof(answer)); */

const answers = [];
answers[0] = prompt('What your First_name?', '');
answers[1] = prompt('What your Second_name?', '');
answers[2] = prompt('What your age?', '');

/* document.write(answers); */

/* const category = 'toys';
const name1 = prompt('Как Вас зовут?');

console.log(`https://someurl.com/${category}/5`); */  /* Интерполяция */

/* alert(`Привет, ${name1}`); */

let incr = 10,
    dicr = 10;

++incr; /* Если ++ или -- перед переменной, то это префикс, если после - постфикс */
--dicr;

console.log(incr);
console.log(dicr);

console.log(5%2);
console.log(2*4 == 8); /* = - присваивание, == - сравнение, === - строгое равенство */

const isChenged = true,
      isClose = false;

console.log(isChenged && isClose);





