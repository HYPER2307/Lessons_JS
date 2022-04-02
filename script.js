'use strict';

let numberOfFilms;



function start() {
    numberOfFilms = +prompt("Скільки фільмів вже подивились", "");

    while (numberOfFilms == "" || numberOfFilms == 0 || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Скільки фільмів вже подивились", "");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i <= 1; i++) {
        const a = prompt("Фільми які ви подивились ?", ""),
            b = +prompt("Оцінка фільму ?", "");
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectLevel() {
    if (personalMovieDB.count <  10) {
        alert("Проглянуто доволі мало фільмів :(");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Ви класичний глядач :)");
    } else if (personalMovieDB.count >= 30) {
        alert("Ви кіноман :)");
    } else {
        alert("Виникла помилка");
    }
}

detectLevel();

function showMyDB(hiden) {
    if(!hiden) {
        console.log(personalMovieDB);  
    } else {
        console.log("Ви не маєте прав для перегляду бази даних");
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш уоюблений жанр під номером ${i}`);
    }
}

writeYourGenres();