const assert = require('assert');
const expect = require('chai').expect;
const server = require('../server');

describe('Server', () => {

  it('should exist', () => {
    expect(server).to.not.be.false
  });

});
