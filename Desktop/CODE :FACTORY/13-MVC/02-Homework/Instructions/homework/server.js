var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var apiRoutes = require("./controller/api-routes.js");
var htmlRoutes = require("./controller/html-routes.js");

app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
});
  