'use strict';
const book = document.querySelectorAll('.book');
const img = document.querySelector('body');
const adv = document.querySelector('.adv');
const liFirst = book[0].querySelectorAll('li');
const liSecond = book[5].querySelectorAll('li');
const bookSixUl = book[2].querySelector('ul');
const createLi = document.createElement('li');

book[0].before(book[1]);
book[2].before(book[4]);
book[2].before(book[3]);
book[2].before(book[5]);
img.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
book[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';
adv.remove();
liFirst[3].after(liFirst[2]);
liFirst[8].after(liFirst[2]);
liFirst[3].after(liFirst[6]);
liFirst[6].after(liFirst[8]);
liFirst[2].before(liFirst[9]);

liSecond[2].before(liSecond[9]);
liSecond[9].after(liSecond[3]);
liSecond[4].after(liSecond[2]);
liSecond[2].after(liSecond[6]);
liSecond[7].after(liSecond[5]);

bookSixUl.append(createLi);
const lastLi = bookSixUl.querySelectorAll('li');
lastLi[10].textContent = 'Глава 8: За пределами ES6';
lastLi[10].after(lastLi[9]);
