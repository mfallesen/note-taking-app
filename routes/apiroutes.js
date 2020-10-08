function apiRoutes(app) {
    app.get("/api/notes", function(req, res) {
        res.send("Hello World")
    })
}
module.exports = apiRoutes