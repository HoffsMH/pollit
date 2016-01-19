"use strict";

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const io = require("./sockets.js");å

router.use(bodyParser.urlencoded({extended: true}));

router.use(require("./polls.js"));


module.exports = router;
