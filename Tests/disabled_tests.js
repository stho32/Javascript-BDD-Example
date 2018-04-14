/**
 * You have a list of tests and you need to disable them 
 * for now.
 */

const expect = require("chai").expect;


xdescribe("Disabled module", function() {
    it("with an enabled test", () => console.log("disabled"));
});

describe("Enabled module", function() {
    xit("with a disabled test", () => console.log("disabled"));
});