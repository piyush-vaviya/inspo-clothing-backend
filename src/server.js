const express = require("express");
require("./db/connection");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const route = require("./router/products");

app.use(cors());
app.use(bodyParser.json());

app.use("/", route);

app.get("/", (req, res) => {
  res.send("server is working very fine");
});

app.all("*", (req, res) => {
  res.status(404).send("404, page not found");
});

app.listen(8080, (req, res) => {
  console.log("Server is listening at port 8080");
});
