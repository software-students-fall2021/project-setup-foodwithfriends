const assert = require("assert");
const restauraunts = require("../data/restauraunts.json");
const user_preferences = require("../data/user_preference.json");
const {
  generate_restuaraunts_map,
  loss_function,
} = require("../utils/loss_function");

describe("Loss Function Works", function () {
  describe("generate_restuaraunts_map function works", function () {
    const expected_result = {
      4072332573989656: { restaurant_name: "Dallas Jones BBQ", points: 0 },
      4072055173984543: { restaurant_name: "Ivan Ramen", points: 0 },
      4071913973985926: { restaurant_name: "Stop 1 Deli", points: 0 },
    };
    it("returns expected list of restauraunts", function () {
      // test that assertion
      assert.deepEqual(
        expected_result,
        generate_restuaraunts_map(restauraunts)
      );
    });
  });
  describe("loss_function works", function () {
    const expected_result = {
      4072332573989656: { restaurant_name: "Dallas Jones BBQ", points: 5 },
      4072055173984543: { restaurant_name: "Ivan Ramen", points: 1 },
      4071913973985926: { restaurant_name: "Stop 1 Deli", points: 0 },
    };
    it("returns expected list of restauraunts and points", function () {
      // test that assertion
      assert.deepEqual(
        expected_result,
        loss_function(restauraunts, user_preferences)
      );
    });
  });
});
