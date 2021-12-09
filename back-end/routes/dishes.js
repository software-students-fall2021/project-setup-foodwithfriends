const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");

router.post(
  "/preferred",
  body("userID").isString(),
  body("dish").isArray(),
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userID = req.body.userID;
    const dish = req.body.dish;

    User.findOneAndUpdate({ _id: userID }, { $push: { dishPreferences: dish } }, (err, doc) => {
        if (err) {
          console.log("Something wrong when finding the group");
          res.status(500);
          res.send(err);
          return;
        }
        res.status(200);
        res.send({ valid: true });
    });
});


module.exports = router;
