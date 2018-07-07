var express = require("express")
var app = express();
var bodyParser = require("body-parser") // to parse body into object

app.set("view engine", "ejs") // no need to write ejs everytime
var message =["Need to find a way to defeat White Walkers !!", "Get the Dragon Glass", "Winter is coming"]

app.use(bodyParser.urlencoded({extended: true})) // Needed with Body Parser

app.get("/", function(req, res){
    res.redirect("/messages")
})

app.get("/messages", function(req, res){

    res.render("message",{message: message})
})

app.post("/newmessage", function(req, res){
    var newmessage = req.body.newmessage
    message.push(newmessage)
    res.redirect("/messages") // redirects so we never actually land on /newmessage
})

app.listen(3000,function(){
    console.log("running on port 3000")
})