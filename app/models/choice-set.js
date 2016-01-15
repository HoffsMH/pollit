const _ = require("lodash");
function ChoiceSet(choices) {
  _.each(choices, function(choice){
    this[choice] = 0;
  }.bind(this));
}

module.exports = ChoiceSet;
