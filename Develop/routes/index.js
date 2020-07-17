var router = require("express").Router();
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