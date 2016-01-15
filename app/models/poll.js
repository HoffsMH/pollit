const ChoiceSet = require("./choice-set");

function Poll(args) {
  this.id         = crypto.randomBytes(64).toString('hex');
  this.adminId    = crypto.randomBytes(64).toString('hex');
  this.open       = true;
  this.question   = args.question;
  this.choices    = new ChoiceSet();
  this.createdAt  = args.createdAt;
  this.endsdAt  = args.endsAt;
}

module.exports = Poll;
