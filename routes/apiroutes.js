const db = require("../db/db.json")
const fs = require("fs")

function apiRoutes(app) {
    app.get("/api/notes", function(req, res) {
        res.json(db);
    })

    app.post("/api/notes", function(req, res) {
        const newNote = req.body;
        db.push(newNote)
        console.log(newNote);
        fs.writeFile("../db/db.json", JSON.stringify(db), function(err) {
            res.json(newNote);
        })
    })
}
module.exports = apiRoutes