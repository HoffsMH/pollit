const $ = require("jquery");
const _ = require("lodash");

var socket = io();

$(document).ready(() => {
  var $pollUserId = $(".poll-user-id");
  if (onUserPollPage()) {
    var id = $pollUserId.text();
    socket.send("poll-user-info-" + id, {id: id});
  }
  $(document).on("click", ".vote-button", function() {
    if (onUserPollPage()) {
      var id = $pollUserId.text();
      var choice = $(this).attr("data-choice");
      socket.send("cast-vote", {id: id, choice: choice});
      $(".vote-thankyou").text("Thanks for your Vote");
    }
  });

  socket.on("poll-user-info-" + $pollUserId.text(), (message) => {
    _.each(Object.keys(message), (key)=> {
      $(".choice-id-"+key).text(key+": " + message[key].length);
    });
  });

  function onUserPollPage() {
    return $pollUserId.length;
  }

});
