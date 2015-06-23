var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var getIndex = require('../../app/routes/index.js');

describe("Routes", function() {
  describe("GET Index", function() {
      it("should respond", function() {
        var req,res,spy;
        req = res = {};
        spy = res.send = sinon.spy();
        index(req, res);
        expect(spy.calledOnce).to.equal(true);
      });     
  });
});
