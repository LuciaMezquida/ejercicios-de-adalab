const express = require("express");
const cors = require("cors");
const data = require("./data.json");
const users = data.results;

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
app.use(express.static(staticServerPath));

app.get("/users/:userId", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);
  // find promo by userId
  const user = users.find((user) => user.id === parseInt(req.params.userId));
  console.log("user: " + user);
  // response with selected user data or error
  if (user === undefined) {
    res.json({ error: "user-not-found" });
  } else {
    res.json(user);
  }
});
app.get("/users/:userId/episodes", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);

  // find promo by userId
  const user = users.filter((user) => user.id === parseInt(req.params.userId));
  const episodes = user[0].episode;
  console.log("Found user:", user);
  console.log("Found episodes:", episodes);

  // response with selected user data or error
  if (user === undefined) {
    res.json({ error: "user-not-found" });
  } else if (episodes !== undefined) {
    res.json({ episodes });
  } else {
    res.json(user);
  }
});
