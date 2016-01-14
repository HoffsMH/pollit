const express = require("express");
const router = express.Router();

router.get("/" , function(req, res, next){
  res.send("poop");
});

router.get("/:id" , function(req, res, next){
  res.send("poop " + req.params.id);
});


module.exports = router;
