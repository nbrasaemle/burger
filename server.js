const express = require("express");
const bodyparser = require("body-parser");

// Sets up the Express App
var PORT = process.env.PORT || 8080;
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





// Starts the server to begin listening
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });