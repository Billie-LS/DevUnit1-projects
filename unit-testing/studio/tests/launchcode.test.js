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
  it('When passed number only divisible by 2, launchOutput() returns "Launch!" ', function() {
      let result = test.launchcode.launchOutput; // test for property launchOutput
      expect(result(2)).toEqual('Launch!'); // Expected return 'Launch!'
  });

  it('When passed number only divisible by 3, launchOutput() returns "Code!" ', function() {
    let result = test.launchcode.launchOutput; // test for property launchOutput
    expect(result(3)).toEqual('Code!'); // Expected return 'Code!'
  });

  it('When passed number only divisible by 5, launchOutput() returns "Rocks!" ', function() {
    let result = test.launchcode.launchOutput; // test for property launchOutput
    expect(result(5)).toEqual('Rocks!'); // Expected return 'Rocks!!'
  });

  it('When passed number evenly divisible by 2 and 3, launchOutput() returns "LaunchCode!" ', function() {
    let result = test.launchcode.launchOutput; // test for property launchOutput
    expect(result(6)).toEqual('LaunchCode!'); // Expected return 'LaunchCode!'
  });

  it('When passed number evenly divisible by 2 and 5, launchOutput() returns "Launch Rocks! (CRASH!!!!)" ', function() {
    let result = test.launchcode.launchOutput; // test for property launchOutput
    expect(result(10)).toEqual('Launch Rocks! (CRASH!!!!)'); // Expected return 'Launch Rocks! (CRASH!!!!)'
  });

});

});

