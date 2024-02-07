const isPalindrome = require('../palindrome.js');

// Start test suite with description
describe("isPalindrome", function(){ // parameters name of the function test and empty anonymous function
    
    // Test isPalindrome function with palindromes
    test('should be true for a single letter', function(){
        expect(isPalindrome('a')).toBe(true); // Expected return true
    });

    test('should return true for a single letter repeated', function(){
        expect(isPalindrome('aaaa')).toBe(true); // Expected return true
    });

    test('should be true for a simple palindrome', function(){
        expect(isPalindrome('aba')).toBe(true); // Expected return true
    });

    test('should be true for classic palindrome', function(){
        expect(isPalindrome('racecar')).toBe(true); // Expected return true
    });

    test('should be true for classic palindrome', function(){
        expect(isPalindrome('tacocat')).toBe(true); // Expected return true
    });

    test("should consider the empty string a palindrome", function() {
        expect(isPalindrome("")).toBe(true);
    });


    // Testing the isPalindrome function with non palindromes
    it('should return false for a simple non-palindrome', function(){
        expect(isPalindrome('ab')).toBe(false); // Expected return false
    });

    it('should return false for a longer non-palindrome', function(){
        expect(isPalindrome('launchcode')).toBe(false); // Expected return false
    });

    it('should be case-sensitive', function(){
        expect(isPalindrome('abA')).toBe(false); // Expected return false
    });

    it('should consider whitespace', function(){
        expect(isPalindrome('so many dynamos')).toBe(false); // Expected return false
    });
});