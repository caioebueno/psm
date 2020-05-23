// Requiring necessary npm packages
var express = require("express");
var path = require("path");
// Requiring passport as we've configured it

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("views"));

app.get("/", function(req, res){

    res.sendFile(path.join(__dirname, "views/login.html"));

})

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
