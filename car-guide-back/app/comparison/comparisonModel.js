"use strict";
const mongoose = require ('../../config/mongoose').mongoose,
      Schema   = mongoose.Schema,
      validator = require('validator');

const comparisonSchema = Schema({ 
    name : {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    license_one: {
        type: String,
        required: true,
        trim: true
    },
    license_two: {
        type: String,
        required: true,
        trim: true 
    },
    user_username: {
        type: String,
        required: true,
        trim: true  
    }

});

const Comparison = mongoose.model('Comparison', comparisonSchema);

module.exports = Comparison;