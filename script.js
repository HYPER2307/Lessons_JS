'use strict';


if (4) {
    console.log('Ok!');
} else {
    console.log("Error");
}



// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log('too much');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log("Error");

const num = 50;

switch (num) {
    case 49:
        console.log('Неправильно');
        break;
    case 100:
        console.log('Неправильно');
        break;
    case 51:
        console.log('Правильно');
        break;
    default:
        console.log('Не цього разу');
        break;
}