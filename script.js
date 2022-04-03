'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 10
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 23,
    e: 45
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'd', 'f'];
// const newArray = oldArray.slice();

// newArray[1] = 'sdgsgs';
// console.log(oldArray);
// console.log(newArray);

const video = ['youtube', 'video', 'udemy'],
    blogs = ['gsgfsgrs', 'fefaefsx', 'edsgsdg'],
    internet = [...video, ...blogs, 'wegfsg', 'efgsgsw'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newArray = [...array];