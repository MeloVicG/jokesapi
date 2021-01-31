const mongoose = require("mongoose");


const JokersSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "set up your joke"],
        minlength: [10, "character must be 10 characters or longer, dude"]
    },
    punchline:{
        type: String,
        required:true,
        minlength:[3, "punchline must be 3 characters or longer, dude"]
    },
}, {timestamps: true})

const Jokes = mongoose.model("Jokes", JokersSchema);

module.exports = Jokes;