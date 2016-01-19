const crypto = require("crypto");
const _  = require("lodash");

function clearVotes (poll, socketId) {
  _.each(Object.keys(poll.choices), function(choice) {
    var index = poll.choices[choice].indexOf(socketId);
    if (index > -1) {
      poll.choices[choice].splice(index, 1);
    }
  });

}
module.exports = clearVotes;
