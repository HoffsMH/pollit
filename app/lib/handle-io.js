const moment = require('moment');

module.exports = (io, app) => {
  io.on('connection', function (socket) {
    console.log('A user has connected.', io.engine.clientsCount);

    socket.on('disconnect', function () {
      console.log('A user has disconnected.', io.engine.clientsCount);
    });

    socket.on('message', function (channel, message) {
      var poll = app.locals.polls[message.id];
      if (!poll) {return false;}
      var isPublic = poll.poll["public-results"];
      var isOpen   = (poll.status === "open");
      var closeMomentString = poll.poll['end-time'] + " " + poll.poll['end-date'];
      var closeMoment = moment(closeMomentString);
      var thisMoment = moment();

      if (thisMoment.isAfter(closeMoment)) {
        poll.status = "closed";
        isOpen = false;
        if (thisMoment.isAfter(closeMoment.add(2, "days"))) {
          var userToken = poll.userToken;
          var adminToken = poll.adminToken;
          delete app.locals.polls[userToken];
          delete app.locals.polls[adminToken];
          return false
        }
      }
      if (channel.substring(0, 15) === "poll-user-info-") {
        if (isPublic) {
          socket.emit(channel, poll.choices);
        }
      }
      if (channel.substring(0, 16) === "poll-admin-info-") {
        if (message.id === poll.adminToken) {
          socket.emit(channel, poll);
        }
      }
      if (channel === 'cast-vote' && isOpen) {
        app.clearVote(poll, socket.id);
        poll.choices[message.choice].push(socket.id);
        if (isPublic) {
          io.sockets.emit('poll-user-info-'+ poll.userToken, poll.choices);
        }
        io.sockets.emit('poll-admin-info-'+ poll.adminToken, poll);
      }
      if (channel === "close-poll" && message.id === poll.adminToken) {
        poll.status = "closed";
      }
    });
  });


};
