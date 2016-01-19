"use strict";

const app        = require("./app/app");
const httpserver = require("./app/setup/httpserver");
const server     = httpserver.start(app);
const socketIo   = require("socket.io");
const io         = socketIo(server);

require("./app/lib/handle-io.js")(io, app);

module.exports = server;
