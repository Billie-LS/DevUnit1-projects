// import module
const whoWon = require('../whoWon.js');

describe('whoWon', function(){

    // TODO: behaves correctly when the players tie (both choose the same option). 
    test('describe', function() {
        let result = whoWon(); // test a number less than 5
        expect(result).toBe(''); // Expected return '3 is less than 5.'
    });

});