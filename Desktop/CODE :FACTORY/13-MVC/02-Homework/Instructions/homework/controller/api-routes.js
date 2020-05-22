var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/api/burgers", function(req, res){

    burger.all(function(burgerData) {
    
        res.json(burgerData);

    });

})

router.put("/burgers/:id", function(req, res){

    var id = req.params.id;

    burger.update(id, function(result){

        console.log(result);

        res.send("updated");

    })
})

router.post("/burgers/create", function(req, res){

    burger.create(req.body.burger_name, function(result) {
        

        console.log(result);
        res.redirect("/");
        
      });
    

})


module.exports = router;