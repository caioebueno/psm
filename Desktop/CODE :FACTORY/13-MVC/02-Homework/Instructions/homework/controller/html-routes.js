var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res){

    burger.all(function(burgerData) {

        res.render("index", {burger_data: burgerData})
    
     });

})

module.exports = router;