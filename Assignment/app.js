var express = require("express");
var app = express();

// intro code
app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

// animal calls
app.get("/speak/pig", function(req, res){
	res.send("The pig goes oink oink!");
});

app.get("/speak/dog", function(req, res){
	res.send("The dog goes woof woof!");
});

app.get("/speak/cow", function(req, res){
	res.send("The cow goes moo moo!");
});

// counting calls
app.get("/repeat/hello/3", function(req, res){
	res.send("hello hello hello");
});

app.get("/repeat/hello/5", function(req, res){
	res.send("hello hello hello hello hello");
});

app.get("/repeat/blah/2", function(req, res){
	res.send("blah blah");
});

// all other entries
app.get("*", function(req, res){
	res.send("Sorry, page not found... What are you doing with your life?");
});

// Tell express to listen for requests (start server)
app.listen(3000, function(){
	console.log("Server has started!");
});