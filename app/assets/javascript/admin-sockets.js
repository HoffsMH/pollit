const $ = require("jquery");
const _ = require("lodash");

var socket = io();

$(document).ready(() => {
  var $pollAdminId = $(".poll-admin-id");
  if (onAdminPage()) {
    var id = $pollAdminId.text();
    socket.send("poll-admin-info-" + id, {id: id});
  }
  $(document).on("click", ".vote-button", function() {
    if (onUserPollPage()) {
      var id = $pollUserId.text();
      var choice = $(this).attr("data-choice");
      socket.send("cast-vote", {id: id, choice: choice});
      $(".vote-thankyou").text("Thanks for your Vote");
    }
  });

  socket.on("poll-admin-info", (message) => {
    _.each(Object.keys(message), (key)=> {
      $(".choice-id-"+key).text(key+": " + message[key].length);
    });
  });

  function onAdminPage() {
    return $pollAdminId.length;
  }

});
