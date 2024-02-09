// launchcode.test.js code:
const test = require('../index.js');

describe("Testing launchcode", function(){

  // TODO Write your unit tests here!
  it('should have property organization of value "nonprofit" ', function() {
    let result = test.launchcode.organization; // test for property organization
    expect(result).toBe('nonprofit'); // Expected return 'nonprofit'
});

it('should have property executiveDirector of value "Jeff" ', function() {
  let result = test.launchcode.executiveDirector; // test for property executive director
  expect(result).toBe('Jeff'); // Expected return 'Jeff'
});

it('should have property percentageCoolEmployees of value 100 ', function() {
  let result = test.launchcode.percentageCoolEmployees; // test for property percentageCoolEmployees 
  expect(result).toBe(100); // Expected return 100
});

it('should have property programsOffered of value ["Web Development", "Data Analysis", "Liftoff"] ', function() {
  let result = test.launchcode.programsOffered; // test for property programsOffered 
  expect(result).toEqual(['Web Development', 'Data Analysis', 'Liftoff']); // Expected return ['Web Development', 'Data Analysis', 'Liftoff']
});


describe("Testing launchcode launchOutput", function(){ 
  it('When passed number ONLY divisible by 2, launchOutput() returns "Launch!" ', function() {
      let result = test.launchcode.launchOutput; // test for property 
      expect(result(2)).toEqual('Launch!'); // Expected return 'Launch!'
  });

});

});

