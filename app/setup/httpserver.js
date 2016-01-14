"use strict";

const http = require('http');

module.exports = {
  start(app) {
    let server = http.createServer(app);
    let port   = process.env.PORT || 3000;

    if (!module.parent.parent) {
      return server.listen(port, function () {
        console.log('Listening on port ' + port + '.');
      });
    } else {
      return server
    }
  }
};
