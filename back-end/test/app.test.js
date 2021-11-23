const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

chai.should();
chai.use(chaiHttp);

describe('Invite Code', () => {
  let invite;

  // POST Room Creation
  describe("POST /room", () => {
    it("It should store group details in the DB and return a shareable invite code", (done) => {
      const groupDetails = {name: "test", location:"new york", latitude:"40.7128", longitude: "74.0060", capacity: 2};
      chai.request(server)
        .post("/room")
        .send(groupDetails)
        .end((err, res) => {
          invite = res.body;
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('roomId');
          done();
        });

    })
  });

  // GET Invite Code Validation
  describe("GET /room", () => {
    it("It should reject the user if the invite code is invalid", (done) => {
      const inviteCode = {inviteCode: "12345"};
      chai.request(server)
        .get("/room")
        .query(inviteCode)
        .end((err,res) => {
          res.body.should.be.a('object');
          res.body.should.have.property('valid').eq(false);
          res.body.should.have.property('msg').eq("Invalid Invite Code");
          done();
        })
    })

    it("It should succeed if the invite code is found in the DB", (done) => {
      chai.request(server)
        .get("/room")
        .query({inviteCode: invite.roomId})
        .end((err,res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('valid').eq(true);
          res.body.should.have.property('msg').eq(null);
          done();
        })
    })
  });
})

describe('Create new User', () => {

  // POST User Creation
  describe("POST  /user", () => {
    it("It should create and store a new user in the DB", (done) => {
      const user = {userName : "testUser"};
      chai.request(server)
        .post("/user")
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('success').eq(true);
          done();
        })
    })
  })
});

