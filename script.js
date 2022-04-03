'use strict';

const personalMovieDB = {
    count: 0,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function () {
        for (let i = 0; i <= 1; i++) {
            const a = prompt("Фільми які ви подивились ?", ""),
                b = +prompt("Оцінка фільму ?", "");
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    start: function () {
        this.count = +prompt("Скільки фільмів вже подивились", "");

        while (this.count == "" || this.count == 0 || isNaN(this.count)) {
            this.count = +prompt("Скільки фільмів вже подивились", "");
        }
    },
    detectLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Проглянуто доволі мало фільмів :(");
        } else if (this.count >= 10 && this.count < 30) {
            alert("Ви класичний глядач :)");
        } else if (this.count >= 30) {
            alert("Ви кіноман :)");
        } else {
            alert("Виникла помилка");
        }
    },
    showMyDB: function (hiden) {
        if (!hiden) {
            console.log(personalMovieDB);
        } else {
            console.log("Ви не маєте прав для перегляду бази даних");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            //    let genre = prompt(`Ваш улюблений жанр під номером ${i}`);

            //    if(genre == '' || genre === null) {
            //        alert('Ви ввели некоректні данні');
            //        i--;
            //    } else {
            //         this.genres[i - 1] = genre;
            //    }
            // }

            let genres = prompt(`Введіть ваші улюблені жанри через кому`).toLowerCase();

            if (genres == '' || genres === null) {
                alert('Ви ввели некоректні данні');
                i--;
            } else {
                this.genres = genres.split(', ');
                this.genres.sort();
            }
        }

        this.genres.forEach((item, i) => {
            alert(`Ваш улюблений жанр ${i + 1} - це ${item}`);
        });
    },
    toggleVisibleMyDB: function (hiden) {
        if (hiden) {
            hiden = false;
        } else {
            hiden = true;
        }
        console.log(hiden);
    }
};

// personalMovieDB.start();

// personalMovieDB.detectLevel();

// personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);