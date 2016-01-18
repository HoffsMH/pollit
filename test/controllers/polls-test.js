const assert = require('assert');
const server  = require('../../server');
const request = require('request');
const app     = require('../../app/app.js');

const _      = require("lodash");
const chai   = require('chai');

const expect = chai.expect;

const fixtures = require("../fixtures/fixtures.js");

describe('Server', () => {

  before(done => {
    this.port = 9876;
    this.server = server.listen(this.port, (err, result) => {
      if (err) { return done(err); }
      done();
    });
    this.request = request.defaults({
      baseUrl: 'http://localhost:9876/'
    });
  });

  beforeEach(() => {

  });

  after(() => {
    this.server.close();
  });

  describe('POST /polls', () => {
    it('should add 2 polls to memory', (done) => {
      var payload = fixtures.validPoll;
      var pollKeys = Object.keys(app.locals.polls);

      expect(pollKeys.length).to.eq(0);

      this.request.post('/polls', { form: payload }, (error, response) => {
        if (error) { done(error); }
        pollKeys = Object.keys(app.locals.polls);
        expect(pollKeys.length).to.eq(2);
        done();
      });
    });
  });
});
