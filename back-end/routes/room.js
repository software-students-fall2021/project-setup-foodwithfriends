const express = require("express");
const router = express.Router();

const Group = require("../models/group");
const { v4: uuidv4 } = require("uuid");
const { body, query, validationResult } = require("express-validator");

router.post(
  "/room",
  body("name").isString(),
  body("capacity").isInt(),
  body("latitude").isDecimal(),
  body("longitude").isDecimal(),
  body("price").isString(),
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const roomId = uuidv4().substr(0, 5);
    const newGroup = new Group({
      groupId: roomId,
      groupName: req.body.name,
      numOfFriends: req.body.capacity,
      location: { latitude: req.body.latitude, longitude: req.body.longitude },
      priceRange: req.body.price,
      friends: [],
      selectedCuisines: [],
      winningCuisine: "",
    });
    newGroup.save((err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
    res.status(200);
    res.send({ roomId });
  }
);

router.get("/room", query("inviteCode").isString(), function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const invCode = req.query.inviteCode;
  Group.find({ groupId: invCode }, (err, result) => {
    if (err) {
      console.log(err);
      res.send({ valid: false, msg: "An error occured." });
      return;
    }
    if (result.length == 0) {
      res.send({ valid: false, msg: "Invalid Invite Code" });
      return;
    }
    const groupname = result[0].groupName;
    res.status(200);
    res.send({ valid: true, msg: null, groupname: groupname });
  });
});

module.exports = router;
