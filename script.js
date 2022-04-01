'use strict';

let numberOfFilms = +prompt("Скільки фільмів вже подивились", "");

if(numberOfFilms == 0 && numberOfFilms == null) {
    alert("Ви мусите надати відповідь для продовження");
    numberOfFilms = +prompt("Скільки фільмів вже подивились", "");
} else if (numberOfFilms <= 10) {
    alert("Проглянуто доволі мало фільмів :(");
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert("Ви класичний глядач :)");
} else if (numberOfFilms > 50){
    alert("Ви кіноман :)");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i <= 1; i++) {
    const a = prompt("Фільми які ви подивились ?", ""),
    b = +prompt("Оцінка фільму ?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    

    
}


console.log(personalMovieDB); 