var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
// "/dog" => "MEOW!"


// Tell express to listen for requests (start server)
app.listen(3000, function(){
	console.log("Server has started!");
});