// Import Mongoose
const mongoose = require("mongoose");

// Pull Schema and model from mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const pedicabberSchema = new Schema(
  {
    name: String,
    email: String,
    emergencyContact: String,
    homeMarket: String
  },
  { timestamps: true }
);

// Create our Model Object
const Pedicabber = model("Pedicabber", pedicabberSchema);

// Export our Model Object
module.exports = Pedicabber;