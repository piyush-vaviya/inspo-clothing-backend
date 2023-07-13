const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const signUpTemp = require("../models/users");

const addItem = [];

router.get("/shop/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const showProduct = await Product.find({ category: category });
    res.send({ data: showProduct });
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

router.get("/checkout/:_id", async (req, res) => {
  try {
    console.log(req.params);
    const { _id } = req.params;
    const item = await Product.findOne({ _id: _id });
    addItem.push(item);
    res.send({ data: item });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/checkout", async (req, res) => {
  res.send({ data: addItem });
});

router.get("/shop", async (req, res) => {
  const showProduct = await Product.find();
  res.send({ data: showProduct });
});

router.get("/signup", async (req, res) => {
  const showuser = await signUpTemp.find();
  res.send({ data: showuser });
});

router.get("/login", async (req, res) => {
  try {
    const { email, password } = req?.query;
    console.log(req.query);
    const showuser = await signUpTemp.findOne({
      email: email.trim(),
      password: password.trim(),
    });
    console.log(showuser);

    if (!showuser) {
      return res.status(404).send({ error: "this user not Exist" });
    }
    res.status(200).send({ success: "welcome to home page", data: showuser });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { firstName, email, password } = req.body;
    const signedUpUser = await new signUpTemp({
      firstName,
      email,
      password,
    });

    const userCollection = await signedUpUser.save();

    res.send({
      success: "sign up complete, now you are eligible to login",
      data: userCollection,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete("/checkout", async (req, res) => {
  try {
    console.log(req.query);
    const { _id } = req.query;
    console.log(req.query._id);
    console.log(typeof _id);
    await addItem.findOneAndDelete({ _id: _id });
    console.log(addItem);
    res.send({ data: addItem });
  } catch (error) {
    res.status(500).send(error);
  }
});

const createProduct = async () => {
  try {
    const product1 = new Product({
      category: "jacket",
      productName: "black jean shearling",
      price: 125,
      imageURL: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    });

    const finalProduct = await Product.insertMany([
      product1,
      product2,
      product3,
      product4,
      product5,
    ]);
    console.log(finalProduct);
  } catch (error) {
    console.log(error);
  }
};

// createProduct();

module.exports = router;
