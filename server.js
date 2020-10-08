// Dependencies
const express = require("express");
const apiroutes = require("./routes/apiroutes.js")
const htmlroutes = require("./routes/htmlroutes.js")

// // Set our port to 8080
var app = express();
var PORT = 8080;

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

apiroutes(app)
htmlroutes(app)

// // Create our server
// var server = http.createServer(handleRequest);

// // Create a function for handling the requests and responses coming into our server
// function handleRequest(req, res) {

//   // Here we use the fs package to read our index.html file
//   fs.readFile(__dirname + "/index.html", function(err, data) {
//     if (err) throw err;
//     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//     // an html file.
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }

// // Starts our server
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});


