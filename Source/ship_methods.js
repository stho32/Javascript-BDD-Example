/**
 * Ship Module
 */

/**
 * Checks if there is a ship of the player at the given coordinates
 * 
 * @param {*} player 
 * @param {*} coordinates 
 */
function checkForShip(player, coordinates) {
    let shipPresent, ship;

    for (let i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];

        shipPresent = ship.locations.filter(
            (coordinate) => {
                let result =
                    (coordinate[0] === coordinates[0]) &&
                    (coordinate[1] === coordinates[1]);

                return result;
            })[0];

        if (shipPresent) {
            return true;
        }
    }

    return false;
}

/**
 * A simple substraction method to test exceptions
 * 
 * @param {*} number1 
 * @param {*} number2 
 */
function subtraction(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        throw Error('subtraction only works with numbers!')
    }
    return number1 - number2
}


module.exports.checkForShip = checkForShip;
module.exports.subtraction = subtraction;