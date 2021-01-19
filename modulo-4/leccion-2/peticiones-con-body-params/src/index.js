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
// let filterByName = "";
// let filterByMail = "";
// api endpoints

server.post("/user", (req, res) => {
  console.log("Body params:", req.body);
  console.log("Body param userName:", req.body.userName);
  console.log("Body param userEmail:", req.body.userEmail);
  // filterByName = req.body.filterByName;
  // filterByMail = req.body.filterByMail;

  // add new user to daba base
  users.push({
    name: req.body.userName,
    email: req.body.userEmail,
  });

  res.json({
    result: "User created",
  });
});

server.get("/users", (req, res) => {
  // const filteredUsers = users
  //   .filter((item) =>
  //     item.name.toLowerCase().includes(filterByName.toLowerCase())
  //   )
  //   .filter((item) =>
  //     item.email.toLowerCase().includes(filterByMail.toLowerCase())
  //   );
  res.json({
    result: users,
  });
});
