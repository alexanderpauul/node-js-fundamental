const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const petSchema = new Schema({
  name: String,
  description: String,
});

// Create model
const Pet = mongoose.model("Pet", petSchema, "Pets");

module.exports = Pet;
