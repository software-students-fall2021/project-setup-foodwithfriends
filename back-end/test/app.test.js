const express = require("express");
const assert = require("assert");
chai = require('chai');
chaiHttp = require('chai-http');
chai.use(chaiHttp) 
const { add } = require("../utils/add");
const app = express();
var expect = chai.expect;

describe("Adding Numbers", function () {
  // one particular unit test
  describe("sum", function () {
    // assert what should be returned
    it("1 + 1 = 2", function () {
      // test that assertion
      assert.equal(2, add(1, 1));
    });
  });
});

describe("Verifying 'app.post(/invite/:roomId)'", function () {
  // one particular unit test
  const response = [
    { id: '0' },     { id: '94' },
    { id: '272' },   { id: '096' },
  ];
  describe("Matching IDs", function () {
    // assert what should be returned
    it("Should return true when requested ID exists in database", function (done) {
      // test that assertion
      chai.request(app)
            .post('/invite/:roomId')
            .send({
            roomId: '272'
            })
            .end(function (err, res) {
              expect(res.body).to.equal(true);               
              done();
          });
    });
  });

  describe("Not Matching IDs", function () {
    // assert what should be returned
    it("Should return false when requested ID exists in database", function (done) {
      // test that assertion
      chai.request(app)
            .post('/invite/:roomId')
            .send({
            roomId: '000'
            })
            .end(function (err, res) {
              expect(res.body).to.equal(false);               
              done();
          });
    });
  });



});


