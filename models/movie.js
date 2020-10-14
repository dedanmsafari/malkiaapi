const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');
const Movie = mongoose.model('Movies', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  genre: { 
    type: genreSchema,  
    required: true
  },
  starActor:{
    type: String,
    required:true,
    maxlength: 10
  },
  producer:{
    type: String,
    required:true,
    maxlength: 10
  },
year:{
  type: Number, 
  required: true,
},
  numberInStock: { 
    type: Number, 
    required: true,
    min: 0,
    max: 255
  },
  dailyRentalRate: { 
    type: Number, 
    required: true,
    min: 0,
    max: 255
  },
description:{
  type:String,
  required: true,
  trim: true,
  minlength: 15,
  maxlength :500
}
// profileImg: {
//   type: String,
//   required: true
// }
}));

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.objectId().required(),
    starActor:Joi.string().max(10).required(),
    producer:Joi.string().max(10).required(),
    year:Joi.number().min(1990).max(2020).required(),
    numberInStock: Joi.number().min(0).required(),
    dailyRentalRate: Joi.number().min(0).required(),
    description: Joi.string().min(15).required(),
    // profileImg:Joi.any()
  };

  return Joi.validate(movie, schema);
}


exports.Movie = Movie; 
exports.validate = validateMovie;