import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyCAmTuGZ3GFWdQ1x9f3RTDuPviAZCTYjHc";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },

  save: function(data){
    return axios.post("/api/books", data);
  },

  get: function(){

    const books = []

    axios.get("/api/books", function(req, res){
        books.push(req.body);
    })

    return books;
  }
};
