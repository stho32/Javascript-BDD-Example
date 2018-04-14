/**
 * For testing promises and other asynchronous calls.
 */

const expect = require("chai").expect;


describe("Async test", function() {
    /**
     * "done" is a function that is passed in as a parameter. 
     * As soon as it gets called mocha knows, that the test is now done.
     */
    it("works with done", (done) => {
        setTimeout(done, 1500);
    });
});

