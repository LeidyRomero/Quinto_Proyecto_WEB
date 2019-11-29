"use strict";
const mongoose = require("../../config/mongoose").mongoose;
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const schema = new mongoose.Schema({
  car: { type: String, required: true },
  price: { type: Number, required: true },
  user: { type: ObjectId, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports.Sale = mongoose.model("sales", schema);
