var router = require("express").Router();
var fs = require("fs");
var db = [];
var path = require("path");

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

router.get("/api/notes", function(req, res){
    db = JSON.parse(fs.readFileSync("./db/db.json"));
    console.log(db);
    res.json(db);
})

//create note, post to db, and create random ID
router.post("/api/notes", function(req, res){
    var record = {
        id: db.length + Math.floor(Math.random()*100), 
        title: req.body.title,
        text: req.body.text,
    }
    db.push(record);

    fs.writeFileSync("./db/db.json", JSON.stringify(db), function(err){
        if(err) {
            throw err
        }
        console.log(db)
        res.json(db)
    });
})

router.delete("/api/notes/:id", function(req, res){
    var newArr = [];
    for (let i = 0; i < db.length; i++) {
        if(db[i].id != req.params.id) {
            newArr.push(db[i]);
        }
    }
    db = newArr
    fs.writeFileSync("./db/db.json", JSON.stringify(db), function(err){
        if(err) {
            throw err
        }
        console.log(db)
        res.json(db)
    });
})

module.exports = router;