// import module
const checkFive = require('../checkFive.js');

describe("checkFive", function(){
    
    test('when number < 5 output " is less than 5." ', function() {
        //TODO: code here...
        let result = checkFive(3); // test a number less than 5
        expect(result).toBe(" is less than 5."); // Expected return ' is less than 5.'


    });

});