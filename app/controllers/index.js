"use strict";

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({extended: true}));

router.use(require("./polls.js"));


module.exports = router;
