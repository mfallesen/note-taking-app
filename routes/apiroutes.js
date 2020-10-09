const db = require("../db/db.json")
const fs = require("fs")


function apiRoutes(app) {
    app.get("/api/notes", function(req, res) {
        res.json(db);
    })

    app.get("/api/notes/:id", function(req, res) {

        res.json(data[Number(req.params.id)]);
        console.log(req.params.id);
    });

    app.post("/api/notes", function(req, res) {
        const newNote = req.body;
        let noteId = newNote.title + " " + (Math.floor(Math.random()*10))
        newNote.id = noteId;
        db.push(newNote)
        fs.writeFile("../db/db.json", JSON.stringify(db), function(err) {
            res.json(db);
            console.log(db);
        })
        
    })

    app.delete("/api/notes/:id", function(req, res){
        const removeNote = req.params.id;
        console.log(req.params.id);
        db.pop(removeNote);
        console.log(removeNote);
        fs.writeFile("../db/db.json", JSON.stringify(db), function(err) {
        })
        res.send("DELETE request called")
        
    })
}
module.exports = apiRoutes;