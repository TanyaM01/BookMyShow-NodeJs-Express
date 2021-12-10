


const MovieModel = require("./database/movies");
const UserModel = require("./database/users");

const express = require("express");
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());







//Import the mongoose module

 var mongoose = require( 'mongoose');
 //set up default mongoose connection
 var mongoDB = 'mongodb://tanya_maurya:YG9PStFwTQLyGBjp@cluster0-shard-00-00.afnrm.mongodb.net:27017,cluster0-shard-00-01.afnrm.mongodb.net:27017,cluster0-shard-00-02.afnrm.mongodb.net:27017/book-my-show?ssl=true&replicaSet=atlas-ayl6gt-shard-0&authSource=admin&retryWrites=true&w=majority';
 mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED")).catch((e)=>console.log(e));

// http://localhost:5000/
app.get("/", (req, res) => {
    return res.json({"WELCOME": `to my Backend Software for the BookMyShow`});
});

// http://localhost:5000/movies
app.get("/movies", async (req, res) => {
    const getAllMovies = await MovieModel.find();  //find=find_all
    return res.json(getAllMovies);
});

// http://localhost:5000/movie/:id   //get a single movie
app.get("/movie/:id", async (req, res) => {
    const {id} = req.params;
    const getMovie = await MovieModel.findOne({_id: id});  //find=find_all
    return res.json(getMovie);
});


// http://localhost:5000/user-register   //post a user detail in users collection
app.post("/user-register", async (req, res) => {
   const addNewUser = await UserModel.create(req.body);
    return res.json({userAdded: addNewUser, message:"User was added ! ! !"});
});
 
app.listen(5000, () => {
    console.log("MY EXPRESS APP IS RUNNING.....")
});