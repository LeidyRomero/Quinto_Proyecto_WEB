"use strict";
const mongoose = require("../../config/mongoose").mongoose;

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports.Service = mongoose.model("services", schema);
