var express=require("express");
//var mongoose = require("mongoose");
var app= express();
var bodyParser=require("body-parser");
//var cors =require("cors");
//var morgan = require("morgan");

//mongoose.connect("mongodb://localhost/myownmovieapp");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var routes=require("./routes");

app.use(routes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("THE SERVER IS RUNNING")
})