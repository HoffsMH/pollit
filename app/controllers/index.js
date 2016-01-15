"use strict";

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// module.exports = {
//   route(app) {
//     app.use("/", require("./polls"));
//   }
// };

router.use(bodyParser.urlencoded({extended: true}));
router.use(require("./polls.js"));


module.exports = router;
