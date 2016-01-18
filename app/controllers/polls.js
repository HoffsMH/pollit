"use strict";

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: true}));


router.get("/" , function(req, res, next){
  res.render("../../views/polls/new.jade");
});

router.post("/polls", (req, res, next)  => {
  var adminToken = req.app.addPoll(req.body);

  res.redirect("/admin/" + adminToken);
});

router.get("/admin/:id" , function(req, res, next){
    var id   = req.params.id;
    var poll = req.app.locals.polls[id];
    // if (!poll) { res.redirect("/404/"); }
    // if the poll is expired show it anyway
    // if the poll is24 hours after expired delete it and 404
    res.render("../../views/polls/admin.jade", {poll: poll});
});

router.get("/polls/:id" , function(req, res, next){

  res.render("../../views/polls/show.jade", {taco: "taco value"});
});


module.exports = router;
