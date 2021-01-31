const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
//create express app
const app = express();



require("./server/config/mongoose.config");

require("./server/routes/Jokes.routes")(app);

//config middleware and settings
// cors is a crossbridge between ___________?
app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));


//routes in the middle
app.get("/", (req,res) =>{
    res.json({message:"HEY DUDE, whats your joke?"})
})

const AllMyJokesRoutes = require("./server/routes/Jokes.routes");
AllMyJokesRoutes(app);

//listen statement at the bottom
app.listen(8020, () =>{
    console.log("We are live on port 8020 for jokesAPI!")
})



//stuff added before making CCMR folders (practice)

//does this make the new db?    //the -db was uncessary but already created
// mongoose.connect("mongodb://localHost/jokesapi-db", {
//     useNewUrlParser: true,
//     useUnifiedTopogy: true
// });

// const JokersSchema = new mongoose.Schema({
//     setup:{
//         type: String,
//         required: true,
//         minlength: [10, "character must be 10 characters or longer, dude"]
//     },
//     punchline:{
//         type: String,
//         required:true,
//         minlength:[3, "punchline must be 3 characters or longer, dude"]
//     },
// }, {timestamps: true})


// this is what gets added into the collections? db
//it made it lowercase? 
// model object?
// const Jokes = mongoose.model("Jokes", JokersSchema);






//grabs all jokes             //res -> who made intitial request
// app.get("/jokes", (req, res)=>{
//     Jokes.find()
//         .then(data => {
//             console.log(data);
//             res.json(data);
//             //respond to whoever send comm to begin with
//         })
//         .catch(err => {
//             console.log(err);
//             res.json(err)
//         })
// })

//makes jokes
//what does syntax of each command do
// app.post("/jokes/new", (req,res) =>{
//     Jokes.create(req.body)
//         Jokes.find()
//         .then(data => {
//             console.log(data);
//             res.json(data);
//         })
//         .catch(err => {
//             console.log(err);
//             res.json(err)
//         })
// })


//placing before /jokes/:id
// app.get("/jokes/random", (req,res) => {
//     Jokes.count().exec(function (err, count){
//         let random = Math.floor(Math.random()* count)

//         Jokes.findOne().skip(random).exec(
//             function(err,result){
//                 console.log(result)
//                 if (err){
//                     res.json(err)
//                 }
//                 if (result){
//                     res.json(result)
//                 }
//             }
//         )
//     })
// })

//find by id     //why cant use _id?
// app.get("/jokes/:id", (req,res) => {
//     Jokes.findOne({"_id" : req.params.id})
//     .then(data => {
//         console.log(data);
//         res.json(data);
//     })
//     .catch(err => {
//         console.log(err);
//         res.json(err)
//     })
// })

// app.put("/jokes/update/:id", (req,res) => {              //passing an update in database
//     Jokes.findOneAndUpdate({"_id" : req.params.id}, req.body) //how to know this syntax
//     .then(data => {
//         console.log(data);
//         res.json(data);
//     })
//     .catch(err => {
//         console.log(err);
//         res.json(err)
//     })
// })

// app.delete("/jokes/delete/_id", (req,res) => {
//     Jokes.remove({"_id": req.params.id}, req.body)
//     Jokes.find()
//     .then(data => {
//         console.log(data);
//         res.json(data);
//     })
//     .catch(err => {
//         console.log(err);
//         res.json(err)
//     })
// })
