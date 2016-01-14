const assert = require('assert');
const expect = require('chai').expect;
const app = require('../app/app');

describe('Server', () => {

  it('should exist', () => {
    expect(app).to.not.be.false
  });

});
