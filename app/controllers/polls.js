"use strict";

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: true}));


router.get("/" , function(req, res, next){
  res.render("../../views/polls/new.jade");
});

router.post("/polls", (req, res, next)  => {
  req.app.addPoll(req.body);
  res.render("../../views/polls/new.jade");
});

router.get("/:id" , function(req, res, next){
  res.render("../../views/polls/show.jade", {taco: "taco value"});
});


module.exports = router;
