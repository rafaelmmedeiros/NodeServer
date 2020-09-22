let express = require("express");
let consign = require("consign");

// Express
let app = express();
let port = 3000;

// Views
app.set("view engine", "ejs");
app.set("views", "./app/views");
consign().include("./app/routes").then("./config/dbConnection.js").into(app);

// STATUS MESSAGES:
app.listen(port, function () {
  console.log("Server is Running!!! And isn´t burning!! port:", port);
});

module.exports = app;
