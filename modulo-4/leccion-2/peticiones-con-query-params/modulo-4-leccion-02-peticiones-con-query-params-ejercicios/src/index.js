const express = require("express");
const cors = require("cors");

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = "./public";
server.use(express.static(staticServerPath));

// users

const users = []; // fake users data base
let filterByName = "";
let filterByMail = "";
// api endpoints

server.post("/user", (req, res) => {
  console.log("Query params:", req.query);
  console.log("Query param userName:", req.query.userName);
  console.log("Query param userEmail:", req.query.userEmail);
  filterByName = req.query.filterByName;
  filterByMail = req.query.filterByMail;

  // add new user to daba base
  users.push({
    name: req.query.userName,
    email: req.query.userEmail,
  });

  res.json({
    result: "User created",
  });
});

server.get("/users", (req, res) => {
  const filteredUsers = users
    .filter((item) =>
      item.name.toLowerCase().includes(filterByName.toLowerCase())
    )
    .filter((item) =>
      item.email.toLowerCase().includes(filterByMail.toLowerCase())
    );
  res.json({
    result: filteredUsers,
  });
});
