const mongoose = require("mongoose");

//create Movies schema

const UsersSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const UsersModel = mongoose.model("users" , UsersSchema); //books= mongodb collection from atlas ... // give booksmodel following the above schema
                                 //collection name
module.exports = UsersModel;