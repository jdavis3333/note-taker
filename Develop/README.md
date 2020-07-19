# note-taker

The goal of this project was to create an application that can write, save, and delete notes. It will use an express backend and save and retrieve note data from a JSON file.

### Prerequisites

* [Visual Studio Code](https://code.visualstudio.com/)
* [Heroku](https://www.heroku.com/) 

### Execution

* Created middleware
```
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);
app.listen(PORT, function(){
console.log("server listening on PORT:", PORT)
```
* Created get method route
```
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
```
* Created post method route and assign an ID with a random number
```
router.post("/api/notes", function(req, res){
    var record = {
        id: db.length + Math.floor(Math.random()*100), 
        title: req.body.title,
        text: req.body.text,
    }
    db.push(record);
```            
* Created a method to delete notes from database
```
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
```

## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)
* [JQuery](https://jquery.com/)

## Deployed Link

* [Deployed Link](https://agile-beyond-42839.herokuapp.com/) 


## Authors

* Joe Davis

- [Link to Portfolio](https://jdavis3333.github.io/updated-portfolio/)
- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/)


## License

This project is licensed under the ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg).
