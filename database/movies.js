const mongoose = require("mongoose");

//create Movies schema

const MoviesSchema = mongoose.Schema({
   
    imageurl: String,
    title: String,
    actor: String 
});

const MoviesModel = mongoose.model("movies" , MoviesSchema); //books= mongodb collection from atlas ... // give booksmodel following the above schema

module.exports = MoviesModel;