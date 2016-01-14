"use strict";

const app = require("./app");
const httpserver = require("./httpserver");
const server = httpserver.start(app);

module.exports = server;
