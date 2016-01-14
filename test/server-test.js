const request = require('request');
const expect = require('chai').expect;
const server = require('../server');

describe('Server', () => {
  before((done) => {
    this.port = 9876;
    this.server = server.listen(this.port, (err, result) => {
      if (err) { return done(err); }
      done();
    });
  });

  after(() => {
    this.server.close();
  });

  it('should exist', () => {
    expect(server).to.not.be.false;
  });

  describe('GET /', () => {
    it('should return a 200', (done) => {
      request.get('http://localhost:9876', (error, response) => {
        expect(response.statusCode).to.eq(200);
        done();
      });
    });
  });

});
