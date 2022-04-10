'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'green';

box.style.cssText = 'background-color: blue; width: 500px';

btns[2].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

 const div = document.createElement('div');
//  const text = document.createTextNode('Sgsfbfc');

div.classList.add('black');

// wrapper.append(div);

// wrapper.prepend(div);

// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.insertAdjacentHTML('beforebegin', "<h1>564765</h1>");