const db = require("../models/Books");

module.exports = function(app){
    
    app.get("/api/books", (req, res) => {
        
        db.Books.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post("/api/books", (req, res) => {
        
        db.Books.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.delete("/api/books/:id", (req, res) => {

        db.Books.deleteOne({ _id: req.params.id })
        .then(data => {

            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
    });
}
  