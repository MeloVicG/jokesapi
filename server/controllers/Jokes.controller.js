const Jokes = require("../models/Jokes.model");

//read all joke
module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(data => {
            res.json(data)
            //respond to whoever send comm to begin with
        })
        .catch(err => {
            console.log(err);
            res.json({message:"your jokes gone wrong"} , err) //might be wrong
        })
};

//read one joke by id
module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({"_id" : req.params.id})
    .then(data => {res.json(data)})
    .catch(err => ({message: "your joke sucks",error: err}))
};

//create a joke
module.exports.createNewJoke = (req, res) => {
    console.log(req)
    Jokes.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.status(400).json(err));
        
};

//random joke
module.exports.randomJoke = (req, res) => {
    Jokes.count().exec(function (err, count){
        let random = Math.floor(Math.random()* count)
        Jokes.findOne().skip(random).exec(
            function(err,result){
                console.log(result)
                if (err){
                    res.json(err)
                }
                if (result){
                    res.json(result)
                }
            }
        )
    })
}

//update a joke
module.exports.updateJoke = (req, res) => {
    // Jokes.findOneAndUpdate({"_id" : req.params.id}, req.body) //how to know this syntax
    //     .then(data => {
    //         console.log(data);
    //         res.json(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.json(err)
    //     })
    
    Jokes.findOneAndUpdate({_id: req.params._id}, {
        $set: { 
            setup: req.body.setup,
            punchline: req.body.punchline
        }
    })
    .then(oneJoke => res.json({joke: oneJoke}))
    .catch(err => res.status(400).json(err))
};

// Jokes.update({_id: req.params._id}, {
//     $set: {
//         setup: req.body.setup,
//         punchline: req.body.punchline
//     }
// })
// .then(oneJoke => res.json({joke: oneJoke}))
// .catch(err => res.status(400).json(err))

//delete a joke
module.exports.deleteJoke = (req, res) => {
    Jokes.remove({"_id": req.params.id}, req.body)
    Jokes.find()
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.json(err)
    })
};