"use strict"
//alert(`Введите ваш никнейм: ${quotesWithPhrase}`);
/*let inequalityAnswer = 4 > 4;
alert(inequalityAnswer); */

let counter = 1;
++counter;
alert(++counter); //3
alert( counter * ++counter ); //12

counter = 1;
counter++;
alert(counter++); //2
alert( counter * counter++ ); //9

counter = 1;
--counter;
alert(--counter); //-1
alert( counter * --counter ); //2

counter = 1;
counter--;
alert(counter--); //0
alert( counter * counter-- ); //1

/* counter = 1;
counter = counter + 1;
alert(counter = counter + 1);
alert(counter * (counter = counter + 1)); */

// alert('Hello');
// result = prompt(title, [default]);  - общий вид ф-ции; default - изначальное значение
let result = prompt('Как тебя зовут?', 'noname');
alert(`Тебя зовут ${result}`); // выведет null при отмене

let forCommi = confirm('За коммунизм?');
alert(forCommi); // ОК - true, отмена - false