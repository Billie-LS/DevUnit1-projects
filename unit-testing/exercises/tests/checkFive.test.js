// import module
const checkFive = require('../checkFive.js');

describe("checkFive", function(){
    
    test('when num < 5, output "num is less than 5." ', function() {
        //TODO: code here...
        let result = checkFive(3); // test a number less than 5
        expect(result).toBe("3 is less than 5."); // Expected return '3 is less than 5.'
    });
    //TODO: test a number greater than 5
    test('when num > 5, output "num is greater than 5." ', function() {
        let result = checkFive(8); // test a number greater than 5
        expect(result).toBe("8 is greater than 5."); // Expected return '8 is greater than 5.'
    });

    //TODO: test a number equal to 5
    test('when num = 5, output "num is equal to 5." ', function() {
        let result = checkFive(5); // test a number greater than 5
        expect(result).toBe("5 is equal to 5."); // Expected return '5 is equal to 5.'
    });

});