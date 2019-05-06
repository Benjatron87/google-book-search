const db = require("../models/Books");

module.exports = function(app){

    const arr = [];

    app.get("/api/books", function(req, res) {
        res.json(arr);
    });

    app.post("/api/books", function(req, res) {
        arr.push(req.body);

        res.json(true);
    })

}
  