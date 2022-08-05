const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

//import routes
const postRoutes = require('./routes/posts');
app.use(bodyParser.json());

app.use('/posts',postRoutes);

app.get('/',(req,res)=>{
    res.send("This is the home page")
})
//connect to DB
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("connected to the database");
})

//routes
app.get('/',(req,res)=>{
    res.send("Hello Browser");
})
//listen to the port
app.listen('3000');
