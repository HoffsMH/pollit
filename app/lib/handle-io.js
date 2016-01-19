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