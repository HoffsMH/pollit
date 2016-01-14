"use strict";

const express    = require('express');
const app        = express();
const setup      = require('./setup')(app);

module.exports = app;
