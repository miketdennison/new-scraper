// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

// PORT
const PORT = process.env.PORT || 8080;

// EXPRESS
const app = express();

// EXPRESS ROUTER
const router = express.Router();
require("./config/routes")(router);

// MONGOOSE
const db = process.env.MONGOD_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(db, (err) => (err)?console.log(err):console.log("Mongoose connected."));

// STATICS
app.use(express.static(__dirname + "/public"));

// HANDLEBARS
app.engine("handlebars", exphbs ({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// PARSING
app.use(express.urlencoded({
    extended: false
}));

// USE ROUTER MIDDLEWARE
app.use(router);

// LISTEN
app.listen(PORT, () => console.log("Listening on PORT" + PORT));