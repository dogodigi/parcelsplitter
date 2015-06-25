var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

describe("Routes", function() {
  describe("GET Index", function() {
    it('Should respond', function() {
      var request = require('supertest');
      var server = require('../server.js');
      server.app.set('env', 'production');
      request(server.app).get('/').end(function(err, res){
        expect(err).to.be.undefined;
        expect(res).to.not.be.undefined;
      });
    });
  });
  describe("Post Print", function() {
    it('Should respond', function() {
      var request = require('supertest');
      var server = require('../server.js');
      server.app.set('env', 'production');
      request(server.app).post('/print', {}).end(function(res){
        expect(res.error).to.be.undefined;
        expect(res).to.not.be.undefined;
      });
    });
  });

});
