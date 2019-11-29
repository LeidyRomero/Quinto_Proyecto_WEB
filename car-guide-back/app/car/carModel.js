"use strict";
const mongoose = require ('../../config/mongoose').mongoose,
      Schema   = mongoose.Schema,
      validator = require('validator');

const carSchema = Schema({
    year : {
        type: Number,
        required: true,
        trim: true,
        min: 1959,
        max: 2019
    },
    km : {
        type: Number, 
        required: true,
        trim: true,
        default: 0
    },
    category : {
        type: String,
        required: true,
        trim: true,
        enum: ['auto', 'camioneta'],
        lowercase: true
    },
    color : {
        type: String,
        required: true,
        trim: true,
        lowercase: true
        //TODO: poner default dropdown de colores en el front
    },
    enter_date : {
        type: Date,
        require: true,
        trim: true,
        min: new Date("1960-01-01"),
        max: Date.now,
        default: Date.now
    },
    name : {
        type: String,
        required: true,
        trim: true,
    },
    license : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    price : {
        type: Number,
        required: true,
        default: 0
    },
    brand : {
        type: String,
        required: true,
        trim: true,
        enum: ['Renault', 'Audi', 'BMW', 'Chevrolet', 'Toyota', 'Mazda', 'Mercedes Benz']
    },
    centcubs : {
        type : Number, 
        required: true,
        min: 1000
    },
    cil_capacity : {
        type : Number, 
        required: true,
        min: 50
    },
    model : {
        type: String,
        required: true,
        trim: true,
    },
    doors : {
        type : Number, 
        required: true,
        enum : [2,4]
    },
    transmission : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        enum : ['mecanica', 'automatica']
    },
    image : {
        type: String,
        required: true,
        trim: true,
    }

})

//Filters -> a filter for each attribute of the model.
carSchema.statics.findByBlaBla = async (param) => {

    return null;
}

const Car = mongoose.model('Car', carSchema);

module.exports = Car;