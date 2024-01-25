function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        // Call makeLine to create each row
        square += makeLine(size);
        // Add a newline character except for the last row
        if (i < size - 1) {
            square += '\n';
        }
    }
    return square;
}

function makeRectangle(width, height) {
    let rectangle = '';
    
    for (let i = 0; i < height; i++) {
        // Call makeLine to create each row with the specified width
        rectangle += makeLine(width);
        
        // Add a newline character except for the last row
        if (i < height - 1) {
            rectangle += '\n';
        }
    }
    
    return rectangle;
}
console.log(makeRectangle(5, 3));

// Define a function to create a rectangle with a specified width and height
function makeRectangle1(width, height) {
    let rectangle1 = '';

    // Loop through each row of the rectangle
    for (let i = 0; i < height; i++) {
        // Append a line with the specified width and add a newline character
        rectangle1 += (makeLine(width) + '\n');
    }

    // Use slice to remove the trailing newline character and return the result
    return rectangle1.slice(0, -1);
}

// Example usage
console.log(makeRectangle1(5, 3));

console.log('break here');
function makeSquare2(size) {
    // Use makeRectangle with equal width and height to create a square
    return makeRectangle(size, size);
}

// Example usage
console.log(makeSquare(5));