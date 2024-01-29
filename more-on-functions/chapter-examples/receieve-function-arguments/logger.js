
// let fileLogger = function(msg) {

//     // Put the message in a file
// }

// function logError(msg, logger) {
//     let errorMsg = 'ERROR: ' + msg;
//     logger(errorMsg);
// }

// logError('Something broke!', fileLogger);

// function callMe(func) {
//     func();
// }

// callMe("Al");

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}

let f1 = function(str) {
    return str + str;
};

let f2 = f1;

function("abcd");
f1("abcd");
f2("abcd");