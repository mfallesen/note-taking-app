// Dependencies
const express = require("express");
const apiroutes = require("./routes/apiroutes.js")
const htmlroutes = require("./routes/htmlroutes.js")

// // Set our port to 8080
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiroutes(app)
htmlroutes(app)


// // Starts our server
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});


