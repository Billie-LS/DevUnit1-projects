const parse = require('../parseData');

describe("parse numbers", function(){
    
    test("returns array when passed comma separated list of numbers", () => {
        let items = parse("5,8,0,17,6,4,9,3", ",");
        expect(Array.isArray(items)).toBe(true);
    });

});


/*
need a initial json-

npm init 

then open json and add dev dependencies so they don't up to github

edit scripts object replace value 'test' key to 'jest'
"scripts": {
    "test": "jest"
},

add dev dependencies after scripts 
"scripts": {
    "test": "jest"
},
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.6.4"}


*/