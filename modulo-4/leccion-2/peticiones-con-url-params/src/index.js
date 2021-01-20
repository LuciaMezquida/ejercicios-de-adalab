const express = require("express");
const cors = require("cors");
const users = require("./data.json");

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

server.get("/users/all", (req, res) => {
  res.json(users);
});

server.get("/users/:userId/orders/all", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);
  console.log("Url param orders:", req.params.ordersId);

  // find promo by userId
  const user = users.filter((user) => user.id === req.params.userId);
  console.log("Found user:", user);
  const order = user[0].order;
  console.log("Found order:", order);

  // response with selected user data or error
  if (user === undefined) {
    res.json({ error: "user-not-found" });
  } else {
    res.json(order);
  }
});
server.get("/users/:userId/orders/:ordersId", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);
  console.log("Url param orders:", req.params.ordersId);

  // find promo by userId
  const user = users
    .filter((user) => user.id === req.params.userId)
    .find((order) => order.order[req.params.ordersId]);
  console.log("Found user:", user);
  const order = user.order[req.params.ordersId];
  console.log("Found order:", order);

  // response with selected user data or error
  if (user === undefined) {
    res.json({ error: "user-not-found" });
  } else if (order !== undefined) {
    res.json({ [req.params.ordersId]: order });
  } else {
    res.json(user);
  }
});
