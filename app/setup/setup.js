"use strict";

const express = require("express");

module.exports = (app) => {
  // setting views folder
  app.set('views', __dirname + '/views');

  // base controller that calls all sub controllers
  app.use(require("../controllers/polls.js"));

  //if all else fails look in our public directory
  app.use(express.static("./public"));

  app.locals.polls = {};
  app.addPoll = require("../lib/add-poll.js");
};
