"use strict";

const movies = ["Amelie", "Lo que el viento se llevó", "Kill Bill"];
function workWithMovies() {
  movies[3] = "Parásitos";
  movies[2] = "Interestelar";
  movies[1] = "El Rey León";
  console.log(movies)
}

workWithMovies()
