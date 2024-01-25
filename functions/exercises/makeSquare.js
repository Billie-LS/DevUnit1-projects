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

// Example usage
console.log(makeSquare(5));