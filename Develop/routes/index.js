var router = require("express").Router();
var db = require("../db/db.json");
var path = require("path");

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})