"use strict";
//jshint esversion:7

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const _ = require("lodash");
// const mongoose = require("mongoose");
// const {
//   PassportLocalSchema
// } = require('mongoose');
// const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");
const fs = require("fs");
const path = require("path");
const app = express();
// const cookieParser = require("cookie-parser");
const cors = require("cors");
const axios = require("axios")
// app.use(cookieParser())



// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xjjka.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(() => {
//   console.log('connected to cluster : ' + process.env.DB_NAME)
// }).catch((err) => {
//   console.log(err + ' : error connecting to cluster')
// });


app.use(cors())


app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// const Models = require('./database/models.js');


// const routes = require("./routes/routes");


// app.use("/app", routes)

// app.use("/", (req, res) => {
//   res.redirect("/app/home")
// });


app.get("/",async(req,res)=>{
    res.send("Hi");
})




const port = process.env.PORT || 8000;
app.listen(port, async (req, res) => {
    console.log("server is running on port " + port);
});