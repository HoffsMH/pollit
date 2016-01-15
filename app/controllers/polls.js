"use strict";

const express = require("express");
const router = express.Router();

router.get("/" , function(req, res, next){
  res.render("../../views/polls/new.jade");
});

router.post("/polls", function(req, res, next) {
  let pry = require('pryjs');
  eval(pry.it);
});

router.get("/:id" , function(req, res, next){
  res.render("../../views/polls/show.jade", {taco: "taco value"});
});


module.exports = router;
