function hello(name) {
    if (name === undefined)
    name = "World";

    // return "Hello, " + name ;
    return "Hello, " + name + "!";
}

module.exports = hello;


// check understanding
function doStringsMatch(string1, string2){
    if (string1 === string2) {
        return 'Strings match!';
    } else {
        return 'No match!';
    };
};
// Which of the following tests checks if the function properly handles case-sensitive answers.
// expect(doStringsMatch('Flower', 'Flower')).toBe('Strings match!');
// expect(doStringsMatch('Flower', 'flower')).toBe('No match!');