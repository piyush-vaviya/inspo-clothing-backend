const mongoose = require("mongoose");

const productDetailsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  launchedTime: {
    type: Date,
    default: Date.now(),
  },
});

const Product = new mongoose.model("productCollection", productDetailsSchema);

module.exports = Product;
