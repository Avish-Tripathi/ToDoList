//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy for Krishna", "Cook for Krishna", "Chant for Krishna"];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){ 
    let today  = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {Newday: day, newList: items});
});

app.post("/", function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, function(req,res){
    console.log("Server Started !");
});