let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT ";
console.log(dna.length);

// eliminate lead and trailing spaces 
dna = dna.trim();
console.log(dna.length);

// set to all capitals
console.log(dna);  // baseline
dna = dna.toUpperCase();
console.log(dna); // capitalized

// chaining methods
dna = dna.trim().toUpperCase();
console.log(dna.length, dna); // trimmed & capitalized

// Replace the sequence 'GCT' with 'AGG', and then print the altered strand.
console.log(dna); // trimmed & capitalized original
dna = dna.replace('GCT','AGG'); 
console.log(dna); // trimmed & capitalized with replaced segs

// Look for the sequence 'CAT' with indexOf().
if(dna.indexOf('CAT') > -1){
    console.log('CAT found');
}else{
    console.log('CAT not found');
};

// Use slice() to print out the fifth set of 3 characters (called a codon) from the DNA strand.
let fifthCodon = dna.slice(16, 19); 
console.log(fifthCodon); // fifth codon


// Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA strand is ${dna.trim().toUpperCase().length} characters long.`);
