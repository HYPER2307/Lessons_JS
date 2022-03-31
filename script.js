let numberOfFilms = +prompt("Скільки фільмів вже подивились", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Останній фільм який ви подивились ?", ""),
    b = prompt("Оцінка фільму ?", ""),
    c = prompt("Останній фільм який ви подивились ?", ""),
    d = prompt("Оцінка фільму ?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);