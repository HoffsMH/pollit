const $ = require("jquery");

$(document).on("click", ".add-choice", function() {
  var $choices      = $('.poll-choice');
  var $firstChoice  = $choices[0];
  var newIndex      = $choices.length;

  var $newChoice = $($firstChoice).clone()[0];
  $($newChoice).attr("name", "choices[" +  newIndex + "]");

  $(".choices-container").append($("<h5>").text("choice: ")).append($newChoice);
});
