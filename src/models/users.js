const mongoose = require("mongoose");
const validator = require("validator");
const signUpSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "This Email is already used"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const signUpTemp = new mongoose.model("inspouser", signUpSchema);

module.exports = signUpTemp;
