/**
 * Sometimes you already know you have to write a test, but you are 
 * not quite in the position to do that yet. Maybe you are waiting 
 * for inspiration or the list of tests you need just flooded your
 * head and you need to get them out of there.
 * 
 * Pending tests are a way to tell mocha that there "will be" a test.
 */

const expect = require("chai").expect;


describe("Pending test example", function() {
    it("is pending");
    it("is not complete yet");
    it("will be complete in a day or two maybe");
});