const expect = require("chai").expect;


function titleCase(title) {
    let words = title.split(' ');

    let titleCasedWords = words.map( title => {
        return title[0].toUpperCase() + title.substring(1);
    });

    return titleCasedWords.join(' ');
}

// expect(true).to.be.true;
expect(titleCase("the great mouse detective")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("vertigo")).to.equal("Vertigo");
expect(titleCase("the great mouse detective")).to.equal("The Great Mouse Detective");