const expect = require("chai").expect;

describe("module name", () => {
    describe("subtraction", () => {
        let subtraction = require("../Source/ship_methods").subtraction;

        it("should throw an exception if parameters are not numbers", () => {
            expect(() => { subtraction("a", "b") }).to.throw("subtraction only works with numbers!");
        });
    });
});
