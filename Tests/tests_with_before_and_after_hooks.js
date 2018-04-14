const expect = require("chai").expect;

describe("checkForShip", () => {
    let checkForShip = require("../Source/ship_methods").checkForShip;

    let playerWithSinglePointShip = {
        ships: [
            { locations : [[0,0]] }
        ]
    };

    before(function() {
        //console.log("executing before action...");
    });

    after(function() {
        //console.log("executing after action...");
    });


    beforeEach(function() {
        //console.log("runs before each test in this block");
    });

    afterEach(function() {
        //console.log("runs after each test in this block");
    });

    it("should correctly report no ship at a given players coordinate", () => {

        player = playerWithSinglePointShip;

        expect(checkForShip(player, [9,9])).to.be.false;

    });

    it("should correctly report a ship located at a given players coordinate", () => {

        player = playerWithSinglePointShip;

        expect(checkForShip(player, [0,0])).to.be.true;
        
    });
});