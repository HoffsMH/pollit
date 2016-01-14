"use strict";

const express = require("express");

module.exports = (app) => {
  app.set('view engine', 'ejs');
  app.use(require("../controllers/index.js"));
  app.use(express.static("./public"));
};
