const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
 
  title: {
    type: String,
  },

  author: {
    type: String,
  },
  
  link: {
    type: String,
  },
  
  synopsis: {
    type: String,
  },

  image: {
    type: String,
  }
});

const Books = mongoose.model("Books", BookSchema);

module.exports = Books;
