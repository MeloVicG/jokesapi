const JokesController = require("../controllers/Jokes.controller");

module.exports = app => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.get("/api/jokes/:id", JokesController.findOneJoke);
    app.get("/api/jokes/random", JokesController.randomJoke);
    app.post("/api/jokes/new", JokesController.createNewJoke);
    app.put("/api/jokes/update/:id", JokesController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokesController.deleteJoke);
};

//cannot get :_id to work
//create, update, delete dont work??