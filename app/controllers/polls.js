const express = require("express");
const router = express.Router();

router.get("/" , function(req, res, next){
  res.send("poop");
});

router.get("/:id" , function(req, res, next){
  res.render("../../views/polls/show.jade", {taco: "taco value"})
});


module.exports = router;
