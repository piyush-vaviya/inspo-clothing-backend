const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/shopping-products")
  .then(() => {
    console.log("connection is successfully");
  })
  .catch((err) => {
    console.log(err);
  });
