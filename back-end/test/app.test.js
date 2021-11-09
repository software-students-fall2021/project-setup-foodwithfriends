const assert = require("assert");
const { add } = require("../utils/add");

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

