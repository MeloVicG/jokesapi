// const express = require("express")
const mongoose = require("mongoose")
// const cors = require("cors")

mongoose.connect("mongodb://localHost/jokesapi-db", {
    useNewUrlParser: true,
    useUnifiedTopogy: true,
})
    .then(() => console.log("Established a connection to the database,dude"))
    .catch(err => console.log("Something went wrong when connecting to the database, dude", err));
