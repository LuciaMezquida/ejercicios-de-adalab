const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints, more info about express response: https://expressjs.com/es/api.html#res

app.get("/response-a", (req, res) => {
  res.json({ result: "ok" });
});

app.get("/response-b", (req, res) => {
  const htmlCode = `<h1>Esto es una página de prueba :P</h1>`;
  res.send(htmlCode);
});

app.get("/response-c", (req, res) => {
  const randomNumber = Math.round(Math.random() * 10);
  if (randomNumber % 2 === 0) {
    res.redirect("https://www.youtube.com/");
  } else {
    res.redirect("https://www.instagram.com/");
  }
});

//con query params....
const user = "4";
app.get("/response-d/user=" + user, (req, res) => {
  console.log(user);
  if (user == 1 || user == 2) {
    res.status(200).json({ result: "ok" });
  } else {
    res.status(404).json({
      result: "error: invalid query param",
    });
  }
});
