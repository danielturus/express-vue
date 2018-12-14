const mongoose = require("mongoose");

// import environmental variables from our variables.env file
require("dotenv").config({
    path: "variables.env"
});

// Connect to our Database and handle any bad connections
mongoose.connect(
    process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
    }
);

mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", err => {
    console.error(`🙅 🚫 🙅 🚫  → ${err.message}`);
});
mongoose.connection.on("connected", function () {
    console.log(
        "Mongoose default connection open"
    );
});
mongoose.connection.once("open", function () {
    console.log("Mongoose connected successfully");
});

// READY?! Let's go!

// // import all of our models
// require("./Models/VietileSfintilor");
// require("./Models/Calendar");
// require("./Models/Acatist");
// require("./Models/Psaltire");


// Start our app!
const app = require("./app");
app.set("port", process.env.PORT || 5555);
const server = app.listen(app.get("port"), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});