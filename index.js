let numberOfMovies = 0;

let countOfMovies = +prompt('Cколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: countOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


const key1 = prompt('Один из последних просмотренных фильмов?', ''),
    value1 = prompt('На сколько баллов оцениваете фильм?', ''),
    key2 = prompt('Один из последних просмотренных фильмов?', ''),
    value2 = prompt('На сколько баллов оцениваете фильм?', '');


personalMovieDB.movies[key1] = value1;
personalMovieDB.movies[key2] = value2;

console.log(personalMovieDB);