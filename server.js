const express = require("express");
const path = require("path");
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoArticles";

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

mongoose.connect(MONGODB_URI);

require("./routes/apiRoutes")(app);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
