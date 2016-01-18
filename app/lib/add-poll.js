const crypto = require("crypto");
function addPoll (poll) {
  //clone the object
  // ran into some troubles when using by reference
  var newPoll = JSON.parse(JSON.stringify(poll));

  var userToken = crypto.randomBytes(20).toString('hex');
  var adminToken = crypto.randomBytes(20).toString('hex');

  newPoll.userToken = userToken;
  newPoll.adminToken = adminToken;

  this.locals.polls[userToken] = newPoll;
  this.locals.polls[adminToken] = newPoll;

  return newPoll
}
module.exports = addPoll;
