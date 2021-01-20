const express = require("express");
const cors = require("cors");
const films = require("./data.json");
const directors = require("./directors-data.json");

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// set template engine middlewares
app.set("view engine", "ejs");

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get("/es/film:filmId.html", (req, res) => {
  // get film data
  const filmData = films.find((film) => film.id === req.params.filmId);
  //console.log("film data", filmData);
  const filmYear = req.query.adwarsYear || "";
  console.log("film year:", filmYear);
  //ensure data
  filmData.id = filmData.id || "";
  filmData.title = filmData.title || "";
  filmData.year = filmData.year || "";
  filmData.director = filmData.director || "";
  filmData.country = filmData.country || "";

  if (filmYear) {
    filmData.awards =
      filmData.awards.filter((award) => award.year === filmYear) || [];
  } else {
    filmData.awards = filmData.awards || [];
  }
  // response with rendered template called film
  if (filmData) {
    res.render("pages/film", filmData);
  } else {
    res.render("pages/film-not-found");
  }
});

app.get("/es/directora/:directorId", (req, res) => {
  const directorData = directors.find(
    (director) => director.id === req.params.directorId
  );
  if (directorData) {
    res.render("pages/director", directorData);
  } else {
    res.render("pages/film-not-found");
  }
});
