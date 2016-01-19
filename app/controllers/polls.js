"use strict";

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");


router.use(bodyParser.urlencoded({extended: true}));


router.get("/" , function(req, res, next){
  res.render("../../views/polls/new.jade");
});

router.post("/polls", (req, res, next)  => {
  var newPoll = req.app.addPoll(req.body);

  res.redirect("/admin/" + newPoll.adminToken);
});

router.get("/admin/:id" , function(req, res, next){
    var id   = req.params.id;
    var poll = req.app.locals.polls[id];
    if (!poll) { res.redirect("/404/"); }
    // if the poll is expired show it anyway
    // if the poll is24 hours after expired delete it and 404
    var userUrl = req.protocol + '://' + req.get('host') + '/polls/' + poll.userToken;

    res.render("../../views/polls/admin.jade", {poll: poll, userUrl: userUrl });
});

router.get("/polls/:id" , function(req, res, next){
  var id   = req.params.id;
  var poll = req.app.locals.polls[id];
  if (!poll) { res.redirect("/404/"); }
  
  res.render("../../views/polls/show.jade", {poll: poll});
});


module.exports = router;
