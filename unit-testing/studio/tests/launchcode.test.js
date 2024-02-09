// launchcode.test.js code:
const test = require('../index.js');

describe("Testing launchcode", function(){

  // TODO Write your unit tests here!
  it('check value of organization is "nonprofit" ', function() {
    let result = test.launchcode.organization; // test 
    expect(result).toBe('nonprofit'); // Expected return 'nonprofit'
});

it('check value of executiveDirector is "Jeff" ', function() {
  let result = test.launchcode.executiveDirector; // test 
  expect(result).toBe('Jeff'); // Expected return 'Jeff'
});

it('check value of percentageCoolEmployees is 100 ', function() {
  let result = test.launchcode.percentageCoolEmployees; // test 
  expect(result).toBe(100); // Expected return 100
});

it('check value of programsOffered is ["Web Development", "Data Analysis", "Liftoff"] ', function() {
  let result = test.launchcode.programsOffered; // test 
  expect(result).toEqual(['Web Development', 'Data Analysis', 'Liftoff']); // Expected return ['Web Development', 'Data Analysis', 'Liftoff']
});

});

