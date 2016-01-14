"use strict";

const app        = require("./app/app");
const httpserver = require("./app/setup/httpserver");
const server     = httpserver.start(app);

module.exports = server;
