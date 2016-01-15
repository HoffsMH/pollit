const $ = require("jquery");

$(document).on("click", ".poll-end", function() {
  $(".poll-end-field").toggleClass("hidden");
});

module.exports = {};
