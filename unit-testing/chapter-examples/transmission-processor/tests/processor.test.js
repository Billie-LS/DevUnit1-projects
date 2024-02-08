/*
write a Node module to process transmissions from the Voyager1 probe.
Transmission
"1410::<932829840830053761>"

Expected Result
{
  id: 1410,
  rawData: 932829840830053761
};

Requirements
project features have been broken down into small testable units. 
review them, then proceed slow, one step at a time.

parameter transmission string and return object.

Return -1 if the transmission NOT contain "::".

Returned object should contain an id property.

value of id is portion of transmission before "::".
id property should be of type Number.

Returned object should contain a rawData property.

The value of rawData is the part of the transmission after the "::".
Return -1 for the value rawData if the rawData part of the transmission does NOT start with < and end with >.
*/
const processor = require('../processor.js');

describe("transmission processor", function() {
  test("takes a string and returns an object", () => {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });

  test("returns -1 if '::' not found", () => {
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });

  test("returns id in object", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });

  test("converts id to a number", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
  });

  test("returns rawData in object", () => {
    let result = processor("9701::<487297403495720912>");
    expect(result.rawData).not.toBeUndefined();
  });

  test("returns -1 for rawData if missing < at position 0", function() {
    let result = processor("9701::487297403495720912>");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if missing > at position rawData.length-1", function() {
    let result = processor("<9701::487297403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if missing leading position < and trailing position > ", function() {
    let result = processor("9701::487297403495720912");
    expect(result.rawData).toBe(-1);
  });

});