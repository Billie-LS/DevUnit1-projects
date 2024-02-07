const hello = require('../hello.js'); // Import hello.js module

// Start test suite with description
// Expecting the return value to be "Hello, World!"
describe("hello", function(){ // parameters name of the function test and empty anonymous function
// describe("hello world test", function(){

      // Test hello function with specific name
      test("should return a custom message when name is specified", function(){
        expect(hello("Jest")).toBe("Hello, Jest!"); // Expected return "Hello, Jest!"
      });

      // Testing the hello function without specifying a name
      it("should return a general greeting when name is not specified", function(){
        expect(hello()).toBe("Hello, World!"); // Expecting the return value to be "Hello, World!"
    });

});
