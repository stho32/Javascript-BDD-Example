/**
 * utilites (example source for the tests)
 * 
 * gatherNamesOf is a simple function 
 * which is used to demo the presence of code
 * that is about to be tested
 */

function gatherNamesOf(arrayOfPeople) {
    return arrayOfPeople.map(function (person) {
        person.name;
    });
}

module.exports.gatherNamesOf = gatherNamesOf;
