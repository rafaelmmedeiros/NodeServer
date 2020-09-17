// Express
let express = require("express");

let app = express();
let port = 3000;

// Views
app.set("view engine", "ejs");

// STATUS MESSAGES:
app.listen(port, function () {
  console.log("Server is Running!!! And isn´t burning!! port:", port);
});

module.exports = app;
